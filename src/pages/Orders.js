import React, { useEffect, useState } from "react";
import MaterialTable from "material-table";
import { ThemeProvider, createTheme } from "@mui/material";
import Grid from "@mui/material/Grid";
import Button from "@mui/material/Button";

import OrderListAndSegment from "../components/Order/OrderListAndSegment";
import OrderReport from "../components/Order/OrderReport";

import SideNav from "./SideNav";

function Orders() {
  var [Reports, setReports] = useState(true);
  var [ListAndSegments, setListAndSegments] = useState(false);

  return (
    <Grid container>
      <Button
        onClick={(e) => {
          setReports(true);
          setListAndSegments(false);
        }}
        color={Reports ? "primary" : "secondary"}
      >
        Reports
      </Button>

      <Button
        onClick={(e) => {
          setListAndSegments(true);
          setReports(false);
        }}
        color={ListAndSegments ? "primary" : "secondary"}
      >
        List And Segments
      </Button>

      {Reports && <OrderReport />}

      {ListAndSegments && <OrderListAndSegment />}
    </Grid>
  );
}

export default Orders;
