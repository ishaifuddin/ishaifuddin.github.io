import { ReactSession } from 'react-client-session';
import React, { useEffect, useState } from "react";

import { format } from 'date-fns'
import startOfMonth from 'date-fns/startOfMonth'
import endOfMonth from 'date-fns/endOfMonth'
import startOfYear from 'date-fns/startOfYear'

import { addDays, subDays, getDate } from 'date-fns';
import { useSelector, useDispatch } from "react-redux";

import { DateRangePicker } from 'rsuite';

import Grid from '@mui/material/Grid';

import moment from 'moment';

import { get_cusret_allcity } from "../../features/cus/CusRetAllCity";

import "rsuite/dist/rsuite.css";

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
  

function CusRetention() {

    var dispatch = useDispatch();

    var is_dispatched = (dispatch_function) => {
        ReactSession.get('get_cusret_allcity');
        if (ReactSession.get('get_cusret_allcity')) {
            return true;
        } else {
            ReactSession.set('get_cusret_allcity', "1");
            return false;
        }
    }


    const [daterange, setdrange] = useState([new Date(moment().startOf('month')), new Date(moment().endOf('month'))]);
    const [duration, setduration] = useState();



    if (!(is_dispatched('get_cusret_allcity'))) {
        dispatch(get_cusret_allcity({ ajax_call: 2 }));
    }

    var CusRetAC = useSelector((state) => state.CusRetAC);
    {/* Customer, Order & Revenue  Chart */ }
    var label = structuredClone(CusRetAC.label);

    var ret_cus_obj = {};
    var ret_cus_dataset = structuredClone(CusRetAC.cus_chart);
    ret_cus_obj.labels = label;
    ret_cus_obj.datasets = ret_cus_dataset;

    var ret_order_obj = {};
    var ret_order_dataset = structuredClone(CusRetAC.order_chart);
    ret_order_obj.labels = label;
    ret_order_obj.datasets = ret_order_dataset;

    var ret_rev_obj = {};
    var ret_rev_dataset = structuredClone(CusRetAC.rev_chart);
    ret_rev_obj.labels = label;
    ret_rev_obj.datasets = ret_rev_dataset;

    var cus_table   = structuredClone(CusRetAC.cus_table);
    var rev_table   = structuredClone(CusRetAC.rev_table);
    var order_table = structuredClone(CusRetAC.order_table);

    //var cus_chart     = CusRetAC.cus_chart;
    //var order_chart   = CusRetAC.order_chart;
    //var rev_chart     = CusRetAC.rev_chart;

    const dateSubmit = (e) => {
        //     dispatch(get_cusret_allcity({
        //         from : format(daterange[0],'yyyy-MM-dd'), to : format(daterange[1],'yyyy-MM-dd'),
        //         unit : duration, 
        //         ajax_call : 1
        //     }));
    }

    return (

        <>

<Grid container>
{/* 
                <Grid item sm={2}>
                    <SideNav/>
                </Grid> */}
                <Grid item sm={10} style={{marginLeft: '57px', background: 'mediumseagreen', position: 'fixed', color: 'white', top: 0, width: '100%', padding: '8px', paddingLeft: '2%', zIndex: 1, borderRadius: '5px'}}> 
                    <h4> Customer Retention </h4> 
                </Grid>

                <Grid item sm={12}  style={{marginLeft:'2%',zIndex:'0',marginTop:'5%'}}>

                    <Grid container style={{ margin: '2%' }}>

                        <h1>Retention</h1>

                        <Grid item sm={3} style={{ margin: '2%' }} >
                            <DateRangePicker
                                label="Timeline"
                                value={daterange}
                                onChange={setdrange}
                                oneTap={false}
                                ranges={[
                                    { label: 'Yesterday', value: [addDays(new Date(), -1), addDays(new Date(), -1)] },
                                    { label: 'Today', value: [new Date(), new Date()] },
                                    { label: 'Tomorrow', value: [addDays(new Date(), 1), addDays(new Date(), 1)] },
                                    { label: 'Last 7 days', value: [subDays(new Date(), 6), new Date()] },
                                    { label: 'This month', value: [subDays(new Date(), getDate(new Date()) - 1), new Date()] },
                                    { label: 'Last month', value: [startOfMonth(subDays(new Date(), getDate(new Date()))), endOfMonth(subDays(new Date(), getDate(new Date())))] },
                                    { label: 'Year To date', value: [startOfYear(new Date()), new Date()] }]}>
                            </DateRangePicker>
                        </Grid>

                        <Grid item sm={3} style={{ margin: '2%' }}>

                            {/* <div onChange={(e) => { setduration(e.target.value) }}>
                                <input type="radio" value="daily" name="gender" /> Daily
                                <input type="radio" value="weekly" name="gender" /> Weekly
                                <input type="radio" value="monthly" name="gender" /> Monthly
                            </div> */}
                            <RadioGroup style={{ display: 'inline-block' }} onChange={(e) => { setduration(e.target.value) }}>
                                <Radio checked={duration === 'daily'} value="daily" name="duration" /> Day
                                <Radio checked={duration === 'weekly'} value="weekly" name="duration" /> Week
                                <Radio checked={duration === 'monthly'}value="monthly" name="duration" /> Month
                            </RadioGroup>

                        </Grid>

                        <Grid item sm={2} style={{ margin: '2%' }} >
                            <button onClick={dateSubmit}> Submit </button>
                        </Grid>

                    </Grid>


                    <div style={{ margin: '2%' }} dangerouslySetInnerHTML={{ __html: cus_table }}></div>
                    <Grid style={{ margin: '2%' }} >
                        {ret_cus_obj && ret_cus_obj.length > 0 &&
                            <Line data={ret_cus_obj} options={{ title: { display: true, text: 'Customer Retention', fontSize: 20 }, lineTension: 0.3, legend: { display: true, position: 'right' } }} />
                        }
                    </Grid>



                    <div style={{ margin: '2%' }} dangerouslySetInnerHTML={{ __html: order_table }}></div>
                    <Grid style={{ margin: '2%' }} >
                        {ret_order_obj && ret_order_obj.length > 0 &&
                            <Line data={ret_order_obj} options={{ title: { display: true, text: 'Order', fontSize: 20 }, lineTension: 0.3, legend: { display: true, position: 'right' } }} />
                        }
                    </Grid>


                    <div style={{ margin: '2%' }} dangerouslySetInnerHTML={{ __html: rev_table }}></div>
                    <Grid>
                        {ret_rev_obj && ret_rev_obj.length > 0 &&
                            <Line data={ret_rev_obj} options={{ title: { display: true, text: 'Revenue', fontSize: 20 }, lineTension: 0.3, legend: { display: true, position: 'right' } }} />
                        }
                    </Grid>

                </Grid>
            </Grid>


        </>
    )
}

export default CusRetention