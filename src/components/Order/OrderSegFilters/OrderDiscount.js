import React, { useEffect, useState } from "react";
import Select from "react-select";
import { Grid } from "@mantine/core";

function OrderDiscount() {
  var [OrderDiscount_bellow, setOrderDiscount_bellow] = useState(true);
  var [OrderDiscount_above, setOrderDiscount_above] = useState(false);
  var [OrderDiscount_between, setOrderDiscount_between] = useState(false);

  var handleChange = (e) => {
    setOrderDiscount_between(false);
    setOrderDiscount_above(false);
    setOrderDiscount_bellow(false);

    if (e === "OrderDiscount_between") setOrderDiscount_between(true);
    if (e === "OrderDiscount_above") setOrderDiscount_above(true);
    if (e === "OrderDiscount_bellow") setOrderDiscount_bellow(true);
  };

  const options = [
    { value: "OrderDiscount_bellow", label: "Less than" },
    { value: "OrderDiscount_above", label: "More than" },
    { value: "OrderDiscount_between", label: "In-Between" },
  ];

  return (
    <div className="input-filters">
      <strong> Order-Discount : </strong>
      {options && (
        <Select
          className="multi"
          placeholder="Less than"
          defaultValue={"OrderDiscount_bellow"}
          onChange={(e) => {
            handleChange(e.value);
          }}
          options={options}
        />
      )}
      {OrderDiscount_bellow && (
        <input defaultValue="0" type="number" id="4" name="order_dis_max" />
      )}
      {OrderDiscount_above && (
        <input defaultValue="0" type="number" id="3" name="order_dis_min" />
      )}
      {OrderDiscount_between && (
        <div id="OrderDiscount_betwn">
          <input
            defaultValue="0"
            type="number"
            id="1"
            name="order_dis_minval"
          />
          <input
            defaultValue="0"
            type="number"
            id="2"
            name="order_dis_maxval"
          />
        </div>
      )}
    </div>
  );
}

export default OrderDiscount;

// '<select id="order_c_product" onchange = "order_prod_count_range()" style="width:122px;font-size:14px;">' +
// '<option id="order_prod_bellow" value="amount_bellow">Less than</option>' +
// '<option id="order_prod_above"  value="">More than</option>' +
// '<option id="order_prod_between" Selected value="">In between</option>' +
// '</select>' +

// '<div id="order_prod_bellow_div"  style="display:none;" >' +
// '<input form = "order_filter" type="number" id="102" name="order_prod_max" value="" style="width:122px;" />' +
// '<button onclick="remove_oprod()" class="btn"><i class="fa fa-close"></i></button>' +
// '</div>' +

// '<div id="order_prod_above_div" style="display:none;">' +
// '<input form = "order_filter" type="number" id="101" name="order_prod_min" value="" style="width:122px;" />' +
// '<button onclick="remove_oprod()" class="btn"><i class="fa fa-close"></i></button>' +
// '</div>' +

// '<div id="order_prod_between_div" style="display:inline-grid">' +
// '<input form = "order_filter" type="number" id="100" name="order_prod_minval" value="" style="width:122px;" />' + ' to ' +
// '<input form = "order_filter" type="number" id="99" name="order_prod_maxval" value="" style="width:122px;" />' +
// '<button onclick="remove_oprod()" class="btn"><i class="fa fa-close"></i></button>' +

// '</div>';
