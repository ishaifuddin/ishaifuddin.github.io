import { ReactSession } from "react-client-session";
import React, { useState } from "react";

import { format } from "date-fns";
import startOfMonth from "date-fns/startOfMonth";
import endOfMonth from "date-fns/endOfMonth";
import startOfYear from "date-fns/startOfYear";
import { addDays, subDays, getDate } from "date-fns";
import { useSelector, useDispatch } from "react-redux";
import { DateRangePicker } from "rsuite";
import Grid from "@mui/material/Grid";
import moment from "moment";
import { get_cusLocCT_data } from "../../features/cus/CusLocCT";
import { get_trf_data } from "../../features/cus/Cus_new_repeat_total_Chart";
import DehazeIcon from "@material-ui/icons/Dehaze";

import CusCityStateChart from "./CusCityStateChart";
import CusCityStateTable from "./CusCityStateTable";
import CusFromThisMonth from "./CusFromThisMonth";
import CusGroupByFirstMonth from "./CusGroupByFirstMonth";
import { Timeline } from "rsuite";

import Radio from "@mui/material/Radio";
import RadioGroup from "@mui/material/RadioGroup";

import "rsuite/dist/rsuite.css";

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

function CusReport() {
  var dispatch2 = useDispatch();
  var dispatch3 = useDispatch();
  var dispatch6 = useDispatch();

  // var is_dispatched3 = (dispatch_function) => {
  //     ReactSession.get("get_trf_data");
  //     if (ReactSession.get("get_trf_data")) {
  //         return true;
  //     } else {
  //         ReactSession.set("get_trf_data", "1");
  //         return false;
  //     }
  // }

  // if (!(is_dispatched3('get_trf_data'))) {
  //     dispatch2(get_trf_data({ ajax_seg: 2 }));
  // }

  // var trf = useSelector((state) => state.cusTRF);

  // var new_side_note       = trf.f_s_note;
  // var new_side_note_Array = new_side_note.split("shop");

  // var repeat_side_note    = trf.r_s_note;
  // var repeat_side_note_Array = repeat_side_note.split("shop");

  // var total_side_note     = trf.total_s_note;
  // var total_side_note_Array = total_side_note.split("shop");

  // var totcus_object = {
  //     labels: trf.total_label.replace(/\"/g, "").split(","),
  //     datasets: [
  //         {
  //             label: 'Total-Cus',
  //             backgroundColor: 'rgba(75,192,192,1)',
  //             borderColor: 'rgba(0,0,0,1)',
  //             borderWidth: 2,
  //             data: trf.total_data.replace(/\"/g, "").split(",")
  //         }]
  // }

  // var nrcus_object = {
  //     labels: trf.f_r_label.replace(/\"/g, "").split(","),
  //     datasets: [{
  //         label: 'New-Cus',
  //         backgroundColor: 'red',
  //         borderColor: 'rgba(0,0,0,1)',
  //         borderColor: 'red',
  //         borderWidth: 1,
  //         data: trf.ftime_data.replace(/\"/g, "").split(","),
  //     },
  //     {
  //         label: 'Repeat-Cus',
  //         backgroundColor: 'rgba(75,192,192,1)',
  //         borderColor: 'rgba(0,0,0,1)',
  //         borderWidth: 1,
  //         data: trf.ret_data.replace(/\"/g, "").split(","),
  //     }]
  // }

  const totcus_object = {
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
    ],
  };

  const nrcus_object = {
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

  var total_side_note_Array = [];
  var repeat_side_note_Array = [];
  var new_side_note_Array = [];

  var [daterange2, setdrange2] = useState([
    new Date(moment().startOf("month")),
    new Date(moment().endOf("month")),
  ]);
  var [duration2, setduration2] = useState();
  var dateSubmit2 = (e) => {
    dispatch3(
      get_trf_data({
        from: format(daterange2[0], "yyyy-MM-dd"),
        to: format(daterange2[1], "yyyy-MM-dd"),
        unit: duration2,
        ajax_seg: 1,
      })
    );
  };

  var [daterange, setdrange] = useState([
    new Date(moment().startOf("month")),
    new Date(moment().endOf("month")),
  ]);
  var [daterange1, setdrange1] = useState([
    startOfMonth(subDays(new Date(), getDate(new Date()))),
    endOfMonth(subDays(new Date(), getDate(new Date()))),
  ]);
  var [duration, setduration] = useState();
  var [cusType, setcusType] = useState();
  var dateSubmit = (e) => {
    dispatch6(
      get_cusLocCT_data({
        from: format(daterange[0], "yyyy-MM-dd"),
        to: format(daterange[1], "yyyy-MM-dd"),
        from1: format(daterange1[0], "yyyy-MM-dd"),
        to1: format(daterange1[1], "yyyy-MM-dd"),
        unit: duration,
        type: cusType,
        ajax_seg: 1,
      })
    );
  };

  return (
    <>
      <Grid container spacing={3}>
        <Grid item md={12} className="top-wrap">
          <div className="notifications">
            <h6>Customer Reports</h6>
            <div className="notify">
              <DehazeIcon />
            </div>
          </div>
        </Grid>
        <Grid item md={12}>
          <div className="date-period">
            <DateRangePicker
              label="Timeline"
              value={daterange2}
              onChange={setdrange2}
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
                setduration2(e.target.value);
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
            <button
              className="period-btn"
              variant="contained"
              color="secondary"
              onClick={dateSubmit2}
            >
              {" "}
              Submit{" "}
            </button>
          </div>
        </Grid>
        <Grid item md={6}>
          <Card className="dash-card">
            <h6>Total Customer</h6>
            <Line data={totcus_object} />
            <br />
            <Timeline style={{ color: "cornflowerblue", padding: "10px" }}>
              <Timeline.Item>Total : {total_side_note_Array[0]}</Timeline.Item>
              <Timeline.Item>Min : {total_side_note_Array[1]}</Timeline.Item>
              <Timeline.Item>Max :{total_side_note_Array[2]} </Timeline.Item>
              <Timeline.Item>AVG :{total_side_note_Array[3]} </Timeline.Item>
              <Timeline.Item>
                Total Point : {total_side_note_Array[4]}
              </Timeline.Item>
              <Timeline.Item>
                Point Bellow AVG : {total_side_note_Array[5]}
              </Timeline.Item>
              <Timeline.Item>
                Point Above AVG :{total_side_note_Array[6]}
              </Timeline.Item>
              <Timeline.Item>Change :{total_side_note_Array[7]}</Timeline.Item>
              <Timeline.Item>
                AVG Change : {total_side_note_Array[8]}
              </Timeline.Item>
            </Timeline>
          </Card>
        </Grid>
        <Grid item md={6}>
          <Card className="dash-card">
            <h6>Repeat & New Customer</h6>
            <Line data={nrcus_object} />
            <Grid container spacing={2} style={{ padding: 0 }}>
              <Grid item md={6}>
                <Timeline>
                  <Timeline.Item>
                    Total : {repeat_side_note_Array[0]}
                  </Timeline.Item>
                  <Timeline.Item>
                    Min : {repeat_side_note_Array[1]}
                  </Timeline.Item>
                  <Timeline.Item>
                    Max :{repeat_side_note_Array[2]}{" "}
                  </Timeline.Item>
                  <Timeline.Item>
                    AVG :{repeat_side_note_Array[3]}{" "}
                  </Timeline.Item>
                  <Timeline.Item>
                    Total Point : {repeat_side_note_Array[4]}
                  </Timeline.Item>
                  <Timeline.Item>
                    Point Bellow AVG : {repeat_side_note_Array[5]}
                  </Timeline.Item>
                  <Timeline.Item>
                    Point Above AVG :{repeat_side_note_Array[6]}
                  </Timeline.Item>
                  <Timeline.Item>
                    Change :{repeat_side_note_Array[7]}
                  </Timeline.Item>
                  <Timeline.Item>
                    AVG Change : {repeat_side_note_Array[8]}
                  </Timeline.Item>
                </Timeline>
              </Grid>
              <Grid item md={6}>
                <Timeline>
                  <Timeline.Item>
                    Total : {new_side_note_Array[0]}
                  </Timeline.Item>
                  <Timeline.Item>Min : {new_side_note_Array[1]}</Timeline.Item>
                  <Timeline.Item>Max : {new_side_note_Array[2]} </Timeline.Item>
                  <Timeline.Item>AVG : {new_side_note_Array[3]} </Timeline.Item>
                  <Timeline.Item>
                    Total Point : {new_side_note_Array[4]}
                  </Timeline.Item>
                  <Timeline.Item>
                    Point Bellow AVG : {new_side_note_Array[5]}
                  </Timeline.Item>
                  <Timeline.Item>
                    Point Above AVG :{new_side_note_Array[6]}
                  </Timeline.Item>
                  <Timeline.Item>
                    Change : {new_side_note_Array[7]}
                  </Timeline.Item>
                  <Timeline.Item>
                    AVG Change : {new_side_note_Array[8]}
                  </Timeline.Item>
                </Timeline>
              </Grid>
            </Grid>
          </Card>
        </Grid>

        <CusFromThisMonth />
        <Grid item md={4}>
          <CusGroupByFirstMonth />
        </Grid>

        <Grid item md={12}>
          <br />
          <div className="">
            <h6>Location Based Data</h6>
          </div>
        </Grid>

        <Grid item md={12}>
          <div className="date-period" style={{ marginBottom: "-15px" }}>
            <DateRangePicker
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
            <DateRangePicker
              value={daterange1}
              onChange={setdrange1}
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
              onChange={(e) => {
                setduration(e.target.value);
              }}
              style={{
                display: "inline-block",
                fontSize: "13px",
                fontWeight: "500",
              }}
            >
              <Radio type="radio" value="daily" name="gender" /> Daily
              <Radio type="radio" value="weekly" name="gender" /> Weekly
              <Radio type="radio" value="monthly" name="gender" /> Monthly
            </RadioGroup>
            <RadioGroup
              onChange={(e) => {
                setcusType(e.target.value);
              }}
              style={{
                display: "inline-block",
                fontSize: "13px",
                fontWeight: "500",
              }}
            >
              <Radio type="radio" value="both" name="cus_type" /> Both
              <Radio type="radio" value="new" name="cus_type" />
              New
              <Radio type="radio" value="returning" name="cus_type" /> Returning
            </RadioGroup>
            <button
              className="period-btn"
              variant="contained"
              color="secondary"
              onClick={dateSubmit}
            >
              {" "}
              Submit{" "}
            </button>
          </div>
        </Grid>

        <CusCityStateTable />

        <Grid item md={12}>
          <CusCityStateChart />
        </Grid>
      </Grid>
    </>
  );
}

export default CusReport;
