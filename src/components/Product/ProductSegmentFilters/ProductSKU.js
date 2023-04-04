import { ReactSession } from "react-client-session";
import React, { useEffect, useState } from "react";
import Select from "react-select";
import { Grid, Input } from "@mantine/core";
import { useSelector, useDispatch } from "react-redux";
import Multiselect from "multiselect-react-dropdown";
import { get_product_and_catagory_and_sku_data } from "../../../features/product/ProductListAndSegment";

function ProductSKU() {
  var dispatch = useDispatch();
  const [sku, setSku] = useState("");

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

  var skus = useSelector(
    (state) => state.product_List_And_Segments.product_sku
  );

  return (
    <div className="input-filters" style={{ display: "block" }}>
      <Multiselect
        placeholder="Select-SKU"
        onRemove={(e) => {
          setSku(JSON.stringify(e));
        }}
        onSelect={(e) => {
          setSku(JSON.stringify(e));
        }}
        options={skus}
        selectedValues={[]}
        showCheckbox
      />
      <Input name="sku" type={"hidden"} value={sku} />
    </div>
  );
}

export default ProductSKU;
