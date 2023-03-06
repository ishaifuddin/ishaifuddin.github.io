import React, { useState, useEffect } from "react";


import { format } from 'date-fns'
import startOfMonth from 'date-fns/startOfMonth'
import endOfMonth from 'date-fns/endOfMonth'
import startOfYear from 'date-fns/startOfYear'

import { addDays, subDays, getDate } from 'date-fns';
import { useSelector, useDispatch } from "react-redux";

import { get_init_data } from "../features/dash/dashboard";

import { DateRangePicker } from 'rsuite';

import Grid from '@mui/material/Grid';

import DashRecentSales from "../components/Dash/DashRecentSales";
import DashTops from "../components/Dash/DashTops";

import moment from 'moment';

import "rsuite/dist/rsuite.css";

import { Timeline } from 'rsuite';

import Button from '@mui/material/Button';

import Radio from '@mui/material/Radio';
import RadioGroup from '@mui/material/RadioGroup';


import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend,
} from 'chart.js';
import { Line } from 'react-chartjs-2';
ChartJS.register(
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend
);


function Dashboard() {

  var dispatch = useDispatch();

 
  // if (!(corp !== undefined && corp !== null)) {
  //   dispatch(get_init_data({ ajax_call: 2 }));
  // }



  useEffect(() => {
    dispatch(get_init_data({ ajax_call: 2 }));
  }, [])



  // ChartJS.register(LineController, LineElement, PointElement, LinearScale, Title);
  
  var corp = useSelector((state) => state.dash.corp_chart);

  var rev_note      = corp.rev_note && corp.rev_note.split("OO");
  var prof_note     = corp.profit_note && corp.profit_note.split("OO");
  var cus_note      = corp.cus_note;
  var order_note    = corp.order_note;

  var revprof_state = {
    labels: corp.or_l.replace(/\"/g, "").split(","),
    datasets: [
      {
        label: 'Revenue',
        backgroundColor: 'rgba(75,192,192,1)',
        borderColor: 'rgba(0,0,0,1)',
        borderWidth: 2,
        data: corp.rev_d.replace(/\"/g, "").split(","),
      }, {
        label: 'Profit',
        backgroundColor: 'rgba(75,192,192,1)',
        borderColor: 'rgba(0,0,0,1)',
        borderWidth: 2,
        data: corp.prof_d.replace(/\"/g, "").split(","),
      }],

  }

  var cusor_state = {
    labels: corp.or_l.replace(/\"/g, "").split(","),
    datasets: [{
      label: 'Customer',
      backgroundColor: 'red',
      borderColor: 'rgba(0,0,0,1)',
      borderColor: 'red',
      borderWidth: 1,
      data: corp.cus_d.replace(/\"/g, "").split(","),
    },
    {
      label: 'Order',
      backgroundColor: 'rgba(75,192,192,1)',
      borderColor: 'rgba(0,0,0,1)',
      borderWidth: 1,
      data: corp.or_d.replace(/\"/g, "").split(","),
    }]
  }



  var [daterange, setdrange] = useState([
    new Date(moment().startOf('month')),
    new Date(moment().endOf('month'))
    //format(new Date(moment().startOf('month')),'yyyy-MM-dd'),
  ]);


  var [daterange1, setdrange1] = useState([startOfMonth(subDays(new Date(), getDate(new Date()))), endOfMonth(subDays(new Date(), getDate(new Date()))),]);

  var [duration, setduration] = useState();


  var dateSubmit = (e) => {
    e.preventDefault();
    dispatch(get_init_data({
      from: format(daterange[0], 'yyyy-MM-dd'), to: format(daterange[1], 'yyyy-MM-dd'),
      from1: format(daterange1[0], 'yyyy-MM-dd'), to1: format(daterange1[1], 'yyyy-MM-dd'),
      unit: duration,
      ajax_call: 1
    }));
  }


  var cusChart = { padding: '10px', background: "rgb(52, 195, 255)", color: "white", borderRadius: "4px" };

  const handleChange = (e) => {
    setduration(e.target.value)
  };

  return (

    <div className="client-dashboard">

      <Grid container style={{ padding: '1%', background: 'ghostwhite' }}>

        <Grid item sm={8}>

          <DateRangePicker
            value={daterange}
            onChange={setdrange}
            oneTap={false}
            ranges={[
              {
                label: 'Yesterday',
                value: [addDays(new Date(), -1), addDays(new Date(), -1)]
              },
              {
                label: 'Today',
                value: [new Date(), new Date()]
              },
              {
                label: 'Tomorrow',
                value: [addDays(new Date(), 1), addDays(new Date(), 1)]
              },
              {
                label: 'Last 7 days',
                value: [subDays(new Date(), 6), new Date()]
              },

              {
                label: 'This month',
                value: [subDays(new Date(), getDate(new Date()) - 1), new Date()]
              },

              //startOfMonth(new Date(2014, 8, 2, 11, 55, 0))
              {
                label: 'Last month',
                value: [startOfMonth(subDays(new Date(), getDate(new Date()))), endOfMonth(subDays(new Date(), getDate(new Date())))]
              },
              {
                label: 'Year To date',
                value: [startOfYear(new Date()), new Date()]
              }]}>

          </DateRangePicker>

          <DateRangePicker
            value={daterange1}
            onChange={setdrange1}
            oneTap={false}
            ranges={[
              {
                label: 'Yesterday',
                value: [addDays(new Date(), -1), addDays(new Date(), -1)]
              },
              {
                label: 'Today',
                value: [new Date(), new Date()]
              },
              {
                label: 'Tomorrow',
                value: [addDays(new Date(), 1), addDays(new Date(), 1)]
              },
              {
                label: 'Last 7 days',
                value: [subDays(new Date(), 6), new Date()]
              },

              {
                label: 'This month',
                value: [subDays(new Date(), getDate(new Date()) - 1), new Date()]
              },

              //startOfMonth(new Date(2014, 8, 2, 11, 55, 0))
              {
                label: 'Last month',
                value: [startOfMonth(subDays(new Date(), getDate(new Date()))), endOfMonth(subDays(new Date(), getDate(new Date())))]
              },
              {
                label: 'Year To date',
                value: [startOfYear(new Date()), new Date()]
              }]}>

          </DateRangePicker>

        </Grid>

        <Grid item sm={4}>

          <div style={{ fontSize: '19px', display: 'inline-flex' }}>

            <RadioGroup style={{ display: 'inline-block' }} onChange={(e) => { setduration(e.target.value) }}>
              <Radio checked={duration === 'daily'} value="daily" name="duration" /> Day
              <Radio checked={duration === 'weekly'} value="weekly" name="duration" /> Week
              <Radio checked={duration === 'monthly'}value="monthly" name="duration" /> Month
            </RadioGroup>

            <Button onClick={dateSubmit}> Submit </Button>

          </div>

        </Grid>

      </Grid>


      <Grid container style={{ background: 'ghostwhite' }}>

        <Grid item sm={3} style={{ color: 'cornflowerblue', boxShadow: 'rgb(65 69 88 / 10%) 0px 7px 14px 0px, rgb(0 0 0 / 7%) 0px 3px 6px 0px', borderRadius: '14px' }}>
          <h5 style={{ padding: '4%', background: 'aliceblue' }}> Recent Sales </h5>
          <DashRecentSales />
        </Grid>

        <Grid item sm={8} style={{ marginLeft: '2%', boxShadow: 'rgb(65 69 88 / 10%) 0px 7px 14px 0px, rgb(0 0 0 / 7%) 0px 3px 6px 0px' }}>

          <h4 style={cusChart}> Revenue & Profit </h4>
          <Grid container style={{ background: 'ghostwhite', display: 'inline-flex' }}>

            <Grid item sm={5} style={{ padding: '8% 2% 2% 1%', fontSize: '12px' }}>
              <Timeline>
                <Timeline.Item>Revenue :: {rev_note[0]}</Timeline.Item>
                <Timeline.Item>Revenue/Order  :: {rev_note[1]}</Timeline.Item>
                <Timeline.Item>Revenue/Customer :: {rev_note[2]} </Timeline.Item>
                <Timeline.Item>Profit :: {prof_note[0]}</Timeline.Item>
                <Timeline.Item>Profit/Customer :: {prof_note[1]}</Timeline.Item>
              </Timeline>
            </Grid>

            <Grid item sm={7}>
              <Grid style={{ background: 'white', float: 'right', width: '680px', boxShadow: 'rgb(65 69 88 / 10%) 0px 7px 14px 0px, rgb(0 0 0 / 7%) 0px 3px 6px 0px' }}>
                {/* <Chart type='line' data={revprof_state} /> */}
                <Line data={revprof_state} />
              </Grid>
            </Grid>

          </Grid>


          <h4 style={cusChart}> Customer & Order </h4>
          <Grid container style={{ background: 'ghostwhite', display: 'inline-flex' }}>

            <Grid item sm={5} style={{ padding: '8% 2% 2% 1%', fontSize: '12px' }}>
              <Timeline>
                <Timeline.Item>customer :: {cus_note}  </Timeline.Item>
                <Timeline.Item>Order : {order_note} </Timeline.Item>
              </Timeline>
            </Grid>


            <Grid item sm={7}>
              <Grid style={{ background: 'white', float: 'right', width: '680px', boxShadow: 'rgb(65 69 88 / 10%) 0px 7px 14px 0px, rgb(0 0 0 / 7%) 0px 3px 6px 0px' }}>
                {/* <Chart type='line' data={cusor_state} /> */}
                <Line data={cusor_state} />
              </Grid>
            </Grid>

          </Grid>

        </Grid>

      </Grid>


      <Grid container>
        <DashTops />
      </Grid>


      {/* <DashEmail/> */}

    </div>
  )

}

export default Dashboard