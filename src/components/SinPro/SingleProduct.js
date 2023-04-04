import React, { useEffect, useState } from "react";
import axios from "axios";
import Search from "@material-ui/icons/Search";
import SaveAlt from "@material-ui/icons/SaveAlt";
import ChevronLeft from "@material-ui/icons/ChevronLeft";
import ChevronRight from "@material-ui/icons/ChevronRight";
import FirstPage from "@material-ui/icons/FirstPage";
import LastPage from "@material-ui/icons/LastPage";
import Check from "@material-ui/icons/Check";
import FilterList from "@material-ui/icons/FilterList";
import CancelIcon from "@mui/icons-material/Cancel";
import { useParams } from "react-router-dom";

import MaterialTable from "material-table";
import { ThemeProvider, createTheme } from "@mui/material";
import Grid from "@mui/material/Grid";

import { Line } from "react-chartjs-2";

import Timeline from "@mui/lab/Timeline";
//import TimelineItem from '@mui/lab/TimelineItem';
import TimelineSeparator from "@mui/lab/TimelineSeparator";
import TimelineConnector from "@mui/lab/TimelineConnector";
import TimelineContent from "@mui/lab/TimelineContent";
import TimelineDot from "@mui/lab/TimelineDot";
//import FastfoodIcon from '@mui/icons-material/Fastfood';
//import HotelIcon from '@mui/icons-material/Hotel';
import Typography from "@mui/material/Typography";

import ViewInArIcon from "@mui/icons-material/ViewInAr";

import TimelineItem, { timelineItemClasses } from "@mui/lab/TimelineItem";

import "./CustomCss.css";

function SingleProduct() {
  const defaultMaterialTheme = createTheme();
  const { chc } = useParams();

  var [name, setName] = useState("");
  var [type, setType] = useState("");
  var [curr_price, setCurr_price] = useState("");
  var [reg_price, setReg_price] = useState("");
  var [manage_stock, setManage_stock] = useState("");
  var [stock, setStock] = useState("");
  var [cost, setCost] = useState("");
  var [os, setOS] = useState("");

  var [customers, setCustomers] = useState([]);
  var [boughtwith, setBoughtwith] = useState([]);
  var [month, setAvgSalesM] = useState([]);
  var [quarter, setAvgSalesQ] = useState([]);

  var [unit, setUnitR] = useState();
  var [cus, setCusR] = useState();
  var [rev, setRevR] = useState();

  var timelinecontentstyle = {
    background: "ghostwhite",
    margin: "0px",
    fontWeight: "400",
    lineHeight: "1",
    letterSpacing: "0.00938em",
    flex: "1 1 0%",
    padding: "3px 6px 5px 9px",
    textAlign: "left",
    fontSize: "12px",
    boxShadow:
      "rgb(65 69 88 / 10%) 0px 7px 14px 0px, rgb(0 0 0 / 7%) 0px 3px 6px 0px",
    height: "35px",
    fontFamily: "system-ui",
  };

  useEffect(() => {
    const sinpro_card = async () => {
      try {
        const res = await axios.post(
          "https://server.shopex.io/products/single-product/sinpro_card.php",
          { product_chc: chc },
          { withCredentials: true }
        );
        setCustomers(res.data.customers);
        setName(res.data.name);
        setType(res.data.type);
        setCurr_price(res.data.curr_price);
        setReg_price(res.data.reg_price);
        setManage_stock(res.data.manage_stock);
        setStock(res.data.stock);
        setCost(res.data.cost);
        setOS(res.data.os);
      } catch {}
    };
    sinpro_card();

    const sinpro_cuslist = async () => {
      try {
        const res = await axios.post(
          "https://server.shopex.io/products/single-product/sinpro_cuslist.php",
          { product_chc: chc },
          { withCredentials: true }
        );
        setCustomers(res.data.customers);
      } catch {}
    };
    sinpro_cuslist();

    const sinpro_bought_with = async () => {
      try {
        const res = await axios.post(
          "https://server.shopex.io/products/single-product/sinpro_bought_with.php",
          { product_chc: chc },
          { withCredentials: true }
        );
        setBoughtwith(res.data.boughtWith);
      } catch {}
    };
    sinpro_bought_with();

    const avg_sales = async () => {
      try {
        const res = await axios.post(
          "https://server.shopex.io/products/single-product/single-product-month-quarter-avg-sales.php",
          { product_chc: chc },
          { withCredentials: true }
        );
        setAvgSalesM(res.data.month);
        setAvgSalesQ(res.data.quarter);
      } catch {}
    };
    avg_sales();

    const retention = async () => {
      try {
        const res = await axios.post(
          "https://server.shopex.io/products/single-product/sinpro_retention.php",
          { product_chc: chc },
          { withCredentials: true }
        );
        setUnitR(res.data.unit_retable);
        setRevR(res.data.rev_retable);
        setCusR(res.data.cus_retable);
      } catch {}
    };
    retention();
  }, [chc]);

  var customer_columns = [
    {
      title: "Customer",
      render: (row) => (
        <div
          style={{
            background: "mintcream",
            fontFamily: "system-ui",
            fontSize: "16px",
            textAlign: "left",
          }}
        >
          <a href={"/Customers/profile/" + row.customer_chc}>
            {" "}
            {row.customer_name}
          </a>
        </div>
      ),
    },
    {
      title: "Order",
      render: (row) => (
        <div style={{ background: "whitesmoke" }}> {row.order} </div>
      ),
    },
    {
      title: "Unit",
      render: (row) => (
        <div style={{ background: "ghostwhite" }}> {row.unit} </div>
      ),
    },
    {
      title: "Amount",
      render: (row) => (
        <div style={{ background: "whitesmoke" }}> {row.amount} </div>
      ),
    },
    {
      title: "Amount/order",
      render: (row) => (
        <div style={{ background: "ghostwhite" }}> {row.amount_per_order} </div>
      ),
    },
    {
      title: "Unit/order",
      render: (row) => (
        <div style={{ background: "whitesmoke" }}> {row.unit_per_order} </div>
      ),
    },
    {
      title: "FirstOrder",
      render: (row) => (
        <div style={{ background: "ghostwhite" }}> {row.firstOrder} </div>
      ),
    },
    {
      title: "LastOrder",
      render: (row) => (
        <div style={{ background: "whitesmoke" }}> {row.lastOrder} </div>
      ),
    },
    {
      title: "Avg-day-gap",
      render: (row) => (
        <div style={{ background: "ghostwhite" }}> {row.avg_day_gap} </div>
      ),
    },
    {
      title: "On-sale-buy",
      render: (row) => (
        <div style={{ background: "whitesmoke" }}> {row.on_sale_buy} </div>
      ),
    },
  ];

  var fbw_columns = [
    {
      title: "Product",
      render: (row) => (
        <div
          style={{
            background: "mintcream",
            fontFamily: "system-ui",
            fontSize: "16px",
            textAlign: "left",
          }}
        >
          {row.name}{" "}
        </div>
      ),
    },
    {
      title: "Freq",
      render: (row) => (
        <div style={{ background: "whitesmoke" }}> {row.buy} </div>
      ),
    },
  ];

  var month_columns = [
    {
      title: "Month",
      fiend: "month",
      render: (row) => (
        <div
          style={{
            background: "mintcream",
            fontFamily: "system-ui",
            fontSize: "16px",
            textAlign: "left",
          }}
        >
          {row.month}{" "}
        </div>
      ),
    },
    {
      title: "Avg rev",
      fiend: "rev",
      render: (row) => (
        <div style={{ background: "whitesmoke" }}> {row.rev} </div>
      ),
    },
    {
      title: "Avg unit",
      fiend: "unit",
      render: (row) => (
        <div style={{ background: "whitesmoke" }}> {row.unit} </div>
      ),
    },
  ];

  var quarter_columns = [
    {
      title: "Quarter",
      fiend: "quarter",
      render: (row) => (
        <div
          style={{
            background: "mintcream",
            fontFamily: "system-ui",
            fontSize: "16px",
            textAlign: "left",
          }}
        >
          {row.quarter}{" "}
        </div>
      ),
    },
    {
      title: "Avg rev",
      render: (row) => (
        <div style={{ background: "whitesmoke" }}> {row.rev} </div>
      ),
    },
    {
      title: "Avg unit",
      render: (row) => (
        <div style={{ background: "whitesmoke" }}> {row.unit} </div>
      ),
    },
  ];

  return (
    <Grid container>
      <Grid
        container
        style={{
          background: "rgb(52, 195, 255)",
          width: "82%",
          margin: "1%",
          borderRadius: "50px",
          padding: "4px",
          boxShadow:
            "rgb(65 69 88 / 10%) 0px 7px 14px 0px, rgb(0 0 0 / 7%) 0px 3px 6px 0px",
        }}
      >
        <Grid style={{ display: "inline-flex" }}>
          <ViewInArIcon
            style={{
              fontSize: "60px",
              color: "white",
              padding: "6px",
              marginTop: "3px",
              marginLeft: "10%",
            }}
          />
          <div style={{}}>
            <h5 style={{ color: "white", padding: "10px", marginTop: "12px" }}>
              {name}
            </h5>
          </div>
        </Grid>
      </Grid>

      <Grid container>
        <Grid item sm={2}>
          <Timeline
            sx={{
              [`& .${timelineItemClasses.root}:before`]: {
                flex: 0,
                padding: 0,
              },
            }}
          >
            <TimelineItem style={{ minHeight: "57px" }}>
              <TimelineSeparator>
                <TimelineDot variant="outlined" color="primary" />
                <TimelineConnector />
              </TimelineSeparator>
              <TimelineContent style={timelinecontentstyle}>
                <Typography variant="p" component="span">
                  Current Price
                </Typography>
                <Typography>{curr_price}</Typography>
              </TimelineContent>
            </TimelineItem>

            <TimelineItem style={{ minHeight: "57px" }}>
              <TimelineSeparator>
                <TimelineDot variant="outlined" color="secondary" />
                <TimelineConnector />
              </TimelineSeparator>

              <TimelineContent style={timelinecontentstyle}>
                <Typography variant="p" component="span">
                  Reguler Price
                </Typography>
                <Typography>{reg_price}</Typography>
              </TimelineContent>
            </TimelineItem>

            <TimelineItem style={{ minHeight: "57px" }}>
              <TimelineSeparator>
                <TimelineDot variant="outlined" color="primary" />
                <TimelineConnector />
              </TimelineSeparator>
              <TimelineContent style={timelinecontentstyle}>
                <Typography variant="p" component="span">
                  Manage Stock
                </Typography>
                <Typography>{manage_stock}</Typography>
              </TimelineContent>
            </TimelineItem>

            <TimelineItem style={{ minHeight: "57px" }}>
              <TimelineSeparator>
                <TimelineDot variant="outlined" color="secondary" />
                <TimelineConnector />
              </TimelineSeparator>
              <TimelineContent style={timelinecontentstyle}>
                <Typography variant="p" component="span">
                  Stock
                </Typography>
                <Typography>{stock}</Typography>
              </TimelineContent>
            </TimelineItem>

            <TimelineItem style={{ minHeight: "57px" }}>
              <TimelineSeparator>
                <TimelineDot variant="outlined" color="primary" />
                <TimelineConnector />
              </TimelineSeparator>
              <TimelineContent style={timelinecontentstyle}>
                <Typography variant="p" component="span">
                  Cost
                </Typography>
                <Typography>{cost}</Typography>
              </TimelineContent>
            </TimelineItem>

            <TimelineItem style={{ minHeight: "57px" }}>
              <TimelineSeparator>
                <TimelineDot variant="outlined" color="secondary" />
              </TimelineSeparator>
              <TimelineContent style={timelinecontentstyle}>
                <Typography variant="p" component="span">
                  On-sale
                </Typography>
                <Typography>{os}</Typography>
              </TimelineContent>
            </TimelineItem>
          </Timeline>
        </Grid>

        <Grid item sm={10}>
          <Grid container>
            <Grid item sm={3} style={{ marginRight: "5%" }}>
              <ThemeProvider theme={defaultMaterialTheme}>
                <MaterialTable
                  style={{ borderRadius: "14px" }}
                  columns={fbw_columns}
                  data={boughtwith}
                  title={"Bought-with"}
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
                    pagination: false,
                    pageSize: 10, // make initial page size
                    emptyRowsWhenPaging: false, // To avoid of having empty rows
                    exportButton: true,
                    search: false,
                    exportAllData: true,
                    labelRowsPerPage: "",
                    cellStyle: {
                      padding: "4px",
                      lineHeight: 2,
                      fontFamily: "Circular-Loom",
                      textAlign: "center",
                      borderBottom: "2px solid rgb(246, 224, 224)",
                    },
                    headerStyle: {
                      background: "rgb(52, 195, 255)",
                      fontSize: "17px",
                      color: "white",
                      padding: "2px",
                      height: "40px",
                    },
                    // rowStyle: {
                    //     backgroundColor: '#EEE',
                    // }
                    //rowStyle: (data, index) => index % 2 === 0 ? { background: "ghostwhite" } : {background:'white'},
                  }}
                  localization={{
                    pagination: {
                      labelRowsPerPage: "",
                      showFirstLastPageButtons: false,
                      showPageSizeOptions: false,
                      showPageJump: false,
                    },
                  }}
                />
              </ThemeProvider>
            </Grid>

            <Grid item sm={3} style={{ marginRight: "5%" }}>
              <ThemeProvider theme={defaultMaterialTheme}>
                <MaterialTable
                  style={{ borderRadius: "14px" }}
                  pageSize={10}
                  columns={quarter_columns}
                  data={quarter}
                  title={"Quarter-Avg"}
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
                    pagination: false,
                    pageSize: 4, // make initial page size
                    pagination: false,
                    emptyRowsWhenPaging: false, // To avoid of having empty rows
                    exportButton: true,
                    exportAllData: true,
                    search: false,
                    labelRowsPerPage: "",
                    cellStyle: {
                      padding: "4px",
                      lineHeight: 2,
                      fontFamily: "Circular-Loom",
                      textAlign: "center",
                      borderBottom: "2px solid rgb(246, 224, 224)",
                    },
                    headerStyle: {
                      background: "rgb(52, 195, 255)",
                      fontSize: "17px",
                      color: "white",
                      padding: "2px",
                      height: "40px",
                    },
                    // rowStyle: {
                    //     backgroundColor: '#EEE',
                    // }
                    //rowStyle: (data, index) => index % 2 === 0 ? { background: "ghostwhite" } : {background:'white'},
                  }}
                  localization={{
                    pagination: {
                      labelRowsPerPage: "",
                      showFirstLastPageButtons: false,
                      showPageSizeOptions: false,
                      showPageJump: false,
                    },
                  }}
                />
              </ThemeProvider>
            </Grid>

            <Grid item sm={3} style={{ marginRight: "0px" }}>
              <ThemeProvider theme={defaultMaterialTheme}>
                <MaterialTable
                  style={{ borderRadius: "14px" }}
                  pageSize={10}
                  columns={month_columns}
                  data={month}
                  title={"Month-Avg"}
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
                    pagination: false,
                    pageSize: 12, // make initial page size
                    pagination: false,
                    emptyRowsWhenPaging: false, // To avoid of having empty rows
                    exportButton: true,
                    exportAllData: true,
                    search: false,
                    labelRowsPerPage: "",
                    cellStyle: {
                      padding: "4px",
                      lineHeight: 2,
                      fontFamily: "Circular-Loom",
                      textAlign: "center",
                      borderBottom: "2px solid rgb(246, 224, 224)",
                    },
                    headerStyle: {
                      background: "rgb(52, 195, 255)",
                      fontSize: "17px",
                      color: "white",
                      padding: "2px",
                      height: "40px",
                    },
                    // rowStyle: {
                    //     backgroundColor: '#EEE',
                    // }
                    //rowStyle: (data, index) => index % 2 === 0 ? { background: "ghostwhite" } : {background:'white'},
                  }}
                  localization={{
                    pagination: {
                      labelRowsPerPage: "",
                      showFirstLastPageButtons: false,
                      showPageSizeOptions: false,
                      showPageJump: false,
                    },
                  }}
                />
              </ThemeProvider>
            </Grid>

            <Grid item sm={11} style={{ marginTop: "2%" }}>
              <ThemeProvider theme={defaultMaterialTheme}>
                <MaterialTable
                  style={{ borderRadius: "14px" }}
                  pageSize={10}
                  columns={customer_columns}
                  data={customers}
                  // title={segname}
                  title={"Customers"}
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
                    search: false,
                    exportButton: true,
                    exportAllData: true,
                    labelRowsPerPage: "",
                    cellStyle: {
                      padding: "4px",
                      lineHeight: 2,
                      fontFamily: "Circular-Loom",
                      textAlign: "center",
                      borderBottom: "2px solid rgb(246, 224, 224)",
                    },
                    headerStyle: {
                      background: "rgb(52, 195, 255)",
                      fontSize: "17px",
                      color: "white",
                      padding: "2px",
                      height: "40px",
                    },
                    // rowStyle: {
                    //     backgroundColor: '#EEE',
                    // }
                    //rowStyle: (data, index) => index % 2 === 0 ? { background: "ghostwhite" } : {background:'white'},
                  }}
                  localization={{
                    pagination: {
                      labelRowsPerPage: "",
                      showFirstLastPageButtons: false,
                      showPageSizeOptions: false,
                      showPageJump: false,
                    },
                  }}
                />
              </ThemeProvider>
            </Grid>

            <Grid item sm={11} style={{ marginTop: "2%" }}>
              <h5
                style={{
                  marginTop: "7%",
                  marginBottom: "2%",
                  width: "97%",
                  background: "ghostwhite",
                  padding: "2%",
                }}
              >
                Retention Data
              </h5>

              <h5
                style={{
                  "border-top": "0.1px solid darkgray",
                  marginTop: "20px",
                  background: "white",
                  boxShadow:
                    "rgb(65 69 88 / 10%) 0px 7px 14px 0px, rgb(0 0 0 / 7%) 0px 3px 6px 0px",
                  borderRadius: "3px",
                  padding: "10px",
                }}
              >
                Customer retention
              </h5>
              <Grid
                container
                style={{
                  background: "whitesmoke",
                  boxShadow:
                    "rgb(65 69 88 / 10%) 0px 7px 14px 0px, rgb(0 0 0 / 7%) 0px 3px 6px 0px",
                }}
              >
                <div
                  style={{ width: "-webkit-fill-available" }}
                  dangerouslySetInnerHTML={{ __html: cus }}
                ></div>
              </Grid>

              <h5
                style={{
                  "border-top": "0.1px solid darkgray",
                  marginTop: "20px",
                  background: "white",
                  boxShadow:
                    "rgb(65 69 88 / 10%) 0px 7px 14px 0px, rgb(0 0 0 / 7%) 0px 3px 6px 0px",
                  borderRadius: "3px",
                  padding: "10px",
                }}
              >
                Revenue generated
              </h5>
              <Grid
                container
                style={{
                  background: "whitesmoke",
                  boxShadow:
                    "rgb(65 69 88 / 10%) 0px 7px 14px 0px, rgb(0 0 0 / 7%) 0px 3px 6px 0px",
                }}
              >
                <div
                  style={{ width: "-webkit-fill-available" }}
                  dangerouslySetInnerHTML={{ __html: rev }}
                ></div>
              </Grid>

              <h5
                style={{
                  "border-top": "0.1px solid darkgray",
                  marginTop: "20px",
                  background: "white",
                  boxShadow:
                    "rgb(65 69 88 / 10%) 0px 7px 14px 0px, rgb(0 0 0 / 7%) 0px 3px 6px 0px",
                  borderRadius: "3px",
                  padding: "10px",
                }}
              >
                Unit sold{" "}
              </h5>
              <Grid
                container
                style={{
                  background: "whitesmoke",
                  boxShadow:
                    "rgb(65 69 88 / 10%) 0px 7px 14px 0px, rgb(0 0 0 / 7%) 0px 3px 6px 0px",
                }}
              >
                <div
                  style={{ width: "-webkit-fill-available" }}
                  dangerouslySetInnerHTML={{ __html: unit }}
                ></div>
              </Grid>
            </Grid>
          </Grid>
        </Grid>
      </Grid>
    </Grid>
  );
}

export default SingleProduct;
