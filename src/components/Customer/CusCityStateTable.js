import { ReactSession } from "react-client-session";
import React from "react";
import { useSelector, useDispatch } from "react-redux";
import Grid from "@mui/material/Grid";
import { useState } from "react";
import MaterialTable from "material-table";
import { ThemeProvider, createTheme } from "@mui/material";

import Typography from "@material-ui/core/Typography";

import { get_cusLocCT_data } from "../../features/cus/CusLocCT";

import Search from "@material-ui/icons/Search";
import SaveAlt from "@material-ui/icons/SaveAlt";
import ChevronLeft from "@material-ui/icons/ChevronLeft";
import ChevronRight from "@material-ui/icons/ChevronRight";
import FirstPage from "@material-ui/icons/FirstPage";
import LastPage from "@material-ui/icons/LastPage";
import Add from "@material-ui/icons/Add";
import Check from "@material-ui/icons/Check";
import FilterList from "@material-ui/icons/FilterList";
import ListAltIcon from "@mui/icons-material/ListAlt";
import ClearIcon from "@mui/icons-material/Clear";
import CancelIcon from "@mui/icons-material/Cancel";
import { Card } from "react-bootstrap";

function CusCityStateTable() {
  ////////////////////------------------ Privious -------------------------------------
  // var dispatch5 = useDispatch();
  var defaultMaterialTheme = createTheme();

  // var is_dispatched = (dispatch_function) => {
  //     ReactSession.get("get_cusLocCT_data");
  //     if (ReactSession.get("get_cusLocCT_data")) {
  //         return true;
  //     } else {
  //         ReactSession.set("get_cusLocCT_data", "1");
  //         return false;
  //     }
  // }
  // if (!(is_dispatched('get_cusLocCT_data'))) {
  //     dispatch5(get_cusLocCT_data({ ajax_seg: 2 }));
  // }

  // var CusLocChartTable = useSelector((state) => state.cusLocChartTable);
  // var billcityData = CusLocChartTable.billcity_table;
  // var shipcityTable = CusLocChartTable.shipcity_table;
  // var billstateTable = CusLocChartTable.billstate_table;
  // var shipstateTable = CusLocChartTable.shipstate_table;
  // {/* Billing And Shipping City,State Customer Table */ }

  // if (CusLocChartTable.billcity_table.length > 0) {
  //     var billcitycloneData = structuredClone(billcityData);
  // }

  // if (CusLocChartTable.shipcity_table.length > 0) {
  //     var shipcitycloneData = structuredClone(shipcityTable);
  // }

  // if (CusLocChartTable.billstate_table.length > 0) {
  //     var billstatecloneData = structuredClone(billstateTable);
  // }

  // if (CusLocChartTable.shipstate_table.length > 0) {
  //     var shipstatecloneData = structuredClone(shipstateTable);
  // }

  // var city_columns = [
  //     { title: 'City', field: 'city', render: row => <div style={{background:'mintcream'}}>  {row.city} </div> },
  //     { title: 'Customer', field: 'customers', render: row => <div style={{background:'whitesmoke'}}>  {row.customers} </div>  },
  //     { title: '%', field: 'cus_change', render: row => <div style={{background:'ghostwhite'}}>  {row.cus_change} </div>  },
  //     { title: 'Repeat', field: 'retcus', render: row => <div style={{background:'whitesmoke'}}>  {row.retcus} </div>  },
  //     { title: '%', field: 'retcus_change' , render: row => <div style={{background:'ghostwhite'}}>  {row.retcus_change} </div> },
  //     { title: 'Revenue', field: 'rev', render: row => <div style={{background:'whitesmoke'}}>  {row.rev} </div>  },
  //     { title: '%', field: 'rev_change', render: row => <div style={{background:'ghostwhite'}}>  {row.rev_change} </div>  },
  //     { title: 'Order', field: 'orders', render: row => <div style={{background:'whitesmoke'}}>  {row.orders} </div>  },
  //     { title: '%', field: 'or_change', render: row => <div style={{background:'ghostwhite'}}> {row.or_change} </div>  },
  //     { title: 'Order/Cus', field: 'opc', render: row => <div style={{background:'whitesmoke'}}>  {row.opc} </div>  },
  //     { title: '%', field: 'opc_change', render: row => <div style={{background:'ghostwhite'}}>  {row.opc_change} </div>  },
  //     { title: 'Rev/Cus', field: 'rpc', render: row => <div style={{background:'whitesmoke'}}>  {row.rpc} </div>  },
  //     { title: '%', field: 'rpc_change', render: row => <div style={{background:'ghostwhite'}}>  {row.rpc_change} </div>  }

  // ];

  // var state_columns = [
  //     { title: 'State', field: 'state', render: row => <div style={{background:'mintcream'}}>  {row.city} </div> },
  //     { title: 'Customer', field: 'customers', render: row => <div style={{background:'whitesmoke'}}>  {row.customers} </div>  },
  //     { title: '%', field: 'cus_change', render: row => <div style={{background:'ghostwhite'}}>  {row.cus_change} </div>  },
  //     { title: 'Repeat', field: 'retcus', render: row => <div style={{background:'whitesmoke'}}>  {row.retcus} </div>  },
  //     { title: '%', field: 'retcus_change' , render: row => <div style={{background:'ghostwhite'}}>  {row.retcus_change} </div> },
  //     { title: 'Revenue', field: 'rev', render: row => <div style={{background:'whitesmoke'}}>  {row.rev} </div>  },
  //     { title: '%', field: 'rev_change', render: row => <div style={{background:'ghostwhite'}}>  {row.rev_change} </div>  },
  //     { title: 'Order', field: 'orders', render: row => <div style={{background:'whitesmoke'}}>  {row.orders} </div>  },
  //     { title: '%', field: 'or_change', render: row => <div style={{background:'ghostwhite'}}> {row.or_change} </div>  },
  //     { title: 'Order/Cus', field: 'opc', render: row => <div style={{background:'whitesmoke'}}>  {row.opc} </div>  },
  //     { title: '%', field: 'opc_change', render: row => <div style={{background:'ghostwhite'}}>  {row.opc_change} </div>  },
  //     { title: 'Rev/Cus', field: 'rpc', render: row => <div style={{background:'whitesmoke'}}>  {row.rpc} </div>  },
  //     { title: '%', field: 'rpc_change', render: row => <div style={{background:'ghostwhite'}}>  {row.rpc_change} </div>  }

  // ];

  /////////////////////////// DUMMY DATA /////////////////////////////////
  /////////////////////////// DUMMY DATA /////////////////////////////////
  /////////////////////////// DUMMY DATA /////////////////////////////////
  /////////////////////////// DUMMY DATA /////////////////////////////////
  /////////////////////////// DUMMY DATA /////////////////////////////////
  /////////////////////////// DUMMY DATA /////////////////////////////////

  var city_columns = [
    {
      title: "City",
      field: "city",
      render: (row) => (
        <div style={{ background: "mintcream" }}> {row.city} </div>
      ),
    },
    {
      title: "Customer",
      field: "customers",
      render: (row) => (
        <div style={{ background: "whitesmoke" }}> {row.customers} </div>
      ),
    },
    {
      title: "%",
      field: "cus_change",
      render: (row) => (
        <div style={{ background: "ghostwhite" }}> {row.cus_change} </div>
      ),
    },
    {
      title: "Repeat",
      field: "retcus",
      render: (row) => (
        <div style={{ background: "whitesmoke" }}> {row.retcus} </div>
      ),
    },
    {
      title: "%",
      field: "retcus_change",
      render: (row) => (
        <div style={{ background: "ghostwhite" }}> {row.retcus_change} </div>
      ),
    },
    {
      title: "Revenue",
      field: "rev",
      render: (row) => (
        <div style={{ background: "whitesmoke" }}> {row.rev} </div>
      ),
    },
    {
      title: "%",
      field: "rev_change",
      render: (row) => (
        <div style={{ background: "ghostwhite" }}> {row.rev_change} </div>
      ),
    },
    {
      title: "Order",
      field: "orders",
      render: (row) => (
        <div style={{ background: "whitesmoke" }}> {row.orders} </div>
      ),
    },
    {
      title: "%",
      field: "or_change",
      render: (row) => (
        <div style={{ background: "ghostwhite" }}> {row.or_change} </div>
      ),
    },
    {
      title: "Order/Cus",
      field: "opc",
      render: (row) => (
        <div style={{ background: "whitesmoke" }}> {row.opc} </div>
      ),
    },
    {
      title: "%",
      field: "opc_change",
      render: (row) => (
        <div style={{ background: "ghostwhite" }}> {row.opc_change} </div>
      ),
    },
    {
      title: "Rev/Cus",
      field: "rpc",
      render: (row) => (
        <div style={{ background: "whitesmoke" }}> {row.rpc} </div>
      ),
    },
    {
      title: "%",
      field: "rpc_change",
      render: (row) => (
        <div style={{ background: "ghostwhite" }}> {row.rpc_change} </div>
      ),
    },
  ];

  var state_columns = [
    {
      title: "State",
      field: "state",
      render: (row) => (
        <div style={{ background: "mintcream" }}> {row.city} </div>
      ),
    },
    {
      title: "Customer",
      field: "customers",
      render: (row) => (
        <div style={{ background: "whitesmoke" }}> {row.customers} </div>
      ),
    },
    {
      title: "%",
      field: "cus_change",
      render: (row) => (
        <div style={{ background: "ghostwhite" }}> {row.cus_change} </div>
      ),
    },
    {
      title: "Repeat",
      field: "retcus",
      render: (row) => (
        <div style={{ background: "whitesmoke" }}> {row.retcus} </div>
      ),
    },
    {
      title: "%",
      field: "retcus_change",
      render: (row) => (
        <div style={{ background: "ghostwhite" }}> {row.retcus_change} </div>
      ),
    },
    {
      title: "Revenue",
      field: "rev",
      render: (row) => (
        <div style={{ background: "whitesmoke" }}> {row.rev} </div>
      ),
    },
    {
      title: "%",
      field: "rev_change",
      render: (row) => (
        <div style={{ background: "ghostwhite" }}> {row.rev_change} </div>
      ),
    },
    {
      title: "Order",
      field: "orders",
      render: (row) => (
        <div style={{ background: "whitesmoke" }}> {row.orders} </div>
      ),
    },
    {
      title: "%",
      field: "or_change",
      render: (row) => (
        <div style={{ background: "ghostwhite" }}> {row.or_change} </div>
      ),
    },
    {
      title: "Order/Cus",
      field: "opc",
      render: (row) => (
        <div style={{ background: "whitesmoke" }}> {row.opc} </div>
      ),
    },
    {
      title: "%",
      field: "opc_change",
      render: (row) => (
        <div style={{ background: "ghostwhite" }}> {row.opc_change} </div>
      ),
    },
    {
      title: "Rev/Cus",
      field: "rpc",
      render: (row) => (
        <div style={{ background: "whitesmoke" }}> {row.rpc} </div>
      ),
    },
    {
      title: "%",
      field: "rpc_change",
      render: (row) => (
        <div style={{ background: "ghostwhite" }}> {row.rpc_change} </div>
      ),
    },
  ];

  const [billcitycloneData, setTpbp] = useState([
    {
      product: "John",
      profit: 23,
      "%": "1",
      data3: "data3Value",
      data4: "data4Value",
      data5: "data5Value",
      data6: "data6Value",
    },
    {
      product: "John",
      profit: 23,
      "%": "1",
      data3: "data3Value",
      data4: "data4Value",
      data5: "data5Value",
      data6: "data6Value",
    },
    {
      product: "John",
      profit: 23,
      "%": "1",
      data3: "data3Value",
      data4: "data4Value",
      data5: "data5Value",
      data6: "data6Value",
    },
    {
      product: "John",
      profit: 23,
      "%": "1",
      data3: "data3Value",
      data4: "data4Value",
      data5: "data5Value",
      data6: "data6Value",
    },
    {
      product: "John",
      profit: 23,
      "%": "1",
      data3: "data3Value",
      data4: "data4Value",
      data5: "data5Value",
      data6: "data6Value",
    },
    {
      product: "John",
      profit: 23,
      "%": "1",
      data3: "data3Value",
      data4: "data4Value",
      data5: "data5Value",
      data6: "data6Value",
    },
    {
      product: "John",
      profit: 23,
      "%": "1",
      data3: "data3Value",
      data4: "data4Value",
      data5: "data5Value",
      data6: "data6Value",
    },
    {
      product: "John",
      profit: 23,
      "%": "1",
      data3: "data3Value",
      data4: "data4Value",
      data5: "data5Value",
      data6: "data6Value",
    },
    {
      product: "John",
      profit: 23,
      "%": "1",
      data3: "data3Value",
      data4: "data4Value",
      data5: "data5Value",
      data6: "data6Value",
    },
    {
      product: "John",
      profit: 23,
      "%": "1",
      data3: "data3Value",
      data4: "data4Value",
      data5: "data5Value",
      data6: "data6Value",
    },
    {
      product: "John",
      profit: 23,
      "%": "1",
      data3: "data3Value",
      data4: "data4Value",
      data5: "data5Value",
      data6: "data6Value",
    },
    {
      product: "John",
      profit: 23,
      "%": "1",
      data3: "data3Value",
      data4: "data4Value",
      data5: "data5Value",
      data6: "data6Value",
    },
    {
      product: "John",
      profit: 23,
      "%": "1",
      data3: "data3Value",
      data4: "data4Value",
      data5: "data5Value",
      data6: "data6Value",
    },
    {
      product: "John",
      profit: 23,
      "%": "1",
      data3: "data3Value",
      data4: "data4Value",
      data5: "data5Value",
      data6: "data6Value",
    },
    {
      product: "John",
      profit: 23,
      "%": "1",
      data3: "data3Value",
      data4: "data4Value",
      data5: "data5Value",
      data6: "data6Value",
    },
    {
      product: "John",
      profit: 23,
      "%": "1",
      data3: "data3Value",
      data4: "data4Value",
      data5: "data5Value",
      data6: "data6Value",
    },
    {
      product: "John",
      profit: 23,
      "%": "1",
      data3: "data3Value",
      data4: "data4Value",
      data5: "data5Value",
      data6: "data6Value",
    },
    {
      product: "John",
      profit: 23,
      "%": "1",
      data3: "data3Value",
      data4: "data4Value",
      data5: "data5Value",
      data6: "data6Value",
    },
    {
      product: "John",
      profit: 23,
      "%": "1",
      data3: "data3Value",
      data4: "data4Value",
      data5: "data5Value",
      data6: "data6Value",
    },
    {
      product: "John",
      profit: 23,
      "%": "1",
      data3: "data3Value",
      data4: "data4Value",
      data5: "data5Value",
      data6: "data6Value",
    },
    {
      product: "John",
      profit: 23,
      "%": "1",
      data3: "data3Value",
      data4: "data4Value",
      data5: "data5Value",
      data6: "data6Value",
    },
    {
      product: "John",
      profit: 23,
      "%": "1",
      data3: "data3Value",
      data4: "data4Value",
      data5: "data5Value",
      data6: "data6Value",
    },
    {
      product: "John",
      profit: 23,
      "%": "1",
      data3: "data3Value",
      data4: "data4Value",
      data5: "data5Value",
      data6: "data6Value",
    },
    {
      product: "John",
      profit: 23,
      "%": "1",
      data3: "data3Value",
      data4: "data4Value",
      data5: "data5Value",
      data6: "data6Value",
    },
    {
      product: "John",
      profit: 23,
      "%": "1",
      data3: "data3Value",
      data4: "data4Value",
      data5: "data5Value",
      data6: "data6Value",
    },
    {
      product: "John",
      profit: 23,
      "%": "1",
      data3: "data3Value",
      data4: "data4Value",
      data5: "data5Value",
      data6: "data6Value",
    },
    {
      product: "John",
      profit: 23,
      "%": "1",
      data3: "data3Value",
      data4: "data4Value",
      data5: "data5Value",
      data6: "data6Value",
    },
    {
      product: "John",
      profit: 23,
      "%": "1",
      data3: "data3Value",
      data4: "data4Value",
      data5: "data5Value",
      data6: "data6Value",
    },
    {
      product: "John",
      profit: 23,
      "%": "1",
      data3: "data3Value",
      data4: "data4Value",
      data5: "data5Value",
      data6: "data6Value",
    },
    {
      product: "John",
      profit: 23,
      "%": "1",
      data3: "data3Value",
      data4: "data4Value",
      data5: "data5Value",
      data6: "data6Value",
    },
    {
      product: "John",
      profit: 23,
      "%": "1",
      data3: "data3Value",
      data4: "data4Value",
      data5: "data5Value",
      data6: "data6Value",
    },
    {
      product: "John",
      profit: 23,
      "%": "1",
      data3: "data3Value",
      data4: "data4Value",
      data5: "data5Value",
      data6: "data6Value",
    },
    {
      product: "John",
      profit: 23,
      "%": "1",
      data3: "data3Value",
      data4: "data4Value",
      data5: "data5Value",
      data6: "data6Value",
    },
    {
      product: "John",
      profit: 23,
      "%": "1",
      data3: "data3Value",
      data4: "data4Value",
      data5: "data5Value",
      data6: "data6Value",
    },
    {
      product: "John",
      profit: 23,
      "%": "1",
      data3: "data3Value",
      data4: "data4Value",
      data5: "data5Value",
      data6: "data6Value",
    },
    {
      product: "John",
      profit: 23,
      "%": "1",
      data3: "data3Value",
      data4: "data4Value",
      data5: "data5Value",
      data6: "data6Value",
    },
  ]);

  const [shipcitycloneData, setTcbr] = useState([
    {
      product: "John",
      profit: 23,
      "%": "1",
      data3: "data3Value",
      data4: "data4Value",
      data5: "data5Value",
      data6: "data6Value",
    },
    {
      product: "John",
      profit: 23,
      "%": "1",
      data3: "data3Value",
      data4: "data4Value",
      data5: "data5Value",
      data6: "data6Value",
    },
    {
      product: "John",
      profit: 23,
      "%": "1",
      data3: "data3Value",
      data4: "data4Value",
      data5: "data5Value",
      data6: "data6Value",
    },
    {
      product: "John",
      profit: 23,
      "%": "1",
      data3: "data3Value",
      data4: "data4Value",
      data5: "data5Value",
      data6: "data6Value",
    },
    {
      product: "John",
      profit: 23,
      "%": "1",
      data3: "data3Value",
      data4: "data4Value",
      data5: "data5Value",
      data6: "data6Value",
    },
    {
      product: "John",
      profit: 23,
      "%": "1",
      data3: "data3Value",
      data4: "data4Value",
      data5: "data5Value",
      data6: "data6Value",
    },

    {
      product: "John",
      profit: 23,
      "%": "1",
      data3: "data3Value",
      data4: "data4Value",
      data5: "data5Value",
      data6: "data6Value",
    },
    {
      product: "John",
      profit: 23,
      "%": "1",
      data3: "data3Value",
      data4: "data4Value",
      data5: "data5Value",
      data6: "data6Value",
    },
    {
      product: "John",
      profit: 23,
      "%": "1",
      data3: "data3Value",
      data4: "data4Value",
      data5: "data5Value",
      data6: "data6Value",
    },
    {
      product: "John",
      profit: 23,
      "%": "1",
      data3: "data3Value",
      data4: "data4Value",
      data5: "data5Value",
      data6: "data6Value",
    },
    {
      product: "John",
      profit: 23,
      "%": "1",
      data3: "data3Value",
      data4: "data4Value",
      data5: "data5Value",
      data6: "data6Value",
    },
    {
      product: "John",
      profit: 23,
      "%": "1",
      data3: "data3Value",
      data4: "data4Value",
      data5: "data5Value",
      data6: "data6Value",
    },

    {
      product: "John",
      profit: 23,
      "%": "1",
      data3: "data3Value",
      data4: "data4Value",
      data5: "data5Value",
      data6: "data6Value",
    },
    {
      product: "John",
      profit: 23,
      "%": "1",
      data3: "data3Value",
      data4: "data4Value",
      data5: "data5Value",
      data6: "data6Value",
    },
    {
      product: "John",
      profit: 23,
      "%": "1",
      data3: "data3Value",
      data4: "data4Value",
      data5: "data5Value",
      data6: "data6Value",
    },
    {
      product: "John",
      profit: 23,
      "%": "1",
      data3: "data3Value",
      data4: "data4Value",
      data5: "data5Value",
      data6: "data6Value",
    },
    {
      product: "John",
      profit: 23,
      "%": "1",
      data3: "data3Value",
      data4: "data4Value",
      data5: "data5Value",
      data6: "data6Value",
    },
    {
      product: "John",
      profit: 23,
      "%": "1",
      data3: "data3Value",
      data4: "data4Value",
      data5: "data5Value",
      data6: "data6Value",
    },

    {
      product: "John",
      profit: 23,
      "%": "1",
      data3: "data3Value",
      data4: "data4Value",
      data5: "data5Value",
      data6: "data6Value",
    },
    {
      product: "John",
      profit: 23,
      "%": "1",
      data3: "data3Value",
      data4: "data4Value",
      data5: "data5Value",
      data6: "data6Value",
    },
    {
      product: "John",
      profit: 23,
      "%": "1",
      data3: "data3Value",
      data4: "data4Value",
      data5: "data5Value",
      data6: "data6Value",
    },
    {
      product: "John",
      profit: 23,
      "%": "1",
      data3: "data3Value",
      data4: "data4Value",
      data5: "data5Value",
      data6: "data6Value",
    },
    {
      product: "John",
      profit: 23,
      "%": "1",
      data3: "data3Value",
      data4: "data4Value",
      data5: "data5Value",
      data6: "data6Value",
    },
    {
      product: "John",
      profit: 23,
      "%": "1",
      data3: "data3Value",
      data4: "data4Value",
      data5: "data5Value",
      data6: "data6Value",
    },

    {
      product: "John",
      profit: 23,
      "%": "1",
      data3: "data3Value",
      data4: "data4Value",
      data5: "data5Value",
      data6: "data6Value",
    },
    {
      product: "John",
      profit: 23,
      "%": "1",
      data3: "data3Value",
      data4: "data4Value",
      data5: "data5Value",
      data6: "data6Value",
    },
    {
      product: "John",
      profit: 23,
      "%": "1",
      data3: "data3Value",
      data4: "data4Value",
      data5: "data5Value",
      data6: "data6Value",
    },
    {
      product: "John",
      profit: 23,
      "%": "1",
      data3: "data3Value",
      data4: "data4Value",
      data5: "data5Value",
      data6: "data6Value",
    },
    {
      product: "John",
      profit: 23,
      "%": "1",
      data3: "data3Value",
      data4: "data4Value",
      data5: "data5Value",
      data6: "data6Value",
    },
    {
      product: "John",
      profit: 23,
      "%": "1",
      data3: "data3Value",
      data4: "data4Value",
      data5: "data5Value",
      data6: "data6Value",
    },

    {
      product: "John",
      profit: 23,
      "%": "1",
      data3: "data3Value",
      data4: "data4Value",
      data5: "data5Value",
      data6: "data6Value",
    },
    {
      product: "John",
      profit: 23,
      "%": "1",
      data3: "data3Value",
      data4: "data4Value",
      data5: "data5Value",
      data6: "data6Value",
    },
    {
      product: "John",
      profit: 23,
      "%": "1",
      data3: "data3Value",
      data4: "data4Value",
      data5: "data5Value",
      data6: "data6Value",
    },
    {
      product: "John",
      profit: 23,
      "%": "1",
      data3: "data3Value",
      data4: "data4Value",
      data5: "data5Value",
      data6: "data6Value",
    },
    {
      product: "John",
      profit: 23,
      "%": "1",
      data3: "data3Value",
      data4: "data4Value",
      data5: "data5Value",
      data6: "data6Value",
    },
    {
      product: "John",
      profit: 23,
      "%": "1",
      data3: "data3Value",
      data4: "data4Value",
      data5: "data5Value",
      data6: "data6Value",
    },
    {
      product: "John",
      profit: 23,
      "%": "1",
      data3: "data3Value",
      data4: "data4Value",
      data5: "data5Value",
      data6: "data6Value",
    },
    {
      product: "John",
      profit: 23,
      "%": "1",
      data3: "data3Value",
      data4: "data4Value",
      data5: "data5Value",
      data6: "data6Value",
    },
    {
      product: "John",
      profit: 23,
      "%": "1",
      data3: "data3Value",
      data4: "data4Value",
      data5: "data5Value",
      data6: "data6Value",
    },
    {
      product: "John",
      profit: 23,
      "%": "1",
      data3: "data3Value",
      data4: "data4Value",
      data5: "data5Value",
      data6: "data6Value",
    },
    {
      product: "John",
      profit: 23,
      "%": "1",
      data3: "data3Value",
      data4: "data4Value",
      data5: "data5Value",
      data6: "data6Value",
    },
    {
      product: "John",
      profit: 23,
      "%": "1",
      data3: "data3Value",
      data4: "data4Value",
      data5: "data5Value",
      data6: "data6Value",
    },
    {
      product: "John",
      profit: 23,
      "%": "1",
      data3: "data3Value",
      data4: "data4Value",
      data5: "data5Value",
      data6: "data6Value",
    },
    {
      product: "John",
      profit: 23,
      "%": "1",
      data3: "data3Value",
      data4: "data4Value",
      data5: "data5Value",
      data6: "data6Value",
    },
    {
      product: "John",
      profit: 23,
      "%": "1",
      data3: "data3Value",
      data4: "data4Value",
      data5: "data5Value",
      data6: "data6Value",
    },
    {
      product: "John",
      profit: 23,
      "%": "1",
      data3: "data3Value",
      data4: "data4Value",
      data5: "data5Value",
      data6: "data6Value",
    },
    {
      product: "John",
      profit: 23,
      "%": "1",
      data3: "data3Value",
      data4: "data4Value",
      data5: "data5Value",
      data6: "data6Value",
    },
    {
      product: "John",
      profit: 23,
      "%": "1",
      data3: "data3Value",
      data4: "data4Value",
      data5: "data5Value",
      data6: "data6Value",
    },
  ]);

  const [billstatecloneData, setTcbu] = useState([
    {
      product: "John",
      profit: 23,
      "%": "1",
      data3: "data3Value",
      data4: "data4Value",
      data5: "data5Value",
      data6: "data6Value",
    },
    {
      product: "John",
      profit: 23,
      "%": "1",
      data3: "data3Value",
      data4: "data4Value",
      data5: "data5Value",
      data6: "data6Value",
    },
    {
      product: "John",
      profit: 23,
      "%": "1",
      data3: "data3Value",
      data4: "data4Value",
      data5: "data5Value",
      data6: "data6Value",
    },
    {
      product: "John",
      profit: 23,
      "%": "1",
      data3: "data3Value",
      data4: "data4Value",
      data5: "data5Value",
      data6: "data6Value",
    },
    {
      product: "John",
      profit: 23,
      "%": "1",
      data3: "data3Value",
      data4: "data4Value",
      data5: "data5Value",
      data6: "data6Value",
    },
    {
      product: "John",
      profit: 23,
      "%": "1",
      data3: "data3Value",
      data4: "data4Value",
      data5: "data5Value",
      data6: "data6Value",
    },
    {
      product: "John",
      profit: 23,
      "%": "1",
      data3: "data3Value",
      data4: "data4Value",
      data5: "data5Value",
      data6: "data6Value",
    },
    {
      product: "John",
      profit: 23,
      "%": "1",
      data3: "data3Value",
      data4: "data4Value",
      data5: "data5Value",
      data6: "data6Value",
    },
    {
      product: "John",
      profit: 23,
      "%": "1",
      data3: "data3Value",
      data4: "data4Value",
      data5: "data5Value",
      data6: "data6Value",
    },
    {
      product: "John",
      profit: 23,
      "%": "1",
      data3: "data3Value",
      data4: "data4Value",
      data5: "data5Value",
      data6: "data6Value",
    },
    {
      product: "John",
      profit: 23,
      "%": "1",
      data3: "data3Value",
      data4: "data4Value",
      data5: "data5Value",
      data6: "data6Value",
    },
    {
      product: "John",
      profit: 23,
      "%": "1",
      data3: "data3Value",
      data4: "data4Value",
      data5: "data5Value",
      data6: "data6Value",
    },
    {
      product: "John",
      profit: 23,
      "%": "1",
      data3: "data3Value",
      data4: "data4Value",
      data5: "data5Value",
      data6: "data6Value",
    },
    {
      product: "John",
      profit: 23,
      "%": "1",
      data3: "data3Value",
      data4: "data4Value",
      data5: "data5Value",
      data6: "data6Value",
    },
    {
      product: "John",
      profit: 23,
      "%": "1",
      data3: "data3Value",
      data4: "data4Value",
      data5: "data5Value",
      data6: "data6Value",
    },
    {
      product: "John",
      profit: 23,
      "%": "1",
      data3: "data3Value",
      data4: "data4Value",
      data5: "data5Value",
      data6: "data6Value",
    },
    {
      product: "John",
      profit: 23,
      "%": "1",
      data3: "data3Value",
      data4: "data4Value",
      data5: "data5Value",
      data6: "data6Value",
    },
    {
      product: "John",
      profit: 23,
      "%": "1",
      data3: "data3Value",
      data4: "data4Value",
      data5: "data5Value",
      data6: "data6Value",
    },
    {
      product: "John",
      profit: 23,
      "%": "1",
      data3: "data3Value",
      data4: "data4Value",
      data5: "data5Value",
      data6: "data6Value",
    },
    {
      product: "John",
      profit: 23,
      "%": "1",
      data3: "data3Value",
      data4: "data4Value",
      data5: "data5Value",
      data6: "data6Value",
    },
    {
      product: "John",
      profit: 23,
      "%": "1",
      data3: "data3Value",
      data4: "data4Value",
      data5: "data5Value",
      data6: "data6Value",
    },
    {
      product: "John",
      profit: 23,
      "%": "1",
      data3: "data3Value",
      data4: "data4Value",
      data5: "data5Value",
      data6: "data6Value",
    },
    {
      product: "John",
      profit: 23,
      "%": "1",
      data3: "data3Value",
      data4: "data4Value",
      data5: "data5Value",
      data6: "data6Value",
    },
    {
      product: "John",
      profit: 23,
      "%": "1",
      data3: "data3Value",
      data4: "data4Value",
      data5: "data5Value",
      data6: "data6Value",
    },
    {
      product: "John",
      profit: 23,
      "%": "1",
      data3: "data3Value",
      data4: "data4Value",
      data5: "data5Value",
      data6: "data6Value",
    },
    {
      product: "John",
      profit: 23,
      "%": "1",
      data3: "data3Value",
      data4: "data4Value",
      data5: "data5Value",
      data6: "data6Value",
    },
    {
      product: "John",
      profit: 23,
      "%": "1",
      data3: "data3Value",
      data4: "data4Value",
      data5: "data5Value",
      data6: "data6Value",
    },
    {
      product: "John",
      profit: 23,
      "%": "1",
      data3: "data3Value",
      data4: "data4Value",
      data5: "data5Value",
      data6: "data6Value",
    },
    {
      product: "John",
      profit: 23,
      "%": "1",
      data3: "data3Value",
      data4: "data4Value",
      data5: "data5Value",
      data6: "data6Value",
    },
    {
      product: "John",
      profit: 23,
      "%": "1",
      data3: "data3Value",
      data4: "data4Value",
      data5: "data5Value",
      data6: "data6Value",
    },
    {
      product: "John",
      profit: 23,
      "%": "1",
      data3: "data3Value",
      data4: "data4Value",
      data5: "data5Value",
      data6: "data6Value",
    },
    {
      product: "John",
      profit: 23,
      "%": "1",
      data3: "data3Value",
      data4: "data4Value",
      data5: "data5Value",
      data6: "data6Value",
    },
    {
      product: "John",
      profit: 23,
      "%": "1",
      data3: "data3Value",
      data4: "data4Value",
      data5: "data5Value",
      data6: "data6Value",
    },
    {
      product: "John",
      profit: 23,
      "%": "1",
      data3: "data3Value",
      data4: "data4Value",
      data5: "data5Value",
      data6: "data6Value",
    },
    {
      product: "John",
      profit: 23,
      "%": "1",
      data3: "data3Value",
      data4: "data4Value",
      data5: "data5Value",
      data6: "data6Value",
    },
    {
      product: "John",
      profit: 23,
      "%": "1",
      data3: "data3Value",
      data4: "data4Value",
      data5: "data5Value",
      data6: "data6Value",
    },
    {
      product: "John",
      profit: 23,
      "%": "1",
      data3: "data3Value",
      data4: "data4Value",
      data5: "data5Value",
      data6: "data6Value",
    },
    {
      product: "John",
      profit: 23,
      "%": "1",
      data3: "data3Value",
      data4: "data4Value",
      data5: "data5Value",
      data6: "data6Value",
    },
    {
      product: "John",
      profit: 23,
      "%": "1",
      data3: "data3Value",
      data4: "data4Value",
      data5: "data5Value",
      data6: "data6Value",
    },
    {
      product: "John",
      profit: 23,
      "%": "1",
      data3: "data3Value",
      data4: "data4Value",
      data5: "data5Value",
      data6: "data6Value",
    },
    {
      product: "John",
      profit: 23,
      "%": "1",
      data3: "data3Value",
      data4: "data4Value",
      data5: "data5Value",
      data6: "data6Value",
    },
    {
      product: "John",
      profit: 23,
      "%": "1",
      data3: "data3Value",
      data4: "data4Value",
      data5: "data5Value",
      data6: "data6Value",
    },
    {
      product: "John",
      profit: 23,
      "%": "1",
      data3: "data3Value",
      data4: "data4Value",
      data5: "data5Value",
      data6: "data6Value",
    },
    {
      product: "John",
      profit: 23,
      "%": "1",
      data3: "data3Value",
      data4: "data4Value",
      data5: "data5Value",
      data6: "data6Value",
    },
    {
      product: "John",
      profit: 23,
      "%": "1",
      data3: "data3Value",
      data4: "data4Value",
      data5: "data5Value",
      data6: "data6Value",
    },
    {
      product: "John",
      profit: 23,
      "%": "1",
      data3: "data3Value",
      data4: "data4Value",
      data5: "data5Value",
      data6: "data6Value",
    },
    {
      product: "John",
      profit: 23,
      "%": "1",
      data3: "data3Value",
      data4: "data4Value",
      data5: "data5Value",
      data6: "data6Value",
    },
    {
      product: "John",
      profit: 23,
      "%": "1",
      data3: "data3Value",
      data4: "data4Value",
      data5: "data5Value",
      data6: "data6Value",
    },
  ]);

  const [shipstatecloneData, setTcbp] = useState([
    {
      product: "John",
      profit: 23,
      "%": "1",
      data3: "data3Value",
      data4: "data4Value",
      data5: "data5Value",
      data6: "data6Value",
    },
    {
      product: "John",
      profit: 23,
      "%": "1",
      data3: "data3Value",
      data4: "data4Value",
      data5: "data5Value",
      data6: "data6Value",
    },
    {
      product: "John",
      profit: 23,
      "%": "1",
      data3: "data3Value",
      data4: "data4Value",
      data5: "data5Value",
      data6: "data6Value",
    },
    {
      product: "John",
      profit: 23,
      "%": "1",
      data3: "data3Value",
      data4: "data4Value",
      data5: "data5Value",
      data6: "data6Value",
    },
    {
      product: "John",
      profit: 23,
      "%": "1",
      data3: "data3Value",
      data4: "data4Value",
      data5: "data5Value",
      data6: "data6Value",
    },
    {
      product: "John",
      profit: 23,
      "%": "1",
      data3: "data3Value",
      data4: "data4Value",
      data5: "data5Value",
      data6: "data6Value",
    },
    {
      product: "John",
      profit: 23,
      "%": "1",
      data3: "data3Value",
      data4: "data4Value",
      data5: "data5Value",
      data6: "data6Value",
    },
    {
      product: "John",
      profit: 23,
      "%": "1",
      data3: "data3Value",
      data4: "data4Value",
      data5: "data5Value",
      data6: "data6Value",
    },
    {
      product: "John",
      profit: 23,
      "%": "1",
      data3: "data3Value",
      data4: "data4Value",
      data5: "data5Value",
      data6: "data6Value",
    },
    {
      product: "John",
      profit: 23,
      "%": "1",
      data3: "data3Value",
      data4: "data4Value",
      data5: "data5Value",
      data6: "data6Value",
    },
    {
      product: "John",
      profit: 23,
      "%": "1",
      data3: "data3Value",
      data4: "data4Value",
      data5: "data5Value",
      data6: "data6Value",
    },
    {
      product: "John",
      profit: 23,
      "%": "1",
      data3: "data3Value",
      data4: "data4Value",
      data5: "data5Value",
      data6: "data6Value",
    },
    {
      product: "John",
      profit: 23,
      "%": "1",
      data3: "data3Value",
      data4: "data4Value",
      data5: "data5Value",
      data6: "data6Value",
    },
    {
      product: "John",
      profit: 23,
      "%": "1",
      data3: "data3Value",
      data4: "data4Value",
      data5: "data5Value",
      data6: "data6Value",
    },
    {
      product: "John",
      profit: 23,
      "%": "1",
      data3: "data3Value",
      data4: "data4Value",
      data5: "data5Value",
      data6: "data6Value",
    },
    {
      product: "John",
      profit: 23,
      "%": "1",
      data3: "data3Value",
      data4: "data4Value",
      data5: "data5Value",
      data6: "data6Value",
    },
    {
      product: "John",
      profit: 23,
      "%": "1",
      data3: "data3Value",
      data4: "data4Value",
      data5: "data5Value",
      data6: "data6Value",
    },
    {
      product: "John",
      profit: 23,
      "%": "1",
      data3: "data3Value",
      data4: "data4Value",
      data5: "data5Value",
      data6: "data6Value",
    },
    {
      product: "John",
      profit: 23,
      "%": "1",
      data3: "data3Value",
      data4: "data4Value",
      data5: "data5Value",
      data6: "data6Value",
    },
    {
      product: "John",
      profit: 23,
      "%": "1",
      data3: "data3Value",
      data4: "data4Value",
      data5: "data5Value",
      data6: "data6Value",
    },
    {
      product: "John",
      profit: 23,
      "%": "1",
      data3: "data3Value",
      data4: "data4Value",
      data5: "data5Value",
      data6: "data6Value",
    },
    {
      product: "John",
      profit: 23,
      "%": "1",
      data3: "data3Value",
      data4: "data4Value",
      data5: "data5Value",
      data6: "data6Value",
    },
    {
      product: "John",
      profit: 23,
      "%": "1",
      data3: "data3Value",
      data4: "data4Value",
      data5: "data5Value",
      data6: "data6Value",
    },
    {
      product: "John",
      profit: 23,
      "%": "1",
      data3: "data3Value",
      data4: "data4Value",
      data5: "data5Value",
      data6: "data6Value",
    },
    {
      product: "John",
      profit: 23,
      "%": "1",
      data3: "data3Value",
      data4: "data4Value",
      data5: "data5Value",
      data6: "data6Value",
    },
    {
      product: "John",
      profit: 23,
      "%": "1",
      data3: "data3Value",
      data4: "data4Value",
      data5: "data5Value",
      data6: "data6Value",
    },
    {
      product: "John",
      profit: 23,
      "%": "1",
      data3: "data3Value",
      data4: "data4Value",
      data5: "data5Value",
      data6: "data6Value",
    },
    {
      product: "John",
      profit: 23,
      "%": "1",
      data3: "data3Value",
      data4: "data4Value",
      data5: "data5Value",
      data6: "data6Value",
    },
    {
      product: "John",
      profit: 23,
      "%": "1",
      data3: "data3Value",
      data4: "data4Value",
      data5: "data5Value",
      data6: "data6Value",
    },
    {
      product: "John",
      profit: 23,
      "%": "1",
      data3: "data3Value",
      data4: "data4Value",
      data5: "data5Value",
      data6: "data6Value",
    },
    {
      product: "John",
      profit: 23,
      "%": "1",
      data3: "data3Value",
      data4: "data4Value",
      data5: "data5Value",
      data6: "data6Value",
    },
    {
      product: "John",
      profit: 23,
      "%": "1",
      data3: "data3Value",
      data4: "data4Value",
      data5: "data5Value",
      data6: "data6Value",
    },
    {
      product: "John",
      profit: 23,
      "%": "1",
      data3: "data3Value",
      data4: "data4Value",
      data5: "data5Value",
      data6: "data6Value",
    },
    {
      product: "John",
      profit: 23,
      "%": "1",
      data3: "data3Value",
      data4: "data4Value",
      data5: "data5Value",
      data6: "data6Value",
    },
    {
      product: "John",
      profit: 23,
      "%": "1",
      data3: "data3Value",
      data4: "data4Value",
      data5: "data5Value",
      data6: "data6Value",
    },
    {
      product: "John",
      profit: 23,
      "%": "1",
      data3: "data3Value",
      data4: "data4Value",
      data5: "data5Value",
      data6: "data6Value",
    },
    {
      product: "John",
      profit: 23,
      "%": "1",
      data3: "data3Value",
      data4: "data4Value",
      data5: "data5Value",
      data6: "data6Value",
    },
    {
      product: "John",
      profit: 23,
      "%": "1",
      data3: "data3Value",
      data4: "data4Value",
      data5: "data5Value",
      data6: "data6Value",
    },
    {
      product: "John",
      profit: 23,
      "%": "1",
      data3: "data3Value",
      data4: "data4Value",
      data5: "data5Value",
      data6: "data6Value",
    },
    {
      product: "John",
      profit: 23,
      "%": "1",
      data3: "data3Value",
      data4: "data4Value",
      data5: "data5Value",
      data6: "data6Value",
    },
    {
      product: "John",
      profit: 23,
      "%": "1",
      data3: "data3Value",
      data4: "data4Value",
      data5: "data5Value",
      data6: "data6Value",
    },
    {
      product: "John",
      profit: 23,
      "%": "1",
      data3: "data3Value",
      data4: "data4Value",
      data5: "data5Value",
      data6: "data6Value",
    },
    {
      product: "John",
      profit: 23,
      "%": "1",
      data3: "data3Value",
      data4: "data4Value",
      data5: "data5Value",
      data6: "data6Value",
    },
    {
      product: "John",
      profit: 23,
      "%": "1",
      data3: "data3Value",
      data4: "data4Value",
      data5: "data5Value",
      data6: "data6Value",
    },
    {
      product: "John",
      profit: 23,
      "%": "1",
      data3: "data3Value",
      data4: "data4Value",
      data5: "data5Value",
      data6: "data6Value",
    },
    {
      product: "John",
      profit: 23,
      "%": "1",
      data3: "data3Value",
      data4: "data4Value",
      data5: "data5Value",
      data6: "data6Value",
    },
    {
      product: "John",
      profit: 23,
      "%": "1",
      data3: "data3Value",
      data4: "data4Value",
      data5: "data5Value",
      data6: "data6Value",
    },
    {
      product: "John",
      profit: 23,
      "%": "1",
      data3: "data3Value",
      data4: "data4Value",
      data5: "data5Value",
      data6: "data6Value",
    },
  ]);

  return (
    <>
      {/* Billing And Shipping City,State Customer Table */}
      <Grid item xs={12}>
        <Card className="dash-card">
          <ThemeProvider theme={defaultMaterialTheme}>
            {
              //CusLocChartTable.billcity_table &&
              <MaterialTable
                style={{ borderRadius: "14px" }}
                columns={city_columns}
                data={billcitycloneData}
                title="Billing-city"
                icons={{
                  Check: Check,
                  DetailPanel: ChevronRight,
                  Export: SaveAlt,
                  Filter: FilterList,
                  FirstPage: FirstPage,
                  LastPage: LastPage,
                  NextPage: ChevronRight,
                  PreviousPage: ChevronLeft,
                  Search: Search,
                  ResetSearch: CancelIcon,
                  Clear: CancelIcon,
                }}
                options={{
                  pageSize: 10, // make initial page size
                  emptyRowsWhenPaging: false, // To avoid of having empty rows
                  pageSizeOptions: [10, 15, 25, 40, 50],
                  search: true,
                  searchFieldAlignment: "right",
                  exportButton: true,
                  exportAllData: true,
                  cellStyle: {
                    padding: "4px",
                    lineHeight: 2,
                    fontFamily: "Circular-Loom",
                    textAlign: "center",
                    borderBottom: "2px solid rgb(246, 224, 224)",
                  },
                }}
                localization={{
                  pagination: {
                    labelRowsPerPage: "",
                    showFirstLastPageButtons: false,
                  },
                }}
              />
            }
          </ThemeProvider>
        </Card>
      </Grid>

      <Grid item xs={12}>
        <Card className="dash-card">
          <ThemeProvider theme={defaultMaterialTheme}>
            {
              //CusLocChartTable.shipcity_table &&
              <MaterialTable
                style={{ borderRadius: "14px" }}
                columns={city_columns}
                data={shipcitycloneData}
                title="Shipping-city"
                icons={{
                  Check: Check,
                  DetailPanel: ChevronRight,
                  Export: SaveAlt,
                  Filter: FilterList,
                  FirstPage: FirstPage,
                  LastPage: LastPage,
                  NextPage: ChevronRight,
                  PreviousPage: ChevronLeft,
                  Search: Search,
                  ResetSearch: CancelIcon,
                  Clear: CancelIcon,
                }}
                options={{
                  pageSize: 10, // make initial page size
                  emptyRowsWhenPaging: false, // To avoid of having empty rows
                  pageSizeOptions: [10, 15, 25, 40, 50],
                  search: true,
                  searchFieldAlignment: "right",
                  exportButton: true,
                  exportAllData: true,
                  cellStyle: {
                    padding: "4px",
                    lineHeight: 2,
                    fontFamily: "Circular-Loom",
                    textAlign: "center",
                    borderBottom: "2px solid rgb(246, 224, 224)",
                  },
                }}
                localization={{
                  pagination: {
                    labelRowsPerPage: "",
                    showFirstLastPageButtons: false,
                  },
                }}
              />
            }
          </ThemeProvider>
        </Card>
      </Grid>

      <Grid item xs={12}>
        <Card className="dash-card">
          <ThemeProvider theme={defaultMaterialTheme}>
            {
              //CusLocChartTable.billstate_table &&
              <MaterialTable
                style={{ borderRadius: "14px" }}
                columns={state_columns}
                data={billstatecloneData}
                title="Billing-state"
                icons={{
                  Check: Check,
                  DetailPanel: ChevronRight,
                  Export: SaveAlt,
                  Filter: FilterList,
                  FirstPage: FirstPage,
                  LastPage: LastPage,
                  NextPage: ChevronRight,
                  PreviousPage: ChevronLeft,
                  Search: Search,
                  ResetSearch: CancelIcon,
                  Clear: CancelIcon,
                }}
                options={{
                  pageSize: 10, // make initial page size
                  emptyRowsWhenPaging: false, // To avoid of having empty rows
                  pageSizeOptions: [10, 15, 25, 40, 50],
                  search: true,
                  searchFieldAlignment: "right",
                  exportButton: true,
                  exportAllData: true,
                  cellStyle: {
                    padding: "4px",
                    lineHeight: 2,
                    fontFamily: "Circular-Loom",
                    textAlign: "center",
                    borderBottom: "2px solid rgb(246, 224, 224)",
                  },
                }}
                localization={{
                  pagination: {
                    labelRowsPerPage: "",
                    showFirstLastPageButtons: false,
                  },
                }}
              />
            }
          </ThemeProvider>
        </Card>
      </Grid>

      <Grid item xs={12}>
        <Card className="dash-card">
          <ThemeProvider theme={defaultMaterialTheme}>
            {
              // CusLocChartTable.shipstate_table &&
              <MaterialTable
                style={{ borderRadius: "14px" }}
                columns={state_columns}
                data={shipstatecloneData}
                title="Shipping-state"
                icons={{
                  Check: Check,
                  DetailPanel: ChevronRight,
                  Export: SaveAlt,
                  Filter: FilterList,
                  FirstPage: FirstPage,
                  LastPage: LastPage,
                  NextPage: ChevronRight,
                  PreviousPage: ChevronLeft,
                  Search: Search,
                  ResetSearch: CancelIcon,
                  Clear: CancelIcon,
                }}
                options={{
                  pageSize: 10, // make initial page size
                  emptyRowsWhenPaging: false, // To avoid of having empty rows
                  pageSizeOptions: [10, 15, 25, 40, 50],
                  search: true,
                  searchFieldAlignment: "right",
                  exportButton: true,
                  exportAllData: true,
                  cellStyle: {
                    padding: "4px",
                    lineHeight: 2,
                    fontFamily: "Circular-Loom",
                    textAlign: "center",
                    borderBottom: "2px solid rgb(246, 224, 224)",
                  },
                }}
                localization={{
                  pagination: {
                    labelRowsPerPage: "",
                    showFirstLastPageButtons: false,
                  },
                }}
              />
            }
          </ThemeProvider>
        </Card>
      </Grid>
    </>
  );
}

export default CusCityStateTable;
