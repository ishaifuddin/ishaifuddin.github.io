import React, { useEffect, useState } from "react";
import Select from "react-select";
import { Grid } from "@mantine/core";

function NthOrder() {
  var [NthOrder_bellow, setNthOrder_bellow] = useState(true);
  var [NthOrder_above, setNthOrder_above] = useState(false);
  var [NthOrder_between, setNthOrder_between] = useState(false);

  var handleChange = (e) => {
    setNthOrder_between(false);
    setNthOrder_above(false);
    setNthOrder_bellow(false);

    if (e === "NthOrder_between") setNthOrder_between(true);
    if (e === "NthOrder_above") setNthOrder_above(true);
    if (e === "NthOrder_bellow") setNthOrder_bellow(true);
  };

  const options = [
    { value: "NthOrder_bellow", label: "Less than" },
    { value: "NthOrder_above", label: "More than" },
    { value: "NthOrder_between", label: "In-Between" },
  ];

  return (
    <div className="input-filters">
      <strong> Nth-Order : </strong>
      {options && (
        <Select
          className="multi"
          placeholder="Less than"
          defaultValue={"NthOrder_bellow"}
          onChange={(e) => {
            handleChange(e.value);
          }}
          options={options}
        />
      )}
      {NthOrder_bellow && (
        <input defaultValue="0" type="number" id="4" name="nth_order_max" />
      )}
      {NthOrder_above && (
        <input defaultValue="0" type="number" id="3" name="nth_order_min" />
      )}
      {NthOrder_between && (
        <div id="NthOrder_betwn">
          <input
            defaultValue="0"
            type="number"
            id="1"
            name="nth_order_minval"
          />
          <input
            defaultValue="0"
            type="number"
            id="2"
            name="nth_order_maxval"
          />
        </div>
      )}
    </div>
  );
}

export default NthOrder;

// '<div id="ret_after_unit_bellow_div"  style="display:none;" >' +
// '<input form="order_filter" type="number" id="114" name="ret_after_max" value="" style="width:122px;" />' +
// '<button onclick="ret_after_remove_ounit()" class="btn"><i class="fa fa-close"></i></button>' +
// '</div>' +

// '<div id="ret_after_unit_above_div" style="display:none;">' +
// '<input form = "order_filter" type="number" id="113" name="ret_after_min" value="" style="width:122px;" />' +
// '<button onclick="ret_after_remove_ounit()" class="btn"><i class="fa fa-close"></i></button>' +
// '</div>' +

// '<div id="ret_after_unit_between_div" style="display:inline-grid">' +
// '<input placeholder="From.." form = "order_filter" type="number" id="112" name="ret_after_minval" value="" style="width:122px;" />' +
// '<input placeholder="To.." form = "order_filter" type="number" id="111" name="ret_after_maxval" value="" style="width:122px;" />'  +
// '<button onclick="ret_after_remove_ounit()" class="btn"><i class="fa fa-close"></i></button>' +

// '</div>';
