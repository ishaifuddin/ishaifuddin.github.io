import { ReactSession } from "react-client-session";
import React, { useEffect, useState } from "react";
import Select from "react-select";
import { Grid } from "@mantine/core";
import { useSelector, useDispatch } from "react-redux";
import Multiselect from "multiselect-react-dropdown";
import { get_cusret_getcity } from "../../../features/cus/CusRetSelCity";
function ShipCity() {
  // var dispatch = useDispatch();
  // var [scity, setscity] = useState('');
  // var Cus_scity = useSelector((state) => state.CusRetSC.cusretSC.scity);
  // if (!(Cus_scity !== undefined && Cus_scity !== null)) {
  //    dispatch(get_cusret_getcity({ajax_call:2}));
  // }

  var dispatch = useDispatch();
  var [scity, setscity] = useState("");

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

  var Cus_scity = useSelector((state) => state.CusRetSC.scity);

  return (
    <Grid style={{}}>
      <Grid.Col span={10} style={{}}>
        {Cus_scity && (
          <Multiselect
            isObject={false}
            placeholder="Shipping-City"
            onRemove={(e) => {
              setscity(JSON.stringify(e));
            }}
            onSelect={(e) => {
              setscity(JSON.stringify(e));
            }}
            options={Cus_scity}
            selectedValues={[]}
            showCheckbox
          />
        )}
        <input name="s" style={{ display: "none" }} defaultValue={scity} />
      </Grid.Col>
    </Grid>
  );
}
export default ShipCity;
