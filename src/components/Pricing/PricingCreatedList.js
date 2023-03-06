import { ReactSession } from 'react-client-session';
import React, { useEffect, useState } from "react";
import axios from "axios";

import Search from '@material-ui/icons/Search'
import SaveAlt from '@material-ui/icons/SaveAlt'
import ChevronLeft from '@material-ui/icons/ChevronLeft'
import ChevronRight from '@material-ui/icons/ChevronRight'
import FirstPage from '@material-ui/icons/FirstPage'
import LastPage from '@material-ui/icons/LastPage'
import Check from '@material-ui/icons/Check'
import FilterList from '@material-ui/icons/FilterList'

import MaterialTable from 'material-table';
import { ThemeProvider, createTheme } from '@mui/material';
import { useSelector, useDispatch } from "react-redux";

import { get_pricing_current_rules } from "../../features/DynamicPricing/CurrentRules";
//
import Quantity from "./PricingType/Quantity";
import GiftProduct from "./PricingType/GiftProduct";
import DiscountOnEntireShop from "./PricingType/DiscountOnEntireShop";
import CategoryDiscount from "./PricingType/CategoryDiscount";




import { Get_Product_Purchase_Based_Cus_Seg_Obj } from "../../features/product/ProductPurchaseBasedCusSeg";
import { get_product_and_catagory_and_sku_data } from "../../features/product/ProductListAndSegment";
import Grid from "@mui/material/Grid";
import { Button } from '@material-ui/core';

function PricingCreatedList() {

    const defaultMaterialTheme = createTheme();

    var dispatch = useDispatch();

    useEffect(() => {

        var is_dispatched = () => {
            ReactSession.get("Get_Product_Purchase_Based_Cus_Seg_Obj");
            if (ReactSession.get("Get_Product_Purchase_Based_Cus_Seg_Obj")) {
                return true;
            } else {
                ReactSession.set("Get_Product_Purchase_Based_Cus_Seg_Obj", "1");
                return false;
            }
        }

        var is_dispatched1 = () => {
            ReactSession.get("get_pricing_current_rules");
            if (ReactSession.get("get_pricing_current_rules")) {
                return true;
            } else {
                ReactSession.set("get_pricing_current_rules", "1");
                return false;
            }
        }


        if (!(is_dispatched())) {
            dispatch(Get_Product_Purchase_Based_Cus_Seg_Obj({ ajax_call: 2 }));
        }

        if (!(is_dispatched1())) {
            dispatch(get_pricing_current_rules({ ajax_call: 99 }));
        }

    }, [])



    var Cus_Purchase_based_segment = useSelector((state) => state.Product_Purchase_Based_Customer_List_and_Segment.Product_Purchase_Based_Cus_Segment_Obj);
    Cus_Purchase_based_segment = structuredClone(Cus_Purchase_based_segment);


    var rules = useSelector((state) => state.Pricing_current_rules.CurrentRules);
    var created_rules = [];
    if (rules && rules.length > 0) {
        created_rules = structuredClone(rules);
    }


    var product_obj = useSelector((state) => state.product_List_And_Segments.product_table_object);
    if (!(product_obj.length > 0) || product_obj === undefined) {
        dispatch(get_product_and_catagory_and_sku_data({ ajax_call: 2 }));
    }
    var product_obj = useSelector((state) => state.product_List_And_Segments.product_table_object);


    var product_cat_obj = useSelector((state) => state.product_List_And_Segments.product_cat_table_object);
    if (!(product_cat_obj.length > 0) || product_cat_obj === undefined) {
        dispatch(get_product_and_catagory_and_sku_data({ ajax_call: 2 }));
    }
    var product_cat_obj = useSelector((state) => state.product_List_And_Segments.product_cat_table_object);


    var [edit, setEditrule] = useState([]);

    var EditRule = (Name, Type) => {

        axios.post('https://server.shopex.io/dynamicpricing/dpp_single_pricing_rule.php', {
            name: Name,
            ajax_call: '2'
        }, { withCredentials: true })
            .then(function (response) {

                var ruletype = response.data.onerule[0].type;
                var OFFER_name = response.data.onerule[0].name;
                var schedule = response.data.onerule[0].schedule;
                var status = response.data.onerule[0].status;
                var osrun = response.data.onerule[0].osrun;
                var pr = response.data.onerule[0].pr;

                var Target_segment_Name = '';
                var Target_segment_Id = response.data.onerule[0].target_segment;

                for (var i of Cus_Purchase_based_segment) {
                    if (Target_segment_Name === '') {
                        if (Target_segment_Id === i.id) {
                            Target_segment_Name = i.name;
                        }
                    }
                }


                if (ruletype === 'q_dis') {

                    var offer_on_pro_or_cat = "";
                    var offer_on_id = "";
                    var cars = [];
                    var Qdis_AvailableForProduct = [];
                    var Qdis_AvailableForCategory = [];

                    var sinrule = response.data.onerule;


                    for (var i of sinrule) {

                        var dtail = i.dtail;

                        //console.log(i);

                        offer_on_pro_or_cat = i.offer_on_pro_or_cat;
                        offer_on_id = i.offer_on_id;

                        var dtailArray = dtail.split("_next_");

                        var from = dtailArray[0];
                        var to = dtailArray[1];
                        var discount = dtailArray[2];
                        var discount_type = dtailArray[3];

                        var car = { from: from, to: to, offer: discount, type: discount_type };
                        cars.push(car);

                        if (offer_on_pro_or_cat === 'prod') {

                            if (product_obj && product_obj.length > 0) {
                                for (var j of product_obj) {
                                    if (offer_on_id === j.product_id) {
                                        var found = Qdis_AvailableForProduct.find(element => element.value === offer_on_id);
                                        if (found === undefined) { Qdis_AvailableForProduct.push({ value: j.product_id, label: j.product_name }); }
                                    }
                                }
                            }

                        } else if (offer_on_pro_or_cat === 'cat') {

                            if (product_cat_obj && product_cat_obj.length > 0) {
                                for (var j of product_cat_obj) {
                                    if (offer_on_id === j.catagory_id) {
                                        var found = Qdis_AvailableForCategory.find(element => element.value === offer_on_id);
                                        if (found === undefined) { Qdis_AvailableForCategory.push({ value: j.catagory_id, label: j.catagory_name }); }
                                    }
                                }
                            }
                        }


                    }

                    setEditrule(null);
                    setEditrule((<Quantity key={'Quantity'}
                        target_segment_name={Target_segment_Name}
                        target_segment_id={Target_segment_Id}
                        offername={OFFER_name}
                        schedule={schedule}
                        osrun={osrun}
                        status={status}
                        pr={pr}
                        qt={cars}
                        for_category={Qdis_AvailableForCategory}
                        for_product={Qdis_AvailableForProduct}
                        offer_on_pro_or_cat={offer_on_pro_or_cat}
                    />));

                }

                else if (ruletype === 'gift_dis') {


                    //function resolveAfter2Seconds(x) {

                    var Product_or_Category = response.data.onerule[0].dtail.split("_next_")[0];


                    var minITEM = response.data.onerule[0].dtail.split("_next_")[3];
                    var minAMOUNT = response.data.onerule[0].dtail.split("_next_")[4];

                    var sinrule = response.data.onerule;
                    //console.log(sinrule);

                    //  Gift Available on Products ID -OR- Category ID 
                    var gift_available_for_product = [];
                    var gift_available_for_category = [];

                    for (var i of sinrule) {

                        var dtail = i.dtail;
                        var dtailArray = dtail.split("_next_");
                        if (Product_or_Category === 'prod') {
                            gift_available_for_product.push(dtailArray[1]);
                        } else if (Product_or_Category === 'cat') {
                            gift_available_for_category.push(dtailArray[1]);
                        }
                    }

                    var giftAvailableForProduct = [];
                    var giftAvailableForCategory = [];

                    var product_options_init = [];
                    if (product_obj && product_obj.length > 0) {
                        for (var i of product_obj) {
                            var label = i.product_name;
                            var value = i.product_id;
                            product_options_init.push({ value: value, label: label });
                        }
                    }

                    if (Product_or_Category === 'prod') {
                        if (product_obj && product_obj.length > 0) {
                            for (var i of gift_available_for_product) {
                                for (var j of product_obj) {
                                    if (i === j.product_id) {
                                        giftAvailableForProduct.push({ value: j.product_id, label: j.product_name });
                                    }
                                }
                            }
                        }

                    } else if (Product_or_Category === 'cat') {
                        if (product_cat_obj && product_cat_obj.length > 0) {
                            for (var i of gift_available_for_category) {
                                for (var j of product_obj) {
                                    if (i === j.product_id) {
                                        giftAvailableForCategory.push({ value: j.product_id, label: j.product_name });
                                    }
                                }
                            }
                        }
                    }
                    //  Gift Available on Products ID -OR- Category ID 



                    //  Offer As Gift -ID'S-
                    var gift_pre_selected = [];

                    var gifts = sinrule[0].dtail.split("_next_")[2].split("next_gift");
                    if (product_obj && product_obj.length > 0) {
                        for (var i of gifts) {
                            for (var j of product_obj) {
                                if (i === j.product_id) {
                                    gift_pre_selected.push({ value: j.product_id, label: j.product_name });
                                }
                            }
                        }
                    }

                    var giftfor_List = "";
                    if (giftAvailableForProduct.length > 0) {
                        giftfor_List = giftAvailableForProduct;
                        //console.log(giftfor_List);
                    }
                    else if (giftAvailableForCategory.length > 0) {
                        giftfor_List = giftAvailableForCategory;
                        //console.log(giftfor_List);
                    }


                    var obj = {
                        type: 'gift',
                        target_segment_name: Target_segment_Name,
                        target_segment_id: Target_segment_Id,
                        offername: OFFER_name,
                        schedule: schedule,
                        products: product_options_init,
                        gifts: gift_pre_selected,
                        giftfor: Product_or_Category,
                        giftfor_List: giftfor_List,
                        minItem: minITEM,
                        minAmount: minAMOUNT
                    };

                    //return  obj;
                    setEditrule(null);
                    setEditrule((<GiftProduct key={'GiftProduct'}
                        target_segment_name={Target_segment_Name}
                        target_segment_id={Target_segment_Id}
                        offername={obj.offername}
                        schedule={obj.schedule}
                        products={obj.products}
                        gifts={obj.gifts}
                        giftfor={obj.giftfor}
                        giftfor_List={obj.giftfor_List}
                        minItem={minITEM}
                        minAmount={minAMOUNT}
                        osrun={osrun}
                        status={status}
                        pr={pr}
                    />));

                }

                else if (ruletype === 'entire') {

                    setEditrule(null);
                    setEditrule((<DiscountOnEntireShop key={'DiscountOnEntireShop'}
                        data={response.data}
                        target_segment_name={Target_segment_Name}
                    />));
                }

                else if (ruletype === 'catdis') {

                    setEditrule(null);
                    setEditrule((<CategoryDiscount key={'CategoryDiscount'}
                        data={response.data}
                        Target_segment_Name={Target_segment_Name}
                    />));
                }

            })

            .catch(function (error) {
                console.log(error);
            });

    }

    var DeleteRule = (Name,Type) => {

    }

    return (

        <>

            <ThemeProvider theme={defaultMaterialTheme}>

                {created_rules && created_rules.length > 0 && 
                
                <MaterialTable style={{borderRadius:'14px', marginRight:'10px', marginBottom:'5%'}}

                    columns={[
                        { title: 'status', field: 'status', render: row => <div style={{background:'whitesmoke'}}>  {row.status} </div> },
                        { title: 'Name', field: 'name', render: row => <div style={{background:'ghostwhite'}}>  {row.name} </div> },
                        { title: 'Type', field: 'type', render: row => <div style={{background:'whitesmoke'}}>  {row.type} </div> },
                        { title: 'Target-segment', field: 'target_segment', render: row => <div style={{background:'ghostwhite'}}>  {row.target_segment} </div> },
                        {
                            title: 'Edit', field: '',
                            render: row => <Button onClick={() => { EditRule(row.name, row.type) }}> Edit-Rule </Button>
                        },
                        { title: 'Schedule', field: 'schedule', render: row => <div style={{background:'ghostwhite'}}>  {row.schedule} </div>  },
                        { title: 'Delete', field: '',render: row => <Button onClick={() => { DeleteRule(row.name, row.type) }}> Delete </Button> },
                    ]}

                    data={created_rules}
                    title="Created rules"
                    icons={{
                        Check: Check,
                        DetailPanel: ChevronRight,
                        Export: SaveAlt,
                        Filter: FilterList,
                        FirstPage: FirstPage,
                        LastPage: LastPage,
                        NextPage: ChevronRight,
                        PreviousPage: ChevronLeft,
                        Search: Search,
                    }}

                    options={
                        {
                          pageSize: 10,       // make initial page size
                          emptyRowsWhenPaging: false,   // To avoid of having empty rows
                          pageSizeOptions: [10, 15, 25, 40, 50],
                          search: true,
                          searchFieldAlignment: "right",
                          exportButton: true,
                          exportAllData: true,
                          cellStyle: {
                            padding: '2px',
                          },
                          headerStyle: {
                            backgrounor: '#01579b',
                            or: '#FFF'
                          },
                        }
                      }
  
                      localization={{
                        pagination: {
                          labelRowsPerPage: ''
                        },
                        header: {
                          actions: ''
                        },
                      }}
                />}

            </ThemeProvider>


            <div>
                {edit}
            </div>

        </>


    )
}

export default PricingCreatedList