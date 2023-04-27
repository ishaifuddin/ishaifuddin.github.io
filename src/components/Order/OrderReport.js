import { ReactSession } from "react-client-session";
import React, { useEffect, useState } from "react";

import { format } from "date-fns";
import startOfMonth from "date-fns/startOfMonth";
import endOfMonth from "date-fns/endOfMonth";
import startOfYear from "date-fns/startOfYear";

import { addDays, subDays, getDate } from "date-fns";
import { useSelector, useDispatch } from "react-redux";
import { DateRangePicker } from "rsuite";
import "rsuite/dist/rsuite.css";
import Grid from "@mui/material/Grid";
import moment from "moment";

import { get_OrderAndRev_data } from "../../features/order/OrderReport";
import { get_OrderLocCT_data } from "../../features/order/OrderReport";
import ShipCity from "./OrderSegFilters/ShipCity";

import Timeline from "@mui/lab/Timeline";
import TimelineItem from "@mui/lab/TimelineItem";
import TimelineSeparator from "@mui/lab/TimelineSeparator";
import TimelineConnector from "@mui/lab/TimelineConnector";
import TimelineContent from "@mui/lab/TimelineContent";
import TimelineDot from "@mui/lab/TimelineDot";
import TimelineOppositeContent, {
  timelineOppositeContentClasses,
} from "@mui/lab/TimelineOppositeContent";

import ShoppingBasketIcon from "@mui/icons-material/ShoppingBasket";
import AttachMoneyIcon from "@mui/icons-material/AttachMoney";

import OrderCityStateTable from "./OrderCityStateTable";

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
import { Card } from "react-bootstrap";
import { IconH6 } from "@tabler/icons";
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

function OrderReport() {
  var dispatch1 = useDispatch();
  var dispatch2 = useDispatch();

  const dotStyle = {
    width: "10px",
    height: "10px",
    borderRadius: "50%",
    backgroundColor: "green",
  };

  useEffect(() => {
    var is_dispatched1 = () => {
      ReactSession.get("get_OrderLocCT_data");
      if (ReactSession.get("get_OrderLocCT_data")) {
        return true;
      } else {
        ReactSession.set("get_OrderLocCT_data", "1");
        return false;
      }
    };

    var is_dispatched2 = () => {
      ReactSession.get("get_OrderAndRev_data");
      if (ReactSession.get("get_OrderAndRev_data")) {
        return true;
      } else {
        ReactSession.set("get_OrderAndRev_data", "1");
        return false;
      }
    };

    if (!is_dispatched1()) {
      dispatch1(get_OrderLocCT_data({ ajax_call: 2 }));
    }

    if (!is_dispatched2()) {
      dispatch2(get_OrderAndRev_data({ ajax_call: 2 }));
    }
  }, []);

  var Order_shipcity_revenue_label = useSelector(
    (state) => state.order_numrev_shipLoc_ChartTable.label
  );
  var label = structuredClone(Order_shipcity_revenue_label);

  var Order_shipcity_revenue = useSelector(
    (state) => state.order_numrev_shipLoc_ChartTable.shipcity_revenue
  );
  var shipcity_rev_obj = {};
  if (Order_shipcity_revenue.length > 0) {
    shipcity_rev_obj.labels = label;
    shipcity_rev_obj.datasets = structuredClone(Order_shipcity_revenue);
  }

  var Order_shipcity_order = useSelector(
    (state) => state.order_numrev_shipLoc_ChartTable.shipcity_order
  );
  var shipcity_order_obj = {};
  if (Order_shipcity_order.length > 0) {
    shipcity_order_obj.labels = label;
    shipcity_order_obj.datasets = structuredClone(Order_shipcity_order);
  }

  var total_order_note = useSelector(
    (state) => state.order_numrev_shipLoc_ChartTable.total_order_note
  );
  var total_rev_note = useSelector(
    (state) => state.order_numrev_shipLoc_ChartTable.total_rev_note
  );
  var new_order_note = useSelector(
    (state) => state.order_numrev_shipLoc_ChartTable.new_order_note
  );
  var new_rev_note = useSelector(
    (state) => state.order_numrev_shipLoc_ChartTable.new_rev_note
  );
  var repeat_order_note = useSelector(
    (state) => state.order_numrev_shipLoc_ChartTable.repeat_order_note
  );
  var repeat_rev_note = useSelector(
    (state) => state.order_numrev_shipLoc_ChartTable.repeat_rev_note
  );

  // Week Day Revenue
  var wd_rev_data =
    useSelector(
      (state) => state.order_numrev_shipLoc_ChartTable.week_day_rev_data
    ) || [];
  var wd_rev_labels =
    useSelector(
      (state) => state.order_numrev_shipLoc_ChartTable.week_day_rev_label
    ) || [];
  //var wd_revenue = {};
  var wd_revenue = {
    labels: ["", "", "", "", "", "", "", "", "", "", "", ""],
    datasets: [
      {
        label: "Weekday Rev ",
        data: [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
        backgroundColor: "rgba(75,192,192,0.4)",
        borderColor: "rgba(75,192,192,1)",
      },
    ],
  };
  if (wd_rev_data.length && wd_rev_labels.length) {
    wd_revenue = {
      datasets: [
        {
          label: "Weekday Revenue",
          backgroundColor: "rgba(75,192,192,1)",
          borderColor: "rgba(0,0,0,1)",
          borderWidth: 2,
          //data: Order_numrev_shiploc_data.week_day_rev_data.replace(/\"/g, "").split(",")
          data: wd_rev_data,
        },
      ],
      //labels: Order_numrev_shiploc_data.week_day_rev_label.replace(/\"/g, "").split(","),
      labels: wd_rev_labels,
    };
  }

  //  Week Day Order
  //var wd_order = {};
  var wd_order = {
    labels: ["", "", "", "", "", "", "", "", "", "", "", ""],
    datasets: [
      {
        label: "Weekday Order ",
        data: [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
        backgroundColor: "rgba(75,192,192,0.4)",
        borderColor: "rgba(75,192,192,1)",
      },
    ],
  };

  var wd_order_data =
    useSelector(
      (state) => state.order_numrev_shipLoc_ChartTable.week_day_or_num_data
    ) || [];
  var wd_order_labels =
    useSelector(
      (state) => state.order_numrev_shipLoc_ChartTable.week_day_or_num_label
    ) || [];

  if (wd_order_data.length && wd_order_labels.length) {
    wd_order = {
      datasets: [
        {
          label: "Weekday Revenue",
          backgroundColor: "rgba(75,192,192,1)",
          borderColor: "rgba(0,0,0,1)",
          borderWidth: 2,
          //data: Order_numrev_shiploc_data.week_day_or_num_data.replace(/\"/g, "").split(",")
          data: wd_order_data,
        },
      ],
      //labels: Order_numrev_shiploc_data.week_day_or_num_label.replace(/\"/g, "").split(","),
      labels: wd_order_labels,
    };
  }

  //  PM  Order
  var pm_order = {};
  var pm_order = {
    labels: ["", "", "", "", "", "", "", "", "", "", "", ""],
    datasets: [
      {
        label: "Payment Method Order",
        data: [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
        backgroundColor: "rgba(75,192,192,0.4)",
        borderColor: "rgba(75,192,192,1)",
      },
    ],
  };

  var pm_order_data =
    useSelector(
      (state) => state.order_numrev_shipLoc_ChartTable.paymeth_or_num_data
    ) || [];
  var pm_order_data_label =
    useSelector(
      (state) => state.order_numrev_shipLoc_ChartTable.paymeth_or_num_label
    ) || [];

  if (pm_order_data.length && pm_order_data_label.length) {
    pm_order = {
      datasets: [
        {
          label: "Revenue",
          backgroundColor: "rgba(75,192,192,1)",
          borderColor: "rgba(0,0,0,1)",
          borderWidth: 2,
          // data: Order_numrev_shiploc_data.paymeth_or_num_data.replace(/\"/g, "").split(",")
          data: pm_order_data,
        },
      ],
      // labels: Order_numrev_shiploc_data.paymeth_or_num_label.replace(/\"/g, "").split(","),
      labels: pm_order_data_label,
    };
  }

  //  PM  Revenue
  //var pm_revenue = {};
  var pm_revenue = {
    labels: ["", "", "", "", "", "", "", "", "", "", "", ""],
    datasets: [
      {
        label: "Payment Method Revenue",
        data: [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
        backgroundColor: "rgba(75,192,192,0.4)",
        borderColor: "rgba(75,192,192,1)",
      },
    ],
  };

  var pm_revenue_data =
    useSelector(
      (state) => state.order_numrev_shipLoc_ChartTable.paymeth_rev_data
    ) || [];
  var pm_revenue_data_labels =
    useSelector(
      (state) => state.order_numrev_shipLoc_ChartTable.paymeth_rev_label
    ) || [];

  if (pm_revenue_data.length && pm_revenue_data_labels.length) {
    pm_revenue = {
      datasets: [
        {
          label: "Revenue",
          backgroundColor: "rgba(75,192,192,1)",
          borderColor: "rgba(0,0,0,1)",
          borderWidth: 2,
          //data: Order_numrev_shiploc_data.paymeth_rev_data.replace(/\"/g, "").split(",")
          data: pm_revenue_data,
        },
      ],
      //labels: Order_numrev_shiploc_data.paymeth_rev_label.replace(/\"/g, "").split(","),
      labels: pm_revenue_data_labels,
    };
  }

  //Total Order
  //var to_order = {};
  var to_order = {
    labels: ["", "", "", "", "", "", "", "", "", "", "", ""],
    datasets: [
      {
        label: "Total Order",
        data: [10, 20, 30, 40, 50, 60, 70, 80, 90, 100, 110, 120],
        backgroundColor: "rgba(75,192,192,0.4)",
        borderColor: "rgba(75,192,192,1)",
      },
    ],
  };

  var total_order_data =
    useSelector(
      (state) => state.order_numrev_shipLoc_ChartTable.to_or_num_data
    ) || [];
  var total_order_labels =
    useSelector(
      (state) => state.order_numrev_shipLoc_ChartTable.to_or_num_label
    ) || [];

  if (total_order_data.length && total_order_labels.length) {
    to_order = {
      datasets: [
        {
          label: "Total Order",
          backgroundColor: "rgba(75,192,192,1)",
          borderColor: "rgba(0,0,0,1)",
          borderWidth: 2,
          //data: Order_numrev_shiploc_data.to_or_num_data.replace(/\"/g, "").split(",")
          data: total_order_data,
        },
      ],
      //labels: Order_numrev_shiploc_data.to_or_num_label.replace(/\"/g, "").split(","),
      labels: total_order_labels,
    };
  }

  //Total Revnue
  //var to_revenue = {};
  var to_revenue = {
    labels: ["", "", "", "", "", "", "", "", "", "", "", ""],
    datasets: [
      {
        label: "Total Revenue",
        data: [
          1000, 2000, 3000, 4000, 5000, 6000, 7000, 8000, 9000, 10000, 11000,
          12000,
        ],
        backgroundColor: "rgba(75,192,192,0.4)",
        borderColor: "rgba(75,192,192,1)",
      },
    ],
  };

  var total_revenue_data =
    useSelector(
      (state) => state.order_numrev_shipLoc_ChartTable.to_or_rev_data
    ) || [];
  var total_revenue_labels =
    useSelector(
      (state) => state.order_numrev_shipLoc_ChartTable.to_or_rev_label
    ) || [];

  if (total_revenue_data.length && total_revenue_labels.length) {
    to_revenue = {
      datasets: [
        {
          label: "Total Revenue",
          backgroundColor: "rgba(75,192,192,1)",
          borderColor: "rgba(0,0,0,1)",
          borderWidth: 2,
          //data: Order_numrev_shiploc_data.to_or_rev_data.replace(/\"/g, "").split(",")
          data: total_revenue_data,
        },
      ],
      //labels: Order_numrev_shiploc_data.to_or_rev_label.replace(/\"/g, "").split(","),
      labels: total_revenue_labels,
    };
  }

  //New & Ret Order
  //var new_ret_order = {};
  var new_ret_order = {
    labels: ["", "", "", "", "", "", "", "", "", "", "", ""],
    datasets: [
      {
        label: "New Order",
        data: [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
        backgroundColor: "rgba(75,192,192,0.4)",
        borderColor: "rgba(75,192,192,1)",
      },
      {
        label: "Repeat Order",
        data: [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
        backgroundColor: "rgba(75,192,192,0.4)",
        borderColor: "rgba(75,192,192,1)",
      },
    ],
  };

  var new_order_data =
    useSelector(
      (state) => state.order_numrev_shipLoc_ChartTable.new_or_num_data
    ) || [];
  var ret_order_data =
    useSelector(
      (state) => state.order_numrev_shipLoc_ChartTable.ret_or_num_data
    ) || [];
  var newret_labels =
    useSelector(
      (state) => state.order_numrev_shipLoc_ChartTable.new_or_num_label
    ) || [];

  if (new_order_data) {
    new_ret_order = {
      datasets: [
        {
          label: "New Order ",
          backgroundColor: "rgba(75,192,192,1)",
          borderColor: "rgba(0,0,0,1)",
          borderWidth: 2,
          //data: Order_numrev_shiploc_data.new_or_num_data.replace(/\"/g, "").split(",")
          data: new_order_data,
        },
        {
          label: "Repeat Order ",
          backgroundColor: "rgba(75,192,192,1)",
          borderColor: "rgba(0,0,0,1)",
          borderWidth: 2,
          data: ret_order_data,
          //data: Order_numrev_shiploc_data.ret_or_num_data.replace(/\"/g, "").split(",")
        },
      ],
      //labels: Order_numrev_shiploc_data.new_or_num_label.replace(/\"/g, "").split(","),
      labels: newret_labels,
    };
  }

  // New & Ret Revenue
  //var new_ret_revenue = {};
  var new_ret_revenue = {
    labels: ["", "", "", "", "", "", "", "", "", "", "", ""],
    datasets: [
      {
        label: "New Rev",
        data: [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
        backgroundColor: "rgba(75,192,192,0.4)",
        borderColor: "rgba(75,192,192,1)",
      },
      {
        label: "Repeat Rev",
        data: [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
        backgroundColor: "rgba(75,192,192,0.4)",
        borderColor: "rgba(75,192,192,1)",
      },
    ],
  };

  var NewOrder_Revenue_data =
    useSelector(
      (state) => state.order_numrev_shipLoc_ChartTable.new_or_rev_data
    ) || [];
  var RetOrder_Revenue_data =
    useSelector(
      (state) => state.order_numrev_shipLoc_ChartTable.ret_or_rev_data
    ) || [];
  var newret_labels =
    useSelector(
      (state) => state.order_numrev_shipLoc_ChartTable.new_or_rev_label
    ) || [];

  if (NewOrder_Revenue_data) {
    new_ret_revenue = {
      datasets: [
        {
          label: "New Revenue",
          backgroundColor: "rgba(75,192,192,1)",
          borderColor: "rgba(0,0,0,1)",
          borderWidth: 2,
          //data: Order_numrev_shiploc_data.new_or_rev_data.replace(/\"/g, "").split(",")
          data: NewOrder_Revenue_data,
        },
        {
          label: "Repeat Revenue",
          backgroundColor: "rgba(75,192,192,1)",
          borderColor: "rgba(0,0,0,1)",
          borderWidth: 2,
          //data: Order_numrev_shiploc_data.ret_or_rev_data.replace(/\"/g, "").split(",")
          data: RetOrder_Revenue_data,
        },
      ],
      //labels: Order_numrev_shiploc_data.new_or_rev_label.replace(/\"/g, "").split(","),
      labels: newret_labels,
    };
  }

  var [dateRange, setDateRange] = useState([
    new Date(moment().startOf("month")),
    new Date(moment().endOf("month")),
  ]);
  var [dateRange1, setDateRange1] = useState([
    startOfMonth(subDays(new Date(), getDate(new Date()))),
    endOfMonth(subDays(new Date(), getDate(new Date()))),
  ]);
  var [dr, setdr] = useState([
    new Date(moment().startOf("month")),
    new Date(moment().endOf("month")),
  ]);
  var [dr1, setdr1] = useState([
    startOfMonth(subDays(new Date(), getDate(new Date()))),
    endOfMonth(subDays(new Date(), getDate(new Date()))),
  ]);

  var [duration, setduration] = useState();

  var [group1, setgroup1] = useState();
  var [group2, setgroup2] = useState();

  var dateSubmit = (e) => {
    e.preventDefault();
    dispatch1(
      get_OrderAndRev_data({
        from: format(dateRange[0], "yyyy-MM-dd"),
        to: format(dateRange[1], "yyyy-MM-dd"),
        from1: format(dateRange1[0], "yyyy-MM-dd"),
        to1: format(dateRange1[1], "yyyy-MM-dd"),
        unit: duration,
        ajax_call: 1,
      })
    );
  };

  var dateSubmit1 = (event) => {
    event.preventDefault();
    var fdata = new FormData(event.target);
    var data = Object.fromEntries(fdata.entries());

    dispatch1(get_OrderLocCT_data(data));
  };

  var lineOptions = {
    onClick: (e, element) => {
      if (element.length > 0) {
        var ind = element[0]._index;
      }
    },

    maintainAspectRatio: false,
    responsive: true,
    scales: {
      y: {
        beginAtZero: true,
        display: true,
      },
      x: {
        display: false,
      },
    },

    legend: { display: false },
    tooltips: { enabled: true },
  };

  return (
    <Grid container spacing={3}>
      <Grid item md={12} className="top-wrap">
        <div className="notifications">
          <h6>Orders Report</h6>
          <div className="notify">
            <NavButton />
          </div>
        </div>
      </Grid>
      <Grid item md={12}>
        <form
          className="date-period"
          onSubmit={dateSubmit}
          style={{ marginBottom: "-15px" }}
        >
          <DateRangePicker
            // label="Timeline"
            value={dateRange}
            onChange={setDateRange}
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
          <input
            name="from"
            type={"hidden"}
            value={format(dateRange[0], "yyyy-MM-dd")}
          />
          <input
            name="to"
            type={"hidden"}
            value={format(dateRange[1], "yyyy-MM-dd")}
          />
          <DateRangePicker
            // label="Timeline"
            value={dateRange1}
            onChange={setDateRange1}
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
          <input
            name="from1"
            type={"hidden"}
            value={format(dateRange1[0], "yyyy-MM-dd")}
          />
          <input
            name="to1"
            type={"hidden"}
            value={format(dateRange1[1], "yyyy-MM-dd")}
          />
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
            />
            Day
            <Radio
              checked={duration === "weekly"}
              value="weekly"
              name="duration"
            />
            Week
            <Radio
              checked={duration === "monthly"}
              value="monthly"
              name="duration"
            />
            Month
          </RadioGroup>
          <input type="hidden" value="1" name="ajax_call" />
          <input
            className="period-btn"
            variant="contained"
            color="secondary"
            type="submit"
            value="Submit"
          />
        </form>
      </Grid>

      <Grid item xl={6} xs={12}>
        <Card className="dash-card">
          <h6>Total Order</h6>

          {to_order && typeof to_order === "object" && <Line data={to_order} />}

          <p>
            <strong>
              Total :: {total_order_note && total_order_note[0].order}
            </strong>
            &nbsp;&nbsp;
            <strong>
              Min :: {total_order_note && total_order_note[0].min_order}
            </strong>
            &nbsp;&nbsp;
            <strong>
              Max :: {total_order_note && total_order_note[0].max_order}
            </strong>
            &nbsp;&nbsp;
            <strong>
              Avg :: {total_order_note && total_order_note[0].avg_order}
            </strong>
          </p>

          <p>
            <strong>
              Total Point ::
              {total_order_note && total_order_note[0].total_point}
            </strong>
            &nbsp;&nbsp;
            <strong>
              Point Bellow Average ::
              {total_order_note && total_order_note[0].bellow_avg}
            </strong>
            &nbsp;&nbsp;
            <strong>
              Point Above Average ::
              {total_order_note && total_order_note[0].above_avg}
            </strong>
          </p>

          <p>
            <strong>
              Change :: {total_order_note && total_order_note[0].change}
            </strong>
            &nbsp;&nbsp;
            <strong>
              Avg Change :: {total_order_note && total_order_note[0].avg_change}
            </strong>
          </p>
        </Card>
      </Grid>

      <Grid item xl={6} xs={12}>
        <Card className="dash-card">
          <h6>Total Revenue</h6>

          {to_revenue && typeof to_revenue === "object" && (
            <Line data={to_revenue} />
          )}

          <p>
            <strong>
              Total :: {total_rev_note && total_rev_note[0].amount}
            </strong>
            &nbsp;&nbsp;
            <strong>
              Min :: {total_rev_note && total_rev_note[0].min_amount}
            </strong>
            &nbsp;&nbsp;
            <strong>
              Max :: {total_rev_note && total_rev_note[0].max_amount}
            </strong>
            &nbsp;&nbsp;
            <strong>
              Avg :: {total_rev_note && total_rev_note[0].avg_amount}
            </strong>
          </p>

          <p>
            <strong>
              Total Point :: {total_rev_note && total_rev_note[0].total_point}
            </strong>
            &nbsp;&nbsp;
            <strong>
              Point Bellow Average ::
              {total_rev_note && total_rev_note[0].bellow_avg}
            </strong>
            &nbsp;&nbsp;
            <strong>
              Point Above Average ::
              {total_rev_note && total_rev_note[0].above_avg}
            </strong>
          </p>

          <p>
            <strong>
              Change :: {total_rev_note && total_rev_note[0].change}
            </strong>
            &nbsp;&nbsp;
            <strong>
              Avg Change :: {total_rev_note && total_rev_note[0].avg_change}
            </strong>
          </p>
        </Card>
      </Grid>

      <Grid item xl={6} xs={12}>
        <Card className="dash-card">
          <h6>Order from New and Returning Customer</h6>

          <di style={{ height: "300px" }}>
            {new_ret_order && typeof new_ret_order === "object" && (
              <Line data={new_ret_order} options={lineOptions} />
            )}
          </di>

          <div>
            <p>
              <strong>
                Total :: {new_order_note && new_order_note[0].order} :
                {repeat_order_note && repeat_order_note[0].order}
              </strong>
              &nbsp;&nbsp;
              <strong>
                Min :: {new_order_note && new_order_note[0].min_order} :
                {repeat_order_note && repeat_order_note[0].min_order}
              </strong>
              &nbsp;&nbsp;
              <strong>
                Max :: {new_order_note && new_order_note[0].max_order} :
                {repeat_order_note && repeat_order_note[0].max_order}
              </strong>
              &nbsp;&nbsp;
              <strong>
                Avg :: {new_order_note && new_order_note[0].avg_order} :
                {repeat_order_note && repeat_order_note[0].avg_order}
              </strong>
            </p>

            <p>
              <strong>
                Total Point :: {new_order_note && new_order_note[0].total_point}
                : {repeat_order_note && repeat_order_note[0].total_point}
              </strong>
              &nbsp;&nbsp;
              <strong>
                Point Bellow Avg ::
                {new_order_note && new_order_note[0].bellow_avg} :
                {repeat_order_note && repeat_order_note[0].bellow_avg}
              </strong>
              &nbsp;&nbsp;
              <strong>
                Point Above Avg ::
                {new_order_note && new_order_note[0].above_avg} :
                {repeat_order_note && repeat_order_note[0].above_avg}
              </strong>
            </p>

            <p>
              <strong>
                Change :: {new_order_note && new_order_note[0].change} :
                {repeat_order_note && repeat_order_note[0].change}
              </strong>
              &nbsp;&nbsp;
              <strong>
                Avg Change :: {new_order_note && new_order_note[0].avg_change} :
                {repeat_order_note && repeat_order_note[0].avg_change}
              </strong>
            </p>
          </div>
        </Card>
      </Grid>

      <Grid item xl={6} xs={12}>
        <Card className="dash-card">
          <h6>Revenue from New and Repeat Customer</h6>

          <div style={{ height: "300px" }}>
            {new_ret_revenue && typeof new_ret_revenue === "object" && (
              <Line data={new_ret_revenue} options={lineOptions} />
            )}
          </div>

          <div>
            <p>
              <strong>
                Total :: {new_rev_note && new_rev_note[0].amount} :
                {repeat_rev_note && repeat_rev_note[0].amount}
              </strong>
              &nbsp;&nbsp;
              <strong>
                Min :: {new_rev_note && new_rev_note[0].min_amount} :
                {repeat_rev_note && repeat_rev_note[0].min_amount}
              </strong>
              &nbsp;&nbsp;
              <strong>
                Max :: {new_rev_note && new_rev_note[0].max_amount} :
                {repeat_rev_note && repeat_rev_note[0].max_amount}
              </strong>
              &nbsp;&nbsp;
              <strong>
                Avg :: {new_rev_note && new_rev_note[0].avg_amount} :
                {repeat_rev_note && repeat_rev_note[0].avg_amount}
              </strong>
            </p>

            <p>
              <strong>
                Total Point :: {new_rev_note && new_rev_note[0].total_point} :
                {repeat_rev_note && repeat_rev_note[0].total_point}
              </strong>
              &nbsp;&nbsp;
              <strong>
                Point Bellow Avg :: {new_rev_note && new_rev_note[0].bellow_avg}
                : {repeat_rev_note && repeat_rev_note[0].bellow_avg}
              </strong>
              &nbsp;&nbsp;
              <strong>
                Point Above Avg :: {new_rev_note && new_rev_note[0].above_avg} :
                {repeat_rev_note && repeat_rev_note[0].above_avg}
              </strong>
            </p>

            <p>
              <strong>
                Change :: {new_rev_note && new_rev_note[0].change} :
                {repeat_rev_note && repeat_rev_note[0].change}
              </strong>
              &nbsp;&nbsp;
              <strong>
                Avg Change :: {new_rev_note && new_rev_note[0].avg_change} :
                {repeat_rev_note && repeat_rev_note[0].avg_change}
              </strong>
            </p>
          </div>
        </Card>
      </Grid>

      <Grid item xl={6} xs={12}>
        <Card className="dash-card">
          <h6>Order from different weekdays</h6>
          <Grid style={{ height: "300px", width: "600" }}>
            {wd_order && typeof wd_order === "object" && (
              <Line data={wd_order} options={lineOptions} />
            )}
          </Grid>
        </Card>
      </Grid>
      <Grid item xl={6} xs={12}>
        <Card className="dash-card">
          <h6> Revenue from different weekdays </h6>
          <Grid style={{ height: "300px", width: "600" }}>
            {wd_revenue && typeof wd_revenue === "object" && (
              <Line data={wd_revenue} options={lineOptions} />
            )}
          </Grid>
        </Card>
      </Grid>
      <Grid item xl={6} xs={12}>
        <Card className="dash-card">
          <h6>Order from different Payment method</h6>
          <Grid style={{ height: "300px", width: "600" }}>
            {pm_order && typeof pm_order === "object" && (
              <Line data={pm_order} options={lineOptions} />
            )}
          </Grid>
        </Card>
      </Grid>
      <Grid item xl={6} xs={12}>
        <Card className="dash-card">
          <h6>Revenue from different Payment method</h6>
          <Grid style={{ height: "300px", width: "600" }}>
            {pm_revenue && typeof pm_revenue === "object" && (
              <Line data={pm_revenue} options={lineOptions} />
            )}
          </Grid>
        </Card>
      </Grid>

      <OrderCityStateTable />

      <Grid item md={12} sm={12} xs={12}>
        {/* Order Shipping City Charts And Tables */}
        <form
          className="date-period"
          onSubmit={dateSubmit1}
          style={{ marginBottom: "-15px" }}
        >
          {/* Form Including Two Timeline , Order Type, Time Period */}
          <DateRangePicker
            // label="Timeline"
            value={dr}
            onChange={setdr}
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

          <input
            name="from"
            type={"hidden"}
            value={format(dr[0], "yyyy-MM-dd")}
          />
          <input
            name="to"
            type={"hidden"}
            value={format(dr[1], "yyyy-MM-dd")}
          />

          <DateRangePicker
            // label="Timeline"
            value={dr1}
            onChange={setdr1}
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

          <input
            name="from1"
            type={"hidden"}
            value={format(dr1[0], "yyyy-MM-dd")}
          />
          <input
            name="to1"
            type={"hidden"}
            value={format(dr1[1], "yyyy-MM-dd")}
          />

          {/* <div style={{ display: 'inline-flex', margin: '7px' }} onChange={(e) => { setgroup1(e.target.value) }}>
                        <input type="radio" value="daily" name="group1" /> Daily
                        <input type="radio" value="weekly" name="group1" /> Weekly
                        <input type="radio" value="monthly" name="group1" /> Monthly
                    </div> */}
          <RadioGroup
            style={{
              display: "inline-block",
              fontSize: "13px",
              fontWeight: "500",
            }}
            onChange={(e) => {
              setgroup1(e.target.value);
            }}
          >
            <Radio checked={group1 === "daily"} value="daily" name="group1" />
            Day
            <Radio checked={group1 === "weekly"} value="weekly" name="group1" />
            Week
            <Radio
              checked={group1 === "monthly"}
              value="monthly"
              name="group1"
            />
            Month
          </RadioGroup>

          {/* <div style={{ display: 'inline-flex', margin: '7px' }} onChange={(e) => { setgroup2(e.target.value) }}>
                        <input type="radio" value="0" name="group2" /> All order
                        <input type="radio" value="1" name="group2" />New-Cus order
                        <input type="radio" value="2" name="group2" />Ret-Cus order
                    </div> */}
          <RadioGroup
            style={{
              display: "inline-block",
              fontSize: "13px",
              fontWeight: "500",
            }}
            onChange={(e) => {
              setgroup2(e.target.value);
            }}
          >
            <Radio checked={group2 === "0"} value="0" name="group2" /> Day
            <Radio checked={group2 === "1"} value="1" name="group2" /> Week
            <Radio checked={group2 === "2"} value="2" name="group2" /> Month
          </RadioGroup>
          <input
            className="period-btn"
            variant="contained"
            color="secondary"
            type="submit"
            value="Submit"
          />
          <input type="hidden" value="1" name="ajax_call" />
          <br />
          <br />
          <strong> Shipping City to show in Chart </strong>
          <ShipCity />
        </form>
      </Grid>
      <Grid item md={12} sm={12} xs={12}>
        <Card className="dash-card">
          <Timeline className="timeline">
            <TimelineItem>
              <TimelineSeparator>
                <TimelineDot className="tml-title-icon">
                  <span>Revenue :: shipping city</span>
                  <AttachMoneyIcon />
                </TimelineDot>
                <TimelineConnector style={{ background: "teal" }} />
              </TimelineSeparator>
              <TimelineContent className="tml-chart">
                {Order_shipcity_revenue &&
                  Order_shipcity_revenue.length > 0 && (
                    <Line data={shipcity_rev_obj} options={lineOptions} />
                  )}
              </TimelineContent>
            </TimelineItem>

            <TimelineItem>
              <TimelineSeparator>
                <TimelineDot className="tml-title-icon">
                  <span>Order :: shipping city</span>
                  <ShoppingBasketIcon />
                </TimelineDot>
                <TimelineConnector style={{ background: "teal" }} />
              </TimelineSeparator>
              <TimelineContent className="tml-chart">
                {Order_shipcity_order && Order_shipcity_order.length > 0 && (
                  <Line data={shipcity_order_obj} options={lineOptions} />
                )}
              </TimelineContent>
            </TimelineItem>
          </Timeline>
        </Card>
      </Grid>
    </Grid>
  );
}

export default OrderReport;
