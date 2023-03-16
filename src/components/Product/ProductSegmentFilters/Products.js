import { ReactSession }  from 'react-client-session';
import React, { useEffect, useState } from "react";
import Select from 'react-select';
import { Grid,Input } from '@mantine/core';
import { useSelector, useDispatch } from "react-redux";
import Multiselect from 'multiselect-react-dropdown';
import { get_product_and_catagory_and_sku_data } from "../../../features/product/ProductListAndSegment";

function Products({data}) {
    
    var[GiftOnProduct,setGiftOnProduct]=useState([]);
    
    useEffect(() => {
        if(data && data.length > 0){
            setGiftOnProduct(data);
        } 
    },[])
    

    var dispatch = useDispatch();
    var [product, setProduct] = useState('');
    var [productname,setProductname] = useState('');


    var is_dispatched1 = () => {
        ReactSession.get("get_product_and_catagory_and_sku_data");
        if(ReactSession.get("get_product_and_catagory_and_sku_data")) {
            return true;
        }else {
            ReactSession.set("get_product_and_catagory_and_sku_data", "1");
            return false;
        }
    }

    if(!(is_dispatched1())) {
        dispatch(get_product_and_catagory_and_sku_data({ajax_call:2}));
    }
    
    var product_obj = useSelector((state) => state.product_List_And_Segments.all_product_object);

    var ops = [];
    if(product_obj && product_obj.length > 0){
        for (var i of product_obj) {
            var label = i.product_name; var value = i.product_id;
            ops.push({value:value,label:label});
        }
    }
    
    return (

        <>
            <div style={{margin:'15px'}}>
                
                {ops && ops.length > 0 && <Multiselect 
                    displayValue="label"
                    placeholder="Select-Product"
                    onRemove={
                        (e) => { 
                            var aa=[];  
                            for (var i of e){
                                aa.push(i.value)
                            };
                            setProduct(JSON.stringify(aa));

                            var aa=[];  
                            for (var i of e){
                                aa.push(i.label)
                            };
                            setProductname(JSON.stringify(aa));
                        }
                    }
                    onSelect={
                        (e) => { 
                            var aa=[];  
                            for (var i of e){
                                aa.push(i.value)
                            };
                            setProduct(JSON.stringify(aa));

                            var aa=[];  
                            for (var i of e){
                                aa.push(i.label)
                            };
                            setProductname(JSON.stringify(aa));
                        }
                    }
                    options={ops}
                    selectedValues={GiftOnProduct}
                    showCheckbox/>}

            </div>
            <input name="productList" type={'hidden'} defaultValue={product} />
            <input name="productname" type={'hidden'} defaultValue={productname} />
        </>
    )
}
export default Products