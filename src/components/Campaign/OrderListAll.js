import { ReactSession } from "react-client-session";

import React, { useEffect, useState, useRef } from "react";

import { useSelector, useDispatch } from "react-redux";
import axios from "axios";
import Select from "react-select";

import Grid from "@mui/material/Grid";
import Button from "@mui/material/Button";
import moment from "moment";

import MaterialTable from "material-table";
import { ThemeProvider, createTheme } from "@mui/material";

import { get_all_orders_from_campaign } from "../../features/campaign/OrderListAndGroupByCam";
import { Card } from "react-bootstrap";
import NavButton from "../../pages/NavButton";

function OrderListAll() {
  const dispatch = useDispatch();
  const defaultMaterialTheme = createTheme();

  useEffect(() => {
    var is_dispatched = (dispatch_function) => {
      ReactSession.get(dispatch_function);
      if (ReactSession.get(dispatch_function)) {
        return true;
      } else {
        console.log("get_all_orders_from_campaign session assigned");
        ReactSession.set(dispatch_function, "1");
        dispatch(get_all_orders_from_campaign({ ajax_call: "order_list" }));
      }
    };
    is_dispatched("get_all_orders_from_campaign");
  }, []);

  var Allorder = useSelector((state) => state.campaign.Allorder);
  Allorder = structuredClone(Allorder);

  return (
    <Grid className="campaign" container spacing={3}>
      <Grid item md={12} className="top-wrap">
        <div className="notifications">
          <h6>Orders From campaign</h6>
          <div className="notify">
            <NavButton />
          </div>
        </div>
      </Grid>
      <Grid item md={12}>
        {Allorder && Allorder.length > 0 && (
          <Card className="dash-card">
            <ThemeProvider theme={defaultMaterialTheme}>
              <MaterialTable
                columns={[
                  { title: "Camapign", field: "Camapign" },
                  { title: "Medium", field: "Medium" },
                  { title: "Source", field: "Source" },
                  { title: "OrderId", field: "OrderId" },
                  { title: "Amount", field: "Amount" },
                  { title: "Date", field: "Date" },
                ]}
                data={Allorder}
                title="Orders from Campaign"
              />
            </ThemeProvider>
          </Card>
        )}
      </Grid>
    </Grid>
  );
}

export default OrderListAll;
