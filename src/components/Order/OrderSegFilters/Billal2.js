import { ReactSession } from "react-client-session";
import React, { useEffect, useState } from "react";
import Select from "react-select";
import { Grid, Input } from "@mantine/core";
import { useSelector, useDispatch } from "react-redux";
import Multiselect from "multiselect-react-dropdown";
import { get_cusret_getcity } from "../../../features/cus/CusRetSelCity";
function Billa2() {
  var dispatch = useDispatch();
  const [ba2, setba1] = useState("");

  // if (!(Cus_ba2 !== undefined && Cus_ba2 !== null)) {
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

  var Cus_ba2 = useSelector((state) => state.CusRetSC.ba1);

  return (
    <Grid>
      <Grid.Col span={8} style={{}}>
        {Cus_ba2 && (
          <Multiselect
            isObject={false}
            placeholder=" Billing AddressLine 2"
            onRemove={(e) => {
              setba1(JSON.stringify(e));
            }}
            onSelect={(e) => {
              setba1(JSON.stringify(e));
            }}
            options={Cus_ba2}
            selectedValues={[]}
            showCheckbox
          />
        )}
      </Grid.Col>

      <Input name="ba2" type={"hidden"} value={ba2} />
    </Grid>
  );
}
export default Billa2;
