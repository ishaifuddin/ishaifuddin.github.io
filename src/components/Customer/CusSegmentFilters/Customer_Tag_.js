import { ReactSession } from "react-client-session";

import React, { useEffect, useState } from "react";
import Select from "react-select";
import { Grid } from "@mantine/core";
import { useSelector, useDispatch } from "react-redux";
import Multiselect from "multiselect-react-dropdown";
import { get_cusret_getcity } from "../../../features/cus/CusRetSelCity";
function Customer_Tag_() {
  var dispatch = useDispatch();
  var [tag, settag] = useState("");

  ///
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

  ///

  var Cus_tag = useSelector((state) => state.CusRetSC.tag);

  return (
    <div className="input-filters" style={{ display: "block" }}>
      <Multiselect
        isObject={false}
        placeholder="Customer tag"
        onRemove={(e) => {
          settag(JSON.stringify(e));
        }}
        onSelect={(e) => {
          settag(JSON.stringify(e));
        }}
        options={Cus_tag}
        selectedValues={[]}
        showCheckbox
      />
      <input name="cus_tag" style={{ display: "none" }} defaultValue={tag} />
    </div>
  );
}
export default Customer_Tag_;
