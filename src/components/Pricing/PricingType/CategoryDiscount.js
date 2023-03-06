import { ReactSession } from 'react-client-session';
import React, { useEffect, useState } from "react";
//import ProductCatagory from '../../Product/ProductSegmentFilters/ProductCatagory'
import { format } from 'date-fns'
import Radio from '@mui/material/Radio';
import RadioGroup from '@mui/material/RadioGroup';
import { useSelector, useDispatch } from "react-redux";
import Grid from "@mui/material/Grid";
import { DateRangePicker } from 'rsuite';
import moment from 'moment';
import Select from 'react-select';
//import { SettingsOverscanRounded } from "@material-ui/icons";
import axios from "axios"; 

import { get_product_and_catagory_and_sku_data } from "../../../features/product/ProductListAndSegment";
import { Get_Product_Purchase_Based_Cus_Seg_Obj } from "../../../features/product/ProductPurchaseBasedCusSeg";


import { addRole } from "../../../features/DynamicPricing/CurrentRules";

function CategoryDiscount({data}) {

    var dispatch = useDispatch();
    //var { name, type } = data;
    
    var product_obj = useSelector((state) => state.product_List_And_Segments.product_cat_table_object);
    
    // if ( !(product_obj.length > 0) || product_obj === undefined ) {
    //    dispatch(get_product_and_catagory_and_sku_data({ajax_call:2}));
    // }

    var cat_obj = useSelector((state) => state.product_List_And_Segments.product_cat_table_object);


    useEffect(() => {

        var is_dispatched1 = () => {
            ReactSession.get("Get_Product_Purchase_Based_Cus_Seg_Obj");
            if (ReactSession.get("Get_Product_Purchase_Based_Cus_Seg_Obj")) {
                return true;
            } else {
                ReactSession.set("Get_Product_Purchase_Based_Cus_Seg_Obj", "1");
                return false;
            }
        }

        if (!(is_dispatched1())) {
            dispatch(Get_Product_Purchase_Based_Cus_Seg_Obj({ ajax_call: 2 }));
        }


        var is_dispatched2 = () => {
            ReactSession.get("get_product_and_catagory_and_sku_data");
            if (ReactSession.get("get_product_and_catagory_and_sku_data")) {
              return true;
            } else {
              ReactSession.set("get_product_and_catagory_and_sku_data", "1");
              return false;
            }
        }
      
        if (!(is_dispatched2())) {
            dispatch(get_product_and_catagory_and_sku_data({ ajax_call: 2 }));
        }

       

    }, [])

    //var [DATA_, setDATA_] = useState(data.onerule);
    //setDATA_(data.onerule[0].name);
    //console.log(DATA_);
    
    var [rules, setRules] = useState([{ offer : "", type:"percent", catid : "", catname : ""}])

    useEffect(()=> {
        
        if(data !== undefined){
        
            var sinrule = data.onerule;
            
            var cars = [];
        
            if(sinrule && sinrule.length > 0) {

                for (var i of sinrule) {
                    var name = i.name; 
                    var type = i.type;
                    var dtail = i.dtail;
                    var dtailArray      = dtail.split("_next_");
                    var offer           = dtailArray[0];
                    var type            = dtailArray[1];
                    var catid           = dtailArray[2];

                    for(var j of cat_obj){
                        if(j.catagory_id === catid){
                            const car = {offer : offer, type : type, catid : catid, catname:j.catagory_name};
                            cars.push(car);
                        }
                    }
                }
                setRules(cars);
            }
        }
    },[])

    var newRules=[];

    
    var ops1 = [];
    if(cat_obj && cat_obj.length > 0){
        for (var i of cat_obj) {
            var label = i.catagory_name; 
            var value = i.catagory_id;
            ops1.push({value:value,label:label});
        }
    }
    
    var [final, setFinal] = useState([]);

    var handleChange = (i, e) => {
        
        newRules = [...rules];
        newRules[i][e.target.name] = e.target.value;
        setRules(newRules);
        setFinal([]);
        setFinal(newRules);
        
    }


    var handleChange1 = (i,id,name) => {
        newRules = [...rules];
        newRules[i]['catid'] = id;
        newRules[i]['catname'] = name;
        setRules(newRules);
        setFinal([]);
        setFinal(newRules);
    }


    var addRules = (len) => {
        setRules([...rules, { offer : "", type : "percent", catid : "", catname: "" }]);
        newRules = [...rules];
        setFinal([]);
        setFinal(newRules);
    }


    var removeRules = (idx) => {
        
        newRules = [...rules];
        newRules.splice(idx, 1);
        rules.splice(idx, 1);
        //setRules(newRules);
        setFinal([]);
        setFinal(newRules);
        //document.getElementById(`id-${idx}`).remove();
        
    }


    var Cus_Purchase_based_segment = useSelector((state) => state.Product_Purchase_Based_Customer_List_and_Segment.Product_Purchase_Based_Cus_Segment_Obj);
    Cus_Purchase_based_segment = structuredClone(Cus_Purchase_based_segment);
    
    var ops = [];
    for (var i of Cus_Purchase_based_segment) { var label = i.name; var value = i.id; ops.push({value:value,label:label});}
    var [daterange, setdrange] = useState([ new Date(moment().startOf('month')), new Date(moment().endOf('month'))]);
    var [schedule_type,setSchedule_type]=useState('manual');
    
    // var formSubmit = (event) => {
    //     event.preventDefault();
    //     //const fdata = new FormData(event.target);
    //     //const data = Object.fromEntries(fdata.entries());
    //     console.log(final);
    // }
    


    var[target,settarget] = useState();
    var[onsale,setOnsale] = useState('1');
    var handle_setOnsale = (e)=>{
        setOnsale(e.target.value);
    }

    var formSubmit = (event) => {
        
        event.preventDefault();
        
        var form_           = new FormData(event.target);
        var form_data       = Object.fromEntries(form_.entries());
        
        var discount_string = "";
        for (var i = 0; i < final.length; i++) {
            
            var offer = final[i].offer;
            var otype = final[i].type;
            var catid = final[i].catid;
            discount_string = discount_string.concat(offer).concat('shopex').concat(otype).concat('shopex').concat(catid).concat('_break_');

            //console.log(discount_string);
        }


       
       

        var name        = form_data['name']; 
        var pr          = form_data['pr']; 
        var target      = form_data['target']; 
        var onsalerun   = form_data['onsalerun']; 
        var type        = "catdis"; 
        var schedule    = 0;
        
        var f=0;
        var t=0;



        var status=0;
        var schedule_=""
        if (schedule_type === 'tl') {
            f               = format(daterange[0],'yyyy-MM-dd');//daterange[0];
            t               = format(daterange[1],'yyyy-MM-dd');//daterange[1];
            const today = new Date();
            if(today >= f && today <= t){
                status="On";
            }else{
                status="Off";
            }
            schedule_       = f+"-To-"+t;
        }else if (schedule_type === 'manual') {
            schedule_ = "manual";
            status="On";
        }

        
        var post = 1;
   
        dispatch(addRole({'status':status,'name':name,'type':type,'target_segment':target,'schedule':schedule_}));

        axios.post('https://server.shopex.io/dynamicpricing/dpdis_save_and_sending.php', {
            post:post,
            name: name, 
            type:type, 
            data:discount_string, 
            target:target, 
            from:f, 
            to:t, 
            onsalerun:onsalerun, 
            pr:pr, 
            ajax_call: '2'
        },{withCredentials: true})
        .then(function (response) {
        })
        .catch(function (error) {
            console.log(error);
        });
            
        //}

    }

    return (


        <>

            <form id="dpriceform" onSubmit={formSubmit}>           
            
                <strong> Set a relevant offer name </strong>
                <input style={{height:'40px',width:'300px',fontSize:'16px'}} required={true} name="name" type="text" defaultValue=""/>

                
                <div style={{margin:'2% 0% 2% 0%',width:'90%'}}>
                    
                    <strong> Select target Segment </strong>

                    {ops &&

                        <Select
                        placeholder="Select target Segment"
                        defaultValue={''}
                        onChange={(e)=>{settarget(e.value)}}
                        options={ops}
                        />
                    }
                    <input name="target" type="hidden" defaultValue={target}/>

                </div>
            
                


                <div> <button onClick={() => addRules(rules.length+1)}> <h4>AddRule</h4> </button> </div> 
            
                {rules.map((element, index) => (
                        
                    <div style={{display:'inline-flex',width:'100%',margin:'10px'}} className="form-inline" key={index} id={"id-"+index}>
                    
                        <strong style={{padding: '10px'}}>  Offer   </strong>
                        
                        <input name="offer" type="number" value={element.offer} onChange={e => handleChange(index, e)} />

                        <RadioGroup defaultValue={element.type || 'percent'} style={{display: 'inline-block'}} onChange={(e) => {handleChange(index,e)}}>
                            <Radio checked={element.type === 'percent'} value="percent" name="type" /> % Off
                            <Radio checked={element.type === 'amount'} value="amount" name="type"/> $ Off
                            <Radio checked={element.type === 'fixedprice'} value="fixedprice" name="type"/> $ Each Product
                        </RadioGroup>
                        
                        
                        <div style={{width:'25%'}}>
                            
                            <Select
                                placeholder={element.catname}
                                value={element.catid}
                                onChange={(e)=>{handleChange1(index,e.value,e.label)}}
                                options={ops1}
                                />
                            {/* {element.catname} */}
                        
                        </div>

                        { index ?  <button type="button"  className="button remove" onClick={() => removeRules(index)}> Remove </button> : null }

                    </div>

                ))}


                <Grid>

                    <strong>Disable this offer for <span style={{color:'red'}}>on-sale</span> products </strong>
                    <RadioGroup style={{display: 'inline-block'}} onChange={handle_setOnsale}>
                        <Radio value="1" name="onsale_on_off"/> Yes 
                        <Radio value="0" name="onsale_on_off"/> No
                    </RadioGroup>
                    <input name="onsalerun" type="hidden" defaultValue={onsale} />

                </Grid>


                <Grid>

                    <strong>Set Schedule for this offer  </strong>
                    <RadioGroup style={{display: 'inline-block'}} onChange={(e) => {setSchedule_type(e.target.value)}}>
                        <Radio value="manual" name="schedule"/> Start now and End manually
                        <Radio value="tl" name="schedule"/> Set Timeline
                    </RadioGroup>

                    { 
                        schedule_type === 'tl' && 
                        <DateRangePicker label="Timeline" value={daterange} onChange={setdrange} oneTap={false}> </DateRangePicker>
                    }

                </Grid>


                <Grid style={{margin:'2% 0% 2% 0%'}}>

                    <strong> Set Priority for this rule </strong>
                    <input required={true} name="pr" type="number" defaultValue="10"/>

                </Grid>


                <input type="submit"/>

            </form>
            
        </>
    )
}

export default CategoryDiscount