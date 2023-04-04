import { ReactSession } from "react-client-session";
import React, { useEffect, useState } from "react";
import Select from "react-select";
import { Grid, Input } from "@mantine/core";
import { useSelector, useDispatch } from "react-redux";
import Multiselect from "multiselect-react-dropdown";
import { get_product_and_catagory_and_sku_data } from "../../../features/product/ProductListAndSegment";

function ProductCatagory({ data }) {
  var dispatch = useDispatch();
  var [catas, setCatas] = useState("");

  var is_dispatched1 = () => {
    ReactSession.get("get_product_and_catagory_and_sku_data");
    if (ReactSession.get("get_product_and_catagory_and_sku_data")) {
      return true;
    } else {
      ReactSession.set("get_product_and_catagory_and_sku_data", "1");
      return false;
    }
  };

  if (!is_dispatched1()) {
    dispatch(get_product_and_catagory_and_sku_data({ ajax_call: 2 }));
  }

  var [GiftOnCategory, setGiftOnCategory] = useState([]);

  useEffect(() => {
    if (data && data.length > 0) {
      setGiftOnCategory(data);
    }
  }, []);

  var product_obj = useSelector(
    (state) => state.product_List_And_Segments.product_cat_table_object
  );

  // if ( !(product_obj) || product_obj === undefined ) {
  //    dispatch(get_product_and_catagory_and_sku_data({ajax_call:2}));
  // }

  var cat_obj = useSelector(
    (state) => state.product_List_And_Segments.product_cat_table_object
  );

  var ops = [];
  if (cat_obj && cat_obj.length > 0) {
    for (var i of cat_obj) {
      var label = i.catagory_name;
      var value = i.catagory_id;
      ops.push({ value: value, label: label });
    }
  }

  //setProductname(JSON.stringify(aa));
  return (
    <>
      {ops && ops.length > 0 && (
        <Multiselect
          displayValue="label"
          placeholder="Select-catagory"
          // onRemove={(e) => {setCatas(JSON.stringify(e.value));}}
          // onSelect={(e) => {setCatas(JSON.stringify(e.value));}}
          onRemove={(e) => {
            var aa = [];
            for (var i of e) {
              aa.push(i.value);
            }
            setCatas(JSON.stringify(aa));

            // var aa=[];
            // for (var i of e){
            //     aa.push(i.label)
            // };
            // setProductname(JSON.stringify(aa));
          }}
          onSelect={(e) => {
            var aa = [];
            for (var i of e) {
              aa.push(i.value);
            }
            setCatas(JSON.stringify(aa));

            // var aa=[];
            // for (var i of e){
            //     aa.push(i.label)
            // };
            // setProductname(JSON.stringify(aa));
          }}
          options={ops}
          selectedValues={GiftOnCategory}
          showCheckbox
        />
      )}
      <input name="productCatList" type={"hidden"} defaultValue={catas} />
    </>
  );
}
export default ProductCatagory;
