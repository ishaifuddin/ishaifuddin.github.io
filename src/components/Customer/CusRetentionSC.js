import { ReactSession } from 'react-client-session';
import React, {  useState } from "react";

import { format } from 'date-fns'
import startOfMonth from 'date-fns/startOfMonth'
import endOfMonth from 'date-fns/endOfMonth'
import startOfYear from 'date-fns/startOfYear'

import { addDays, subDays, getDate } from 'date-fns';
import { useSelector, useDispatch } from "react-redux";

import { Button, DateRangePicker} from 'rsuite';
import "rsuite/dist/rsuite.css";

import Grid from '@mui/material/Grid';
import moment from 'moment';

import { get_cusret_Selcity } from "../../features/cus/CusRetSelCity";

import { get_cusret_getcity } from "../../features/cus/CusRetSelCity";

import Multiselect from 'multiselect-react-dropdown';

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

  
function CusRetentionSC() {

    var dispatch = useDispatch();


    var is_dispatched = (dispatch_function) => {
        ReactSession.get('get_cusret_getcity');
        if (ReactSession.get('get_cusret_getcity')) {
            return true;
        } else {
            ReactSession.set('get_cusret_getcity', "1");
            return false;
        }
    }

    if (!(is_dispatched('get_cusret_getcity'))) {
        dispatch(get_cusret_getcity({ ajax_call: 2 }));
    }

    var [scity, setScity] = useState([]);


    const [daterange, setdrange] = useState([new Date(moment().startOf('month')), new Date(moment().endOf('month'))]);
    const [duration, setduration] = useState();

    const dateSubmit = (e) => {
        dispatch(get_cusret_Selcity({
            from: format(daterange[0], 'yyyy-MM-dd'),
            to: format(daterange[1], 'yyyy-MM-dd'),
            unit: duration,
            ajax_call: 1,
            city: scity
        }));
    }


    var CusRetSC_city = useSelector((state) => state.CusRetSC.scity);

    var CusRetSC = useSelector((state) => state.CusRetSC);
    {/* Customer, Order & Revenue \\ Chart And table // From Retention Data */ }

    var label = structuredClone(CusRetSC.label);

    var ret_cus_obj = {};
    var ret_cus_dataset = structuredClone(CusRetSC.cus_chart);
    ret_cus_obj.labels = label;
    ret_cus_obj.datasets = ret_cus_dataset;

    var ret_order_obj = {};
    var ret_order_dataset = structuredClone(CusRetSC.order_chart);
    ret_order_obj.labels = label;
    ret_order_obj.datasets = ret_order_dataset;

    var ret_rev_obj = {};
    var ret_rev_dataset = structuredClone(CusRetSC.rev_chart);
    ret_rev_obj.labels = label;
    ret_rev_obj.datasets = ret_rev_dataset;

    var cus_table = structuredClone(CusRetSC.cus_table);
    var rev_table = structuredClone(CusRetSC.rev_table);
    var order_table = structuredClone(CusRetSC.order_table);


    return (

        <Grid container spacing={3}>

            <Grid item md={12}>
                <div className="notifications">
                    <h6>Customer retention from specific city</h6>
                </div>
            </Grid>
            <Grid item md={12}>
                <div className="date-period" style={{marginBottom: '-15px'}}>
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
                    <RadioGroup style={{ display: 'inline-block', fontSize: '13px', color:'white  ', fontWeight: '500' }} onChange={(e) => { setduration(e.target.value) }}>
                        <Radio checked={duration === 'daily'} value="daily" name="duration" /> Day
                        <Radio checked={duration === 'weekly'} value="weekly" name="duration" /> Week
                        <Radio checked={duration === 'monthly'} value="monthly" name="duration" /> Month
                    </RadioGroup>
                    <Button className='period-btn' variant="contained" color="secondary" onClick={dateSubmit}> Submit </Button>
                </div>
            </Grid>

                <Grid item sm={12}  style={{marginLeft:'2%',zIndex:'0',marginTop:'5%'}}>
                    <Grid container>
                        <Grid item sm={6} style={{ margin: '20px' }}>
                            {CusRetSC_city && <Multiselect isObject={false}
                                onRemove={(e) => { setScity(e) }}
                                onSelect={(e) => { setScity(e) }}
                                options={CusRetSC_city}
                                selectedValues={[]}
                                showCheckbox />
                            }
                        </Grid>
                    </Grid>

                    <Grid style={{ margin: '2%' }}>
                        <div dangerouslySetInnerHTML={{ __html: cus_table }}></div>
                        {ret_cus_obj && ret_cus_obj.length > 0 &&
                            <Line data={ret_cus_obj} options={{ title: { display: true, text: 'Customer Retention', fontSize: 20 }, lineTension: 0.3, legend: { display: true, position: 'right' } }} />
                        }
                    </Grid>

                    <Grid style={{ margin: '2%' }}>
                        <div dangerouslySetInnerHTML={{ __html: order_table }}></div>
                        {ret_order_obj && ret_order_obj.length > 0 &&
                            <Line data={ret_order_obj} options={{ title: { display: true, text: 'Order', fontSize: 20 }, lineTension: 0.3, legend: { display: true, position: 'right' } }} />
                        }
                    </Grid>

                    <Grid style={{ margin: '2%' }}>
                        <div dangerouslySetInnerHTML={{ __html: rev_table }}></div>
                        {ret_rev_obj && ret_rev_obj.length > 0 &&
                            <Line data={ret_rev_obj} options={{ title: { display: true, text: 'Revenue', fontSize: 20 }, lineTension: 0.3, legend: { display: true, position: 'right' } }} />
                        }
                    </Grid>

                </Grid>

            </Grid>
    )
}

export default CusRetentionSC