import { ReactSession } from "react-client-session";
import React, { useEffect, useState } from "react";
import Select from "react-select";
import { Grid, Input } from "@mantine/core";
import { useSelector, useDispatch } from "react-redux";
import Multiselect from "multiselect-react-dropdown";
import { get_cusret_getcity } from "../../../features/cus/CusRetSelCity";

function CouponCode() {
  var dispatch = useDispatch();
  const [couponcode, setCouponcode] = useState("");

  //var Cus_cc = useSelector((state) => state.CusRetSC.cusretSC.coupon);

  // if (!(Cus_cc !== undefined && Cus_cc !== null)) {
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

  var Cus_cc = useSelector((state) => state.CusRetSC.coupon);

  return (
    <Grid>
      <Grid.Col span={8} style={{}}>
        {Cus_cc && (
          <Multiselect
            isObject={false}
            placeholder="Coupon-code"
            onRemove={(e) => {
              setCouponcode(JSON.stringify(e));
            }}
            onSelect={(e) => {
              setCouponcode(JSON.stringify(e));
            }}
            options={Cus_cc}
            selectedValues={[]}
            showCheckbox
          />
        )}
      </Grid.Col>
      <Input name="cou" type={"hidden"} value={couponcode} />
    </Grid>
  );
}
export default CouponCode;
