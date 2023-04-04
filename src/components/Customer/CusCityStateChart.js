import { ReactSession } from "react-client-session";
import React from "react";
import { useSelector, useDispatch } from "react-redux";
import { useState } from "react";
import { get_cusLocCT_data } from "../../features/cus/CusLocCT";

import Timeline from "@mui/lab/Timeline";
import TimelineItem from "@mui/lab/TimelineItem";
import TimelineSeparator from "@mui/lab/TimelineSeparator";
import TimelineConnector from "@mui/lab/TimelineConnector";
import TimelineContent from "@mui/lab/TimelineContent";
import TimelineDot from "@mui/lab/TimelineDot";
import TimelineOppositeContent, {
  timelineOppositeContentClasses,
} from "@mui/lab/TimelineOppositeContent";

import PeopleAltIcon from "@mui/icons-material/PeopleAlt";
import ShoppingBasketIcon from "@mui/icons-material/ShoppingBasket";
import LayersRoundedIcon from "@mui/icons-material/LayersRounded";
import AttachMoneyIcon from "@mui/icons-material/AttachMoney";

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
import { Card } from "react-bootstrap";

ChartJS.register(
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend
);

function CusCityStateChart() {
  // var dispatch5 = useDispatch();

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

  // {/* Billing And Shipping City, Customer & Revenue Chart */ }
  // var shipcity_rev_obj = {};
  // var shipcity_rev_dataset = structuredClone(CusLocChartTable.shipcity_rev);
  // var label = structuredClone(CusLocChartTable.label);
  // shipcity_rev_obj.labels = label;
  // shipcity_rev_obj.datasets = shipcity_rev_dataset;

  // var shipcity_cus_obj = {};
  // var shipcity_cus_dataset = structuredClone(CusLocChartTable.shipcity_cus);
  // shipcity_cus_obj.labels = label;
  // shipcity_cus_obj.datasets = shipcity_cus_dataset;

  // var billcity_cus_obj = {};
  // var billcity_cus_dataset = structuredClone(CusLocChartTable.billcity_cus);
  // billcity_cus_obj.labels = label;
  // billcity_cus_obj.datasets = billcity_cus_dataset;

  // var billcity_rev_obj = {};
  // var billcity_rev_dataset = structuredClone(CusLocChartTable.billcity_rev);
  // billcity_rev_obj.labels = label;
  // billcity_rev_obj.datasets = billcity_rev_dataset;

  /////////////////////////// DUMMY DATA /////////////////////////////////
  /////////////////////////// DUMMY DATA /////////////////////////////////
  /////////////////////////// DUMMY DATA /////////////////////////////////
  /////////////////////////// DUMMY DATA /////////////////////////////////
  /////////////////////////// DUMMY DATA /////////////////////////////////
  /////////////////////////// DUMMY DATA /////////////////////////////////

  const billcity_cus_obj = {
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

  const shipcity_cus_obj = {
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

  const billcity_rev_obj = {
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

  const shipcity_rev_obj = {
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

  var option = {
    // title: {
    //     display: true,
    //     text: 'Customer',
    //     fontSize: 20
    // },

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

  return (
    <Card className="dash-card">
      <h6>Customer City State Chart</h6>
      <br />

      <Timeline className="timeline">
        <TimelineItem>
          <TimelineSeparator>
            <TimelineDot className="tml-title-icon">
              <span>Customer :: Billing city</span>
              <ShoppingBasketIcon />
            </TimelineDot>
            <TimelineConnector />
          </TimelineSeparator>
          <TimelineContent className="tml-chart">
            {billcity_cus_obj.labels && billcity_cus_obj.datasets && (
              <Line data={billcity_cus_obj} options={option} />
            )}
          </TimelineContent>
        </TimelineItem>

        <TimelineItem>
          <TimelineSeparator>
            <TimelineDot className="tml-title-icon">
              <span>Customer :: Shipping city</span>
              <LayersRoundedIcon />
            </TimelineDot>
            <TimelineConnector />
          </TimelineSeparator>
          <TimelineContent className="tml-chart">
            {shipcity_cus_obj.labels && shipcity_cus_obj.datasets && (
              <Line data={shipcity_cus_obj} options={option} />
            )}
          </TimelineContent>
        </TimelineItem>

        <TimelineItem>
          <TimelineSeparator>
            <TimelineDot className="tml-title-icon">
              <span>Revenue :: Billing city</span>
              <AttachMoneyIcon />
            </TimelineDot>
            <TimelineConnector />
          </TimelineSeparator>
          <TimelineContent className="tml-chart">
            {billcity_rev_obj.labels && billcity_rev_obj.datasets && (
              <Line data={billcity_rev_obj} options={option} />
            )}
          </TimelineContent>
        </TimelineItem>

        <TimelineItem>
          <TimelineSeparator>
            <TimelineDot className="tml-title-icon">
              <span>Revenue :: Shipping City</span>
              <PeopleAltIcon />
            </TimelineDot>
            <TimelineConnector />
          </TimelineSeparator>
          <TimelineContent className="tml-chart">
            {shipcity_rev_obj.labels && shipcity_rev_obj.datasets && (
              <>
                <Line data={shipcity_rev_obj} options={option} />
              </>
            )}
          </TimelineContent>
        </TimelineItem>
      </Timeline>
    </Card>
  );
}

export default CusCityStateChart;
