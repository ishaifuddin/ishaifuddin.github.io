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

import ShoppingCartIcon from "@mui/icons-material/ShoppingCart";

import TimelineItem, { timelineItemClasses } from "@mui/lab/TimelineItem";

function SingleOrder() {
  const defaultMaterialTheme = createTheme();
  const { chc } = useParams();

  var [date, setDate] = useState();
  var [mail, setMail] = useState();
  var [status, setStatus] = useState();
  var [foro, setForo] = useState();
  var [cusCHC, setcusCHC] = useState();
  var [hello, sethello] = useState();

  var [items, setItems] = useState([]);

  var [dis, setDis] = useState([]);
  var [shipcost, setshipcost] = useState([]);
  var [tax, settax] = useState([]);
  var [total, settotal] = useState([]);

  var [source, setSource] = useState();

  var [shipcity, setShipcity] = useState();
  var [shipstate, setshipstate] = useState();
  var [sa1, setsa1] = useState();
  var [sa2, setsa2] = useState();

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
    const sinOrder = async () => {
      try {
        const res = await axios.post(
          "https://server.shopex.io/orders/single-order/single_order.php",
          { oid: chc },
          { withCredentials: true }
        );
        setDate(res.data.date);
        setMail(res.data.mail);
        setStatus(res.data.status);
        setForo(res.data.nth);
        setcusCHC(res.data.chc);
        sethello(res.data.hello);
        setItems(res.data.item);

        setSource(res.data.source);
        setShipcity(res.data.shipcity);

        setshipstate(res.data.shipstate);
        setsa1(res.data.sa1);
        setsa2(res.data.sa2);

        setDis(res.data.discount);
        setshipcost(res.data.shipcost);
        settax(res.data.tax);
        settotal(res.data.amount);
      } catch {}
    };
    sinOrder();
  }, [chc]);

  var items_columns = [
    {
      title: "Product",
      field: "name",
      render: (row) => (
        <div
          style={{
            background: "mintcream",
            fontFamily: "system-ui",
            fontSize: "16px",
            textAlign: "left",
          }}
        >
          {" "}
          {row.name}{" "}
        </div>
      ),
    },
    {
      title: "Unit",
      field: "unit",
      render: (row) => (
        <div style={{ background: "ghostwhite" }}> {row.unit} </div>
      ),
    },
    {
      title: "Price",
      field: "price",
      render: (row) => (
        <div style={{ background: "whitesmoke" }}> {row.price} </div>
      ),
    },
    {
      title: "Amount",
      field: "amount",
      render: (row) => (
        <div style={{ background: "ghostwhite" }}> {row.amount} </div>
      ),
    },
    {
      title: "Profit",
      field: "profit",
      render: (row) => (
        <div style={{ background: "ghostwhite" }}> {row.profit} </div>
      ),
    },
  ];

  var sum_columns = [
    {
      title: "Discount",
      field: "discount",
      render: (row) => (
        <div
          style={{
            background: "mintcream",
            fontFamily: "system-ui",
            fontSize: "16px",
            textAlign: "left",
          }}
        >
          {" "}
          {row.discount}{" "}
        </div>
      ),
    },
    {
      title: "ShipCost",
      field: "shipcost",
      render: (row) => (
        <div style={{ background: "ghostwhite" }}> {row.shipcost} </div>
      ),
    },
    {
      title: "Tax",
      field: "tax",
      render: (row) => (
        <div style={{ background: "ghostwhite" }}> {row.tax} </div>
      ),
    },
    {
      title: "Grand Total",
      field: "amount",
      render: (row) => (
        <div style={{ background: "ghostwhite" }}> {row.amount} </div>
      ),
    },
  ];

  return (
    <div>
      <Grid
        container
        style={{
          background: "mediumseagreen",
          width: "82%",
          margin: "1%",
          borderRadius: "14px",
          boxShadow:
            "rgb(65 69 88 / 10%) 0px 7px 14px 0px, rgb(0 0 0 / 7%) 0px 3px 6px 0px",
        }}
      >
        <ShoppingCartIcon
          style={{
            fontSize: "60px",
            color: "white",
            padding: "6px",
            marginTop: "3px",
            marginLeft: "1%",
          }}
        />
        <span style={{ paddingTop: "10px", color: "white" }}>
          <h5> Order :: {chc}</h5>
          <p>
            {shipcity},{shipstate},{sa1},{sa2}
          </p>
        </span>
      </Grid>

      <Grid container>
        <Grid item sm={3} style={{ marginRight: "1%" }}>
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
                  Date
                </Typography>
                <Typography>{date}</Typography>
              </TimelineContent>
            </TimelineItem>

            <TimelineItem style={{ minHeight: "57px" }}>
              <TimelineSeparator>
                <TimelineDot variant="outlined" color="primary" />
                <TimelineConnector />
              </TimelineSeparator>
              <TimelineContent style={timelinecontentstyle}>
                <Typography variant="p" component="span">
                  Status
                </Typography>
                <Typography>{status}</Typography>
              </TimelineContent>
            </TimelineItem>

            <TimelineItem style={{ minHeight: "57px" }}>
              <TimelineSeparator>
                <TimelineDot variant="outlined" color="secondary" />
                <TimelineConnector />
              </TimelineSeparator>

              <TimelineContent style={timelinecontentstyle}>
                <Typography variant="p" component="span">
                  Email
                </Typography>
                <Typography>
                  {" "}
                  <a href={"/Customers/profile/" + cusCHC}> {mail}</a>{" "}
                </Typography>
              </TimelineContent>
            </TimelineItem>

            <TimelineItem style={{ minHeight: "57px" }}>
              <TimelineSeparator>
                <TimelineDot variant="outlined" color="primary" />
                <TimelineConnector />
              </TimelineSeparator>
              <TimelineContent style={timelinecontentstyle}>
                <Typography variant="p" component="span">
                  N-th order
                </Typography>
                <Typography>{foro}</Typography>
              </TimelineContent>
            </TimelineItem>

            <TimelineItem style={{ minHeight: "57px" }}>
              <TimelineSeparator>
                <TimelineDot variant="outlined" color="secondary" />
                <TimelineConnector />
              </TimelineSeparator>
              <TimelineContent style={timelinecontentstyle}>
                <Typography variant="p" component="span">
                  Contact
                </Typography>
                <Typography>{hello}</Typography>
              </TimelineContent>
            </TimelineItem>

            <TimelineItem style={{ minHeight: "57px" }}>
              <TimelineSeparator>
                <TimelineDot variant="outlined" color="primary" />
              </TimelineSeparator>
              <TimelineContent style={timelinecontentstyle}>
                <Typography variant="p" component="span">
                  Source
                </Typography>
                <Typography>{source}</Typography>
              </TimelineContent>
            </TimelineItem>
          </Timeline>
        </Grid>

        <Grid item sm={5} style={{ marginRight: "5%" }}>
          <ThemeProvider theme={defaultMaterialTheme}>
            <MaterialTable
              style={{ borderRadius: "14px" }}
              columns={items_columns}
              data={items}
              title={"Items include"}
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
                  background: "lightseagreen",
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

        <Grid item sm={3}>
          <h4 style={{ borderBottom: "1px solid green" }}>Summery</h4>
          <h6>Discount : {dis} </h6>
          <h6>Shipping Cost : {shipcost}</h6>
          <h6>Tax : {tax}</h6>
          <h6>Total : {total}</h6>
        </Grid>
      </Grid>
    </div>
  );
}

export default SingleOrder;
