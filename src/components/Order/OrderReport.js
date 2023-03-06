import { ReactSession } from 'react-client-session';
import React, { useEffect, useState } from "react";

import { format } from 'date-fns'
import startOfMonth from 'date-fns/startOfMonth'
import endOfMonth from 'date-fns/endOfMonth'
import startOfYear from 'date-fns/startOfYear'

import { addDays, subDays, getDate } from 'date-fns';
import { useSelector, useDispatch } from "react-redux";
import { DateRangePicker } from 'rsuite';
import "rsuite/dist/rsuite.css";
import Grid from '@mui/material/Grid';
import moment from 'moment';

import { get_OrderAndRev_data } from "../../features/order/OrderReport";
import { get_OrderLocCT_data } from "../../features/order/OrderReport";
import ShipCity from "./OrderSegFilters/ShipCity";

import Timeline from '@mui/lab/Timeline';
import TimelineItem from '@mui/lab/TimelineItem';
import TimelineSeparator from '@mui/lab/TimelineSeparator';
import TimelineConnector from '@mui/lab/TimelineConnector';
import TimelineContent from '@mui/lab/TimelineContent';
import TimelineDot from '@mui/lab/TimelineDot';
import TimelineOppositeContent, {
    timelineOppositeContentClasses,
} from '@mui/lab/TimelineOppositeContent';

import ShoppingBasketIcon from '@mui/icons-material/ShoppingBasket';
import AttachMoneyIcon from '@mui/icons-material/AttachMoney';

import OrderCityStateTable from './OrderCityStateTable';

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


function OrderReport() {


    var dispatch1 = useDispatch();
    var dispatch2 = useDispatch();

    useEffect(() => {

        var is_dispatched1 = () => {
            ReactSession.get("get_OrderLocCT_data");
            if (ReactSession.get("get_OrderLocCT_data")) {
                return true;
            } else {
                ReactSession.set("get_OrderLocCT_data", "1");
                return false;
            }
        }

        var is_dispatched2 = () => {
            ReactSession.get("get_OrderAndRev_data");
            if (ReactSession.get("get_OrderAndRev_data")) {
                return true;
            } else {
                ReactSession.set("get_OrderAndRev_data", "1");
                return false;
            }
        }

        if (!(is_dispatched1())) {
            dispatch1(get_OrderLocCT_data({ ajax_call: 2 }));
        }


        if (!(is_dispatched2())) {
            dispatch2(get_OrderAndRev_data({ ajax_call: 2 }));
        }

    }, [])



    var Order_shipcity_revenue_label    = useSelector((state) => state.order_numrev_shipLoc_ChartTable.label);
    var label = structuredClone(Order_shipcity_revenue_label);


    var Order_shipcity_revenue          = useSelector((state) => state.order_numrev_shipLoc_ChartTable.shipcity_revenue);
    var shipcity_rev_obj                = {};
    if (Order_shipcity_revenue.length > 0) {
        shipcity_rev_obj.labels = label;
        shipcity_rev_obj.datasets = structuredClone(Order_shipcity_revenue);
    }

    var Order_shipcity_order            = useSelector((state) => state.order_numrev_shipLoc_ChartTable.shipcity_order);
    var shipcity_order_obj              = {};
    if (Order_shipcity_order.length > 0) {
        shipcity_order_obj.labels = label;
        shipcity_order_obj.datasets = structuredClone(Order_shipcity_order);
    }

    

    var total_order_note                = useSelector((state) => state.order_numrev_shipLoc_ChartTable.total_order_note);
    var total_rev_note                  = useSelector((state) => state.order_numrev_shipLoc_ChartTable.total_rev_note);
    var new_order_note                  = useSelector((state) => state.order_numrev_shipLoc_ChartTable.new_order_note);
    var new_rev_note                    = useSelector((state) => state.order_numrev_shipLoc_ChartTable.new_rev_note);
    var repeat_order_note               = useSelector((state) => state.order_numrev_shipLoc_ChartTable.repeat_order_note);
    var repeat_rev_note                 = useSelector((state) => state.order_numrev_shipLoc_ChartTable.repeat_rev_note);


    // Week Day Revenue
    var wd_rev_data     = useSelector((state) => state.order_numrev_shipLoc_ChartTable.week_day_rev_data) || [];
    var wd_rev_labels   = useSelector((state) => state.order_numrev_shipLoc_ChartTable.week_day_rev_label) || [];  
    //var wd_revenue = {};
    var wd_revenue = {
        labels: ["", "", "", "", "","","", "", "", "", "",""],
        datasets: [
            {
                label: "Weekday Rev ",
                data: [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
                backgroundColor: "rgba(75,192,192,0.4)",
                borderColor: "rgba(75,192,192,1)"
            }
        ]
    };
    if (wd_rev_data.length && wd_rev_labels.length) {
        wd_revenue = {
            datasets: [{
                label: 'Weekday Revenue',
                backgroundColor: 'rgba(75,192,192,1)',
                borderColor: 'rgba(0,0,0,1)',
                borderWidth: 2,
                //data: Order_numrev_shiploc_data.week_day_rev_data.replace(/\"/g, "").split(",")
                data: wd_rev_data
            }],
            //labels: Order_numrev_shiploc_data.week_day_rev_label.replace(/\"/g, "").split(","),
            labels: wd_rev_labels
        }
    }



    //  Week Day Order
    //var wd_order = {};
    var wd_order = {
        labels: ["", "", "", "", "","","", "", "", "", "",""],
        datasets: [
            {
                label: "Weekday Order ",
                data: [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
                backgroundColor: "rgba(75,192,192,0.4)",
                borderColor: "rgba(75,192,192,1)"
            }
        ]
    };
    var wd_order_data   = useSelector((state) => state.order_numrev_shipLoc_ChartTable.week_day_or_num_data) || [];   
    var wd_order_labels = useSelector((state) => state.order_numrev_shipLoc_ChartTable.week_day_or_num_label) || [];  
    if (wd_order_data.length && wd_order_labels.length ) {
        wd_order = {
            datasets: [{
                label: 'Weekday Revenue',
                backgroundColor: 'rgba(75,192,192,1)',
                borderColor: 'rgba(0,0,0,1)',
                borderWidth: 2,
                //data: Order_numrev_shiploc_data.week_day_or_num_data.replace(/\"/g, "").split(",")
                data: wd_order_data
            }],
            //labels: Order_numrev_shiploc_data.week_day_or_num_label.replace(/\"/g, "").split(","),
            labels: wd_order_labels
        }
    }


    //  PM  Order
    var pm_order = {};
    var pm_order = {
        labels: ["", "", "", "", "","","", "", "", "", "",""],
        datasets: [
            {
                label: "Payment Method Order",
                data: [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
                backgroundColor: "rgba(75,192,192,0.4)",
                borderColor: "rgba(75,192,192,1)"
            }
        ]
    };
    var pm_order_data       = useSelector((state) => state.order_numrev_shipLoc_ChartTable.paymeth_or_num_data) || []; 
    var pm_order_data_label = useSelector((state) => state.order_numrev_shipLoc_ChartTable.paymeth_or_num_label) || [];   
    if (pm_order_data.length && pm_order_data_label.length) {
        pm_order = {
            datasets: [{
                label: 'Revenue',
                backgroundColor: 'rgba(75,192,192,1)',
                borderColor: 'rgba(0,0,0,1)',
                borderWidth: 2,
                // data: Order_numrev_shiploc_data.paymeth_or_num_data.replace(/\"/g, "").split(",")
                data: pm_order_data
            }],
            // labels: Order_numrev_shiploc_data.paymeth_or_num_label.replace(/\"/g, "").split(","),
            labels: pm_order_data_label
        }
    }




    //  PM  Revenue
    //var pm_revenue = {};
    var pm_revenue = {
        labels: ["", "", "", "", "","","", "", "", "", "",""],
        datasets: [
            {
                label: "Payment Method Revenue",
                data: [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
                backgroundColor: "rgba(75,192,192,0.4)",
                borderColor: "rgba(75,192,192,1)"
            }
        ]
    };
    var pm_revenue_data         = useSelector((state) => state.order_numrev_shipLoc_ChartTable.paymeth_rev_data) || []; 
    var pm_revenue_data_labels  = useSelector((state) => state.order_numrev_shipLoc_ChartTable.paymeth_rev_label) || [];  
    if (pm_revenue_data.length && pm_revenue_data_labels.length ) {
        pm_revenue = {
            datasets: [{
                label: 'Revenue',
                backgroundColor: 'rgba(75,192,192,1)',
                borderColor: 'rgba(0,0,0,1)',
                borderWidth: 2,
                //data: Order_numrev_shiploc_data.paymeth_rev_data.replace(/\"/g, "").split(",")
                data: pm_revenue_data
            }],
            //labels: Order_numrev_shiploc_data.paymeth_rev_label.replace(/\"/g, "").split(","),
            labels: pm_revenue_data_labels
        }
    }




    //Total Order
    //var to_order = {};
    var to_order = {
        labels: ["", "", "", "", "","","", "", "", "", "",""],
        datasets: [
            {
                label: "Total Order",
                data: [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
                backgroundColor: "rgba(75,192,192,0.4)",
                borderColor: "rgba(75,192,192,1)"
            }
        ]
    };
    var total_order_data    = useSelector((state) => state.order_numrev_shipLoc_ChartTable.to_or_num_data) || []; 
    var total_order_labels  = useSelector((state) => state.order_numrev_shipLoc_ChartTable.to_or_num_label) || []; 
    if (total_order_data.length && total_order_labels.length) {
        to_order = {

            datasets: [{
                label: 'Total Order',
                backgroundColor: 'rgba(75,192,192,1)',
                borderColor: 'rgba(0,0,0,1)',
                borderWidth: 2,
                //data: Order_numrev_shiploc_data.to_or_num_data.replace(/\"/g, "").split(",")
                data: total_order_data
            }],
            //labels: Order_numrev_shiploc_data.to_or_num_label.replace(/\"/g, "").split(","),
            labels: total_order_labels
        }
    }


    //Total Revnue
    //var to_revenue = {};
    var to_revenue = {
        labels: ["", "", "", "", "","","", "", "", "", "",""],
        datasets: [
            {
                label: "Total Revenue",
                data: [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
                backgroundColor: "rgba(75,192,192,0.4)",
                borderColor: "rgba(75,192,192,1)"
            }
        ]
    };

    var total_revenue_data      = useSelector((state) => state.order_numrev_shipLoc_ChartTable.to_or_rev_data) || [];
    var total_revenue_labels    = useSelector((state) => state.order_numrev_shipLoc_ChartTable.to_or_rev_label) || []; 
    if (total_revenue_data.length && total_revenue_labels.length) {
        to_revenue = {

            datasets: [{
                label: 'Total Revenue',
                backgroundColor: 'rgba(75,192,192,1)',
                borderColor: 'rgba(0,0,0,1)',
                borderWidth: 2,
                //data: Order_numrev_shiploc_data.to_or_rev_data.replace(/\"/g, "").split(",")
                data: total_revenue_data
            }],
            //labels: Order_numrev_shiploc_data.to_or_rev_label.replace(/\"/g, "").split(","),
            labels: total_revenue_labels
        }
    }




    //New & Ret Order
    //var new_ret_order = {};
    var new_ret_order = {
        labels: ["", "", "", "", "","","", "", "", "", "",""],
        datasets: [
            {
                label: "New Order",
                data: [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
                backgroundColor: "rgba(75,192,192,0.4)",
                borderColor: "rgba(75,192,192,1)"
            },
            {
                label: "Repeat Order",
                data: [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
                backgroundColor: "rgba(75,192,192,0.4)",
                borderColor: "rgba(75,192,192,1)"
            }
        ]
    };

    var new_order_data  = useSelector((state) => state.order_numrev_shipLoc_ChartTable.new_or_num_data) || [];  
    var ret_order_data  = useSelector((state) => state.order_numrev_shipLoc_ChartTable.ret_or_num_data) || []; 
    var newret_labels   = useSelector((state) => state.order_numrev_shipLoc_ChartTable.new_or_num_label) || []; 
    if (new_order_data) {
        new_ret_order = {

            datasets: [{
                label: 'New Order ',
                backgroundColor: 'rgba(75,192,192,1)',
                borderColor: 'rgba(0,0,0,1)',
                borderWidth: 2,
                //data: Order_numrev_shiploc_data.new_or_num_data.replace(/\"/g, "").split(",")
                data: new_order_data
            }, {
                label: 'Repeat Order ',
                backgroundColor: 'rgba(75,192,192,1)',
                borderColor: 'rgba(0,0,0,1)',
                borderWidth: 2,
                data: ret_order_data
                //data: Order_numrev_shiploc_data.ret_or_num_data.replace(/\"/g, "").split(",")
            }],
            //labels: Order_numrev_shiploc_data.new_or_num_label.replace(/\"/g, "").split(","),
            labels: newret_labels
        }
    }


    // New & Ret Revenue
    //var new_ret_revenue = {};
    var new_ret_revenue = {
        labels: ["", "", "", "", "","","", "", "", "", "",""],
        datasets: [
            {
                label: "New Rev",
                data: [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
                backgroundColor: "rgba(75,192,192,0.4)",
                borderColor: "rgba(75,192,192,1)"
            },
            {
                label: "Repeat Rev",
                data: [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
                backgroundColor: "rgba(75,192,192,0.4)",
                borderColor: "rgba(75,192,192,1)"
            }
        ]
    };
    var NewOrder_Revenue_data   = useSelector((state) => state.order_numrev_shipLoc_ChartTable.new_or_rev_data) || []; 
    var RetOrder_Revenue_data   = useSelector((state) => state.order_numrev_shipLoc_ChartTable.ret_or_rev_data) || [];  
    var newret_labels           = useSelector((state) => state.order_numrev_shipLoc_ChartTable.new_or_rev_label) || [];  
    if (NewOrder_Revenue_data) {
        new_ret_revenue = {

            datasets: [{
                label: 'New Revenue',
                backgroundColor: 'rgba(75,192,192,1)',
                borderColor: 'rgba(0,0,0,1)',
                borderWidth: 2,
                //data: Order_numrev_shiploc_data.new_or_rev_data.replace(/\"/g, "").split(",")
                data: NewOrder_Revenue_data
            }, {
                label: 'Repeat Revenue',
                backgroundColor: 'rgba(75,192,192,1)',
                borderColor: 'rgba(0,0,0,1)',
                borderWidth: 2,
                //data: Order_numrev_shiploc_data.ret_or_rev_data.replace(/\"/g, "").split(",")
                data: RetOrder_Revenue_data
            }],
            //labels: Order_numrev_shiploc_data.new_or_rev_label.replace(/\"/g, "").split(","),
            labels: newret_labels
        }
    }



    


    var [dateRange, setDateRange] = useState([new Date(moment().startOf('month')), new Date(moment().endOf('month'))]);
    var [dateRange1, setDateRange1] = useState([startOfMonth(subDays(new Date(), getDate(new Date()))), endOfMonth(subDays(new Date(), getDate(new Date()))),]);
    var [dr, setdr] = useState([new Date(moment().startOf('month')), new Date(moment().endOf('month'))]);
    var [dr1, setdr1] = useState([startOfMonth(subDays(new Date(), getDate(new Date()))), endOfMonth(subDays(new Date(), getDate(new Date()))),]);



    var [duration, setduration] = useState();

    var [group1, setgroup1] = useState();
    var [group2, setgroup2] = useState();


    var dateSubmit = (e) => {
        e.preventDefault();
        dispatch1(get_OrderAndRev_data({
            from: format(dateRange[0], 'yyyy-MM-dd'),
            to: format(dateRange[1], 'yyyy-MM-dd'),
            from1: format(dateRange1[0], 'yyyy-MM-dd'),
            to1: format(dateRange1[1], 'yyyy-MM-dd'),
            unit: duration,
            ajax_call: 1
        }));
    }


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
        tooltips: { enabled: true }
    };


    var chartStyle = { "background": "white", "boxShadow": "rgba(65, 69, 88, 0.1) 0px 7px 14px 0px, rgba(0, 0, 0, 0.07) 0px 3px 6px 0px", "padding": "0px", "borderRadius": "10px" }


    return (

        <>

            <Grid container style={{ background: 'ghostwhite' }}>

                <Grid container style={{ background: 'mediumseagreen', position: 'fixed', color: 'white', top: 0, width: '100%', padding: '8px', paddingLeft: '2%', zIndex: 1, borderRadius: '5px' }}>
                    <h4>Orders Report</h4>
                </Grid>

                <Grid container style={{ "padding": "20px", background: 'ghostwhite', zIndex: '0', marginTop: '3%' }}>

                    <form onSubmit={dateSubmit} style={{ display: 'inline-flex' }}>

                        <Grid item sm={10} style={{ display: 'inline-flex' }}>

                            <DateRangePicker
                                label="Timeline"
                                value={dateRange}
                                onChange={setDateRange}
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

                            <input name="from" type={'hidden'} value={format(dateRange[0], 'yyyy-MM-dd')} />
                            <input name="to" type={'hidden'} value={format(dateRange[1], 'yyyy-MM-dd')} />


                            <h4> VS </h4>

                            <DateRangePicker
                                label="Timeline"
                                value={dateRange1}
                                onChange={setDateRange1}
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

                            <input name="from1" type={'hidden'} value={format(dateRange1[0], 'yyyy-MM-dd')} />
                            <input name="to1" type={'hidden'} value={format(dateRange1[1], 'yyyy-MM-dd')} />


                        </Grid>

                        <Grid item sm={10}>

                            <RadioGroup style={{ display: 'inline-block' }} onChange={(e) => { setduration(e.target.value) }}>
                                <Radio checked={duration === 'daily'} value="daily" name="duration" /> Day
                                <Radio checked={duration === 'weekly'} value="weekly" name="duration" /> Week
                                <Radio checked={duration === 'monthly'} value="monthly" name="duration" /> Month
                            </RadioGroup>

                            <input type="hidden" value="1" name="ajax_call" />

                        </Grid>

                        <Grid item sm={2}>
                            <input type="submit" value="Submit" />
                        </Grid>

                    </form>

                </Grid>


                <Grid container style={{ zIndex: "0", marginBottom: '30px' }}>

                    <Grid item sm={5} style={{marginRight:'8%'}}>
                        
                        <h4 style={{  padding: '10px', background: "mediumseagreen", color: "white", borderRadius: "4px" }}>Total Order</h4>
                        
                        <Grid style={{ display: 'inline-flex' }}>
                        
                            
                            <Timeline style={{padding:'0px',width:'180px'}}>

                                <TimelineItem style={{minHeight:'30px',width:'200px'}}>
                                    <TimelineOppositeContent style={{display:'none'}}></TimelineOppositeContent>
                                    <TimelineSeparator> <TimelineDot style={{background:'mediumseagreen',boxShadow:'none'}} /><TimelineConnector style={{background:'teal'}} /></TimelineSeparator>
                                    <TimelineContent style={{padding:'10px 5px',fontSize:'10px'}} > Total                 :: {total_order_note && total_order_note[0].order} </TimelineContent>
                                </TimelineItem>
                                <TimelineItem style={{minHeight:'30px',width:'200px'}}>
                                    <TimelineOppositeContent style={{display:'none'}}></TimelineOppositeContent>
                                    <TimelineSeparator> <TimelineDot style={{background:'mediumseagreen',boxShadow:'none'}} /><TimelineConnector style={{background:'teal'}} /></TimelineSeparator>
                                    <TimelineContent style={{padding:'10px 5px',fontSize:'10px'}} > Min                   :: {total_order_note && total_order_note[0].min_order} </TimelineContent>
                                </TimelineItem>

                                <TimelineItem style={{minHeight:'30px',width:'200px'}}>
                                    <TimelineOppositeContent style={{display:'none'}}></TimelineOppositeContent>
                                    <TimelineSeparator> <TimelineDot style={{background:'mediumseagreen',boxShadow:'none'}} /><TimelineConnector style={{background:'teal'}} /></TimelineSeparator>
                                    <TimelineContent style={{padding:'10px 5px',fontSize:'10px'}} > Max                  :: {total_order_note && total_order_note[0].max_order} </TimelineContent>
                                </TimelineItem>

                                <TimelineItem style={{minHeight:'30px',width:'200px'}}>
                                    <TimelineOppositeContent style={{display:'none'}}></TimelineOppositeContent>
                                    <TimelineSeparator> <TimelineDot style={{background:'mediumseagreen',boxShadow:'none'}} /><TimelineConnector style={{background:'teal'}} /></TimelineSeparator>
                                    <TimelineContent style={{padding:'10px 5px',fontSize:'10px'}} >Avg                  :: {total_order_note && total_order_note[0].avg_order} </TimelineContent>
                                </TimelineItem>

                                <TimelineItem style={{minHeight:'30px',width:'200px'}}>
                                    <TimelineOppositeContent style={{display:'none'}}></TimelineOppositeContent>
                                    <TimelineSeparator> <TimelineDot style={{background:'mediumseagreen',boxShadow:'none'}} /><TimelineConnector style={{background:'teal'}} /></TimelineSeparator>
                                    <TimelineContent style={{padding:'10px 5px',fontSize:'10px'}} >Total Point          :: {total_order_note && total_order_note[0].total_point}</TimelineContent>
                                </TimelineItem>
                                <TimelineItem style={{minHeight:'30px',width:'200px'}}>
                                    <TimelineOppositeContent style={{display:'none'}}></TimelineOppositeContent>
                                    <TimelineSeparator> <TimelineDot style={{background:'mediumseagreen',boxShadow:'none'}} /><TimelineConnector style={{background:'teal'}} /></TimelineSeparator>
                                    <TimelineContent style={{padding:'10px 5px',fontSize:'10px'}} >Point Bellow Avg     :: {total_order_note && total_order_note[0].bellow_avg} </TimelineContent>
                                </TimelineItem>
                                <TimelineItem style={{minHeight:'30px',width:'200px'}}>
                                    <TimelineOppositeContent style={{display:'none'}}></TimelineOppositeContent>
                                    <TimelineSeparator> <TimelineDot style={{background:'mediumseagreen',boxShadow:'none'}} /><TimelineConnector style={{background:'teal'}} /></TimelineSeparator>
                                    <TimelineContent style={{padding:'10px 5px',fontSize:'10px'}} > Point Above Avg      :: {total_order_note && total_order_note[0].above_avg} </TimelineContent>
                                </TimelineItem>
                                <TimelineItem style={{minHeight:'30px',width:'200px'}}>
                                    <TimelineOppositeContent style={{display:'none'}}></TimelineOppositeContent>
                                    <TimelineSeparator> <TimelineDot style={{background:'mediumseagreen',boxShadow:'none'}} /><TimelineConnector style={{background:'teal'}} /></TimelineSeparator>
                                    <TimelineContent style={{padding:'10px 5px',fontSize:'10px'}} >Change               :: {total_order_note && total_order_note[0].change} </TimelineContent>
                                </TimelineItem>
                                <TimelineItem style={{minHeight:'30px',width:'200px'}}>
                                    <TimelineOppositeContent style={{display:'none'}}></TimelineOppositeContent>
                                    <TimelineSeparator> <TimelineDot style={{background:'mediumseagreen',boxShadow:'none'}} /><TimelineConnector style={{background:'teal'}} /></TimelineSeparator>
                                    <TimelineContent style={{padding:'10px 5px',fontSize:'10px'}} >Avg Change           :: {total_order_note && total_order_note[0].avg_change}</TimelineContent>
                                </TimelineItem>


                            </Timeline>


                            <Grid style={{ ...chartStyle,  width: "520px" }}>
                                {to_order && typeof to_order === "object" &&
                                    <Line data={to_order} options={lineOptions} />
                                }
                            </Grid>

                        </Grid>

                    </Grid>


                    <Grid item sm={5}>

                        <h4 style={{  padding: '10px', background: "mediumseagreen", color: "white", borderRadius: "4px" }}>Total Revenue</h4>
                        
                        <Grid style={{ display: 'inline-flex' }}>

                            <Timeline style={{padding:'0px',width:'180px'}}>

                                <TimelineItem style={{ minHeight: '30px', width: '200px', }}>
                                    <TimelineOppositeContent style={{ display: 'none' }}></TimelineOppositeContent>
                                    <TimelineSeparator> <TimelineDot style={{ background: 'mediumseagreen', boxShadow: 'none' }} /><TimelineConnector style={{ background: 'teal' }} /></TimelineSeparator>
                                    <TimelineContent style={{ padding: '10px 5px', fontSize: '10px' }} > Total                 :: {total_rev_note && total_rev_note[0].amount} </TimelineContent>
                                </TimelineItem>
                                <TimelineItem style={{ minHeight: '30px', width: '200px' }}>
                                    <TimelineOppositeContent style={{ display: 'none' }}></TimelineOppositeContent>
                                    <TimelineSeparator> <TimelineDot style={{ background: 'mediumseagreen', boxShadow: 'none' }} /><TimelineConnector style={{ background: 'teal' }} /></TimelineSeparator>
                                    <TimelineContent style={{ padding: '10px 5px', fontSize: '10px' }} > Min                   :: {total_rev_note && total_rev_note[0].min_amount} </TimelineContent>
                                </TimelineItem>

                                <TimelineItem style={{ minHeight: '30px', width: '200px' }}>
                                    <TimelineOppositeContent style={{ display: 'none' }}></TimelineOppositeContent>
                                    <TimelineSeparator> <TimelineDot style={{ background: 'mediumseagreen', boxShadow: 'none' }} /><TimelineConnector style={{ background: 'teal' }} /></TimelineSeparator>
                                    <TimelineContent style={{ padding: '10px 5px', fontSize: '10px' }} > Max                  :: {total_rev_note && total_rev_note[0].max_amount} </TimelineContent>
                                </TimelineItem>

                                <TimelineItem style={{ minHeight: '30px', width: '200px' }}>
                                    <TimelineOppositeContent style={{ display: 'none' }}></TimelineOppositeContent>
                                    <TimelineSeparator> <TimelineDot style={{ background: 'mediumseagreen', boxShadow: 'none' }} /><TimelineConnector style={{ background: 'teal' }} /></TimelineSeparator>
                                    <TimelineContent style={{ padding: '10px 5px', fontSize: '10px' }} >Avg                  ::  {total_rev_note && total_rev_note[0].avg_amount} </TimelineContent>
                                </TimelineItem>

                                <TimelineItem style={{ minHeight: '30px', width: '200px' }}>
                                    <TimelineOppositeContent style={{ display: 'none' }}></TimelineOppositeContent>
                                    <TimelineSeparator> <TimelineDot style={{ background: 'mediumseagreen', boxShadow: 'none' }} /><TimelineConnector style={{ background: 'teal' }} /></TimelineSeparator>
                                    <TimelineContent style={{ padding: '10px 5px', fontSize: '10px' }} >Total Point          ::  {total_rev_note && total_rev_note[0].total_point}</TimelineContent>
                                </TimelineItem>
                                <TimelineItem style={{ minHeight: '30px', width: '200px', }}>
                                    <TimelineOppositeContent style={{ display: 'none' }}></TimelineOppositeContent>
                                    <TimelineSeparator> <TimelineDot style={{ background: 'mediumseagreen', boxShadow: 'none' }} /><TimelineConnector style={{ background: 'teal' }} /></TimelineSeparator>
                                    <TimelineContent style={{ padding: '10px 5px', fontSize: '10px' }} >Point Bellow Avg     :: {total_rev_note && total_rev_note[0].bellow_avg} </TimelineContent>
                                </TimelineItem>
                                <TimelineItem style={{ minHeight: '30px', width: '200px' }}>
                                    <TimelineOppositeContent style={{ display: 'none' }}></TimelineOppositeContent>
                                    <TimelineSeparator> <TimelineDot style={{ background: 'mediumseagreen', boxShadow: 'none' }} /><TimelineConnector style={{ background: 'teal' }} /></TimelineSeparator>
                                    <TimelineContent style={{ padding: '10px 5px', fontSize: '10px' }} > Point Above Avg      :: {total_rev_note && total_rev_note[0].above_avg} </TimelineContent>
                                </TimelineItem>
                                <TimelineItem style={{ minHeight: '30px', width: '200px' }}>
                                    <TimelineOppositeContent style={{ display: 'none' }}></TimelineOppositeContent>
                                    <TimelineSeparator> <TimelineDot style={{ background: 'mediumseagreen', boxShadow: 'none' }} /><TimelineConnector style={{ background: 'teal' }} /></TimelineSeparator>
                                    <TimelineContent style={{ padding: '10px 5px', fontSize: '10px' }} >Change               ::  {total_rev_note && total_rev_note[0].change} </TimelineContent>
                                </TimelineItem>
                                <TimelineItem style={{ minHeight: '30px', width: '200px' }}>
                                    <TimelineOppositeContent style={{ display: 'none' }}></TimelineOppositeContent>
                                    <TimelineSeparator> <TimelineDot style={{ background: 'mediumseagreen', boxShadow: 'none' }} /><TimelineConnector style={{ background: 'teal' }} /></TimelineSeparator>
                                    <TimelineContent style={{ padding: '10px 5px', fontSize: '10px' }} >Avg Change           :: {total_rev_note && total_rev_note[0].avg_change}</TimelineContent>
                                </TimelineItem>


                            </Timeline>

                            <Grid style={{ ...chartStyle,  width: "520px" }}>
                                {to_revenue && typeof to_revenue === "object" &&
                                    <Line data={to_revenue} options={lineOptions} />
                                }
                            </Grid>
                        
                        </Grid>

                    </Grid>

                </Grid>




                <Grid container style={{ zIndex: "0", marginBottom: '30px' }}>

                    <Grid item sm={10}>
                        
                        <h4 style={{ width: '600px', padding: '10px', background: "mediumseagreen", color: "white", borderRadius: "4px" }}> Order from New and Returning Customer </h4>

                        <Grid style={{ display: 'inline-flex' }}>
                        

                            <Timeline style={{padding:'0px'}}>

                                <TimelineItem style={{minHeight:'30px',width:'200px',width:'185px'}}>
                                    <TimelineOppositeContent style={{display:'none'}}></TimelineOppositeContent>
                                    <TimelineSeparator> <TimelineDot style={{background:'mediumseagreen',boxShadow:'none'}} /> <TimelineConnector style={{background:'teal'}} /> </TimelineSeparator>
                                    <TimelineContent style={{padding:'10px 5px',fontSize:'10px'}} > Total                 :: {new_order_note && new_order_note[0].order} </TimelineContent>
                                </TimelineItem>
                                <TimelineItem style={{minHeight:'30px',width:'200px'}}>
                                    <TimelineOppositeContent style={{display:'none'}}></TimelineOppositeContent>
                                    <TimelineSeparator> <TimelineDot style={{background:'mediumseagreen',boxShadow:'none'}} /><TimelineConnector style={{background:'teal'}} /></TimelineSeparator>
                                    <TimelineContent style={{padding:'10px 5px',fontSize:'10px'}} > Min                   :: {new_order_note && new_order_note[0].min_order} </TimelineContent>
                                </TimelineItem>

                                <TimelineItem style={{minHeight:'30px',width:'200px'}}>
                                    <TimelineOppositeContent style={{display:'none'}}></TimelineOppositeContent>
                                    <TimelineSeparator> <TimelineDot style={{background:'mediumseagreen',boxShadow:'none'}} /><TimelineConnector style={{background:'teal'}} /></TimelineSeparator>
                                    <TimelineContent style={{padding:'10px 5px',fontSize:'10px'}} > Max                  :: {new_order_note && new_order_note[0].max_order} </TimelineContent>
                                </TimelineItem>

                                <TimelineItem style={{minHeight:'30px',width:'200px'}}>
                                    <TimelineOppositeContent style={{display:'none'}}></TimelineOppositeContent>
                                    <TimelineSeparator> <TimelineDot style={{background:'mediumseagreen',boxShadow:'none'}} /> <TimelineConnector style={{background:'teal'}} /></TimelineSeparator>
                                    <TimelineContent style={{padding:'10px 5px',fontSize:'10px'}} >Avg                  ::  {new_order_note && new_order_note[0].avg_order} </TimelineContent>
                                </TimelineItem>

                                <TimelineItem style={{minHeight:'30px',width:'200px'}}>
                                    <TimelineOppositeContent style={{display:'none'}}></TimelineOppositeContent>
                                    <TimelineSeparator> <TimelineDot style={{background:'mediumseagreen',boxShadow:'none'}} /><TimelineConnector style={{background:'teal'}} /></TimelineSeparator>
                                    <TimelineContent style={{padding:'10px 5px',fontSize:'10px'}} >Total Point          ::  {new_order_note && new_order_note[0].total_point}</TimelineContent>
                                </TimelineItem>
                                <TimelineItem style={{minHeight:'30px',width:'200px',width:'200'}}>
                                    <TimelineOppositeContent style={{display:'none'}}></TimelineOppositeContent>
                                    <TimelineSeparator> <TimelineDot style={{background:'mediumseagreen',boxShadow:'none'}} /><TimelineConnector style={{background:'teal'}} /></TimelineSeparator>
                                    <TimelineContent style={{padding:'10px 5px',fontSize:'10px'}} >Point Bellow Avg     :: {new_order_note && new_order_note[0].bellow_avg} </TimelineContent>
                                </TimelineItem>
                                <TimelineItem style={{minHeight:'30px',width:'200px'}}>
                                    <TimelineOppositeContent style={{display:'none'}}></TimelineOppositeContent>
                                    <TimelineSeparator> <TimelineDot style={{background:'mediumseagreen',boxShadow:'none'}} /><TimelineConnector style={{background:'teal'}} /></TimelineSeparator>
                                    <TimelineContent style={{padding:'10px 5px',fontSize:'10px'}} > Point Above Avg      :: {new_order_note && new_order_note[0].above_avg} </TimelineContent>
                                </TimelineItem>
                                <TimelineItem style={{minHeight:'30px',width:'200px'}}>
                                    <TimelineOppositeContent style={{display:'none'}}></TimelineOppositeContent>
                                    <TimelineSeparator> <TimelineDot style={{background:'mediumseagreen',boxShadow:'none'}} /><TimelineConnector style={{background:'teal'}} /></TimelineSeparator>
                                    <TimelineContent style={{padding:'10px 5px',fontSize:'10px'}} >Change               ::  {new_order_note && new_order_note[0].change} </TimelineContent>
                                </TimelineItem>
                                <TimelineItem style={{minHeight:'30px',width:'200px'}}>
                                    <TimelineOppositeContent style={{display:'none'}}></TimelineOppositeContent>
                                    <TimelineSeparator> <TimelineDot style={{background:'mediumseagreen',boxShadow:'none'}} /><TimelineConnector style={{background:'teal'}} /></TimelineSeparator>
                                    <TimelineContent style={{padding:'10px 5px',fontSize:'10px'}} >Avg Change           :: {new_order_note && new_order_note[0].avg_change}</TimelineContent>
                                </TimelineItem>


                            </Timeline>

                            <Grid style={{ ...chartStyle, width: '700px', marginRight:'2%' }}>
                                {new_ret_order && typeof new_ret_order === "object" &&
                                    <Line data={new_ret_order} options={lineOptions} />
                                }
                            </Grid>

                            <Timeline style={{padding:'0px'}}>

                                <TimelineItem style={{minHeight:'30px',width:'200px',width:'185px'}}>
                                    <TimelineOppositeContent style={{display:'none'}}></TimelineOppositeContent>
                                    <TimelineSeparator> <TimelineDot style={{background:'mediumseagreen',boxShadow:'none'}} /><TimelineConnector style={{background:'teal'}} /></TimelineSeparator>
                                    <TimelineContent style={{padding:'10px 5px',fontSize:'10px'}} > Total                 :: {repeat_order_note && repeat_order_note[0].order} </TimelineContent>
                                </TimelineItem>
                                <TimelineItem style={{minHeight:'30px',width:'200px'}}>
                                    <TimelineOppositeContent style={{display:'none'}}></TimelineOppositeContent>
                                    <TimelineSeparator> <TimelineDot style={{background:'mediumseagreen',boxShadow:'none'}} /><TimelineConnector style={{background:'teal'}} /></TimelineSeparator>
                                    <TimelineContent style={{padding:'10px 5px',fontSize:'10px'}} > Min                   :: {repeat_order_note && repeat_order_note[0].min_order} </TimelineContent>
                                </TimelineItem>

                                <TimelineItem style={{minHeight:'30px',width:'200px'}}>
                                    <TimelineOppositeContent style={{display:'none'}}></TimelineOppositeContent>
                                    <TimelineSeparator> <TimelineDot style={{background:'mediumseagreen',boxShadow:'none'}} /><TimelineConnector style={{background:'teal'}} /></TimelineSeparator>
                                    <TimelineContent style={{padding:'10px 5px',fontSize:'10px'}} > Max                  :: {repeat_order_note && repeat_order_note[0].max_order} </TimelineContent>
                                </TimelineItem>

                                <TimelineItem style={{minHeight:'30px',width:'200px'}}>
                                    <TimelineOppositeContent style={{display:'none'}}></TimelineOppositeContent>
                                    <TimelineSeparator> <TimelineDot style={{background:'mediumseagreen',boxShadow:'none'}} /><TimelineConnector style={{background:'teal'}} /></TimelineSeparator>
                                    <TimelineContent style={{padding:'10px 5px',fontSize:'10px'}} >Avg                  ::  {repeat_order_note && repeat_order_note[0].avg_order} </TimelineContent>
                                </TimelineItem>

                                <TimelineItem style={{minHeight:'30px',width:'200px'}}>
                                    <TimelineOppositeContent style={{display:'none'}}></TimelineOppositeContent>
                                    <TimelineSeparator> <TimelineDot style={{background:'mediumseagreen',boxShadow:'none'}} /><TimelineConnector style={{background:'teal'}} /></TimelineSeparator>
                                    <TimelineContent style={{padding:'10px 5px',fontSize:'10px'}} >Total Point          ::  {repeat_order_note && repeat_order_note[0].total_point}</TimelineContent>
                                </TimelineItem>
                                <TimelineItem style={{minHeight:'30px',width:'200px',width:'200'}}>
                                    <TimelineOppositeContent style={{display:'none'}}></TimelineOppositeContent>
                                    <TimelineSeparator> <TimelineDot style={{background:'mediumseagreen',boxShadow:'none'}} /><TimelineConnector style={{background:'teal'}} /></TimelineSeparator>
                                    <TimelineContent style={{padding:'10px 5px',fontSize:'10px'}} >Point Bellow Avg     :: {repeat_order_note && repeat_order_note[0].bellow_avg} </TimelineContent>
                                </TimelineItem>
                                <TimelineItem style={{minHeight:'30px',width:'200px'}}>
                                    <TimelineOppositeContent style={{display:'none'}}></TimelineOppositeContent>
                                    <TimelineSeparator> <TimelineDot style={{background:'mediumseagreen',boxShadow:'none'}} /><TimelineConnector style={{background:'teal'}} /></TimelineSeparator>
                                    <TimelineContent style={{padding:'10px 5px',fontSize:'10px'}} > Point Above Avg      :: {repeat_order_note && repeat_order_note[0].above_avg} </TimelineContent>
                                </TimelineItem>
                                <TimelineItem style={{minHeight:'30px',width:'200px'}}>
                                    <TimelineOppositeContent style={{display:'none'}}></TimelineOppositeContent>
                                    <TimelineSeparator> <TimelineDot style={{background:'mediumseagreen',boxShadow:'none'}} /><TimelineConnector style={{background:'teal'}} /></TimelineSeparator>
                                    <TimelineContent style={{padding:'10px 5px',fontSize:'10px'}} >Change               ::  {repeat_order_note && repeat_order_note[0].change} </TimelineContent>
                                </TimelineItem>
                                <TimelineItem style={{minHeight:'30px',width:'200px'}}>
                                    <TimelineOppositeContent style={{display:'none'}}></TimelineOppositeContent>
                                    <TimelineSeparator> <TimelineDot style={{background:'mediumseagreen',boxShadow:'none'}} /><TimelineConnector style={{background:'teal'}} /></TimelineSeparator>
                                    <TimelineContent style={{padding:'10px 5px',fontSize:'10px'}} >Avg Change           :: {repeat_order_note && repeat_order_note[0].avg_change}</TimelineContent>
                                </TimelineItem>


                            </Timeline>

                        </Grid>

                    </Grid>


                    <Grid item sm={10}>

                        <h4 style={{ width: '600px', padding: '10px', background: "mediumseagreen", color: "white", borderRadius: "4px" }}> Revenue from New and Returning Customer </h4>

                        <Grid style={{ display: 'inline-flex' }}>

                            <Grid >

                                <Timeline style={{padding:'0px'}}>

                                    <TimelineItem style={{minHeight:'30px',width:'200px',width:'185px'}}>
                                        <TimelineOppositeContent style={{display:'none'}}></TimelineOppositeContent>
                                        <TimelineSeparator> <TimelineDot style={{background:'mediumseagreen',boxShadow:'none'}} /><TimelineConnector style={{background:'teal'}} /></TimelineSeparator>
                                        <TimelineContent style={{padding:'10px 5px',fontSize:'10px'}} > Total                 :: {new_rev_note && new_rev_note[0].amount} </TimelineContent>
                                    </TimelineItem>
                                    <TimelineItem style={{minHeight:'30px',width:'200px'}}>
                                        <TimelineOppositeContent style={{display:'none'}}></TimelineOppositeContent>
                                        <TimelineSeparator> <TimelineDot style={{background:'mediumseagreen',boxShadow:'none'}} /><TimelineConnector style={{background:'teal'}} /></TimelineSeparator>
                                        <TimelineContent style={{padding:'10px 5px',fontSize:'10px'}} > Min                   :: {new_rev_note && new_rev_note[0].min_amount} </TimelineContent>
                                    </TimelineItem>

                                    <TimelineItem style={{minHeight:'30px',width:'200px'}}>
                                        <TimelineOppositeContent style={{display:'none'}}></TimelineOppositeContent>
                                        <TimelineSeparator> <TimelineDot style={{background:'mediumseagreen',boxShadow:'none'}} /><TimelineConnector style={{background:'teal'}} /></TimelineSeparator>
                                        <TimelineContent style={{padding:'10px 5px',fontSize:'10px'}} > Max                  :: {new_rev_note && new_rev_note[0].max_amount} </TimelineContent>
                                    </TimelineItem>

                                    <TimelineItem style={{minHeight:'30px',width:'200px'}}>
                                        <TimelineOppositeContent style={{display:'none'}}></TimelineOppositeContent>
                                        <TimelineSeparator> <TimelineDot style={{background:'mediumseagreen',boxShadow:'none'}} /><TimelineConnector style={{background:'teal'}} /></TimelineSeparator>
                                        <TimelineContent style={{padding:'10px 5px',fontSize:'10px'}} >Avg                  ::  {new_rev_note && new_rev_note[0].avg_amount} </TimelineContent>
                                    </TimelineItem>

                                    <TimelineItem style={{minHeight:'30px',width:'200px'}}>
                                        <TimelineOppositeContent style={{display:'none'}}></TimelineOppositeContent>
                                        <TimelineSeparator> <TimelineDot style={{background:'mediumseagreen',boxShadow:'none'}} /><TimelineConnector style={{background:'teal'}} /></TimelineSeparator>
                                        <TimelineContent style={{padding:'10px 5px',fontSize:'10px'}} >Total Point          ::  {new_rev_note && new_rev_note[0].total_point}</TimelineContent>
                                    </TimelineItem>
                                    <TimelineItem style={{minHeight:'30px',width:'200px',width:'200'}}>
                                        <TimelineOppositeContent style={{display:'none'}}></TimelineOppositeContent>
                                        <TimelineSeparator> <TimelineDot style={{background:'mediumseagreen',boxShadow:'none'}} /><TimelineConnector style={{background:'teal'}} /></TimelineSeparator>
                                        <TimelineContent style={{padding:'10px 5px',fontSize:'10px'}} >Point Bellow Avg     :: {new_rev_note && new_rev_note[0].bellow_avg} </TimelineContent>
                                    </TimelineItem>
                                    <TimelineItem style={{minHeight:'30px',width:'200px'}}>
                                        <TimelineOppositeContent style={{display:'none'}}></TimelineOppositeContent>
                                        <TimelineSeparator> <TimelineDot style={{background:'mediumseagreen',boxShadow:'none'}} /><TimelineConnector style={{background:'teal'}} /></TimelineSeparator>
                                        <TimelineContent style={{padding:'10px 5px',fontSize:'10px'}} > Point Above Avg      :: {new_rev_note && new_rev_note[0].above_avg} </TimelineContent>
                                    </TimelineItem>
                                    <TimelineItem style={{minHeight:'30px',width:'200px'}}>
                                        <TimelineOppositeContent style={{display:'none'}}></TimelineOppositeContent>
                                        <TimelineSeparator> <TimelineDot style={{background:'mediumseagreen',boxShadow:'none'}} /><TimelineConnector style={{background:'teal'}} /></TimelineSeparator>
                                        <TimelineContent style={{padding:'10px 5px',fontSize:'10px'}} >Change               ::  {new_rev_note && new_rev_note[0].change} </TimelineContent>
                                    </TimelineItem>
                                    <TimelineItem style={{minHeight:'30px',width:'200px'}}>
                                        <TimelineOppositeContent style={{display:'none'}}></TimelineOppositeContent>
                                        <TimelineSeparator> <TimelineDot style={{background:'mediumseagreen',boxShadow:'none'}} /><TimelineConnector style={{background:'teal'}} /></TimelineSeparator>
                                        <TimelineContent style={{padding:'10px 5px',fontSize:'10px'}} >Avg Change           :: {new_rev_note && new_rev_note[0].avg_change}</TimelineContent>
                                    </TimelineItem>


                                </Timeline>

                            </Grid>

                            <Grid style={{ ...chartStyle,  width: '700px', marginRight:'2%' }}>
                                {new_ret_revenue && typeof new_ret_revenue === "object" &&
                                    <Line data={new_ret_revenue} options={lineOptions} />
                                }
                            </Grid>

                            <Timeline style={{padding:'0px'}}>

                                <TimelineItem style={{minHeight:'30px',width:'200px',width:'185px'}}>

                                    <TimelineOppositeContent style={{display:'none'}}></TimelineOppositeContent>
                                    <TimelineSeparator> <TimelineDot style={{background:'mediumseagreen',boxShadow:'none'}} /><TimelineConnector style={{background:'teal'}} /></TimelineSeparator>
                                    <TimelineContent style={{padding:'10px 5px',fontSize:'10px'}} > Total                 :: {repeat_rev_note && repeat_rev_note[0].amount} </TimelineContent>
                                </TimelineItem>
                                <TimelineItem style={{minHeight:'30px',width:'200px'}}>
                                    <TimelineOppositeContent style={{display:'none'}}></TimelineOppositeContent>
                                    <TimelineSeparator> <TimelineDot style={{background:'mediumseagreen',boxShadow:'none'}} /><TimelineConnector style={{background:'teal'}} /></TimelineSeparator>
                                    <TimelineContent style={{padding:'10px 5px',fontSize:'10px'}} > Min                   :: {repeat_rev_note && repeat_rev_note[0].min_amount} </TimelineContent>
                                </TimelineItem>

                                <TimelineItem style={{minHeight:'30px',width:'200px'}}>
                                    <TimelineOppositeContent style={{display:'none'}}></TimelineOppositeContent>
                                    <TimelineSeparator> <TimelineDot style={{background:'mediumseagreen',boxShadow:'none'}} /><TimelineConnector style={{background:'teal'}} /></TimelineSeparator>
                                    <TimelineContent style={{padding:'10px 5px',fontSize:'10px'}} > Max                  :: {repeat_rev_note && repeat_rev_note[0].max_amount} </TimelineContent>
                                </TimelineItem>

                                <TimelineItem style={{minHeight:'30px',width:'200px'}}>
                                    <TimelineOppositeContent style={{display:'none'}}></TimelineOppositeContent>
                                    <TimelineSeparator> <TimelineDot style={{background:'mediumseagreen',boxShadow:'none'}} /><TimelineConnector style={{background:'teal'}} /></TimelineSeparator>
                                    <TimelineContent style={{padding:'10px 5px',fontSize:'10px'}} >Avg                  ::  {repeat_rev_note && repeat_rev_note[0].avg_amount} </TimelineContent>
                                </TimelineItem>

                                <TimelineItem style={{minHeight:'30px',width:'200px'}}>
                                    <TimelineOppositeContent style={{display:'none'}}></TimelineOppositeContent>
                                    <TimelineSeparator> <TimelineDot style={{background:'mediumseagreen',boxShadow:'none'}} /><TimelineConnector style={{background:'teal'}} /></TimelineSeparator>
                                    <TimelineContent style={{padding:'10px 5px',fontSize:'10px'}} >Total Point          ::  {repeat_rev_note && repeat_rev_note[0].total_point}</TimelineContent>
                                </TimelineItem>
                                <TimelineItem style={{minHeight:'30px',width:'200px',width:'200'}}>
                                    <TimelineOppositeContent style={{display:'none'}}></TimelineOppositeContent>
                                    <TimelineSeparator> <TimelineDot style={{background:'mediumseagreen',boxShadow:'none'}} /><TimelineConnector style={{background:'teal'}} /></TimelineSeparator>
                                    <TimelineContent style={{padding:'10px 5px',fontSize:'10px'}} >Point Bellow Avg     :: {repeat_rev_note && repeat_rev_note[0].bellow_avg} </TimelineContent>
                                </TimelineItem>
                                <TimelineItem style={{minHeight:'30px',width:'200px'}}>
                                    <TimelineOppositeContent style={{display:'none'}}></TimelineOppositeContent>
                                    <TimelineSeparator> <TimelineDot style={{background:'mediumseagreen',boxShadow:'none'}} /><TimelineConnector style={{background:'teal'}} /></TimelineSeparator>
                                    <TimelineContent style={{padding:'10px 5px',fontSize:'10px'}} > Point Above Avg      :: {repeat_rev_note && repeat_rev_note[0].above_avg} </TimelineContent>
                                </TimelineItem>
                                <TimelineItem style={{minHeight:'30px',width:'200px'}}>
                                    <TimelineOppositeContent style={{display:'none'}}></TimelineOppositeContent>
                                    <TimelineSeparator> <TimelineDot style={{background:'mediumseagreen',boxShadow:'none'}} /><TimelineConnector style={{background:'teal'}} /></TimelineSeparator>
                                    <TimelineContent style={{padding:'10px 5px',fontSize:'10px'}} >Change               ::  {repeat_rev_note && repeat_rev_note[0].change} </TimelineContent>
                                </TimelineItem>
                                <TimelineItem style={{minHeight:'30px',width:'200px'}}>
                                    <TimelineOppositeContent style={{display:'none'}}></TimelineOppositeContent>
                                    <TimelineSeparator> <TimelineDot style={{background:'mediumseagreen',boxShadow:'none'}} /><TimelineConnector style={{background:'teal'}} /></TimelineSeparator>
                                    <TimelineContent style={{padding:'10px 5px',fontSize:'10px'}} >Avg Change           :: {repeat_rev_note && repeat_rev_note[0].avg_change}</TimelineContent>
                                </TimelineItem>


                            </Timeline>

                        </Grid>

                    </Grid>

                </Grid>



                <Grid container style={{ zIndex: "0", marginBottom: '30px' }}>
                    
                    <Grid item sm={6}>
                        <h4 style={{ width: '600px', padding: '10px', background: "mediumseagreen", color: "white", borderRadius: "4px" }}> Order from different weekdays </h4>

                        <Grid style={{ ...chartStyle, height: '300px', width: '600px' }}>
                            {wd_order && typeof wd_order === "object" &&
                                <Line data={wd_order} options={lineOptions} />
                            }
                        </Grid>
                    </Grid>

                    <Grid item sm={6}>
                        <h4 style={{ width: '600px', padding: '10px', background: "mediumseagreen", color: "white", borderRadius: "4px" }}> Revenue from different weekdays </h4>

                        <Grid style={{ ...chartStyle, height: '300px', width: '600px' }}>
                            {wd_revenue && typeof wd_revenue === "object" &&
                                <Line data={wd_revenue} options={lineOptions} />
                            }
                        </Grid>
                    </Grid>

                </Grid>



                <Grid container style={{ zIndex: "0", marginBottom: '30px' }}>
                    
                    <Grid item sm={6}>
                        <h4 style={{ width: '600px', padding: '10px', background: "mediumseagreen", color: "white", borderRadius: "4px" }}> Order from different Payment method </h4>

                        <Grid style={{ ...chartStyle, height: '300px', width: '600px' }}>
                            {pm_order && typeof pm_order === "object" &&
                                <Line data={pm_order} options={lineOptions} />
                            }
                        </Grid>
                    </Grid>

                    <Grid item sm={6}>
                        <h4 style={{ width: '600px', padding: '10px', background: "mediumseagreen", color: "white", borderRadius: "4px" }}> Revenue from different Payment method </h4>

                        <Grid style={{ ...chartStyle, height: '300px', width: '600px' }}>
                            {pm_revenue && typeof pm_revenue === "object" &&
                                <Line data={pm_revenue} options={lineOptions} />
                            }
                        </Grid>
                    </Grid>

                </Grid>


                <Grid container style={{ zIndex: '0' }}>
                    <OrderCityStateTable />
                </Grid>




                {/* Order Shipping City Charts And Tables */}
                <form onSubmit={dateSubmit1} style={{ marginTop: '4%' }}>

                    <Grid container style={{ zIndex: '0' }}>

                        {/* Form Including Two Timeline , Order Type, Time Period */}
                        <Grid item sm={10} style={{ margin: "1%" }}>

                            <Grid item style={{ display: 'inline-flex' }}>


                                <DateRangePicker
                                    label="Timeline"
                                    value={dr}
                                    onChange={setdr}
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

                                <input name="from" type={'hidden'} value={format(dr[0], 'yyyy-MM-dd')} />
                                <input name="to" type={'hidden'} value={format(dr[1], 'yyyy-MM-dd')} />


                                <h4> VS </h4>

                                <DateRangePicker
                                    label="Timeline"
                                    value={dr1}
                                    onChange={setdr1}
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

                                <input name="from1" type={'hidden'} value={format(dr1[0], 'yyyy-MM-dd')} />
                                <input name="to1" type={'hidden'} value={format(dr1[1], 'yyyy-MM-dd')} />


                            </Grid>


                            <Grid item style={{ display: 'inline-flex', fontSize: '17px' }}>

                                {/* <div style={{ display: 'inline-flex', margin: '7px' }} onChange={(e) => { setgroup1(e.target.value) }}>
                                    <input type="radio" value="daily" name="group1" /> Daily
                                    <input type="radio" value="weekly" name="group1" /> Weekly
                                    <input type="radio" value="monthly" name="group1" /> Monthly
                                </div> */}
                                <RadioGroup style={{ display: 'inline-block' }} onChange={(e) => { setgroup1(e.target.value) }}>
                                    <Radio checked={group1 === 'daily'} value="daily" name="group1" /> Day
                                    <Radio checked={group1 === 'weekly'} value="weekly" name="group1" /> Week
                                    <Radio checked={group1 === 'monthly'} value="monthly" name="group1" /> Month
                                </RadioGroup>

                                {/* <div style={{ display: 'inline-flex', margin: '7px' }} onChange={(e) => { setgroup2(e.target.value) }}>
                                    <input type="radio" value="0" name="group2" /> All order
                                    <input type="radio" value="1" name="group2" />New-Cus order
                                    <input type="radio" value="2" name="group2" />Ret-Cus order
                                </div> */}
                                <RadioGroup style={{ display: 'inline-block' }} onChange={(e) => { setgroup2(e.target.value) }}>
                                    <Radio checked={group2 === '0'} value="0" name="group2" /> Day
                                    <Radio checked={group2 === '1'} value="1" name="group2" /> Week
                                    <Radio checked={group2 === '2'} value="2" name="group2" /> Month
                                </RadioGroup>

                                <input type="submit" value="Submit" />

                            </Grid>

                            <input type="hidden" value="1" name="ajax_call" />

                        </Grid>

                    </Grid>

                    <Grid container style={{ display: 'grid', zIndex: '1', margin: '20px' }}>

                        <strong> Shipping City to show in Chart </strong>
                        <ShipCity />

                    </Grid>

                </form>





                <Grid container style={{ margin: '1%', zIndex: '0' }}>

                    <Grid item sm={10} style={{ "borderRadius": "10px", "background": "white", "boxShadow": "rgba(65, 69, 88, 0.1) 0px 7px 14px 0px, rgba(0, 0, 0, 0.07) 0px 3px 6px 0px", "borderRadius": "10px" }}>

                        <Timeline
                            sx={{
                                [`& .${timelineOppositeContentClasses.root}`]: {
                                    flex: 0.2,
                                },
                            }}>

                            <TimelineItem>

                                <TimelineOppositeContent color="textSecondary">
                                    Revenue :: shipping city
                                </TimelineOppositeContent>

                                <TimelineSeparator>
                                    <TimelineDot>
                                        <AttachMoneyIcon />
                                    </TimelineDot>
                                    <TimelineConnector style={{background:'teal'}} />
                                </TimelineSeparator>

                                <TimelineContent>
                                    {Order_shipcity_revenue && Order_shipcity_revenue.length > 0 &&
                                        <Grid style={{height: '400px', width: '800px' }}> 
                                            <Line data={shipcity_rev_obj} options={lineOptions} />
                                        </Grid>
                                    }
                                </TimelineContent>

                            </TimelineItem>


                            <TimelineItem>
                                <TimelineOppositeContent color="textSecondary">
                                    Order :: shipping city
                                </TimelineOppositeContent>
                                <TimelineSeparator>
                                    <TimelineDot>
                                        <ShoppingBasketIcon />
                                    </TimelineDot>
                                    <TimelineConnector style={{background:'teal'}} />
                                </TimelineSeparator>
                                <TimelineContent>
                                    {Order_shipcity_order && Order_shipcity_order.length > 0 &&
                                        <Grid style={{height: '400px', width: '800px' }}> 
                                            <Line data={shipcity_order_obj} options={lineOptions} />
                                        </Grid>
                                        
                                    }
                                </TimelineContent>
                            </TimelineItem>

                        </Timeline>

                    </Grid>

                </Grid>





            </Grid>

        </>
    )
}

export default OrderReport