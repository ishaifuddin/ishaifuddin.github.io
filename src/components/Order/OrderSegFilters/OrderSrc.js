import { ReactSession } from "react-client-session";
import React, { useEffect, useState } from "react";
import Select from "react-select";
import { Grid } from "@mantine/core";
import { useSelector, useDispatch } from "react-redux";
import Multiselect from "multiselect-react-dropdown";
import { get_cusret_getcity } from "../../../features/cus/CusRetSelCity";
function OrderSrc() {
  var dispatch = useDispatch();
  const [src, setsrc] = useState("");

  //var Cus_src = useSelector((state) => state.CusRetSC.cusretSC.src);

  // if (!(Cus_src !== undefined && Cus_src !== null)) {
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
  var Cus_src = useSelector((state) => state.CusRetSC.src);

  return (
    <div className="input-filters">
      <strong>Order Source :</strong>
      {Cus_src && (
        <Multiselect
          className="multi"
          isObject={false}
          placeholder="Order source"
          onRemove={(e) => {
            setsrc(JSON.stringify(e));
          }}
          onSelect={(e) => {
            setsrc(JSON.stringify(e));
          }}
          options={Cus_src}
          selectedValues={[]}
          showCheckbox
        />
      )}
      <input name="src" style={{ display: "none" }} defaultValue={src} />
    </div>
  );
}
export default OrderSrc;
