import { ReactSession } from "react-client-session";

import React, { useEffect, useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { Line } from "react-chartjs-2";
import { format } from "date-fns";
import startOfMonth from "date-fns/startOfMonth";
import endOfMonth from "date-fns/endOfMonth";
import startOfYear from "date-fns/startOfYear";
import moment from "moment";

import { addDays, subDays, getDate } from "date-fns";
import { DateRangePicker } from "rsuite";
import "rsuite/dist/rsuite.css";

import Grid from "@mui/material/Grid";

import Search from "@material-ui/icons/Search";
import SaveAlt from "@material-ui/icons/SaveAlt";
import ChevronLeft from "@material-ui/icons/ChevronLeft";
import ChevronRight from "@material-ui/icons/ChevronRight";
import FirstPage from "@material-ui/icons/FirstPage";
import LastPage from "@material-ui/icons/LastPage";
import Check from "@material-ui/icons/Check";
import FilterList from "@material-ui/icons/FilterList";
import CancelIcon from "@mui/icons-material/Cancel";

import MaterialTable from "material-table";
import Multiselect from "multiselect-react-dropdown";

import { ThemeProvider, createTheme } from "@mui/material";

import { get_single_city_all_product_data } from "../../features/product/ProductSingleCity";

import { get_cusret_getcity } from "../../features/cus/CusRetSelCity";

import Radio from "@mui/material/Radio";
import RadioGroup from "@mui/material/RadioGroup";

import Timeline from "@mui/lab/Timeline";
import TimelineItem from "@mui/lab/TimelineItem";
import TimelineSeparator from "@mui/lab/TimelineSeparator";
import TimelineConnector from "@mui/lab/TimelineConnector";
import TimelineContent from "@mui/lab/TimelineContent";
import TimelineDot from "@mui/lab/TimelineDot";
import TimelineOppositeContent, {
  timelineOppositeContentClasses,
} from "@mui/lab/TimelineOppositeContent";

import RepeatIcon from "@mui/icons-material/Repeat";
import PeopleAltIcon from "@mui/icons-material/PeopleAlt";
import ShoppingBasketIcon from "@mui/icons-material/ShoppingBasket";
import LayersRoundedIcon from "@mui/icons-material/LayersRounded";
import AttachMoneyIcon from "@mui/icons-material/AttachMoney";
import MonetizationOnIcon from "@mui/icons-material/MonetizationOn";
import { Card } from "react-bootstrap";
import NavButton from "../../pages/NavButton";

function ProductOneCityPerform() {
  const dispatch = useDispatch();

  const defaultMaterialTheme = createTheme();

  const [daterange, setdrange] = useState([
    new Date(moment().startOf("month")),
    new Date(moment().endOf("month")),
    //format(new Date(moment().startOf('month')),'yyyy-MM-dd'),
  ]);

  const [duration, setduration] = useState();

  var [scity, setscity] = useState("");

  // var Cus_scity = useSelector((state) => state.CusRetSC.scity);
  // useEffect(() => {

  //     var is_dispatched = (dispatch_function) => {
  //         ReactSession.get(dispatch_function);
  //         if (ReactSession.get(dispatch_function)) {
  //             return true;
  //         } else {
  //             ReactSession.set(dispatch_function, "1");
  //             return false;
  //         }
  //     }

  //     if (!(is_dispatched('get_cusret_getcity'))) {
  //         dispatch(get_cusret_getcity({ ajax_call: 2 }));
  //     }

  // }, [])

  const dateSubmit = (e) => {
    e.preventDefault();
    dispatch(
      get_single_city_all_product_data({
        from: format(daterange[0], "yyyy-MM-dd"),
        to: format(daterange[1], "yyyy-MM-dd"),
        unit: duration,
        s: scity,
        ajax_call: 1,
      })
    );
  };

  // var all_product_single_city = useSelector((state) => state.Product_specific_city_all_product);

  // var comparison_table = [];
  // if (all_product_single_city.single_city_comparison_table_object && (all_product_single_city.single_city_comparison_table_object).length > 0) {
  //     comparison_table = structuredClone(all_product_single_city.single_city_comparison_table_object);
  // }

  // var label = structuredClone(all_product_single_city.single_city_comparison_chart_base_label.replace(/\"/g, "").split(","));
  // ////////////////
  // var single_city_rev_comparison = useSelector((state) => state.Product_specific_city_all_product.single_city_rev_comparison);
  // var rev_obj = {};
  // if (single_city_rev_comparison) {
  //     rev_obj.labels = label;
  //     rev_obj.datasets = structuredClone(single_city_rev_comparison);
  // }
  // ////////////////
  // var single_city_order_comparison = useSelector((state) => state.Product_specific_city_all_product.single_city_order_comparison);
  // var order_obj = {};
  // if (single_city_order_comparison) {
  //     order_obj.labels = label;
  //     order_obj.datasets = structuredClone(single_city_order_comparison);
  // }
  // ////////////////
  // var single_city_profit_comparison = useSelector((state) => state.Product_specific_city_all_product.single_city_profit_comparison);
  // var profit_obj = {};
  // if (single_city_profit_comparison) {
  //     profit_obj.labels = label;
  //     profit_obj.datasets = structuredClone(single_city_profit_comparison);
  // }
  // ////////////////
  // var single_city_cus_comparison = useSelector((state) => state.Product_specific_city_all_product.single_city_cus_comparison);
  // var customer_obj = {};
  // if (single_city_cus_comparison) {
  //     customer_obj.labels = label;
  //     customer_obj.datasets = structuredClone(single_city_cus_comparison);
  // }
  // ////////////////
  // var single_city_unit_comparison = useSelector((state) => state.Product_specific_city_all_product.single_city_unit_comparison);
  // var unit_obj = {};
  // if (single_city_unit_comparison) {
  //     unit_obj.labels = label;
  //     unit_obj.datasets = structuredClone(single_city_unit_comparison);
  // }

  var option = {
    scales: {
      y: {
        beginAtZero: true,
        display: true,
      },
      x: {
        display: false,
      },
    },

    lineTension: 0.3,
    legend: {
      display: true,
      position: "right",
    },
  };

  ////////////////////////////// DUMMY DATA ///////////////////////////////
  ////////////////////////////// DUMMY DATA ///////////////////////////////
  ////////////////////////////// DUMMY DATA ///////////////////////////////
  ////////////////////////////// DUMMY DATA ///////////////////////////////
  ////////////////////////////// DUMMY DATA ///////////////////////////////

  // { title: 'Product', field: 'product_name', render: row => <div style={{ background: 'whitesmoke' }}>  {row.product_name} </div> },
  // { title: 'Revenue', field: 'total_rev', render: row => <div style={{ background: 'ghostwhite' }}>  {row.total_rev} </div> },
  // { title: 'Unit', field: 'total_unit', render: row => <div style={{ background: 'whitesmoke' }}>  {row.total_unit} </div> },
  // { title: 'Order', field: 'total_order', render: row => <div style={{ background: 'ghostwhite' }}>  {row.total_order} </div> },
  // { title: 'Customer', field: 'total_cus', render: row => <div style={{ background: 'whitesmoke' }}>  {row.total_cus} </div> },
  // { title: 'Profit', field: 'total_profit', render: row => <div style={{ background: 'ghostwhite' }}>  {row.total_profit} </div> },

  var [comparison_table, setTmnew] = useState([
    {
      product_name: "a",
      total_rev: "1112",
      total_unit: "11%",
      total_order: "725",
      total_cus: "5%",
      total_profit: "422",
    },
    {
      product_name: "b",
      total_rev: "1112",
      total_unit: "11%",
      total_order: "725",
      total_cus: "5%",
      total_profit: "422",
    },
    {
      product_name: "c",
      total_rev: "1112",
      total_unit: "11%",
      total_order: "725",
      total_cus: "5%",
      total_profit: "422",
    },
    {
      product_name: "d",
      total_rev: "1112",
      total_unit: "11%",
      total_order: "725",
      total_cus: "5%",
      total_profit: "422",
    },
    {
      product_name: "e",
      total_rev: "1112",
      total_unit: "11%",
      total_order: "725",
      total_cus: "5%",
      total_profit: "422",
    },
    {
      product_name: "f",
      total_rev: "1112",
      total_unit: "11%",
      total_order: "725",
      total_cus: "5%",
      total_profit: "422",
    },
    {
      product_name: "g",
      total_rev: "1112",
      total_unit: "11%",
      total_order: "725",
      total_cus: "5%",
      total_profit: "422",
    },
    {
      product_name: "h",
      total_rev: "1112",
      total_unit: "11%",
      total_order: "725",
      total_cus: "5%",
      total_profit: "422",
    },
    {
      product_name: "i",
      total_rev: "1112",
      total_unit: "11%",
      total_order: "725",
      total_cus: "5%",
      total_profit: "422",
    },
    {
      product_name: "j",
      total_rev: "1112",
      total_unit: "11%",
      total_order: "725",
      total_cus: "5%",
      total_profit: "422",
    },
    {
      product_name: "k",
      total_rev: "1112",
      total_unit: "11%",
      total_order: "725",
      total_cus: "5%",
      total_profit: "422",
    },
    {
      product_name: "l",
      total_rev: "1112",
      total_unit: "11%",
      total_order: "725",
      total_cus: "5%",
      total_profit: "422",
    },
    {
      product_name: "m",
      total_rev: "1112",
      total_unit: "11%",
      total_order: "725",
      total_cus: "5%",
      total_profit: "422",
    },
    {
      product_name: "n",
      total_rev: "1112",
      total_unit: "11%",
      total_order: "725",
      total_cus: "5%",
      total_profit: "422",
    },
    {
      product_name: "o",
      total_rev: "1112",
      total_unit: "11%",
      total_order: "725",
      total_cus: "5%",
      total_profit: "422",
    },
  ]);

  var rev_obj = {
    labels: ["Jan", "Feb", "Mar", "April", "May", "June", "July"],
    datasets: [
      {
        label: "Sales",
        tension: 0.4,
        borderDash: [2, 2],
        borderJoinStyle: "round",
        backgroundColor: "rgba(43, 206, 161, 1)",
        borderColor: "rgba(43, 206, 161,1)",
        borderWidth: 2,
        hoverBackgroundColor: "rgba(255,99,132,0.4)",
        hoverBorderColor: "rgba(255,99,132,1)",
        data: [65, 59, 80, 81, 56, 55, 40],
      },
      {
        label: "Expenses",
        tension: 0.4,
        borderJoinStyle: "round",
        backgroundColor: "rgba(94, 114, 228, 1)",
        pointBackgroundColor: "rgba(54,162,235,0.2)",
        pointBackgroundColor: "rgba(94, 114, 228, 1)",
        borderColor: "rgba(94, 114, 228, 1)",
        borderWidth: 2,
        hoverBackgroundColor: "red)",
        hoverBorderColor: "rgba(54,162,235,1)",
        data: [28, 48, 40, 19, 86, 27, 90],
      },
    ],
  };
  var order_obj = {
    labels: ["Jan", "Feb", "Mar", "April", "May", "June", "July"],
    datasets: [
      {
        label: "Sales",
        tension: 0.4,
        borderDash: [2, 2],
        borderJoinStyle: "round",
        backgroundColor: "rgba(43, 206, 161, 1)",
        borderColor: "rgba(43, 206, 161,1)",
        borderWidth: 2,
        hoverBackgroundColor: "rgba(255,99,132,0.4)",
        hoverBorderColor: "rgba(255,99,132,1)",
        data: [65, 59, 80, 81, 56, 55, 40],
      },
      {
        label: "Expenses",
        tension: 0.4,
        borderJoinStyle: "round",
        backgroundColor: "rgba(94, 114, 228, 1)",
        pointBackgroundColor: "rgba(54,162,235,0.2)",
        pointBackgroundColor: "rgba(94, 114, 228, 1)",
        borderColor: "rgba(94, 114, 228, 1)",
        borderWidth: 2,
        hoverBackgroundColor: "red)",
        hoverBorderColor: "rgba(54,162,235,1)",
        data: [28, 48, 40, 19, 86, 27, 90],
      },
    ],
  };
  var profit_obj = {
    labels: ["Jan", "Feb", "Mar", "April", "May", "June", "July"],
    datasets: [
      {
        label: "Sales",
        tension: 0.4,
        borderDash: [2, 2],
        borderJoinStyle: "round",
        backgroundColor: "rgba(43, 206, 161, 1)",
        borderColor: "rgba(43, 206, 161,1)",
        borderWidth: 2,
        hoverBackgroundColor: "rgba(255,99,132,0.4)",
        hoverBorderColor: "rgba(255,99,132,1)",
        data: [65, 59, 80, 81, 56, 55, 40],
      },
      {
        label: "Expenses",
        tension: 0.4,
        borderJoinStyle: "round",
        backgroundColor: "rgba(94, 114, 228, 1)",
        pointBackgroundColor: "rgba(54,162,235,0.2)",
        pointBackgroundColor: "rgba(94, 114, 228, 1)",
        borderColor: "rgba(94, 114, 228, 1)",
        borderWidth: 2,
        hoverBackgroundColor: "red)",
        hoverBorderColor: "rgba(54,162,235,1)",
        data: [28, 48, 40, 19, 86, 27, 90],
      },
    ],
  };
  var customer_obj = {
    labels: ["Jan", "Feb", "Mar", "April", "May", "June", "July"],
    datasets: [
      {
        label: "Sales",
        tension: 0.4,
        borderDash: [2, 2],
        borderJoinStyle: "round",
        backgroundColor: "rgba(43, 206, 161, 1)",
        borderColor: "rgba(43, 206, 161,1)",
        borderWidth: 2,
        hoverBackgroundColor: "rgba(255,99,132,0.4)",
        hoverBorderColor: "rgba(255,99,132,1)",
        data: [65, 59, 80, 81, 56, 55, 40],
      },
      {
        label: "Expenses",
        tension: 0.4,
        borderJoinStyle: "round",
        backgroundColor: "rgba(94, 114, 228, 1)",
        pointBackgroundColor: "rgba(54,162,235,0.2)",
        pointBackgroundColor: "rgba(94, 114, 228, 1)",
        borderColor: "rgba(94, 114, 228, 1)",
        borderWidth: 2,
        hoverBackgroundColor: "red)",
        hoverBorderColor: "rgba(54,162,235,1)",
        data: [28, 48, 40, 19, 86, 27, 90],
      },
    ],
  };
  var rcus_obj = {
    labels: ["Jan", "Feb", "Mar", "April", "May", "June", "July"],
    datasets: [
      {
        label: "Sales",
        tension: 0.4,
        borderDash: [2, 2],
        borderJoinStyle: "round",
        backgroundColor: "rgba(43, 206, 161, 1)",
        borderColor: "rgba(43, 206, 161,1)",
        borderWidth: 2,
        hoverBackgroundColor: "rgba(255,99,132,0.4)",
        hoverBorderColor: "rgba(255,99,132,1)",
        data: [65, 59, 80, 81, 56, 55, 40],
      },
      {
        label: "Expenses",
        tension: 0.4,
        borderJoinStyle: "round",
        backgroundColor: "rgba(94, 114, 228, 1)",
        pointBackgroundColor: "rgba(54,162,235,0.2)",
        pointBackgroundColor: "rgba(94, 114, 228, 1)",
        borderColor: "rgba(94, 114, 228, 1)",
        borderWidth: 2,
        hoverBackgroundColor: "red)",
        hoverBorderColor: "rgba(54,162,235,1)",
        data: [28, 48, 40, 19, 86, 27, 90],
      },
    ],
  };
  var unit_obj = {
    labels: ["Jan", "Feb", "Mar", "April", "May", "June", "July"],
    datasets: [
      {
        label: "Sales",
        tension: 0.4,
        borderDash: [2, 2],
        borderJoinStyle: "round",
        backgroundColor: "rgba(43, 206, 161, 1)",
        borderColor: "rgba(43, 206, 161,1)",
        borderWidth: 2,
        hoverBackgroundColor: "rgba(255,99,132,0.4)",
        hoverBorderColor: "rgba(255,99,132,1)",
        data: [65, 59, 80, 81, 56, 55, 40],
      },
      {
        label: "Expenses",
        tension: 0.4,
        borderJoinStyle: "round",
        backgroundColor: "rgba(94, 114, 228, 1)",
        pointBackgroundColor: "rgba(54,162,235,0.2)",
        pointBackgroundColor: "rgba(94, 114, 228, 1)",
        borderColor: "rgba(94, 114, 228, 1)",
        borderWidth: 2,
        hoverBackgroundColor: "red)",
        hoverBorderColor: "rgba(54,162,235,1)",
        data: [28, 48, 40, 19, 86, 27, 90],
      },
    ],
  };

  return (
    <Grid container spacing={3}>
      <Grid item xs={12} className="top-wrap">
        <div className="notifications">
          <h6>Product : Single city performance</h6>
          <div className="notify">
            <NavButton />
          </div>
        </div>
      </Grid>
      <Grid item xs={12}>
        <form
          className="date-period"
          style={{ marginBottom: "-15px" }}
          onSubmit={dateSubmit}
        >
          <DateRangePicker
            //placement='rightEnd'
            // label="Timeline"
            value={daterange}
            onChange={setdrange}
            oneTap={false}
            ranges={[
              {
                label: "Yesterday",
                value: [addDays(new Date(), -1), addDays(new Date(), -1)],
              },
              { label: "Today", value: [new Date(), new Date()] },
              {
                label: "Tomorrow",
                value: [addDays(new Date(), 1), addDays(new Date(), 1)],
              },
              {
                label: "Last 7 days",
                value: [subDays(new Date(), 6), new Date()],
              },
              {
                label: "This month",
                value: [
                  subDays(new Date(), getDate(new Date()) - 1),
                  new Date(),
                ],
              },
              {
                label: "Last month",
                value: [
                  startOfMonth(subDays(new Date(), getDate(new Date()))),
                  endOfMonth(subDays(new Date(), getDate(new Date()))),
                ],
              },
              {
                label: "Year To date",
                value: [startOfYear(new Date()), new Date()],
              },
            ]}
          ></DateRangePicker>
          {/* <div onChange={(e) => { setduration(e.target.value) }}>
                            <input type="radio" value="daily" name="unit" /> Daily
                            <input type="radio" value="weekly" name="unit" /> Weekly
                            <input selected type="radio" value="monthly" name="unit" /> Monthly
                        </div> */}
          <RadioGroup
            style={{
              display: "inline-block",
              fontSize: "13px",
              color: "white  ",
              fontWeight: "500",
            }}
            onChange={(e) => {
              setduration(e.target.value);
            }}
          >
            <Radio
              checked={duration === "daily"}
              value="daily"
              name="duration"
            />{" "}
            Day
            <Radio
              checked={duration === "weekly"}
              value="weekly"
              name="duration"
            />{" "}
            Week
            <Radio
              checked={duration === "monthly"}
              value="monthly"
              name="duration"
            />{" "}
            Month
          </RadioGroup>
          <input
            className="period-btn"
            variant="contained"
            color="secondary"
            type="submit"
            value="Submit"
          />
        </form>
      </Grid>

      <Grid item xs={24}>
        <Card className="dash-card">
          {comparison_table && comparison_table.length > 0 && (
            <ThemeProvider theme={defaultMaterialTheme}>
              <MaterialTable
                style={{ borderRadius: "14px" }}
                columns={[
                  {
                    title: "Product",
                    field: "product_name",
                    render: (row) => (
                      <div style={{ background: "whitesmoke" }}>
                        {" "}
                        {row.product_name}{" "}
                      </div>
                    ),
                  },
                  {
                    title: "Revenue",
                    field: "total_rev",
                    render: (row) => (
                      <div style={{ background: "ghostwhite" }}>
                        {" "}
                        {row.total_rev}{" "}
                      </div>
                    ),
                  },
                  {
                    title: "Unit",
                    field: "total_unit",
                    render: (row) => (
                      <div style={{ background: "whitesmoke" }}>
                        {" "}
                        {row.total_unit}{" "}
                      </div>
                    ),
                  },
                  {
                    title: "Order",
                    field: "total_order",
                    render: (row) => (
                      <div style={{ background: "ghostwhite" }}>
                        {" "}
                        {row.total_order}{" "}
                      </div>
                    ),
                  },
                  {
                    title: "Customer",
                    field: "total_cus",
                    render: (row) => (
                      <div style={{ background: "whitesmoke" }}>
                        {" "}
                        {row.total_cus}{" "}
                      </div>
                    ),
                  },
                  {
                    title: "Profit",
                    field: "total_profit",
                    render: (row) => (
                      <div style={{ background: "ghostwhite" }}>
                        {" "}
                        {row.total_profit}{" "}
                      </div>
                    ),
                  },
                ]}
                data={comparison_table}
                title=""
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
                }}
                options={{
                  showFirstLastPageButtons: false,
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
            </ThemeProvider>
          )}
        </Card>
      </Grid>
      <Grid item xs={24}>
        <Card className="dash-card">
          <Timeline className="timeline">
            <TimelineItem>
              <TimelineSeparator>
                <TimelineDot className="tml-title-icon">
                  <span></span>
                  <ShoppingBasketIcon />
                </TimelineDot>
                <TimelineConnector />
              </TimelineSeparator>
              <TimelineContent className="tml-chart">
                {
                  //single_city_order_comparison && single_city_order_comparison.length > 0 &&
                  <Line data={order_obj} options={option} />
                }
              </TimelineContent>
            </TimelineItem>

            <TimelineItem>
              <TimelineSeparator>
                <TimelineDot className="tml-title-icon">
                  <span>Total unit sold from each product</span>
                  <LayersRoundedIcon />
                </TimelineDot>
                <TimelineConnector />
              </TimelineSeparator>
              <TimelineContent className="tml-chart">
                {
                  //single_city_unit_comparison && single_city_unit_comparison.length > 0 &&
                  <Line data={unit_obj} options={option} />
                }
              </TimelineContent>
            </TimelineItem>

            <TimelineItem>
              <TimelineSeparator>
                <TimelineDot className="tml-title-icon">
                  <span>Total revenue generated from each product</span>
                  <AttachMoneyIcon />
                </TimelineDot>
                <TimelineConnector />
              </TimelineSeparator>
              <TimelineContent className="tml-chart">
                {
                  //single_city_rev_comparison && single_city_rev_comparison.length > 0 &&
                  <Line data={rev_obj} options={option} />
                }
              </TimelineContent>
            </TimelineItem>

            <TimelineItem>
              <TimelineSeparator>
                <TimelineDot className="tml-title-icon">
                  <span>Total Customer from each product</span>
                  <PeopleAltIcon />
                </TimelineDot>
                <TimelineConnector />
              </TimelineSeparator>
              <TimelineContent className="tml-chart">
                {
                  //single_city_cus_comparison && single_city_cus_comparison.length > 0 &&
                  <Line data={customer_obj} options={option} />
                }
              </TimelineContent>
            </TimelineItem>

            <TimelineItem>
              <TimelineSeparator>
                <TimelineDot className="tml-title-icon">
                  <span>Total profit from each product</span>
                  <MonetizationOnIcon />
                </TimelineDot>
                <TimelineConnector />
              </TimelineSeparator>
              <TimelineContent className="tml-chart">
                {
                  //single_city_profit_comparison && single_city_profit_comparison.length > 0 &&
                  <Line data={profit_obj} options={option} />
                }
              </TimelineContent>
            </TimelineItem>
          </Timeline>
        </Card>
      </Grid>
    </Grid>
  );
}

export default ProductOneCityPerform;
