import { ReactSession } from "react-client-session";

import React, { useEffect, useState } from "react";
import Select from "react-select";
import { Grid, Input } from "@mantine/core";
import { useSelector, useDispatch } from "react-redux";
import Multiselect from "multiselect-react-dropdown";
import { get_cusret_getcity } from "../../../features/cus/CusRetSelCity";
function Billing_City_() {
  var dispatch = useDispatch();
  var [bcity, setbcity] = useState("");

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

  var Cus_bcity = useSelector((state) => state.CusRetSC.bcity);

  return (
    <div className="input-filters" style={{ display: "block" }}>
      <Multiselect
        isObject={false}
        placeholder="Billing-City"
        onRemove={(e) => {
          setbcity(JSON.stringify(e));
        }}
        onSelect={(e) => {
          setbcity(JSON.stringify(e));
        }}
        options={Cus_bcity}
        selectedValues={[]}
        showCheckbox
      />
      <Input name="bcitylist" type={"hidden"} value={bcity} />
    </div>
  );
}
export default Billing_City_;
