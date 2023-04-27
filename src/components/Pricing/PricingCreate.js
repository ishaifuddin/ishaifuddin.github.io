import { ReactSession } from "react-client-session";
import React from "react";
import { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import Quantity from "./PricingType/Quantity";
import GiftProduct from "./PricingType/GiftProduct";
import DiscountOnEntireShop from "./PricingType/DiscountOnEntireShop";
import CategoryDiscount from "./PricingType/CategoryDiscount";

import Radio from "@mui/material/Radio";
import RadioGroup from "@mui/material/RadioGroup";
import { useState } from "react";
import Grid from "@mui/material/Grid";

//import { DateRangePicker } from 'rsuite';
import moment from "moment";

//import MaterialTable from 'material-table';
import { ThemeProvider, createTheme } from "@mui/material";

import { Get_Product_Purchase_Based_Cus_Seg_Obj } from "../../features/product/ProductPurchaseBasedCusSeg";
import NavButton from "../../pages/NavButton";

//import Select from 'react-select';

function PricingCreate() {
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
    };

    if (!is_dispatched()) {
      dispatch(Get_Product_Purchase_Based_Cus_Seg_Obj({ ajax_call: 2 }));
    }
  }, []);

  var [filterList, setfilterList] = useState();

  var discount_type_change = (e) => {
    var distype = e.target.value;
    if (distype == "Quantity")
      setfilterList(
        <Quantity
          key={"Quantity"}
          target_segment_name={""}
          target_segment_id={""}
          offername={""}
          schedule={""}
          osrun={""}
          status={""}
          pr={""}
          qt={""}
          for_category={""}
          for_product={""}
          offer_on_pro_or_cat={""}
        />
      );
    else if (distype == "GiftProduct")
      setfilterList(<GiftProduct key={"GiftProduct"} />);
    else if (distype == "DiscountOnEntireShop")
      setfilterList(<DiscountOnEntireShop key={"DiscountOnEntireShop"} />);
    else if (distype == "CategoryDiscount")
      setfilterList(<CategoryDiscount key={"CategoryDiscount"} />);
  };

  var [daterange, setdrange] = useState([
    new Date(moment().startOf("month")),
    new Date(moment().endOf("month")),
  ]);
  var [schudule, setschedule] = useState("manual");

  var Cus_Purchase_based_segment = useSelector(
    (state) =>
      state.Product_Purchase_Based_Customer_List_and_Segment
        .Product_Purchase_Based_Cus_Segment_Obj
  );
  Cus_Purchase_based_segment = structuredClone(Cus_Purchase_based_segment);

  var ops = [];
  if (Cus_Purchase_based_segment && Cus_Purchase_based_segment.length > 0) {
    for (var i of Cus_Purchase_based_segment) {
      var label = i.name;
      var value = i.id;
      ops.push({ value: value, label: label });
    }
  }

  const defaultMaterialTheme = createTheme();

  return (
    <Grid className="pricing" container spacing={3}>
      <Grid item md={12} className="top-wrap">
        <div className="notifications">
          <h6>Select Discount type</h6>
          <div className="notify">
            <NavButton />
          </div>
        </div>
      </Grid>
      <Grid item md={12}>
        <div className="date-period">
          <RadioGroup
            style={{
              display: "inline-block",
              fontSize: "13px",
              color: "white  ",
              fontWeight: "500",
            }}
            onChange={discount_type_change}
          >
            <Radio value="Quantity" name="Discount" /> Quantity
            <Radio value="GiftProduct" name="Discount" /> Gift-Product
            <Radio value="CategoryDiscount" name="Discount" /> Category-Discount
            <Radio value="DiscountOnEntireShop" name="Discount" />{" "}
            Discount-On-Entire-Shop
          </RadioGroup>
        </div>
        <br />
        {filterList}
      </Grid>
    </Grid>
  );
}

export default PricingCreate;
