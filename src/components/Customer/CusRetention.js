import { ReactSession } from "react-client-session";
import React, { useEffect, useState } from "react";

import { format } from "date-fns";
import startOfMonth from "date-fns/startOfMonth";
import endOfMonth from "date-fns/endOfMonth";
import startOfYear from "date-fns/startOfYear";

import { addDays, subDays, getDate } from "date-fns";
import { useSelector, useDispatch } from "react-redux";

import { Button, DateRangePicker } from "rsuite";

import Grid from "@mui/material/Grid";

import moment from "moment";

import { get_cusret_allcity } from "../../features/cus/CusRetAllCity";

import "rsuite/dist/rsuite.css";

import Radio from "@mui/material/Radio";
import RadioGroup from "@mui/material/RadioGroup";

import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend,
} from "chart.js";
import { Line } from "react-chartjs-2";
import NavButton from "../../pages/NavButton";
ChartJS.register(
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend
);

function CusRetention() {
  // var dispatch = useDispatch();

  // var is_dispatched = (dispatch_function) => {
  //     ReactSession.get('get_cusret_allcity');
  //     if (ReactSession.get('get_cusret_allcity')) {
  //         return true;
  //     } else {
  //         ReactSession.set('get_cusret_allcity', "1");
  //         return false;
  //     }
  // }

  var [daterange, setdrange] = useState([
    new Date(moment().startOf("month")),
    new Date(moment().endOf("month")),
  ]);
  var [duration, setduration] = useState();

  // if (!(is_dispatched('get_cusret_allcity'))) {
  //     dispatch(get_cusret_allcity({ ajax_call: 2 }));
  // }

  // var CusRetAC = useSelector((state) => state.CusRetAC);
  // {/* Customer, Order & Revenue  Chart */ }
  // var label = structuredClone(CusRetAC.label);

  // var ret_cus_obj = {};
  // var ret_cus_dataset = structuredClone(CusRetAC.cus_chart);
  // ret_cus_obj.labels = label;
  // ret_cus_obj.datasets = ret_cus_dataset;

  // var ret_order_obj = {};
  // var ret_order_dataset = structuredClone(CusRetAC.order_chart);
  // ret_order_obj.labels = label;
  // ret_order_obj.datasets = ret_order_dataset;

  // var ret_rev_obj = {};
  // var ret_rev_dataset = structuredClone(CusRetAC.rev_chart);
  // ret_rev_obj.labels = label;
  // ret_rev_obj.datasets = ret_rev_dataset;

  // var cus_table = structuredClone(CusRetAC.cus_table);
  // var rev_table = structuredClone(CusRetAC.rev_table);
  // var order_table = structuredClone(CusRetAC.order_table);

  //var cus_chart     = CusRetAC.cus_chart;
  //var order_chart   = CusRetAC.order_chart;
  //var rev_chart     = CusRetAC.rev_chart;

  const dateSubmit = (e) => {
    //     dispatch(get_cusret_allcity({
    //         from : format(daterange[0],'yyyy-MM-dd'), to : format(daterange[1],'yyyy-MM-dd'),
    //         unit : duration,
    //         ajax_call : 1
    //     }));
  };

  /////////////////////////// DUMMY DATA /////////////////////////////////
  /////////////////////////// DUMMY DATA /////////////////////////////////
  /////////////////////////// DUMMY DATA /////////////////////////////////
  /////////////////////////// DUMMY DATA /////////////////////////////////
  /////////////////////////// DUMMY DATA /////////////////////////////////
  /////////////////////////// DUMMY DATA /////////////////////////////////

  const ret_cus_obj = {
    labels: ["Jan", "Feb", "Mar", "April", "May", "June", "July"],
    datasets: [
      {
        label: "Customer Retention",
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
    ],
  };
  const ret_order_obj = {
    labels: ["Jan", "Feb", "Mar", "April", "May", "June", "July"],
    datasets: [
      {
        label: "Orders from repeated Customers",
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
    ],
  };

  const ret_rev_obj = {
    labels: ["Jan", "Feb", "Mar", "April", "May", "June", "July"],
    datasets: [
      {
        label: "Revenue generated from repeat Customers ",
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
    ],
  };

  return (
    <>
      <Grid container spacing={3}>
        <Grid item xs={12} className="top-wrap">
          <div className="notifications">
            <h6>Customer Retention</h6>
            <div className="notify">
              <NavButton />
            </div>
          </div>
        </Grid>
        <Grid item xs={12}>
          <div className="date-period" style={{ marginBottom: "-15px" }}>
            <DateRangePicker
              label="Timeline"
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
            <Button
              className="period-btn"
              variant="contained"
              color="secondary"
              onClick={dateSubmit}
            >
              {" "}
              Submit{" "}
            </Button>
          </div>
        </Grid>

        <Grid
          item
          sm={12}
          style={{ marginLeft: "2%", zIndex: "0", marginTop: "5%" }}
        >
          {/* Showing retention table :: <div style={{ margin: '2%' }} dangerouslySetInnerHTML={{ __html: cus_table }}></div> */}
          <Grid>
            {ret_cus_obj && ret_cus_obj.length > 0 && (
              <Line
                data={ret_cus_obj}
                options={{
                  title: {
                    display: true,
                    text: "Customer Retention",
                    fontSize: 20,
                  },
                  lineTension: 0.3,
                  legend: { display: true, position: "right" },
                }}
              />
            )}
          </Grid>

          {/* <div style={{ margin: '2%' }} dangerouslySetInnerHTML={{ __html: order_table }}></div> */}
          <Grid>
            {ret_order_obj && ret_order_obj.length > 0 && (
              <Line
                data={ret_order_obj}
                options={{
                  title: { display: true, text: "Order", fontSize: 20 },
                  lineTension: 0.3,
                  legend: { display: true, position: "right" },
                }}
              />
            )}
          </Grid>

          {/* <div style={{ margin: '2%' }} dangerouslySetInnerHTML={{ __html: rev_table }}></div> */}
          <Grid>
            {ret_rev_obj && ret_rev_obj.length > 0 && (
              <Line
                data={ret_rev_obj}
                options={{
                  title: { display: true, text: "Revenue", fontSize: 20 },
                  lineTension: 0.3,
                  legend: { display: true, position: "right" },
                }}
              />
            )}
          </Grid>
        </Grid>
      </Grid>
    </>
  );
}

export default CusRetention;
