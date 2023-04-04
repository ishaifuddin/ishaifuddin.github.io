import { ReactSession } from "react-client-session";
import React, { useEffect, useState } from "react";
import Select from "react-select";
import { Grid, Input } from "@mantine/core";
import { useSelector, useDispatch } from "react-redux";
import Multiselect from "multiselect-react-dropdown";
import { get_cusret_getcity } from "../../../features/cus/CusRetSelCity";
function ShipPostCode() {
  var dispatch = useDispatch();
  const [shippostcode, setshippostcode] = useState("");

  //var shippostcode_ = useSelector((state) => state.CusRetSC.cusretSC.shippostcode);

  // if (!(shippostcode_ !== undefined && shippostcode_ !== null)) {
  //    dispatch(get_cusret_getcity({ajax_call:2}));
  // }
  var is_dispatched = (dispatch_function) => {
    ReactSession.get("get_cusret_getcity");
    if (ReactSession.get("get_cusret_getcity")) {
      return true;
    } else {
      ReactSession.set("get_cusret_getcity", "1");
      return false;
    }
  };
  if (!is_dispatched("get_cusret_getcity")) {
    dispatch(get_cusret_getcity({ ajax_call: 2 }));
  }

  var shippostcode_ = useSelector((state) => state.CusRetSC.shippostcode);

  if (!(shippostcode_ && shippostcode_.length > 0)) {
    shippostcode_ = [];
  }

  return (
    <div className="input-filters">
      <strong> shiping post code : </strong>
      {shippostcode_ && (
        <Multiselect
          className="multi"
          isObject={false}
          placeholder="Shipping PostCode"
          onRemove={(e) => {
            setshippostcode(JSON.stringify(e));
          }}
          onSelect={(e) => {
            setshippostcode(JSON.stringify(e));
          }}
          options={shippostcode_}
          selectedValues={[]}
          showCheckbox
        />
      )}
      <Input name="spc" type={"hidden"} value={shippostcode} />
    </div>
  );
}
export default ShipPostCode;
