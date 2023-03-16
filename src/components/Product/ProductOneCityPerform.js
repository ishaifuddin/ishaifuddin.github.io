import { ReactSession } from 'react-client-session';

import React, { useEffect, useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { Line } from 'react-chartjs-2';
import { format } from 'date-fns'
import startOfMonth from 'date-fns/startOfMonth'
import endOfMonth from 'date-fns/endOfMonth'
import startOfYear from 'date-fns/startOfYear'
import moment from 'moment';

import { addDays, subDays, getDate } from 'date-fns';
import { DateRangePicker } from 'rsuite';
import "rsuite/dist/rsuite.css";

import Grid from "@mui/material/Grid";

import Search from '@material-ui/icons/Search'
import SaveAlt from '@material-ui/icons/SaveAlt'
import ChevronLeft from '@material-ui/icons/ChevronLeft'
import ChevronRight from '@material-ui/icons/ChevronRight'
import FirstPage from '@material-ui/icons/FirstPage'
import LastPage from '@material-ui/icons/LastPage'
import Check from '@material-ui/icons/Check'
import FilterList from '@material-ui/icons/FilterList'
import CancelIcon from '@mui/icons-material/Cancel';

import MaterialTable from 'material-table';
import Multiselect from 'multiselect-react-dropdown';

import { ThemeProvider, createTheme } from '@mui/material';

import { get_single_city_all_product_data } from "../../features/product/ProductSingleCity";

import { get_cusret_getcity } from "../../features/cus/CusRetSelCity";

import Radio from '@mui/material/Radio';
import RadioGroup from '@mui/material/RadioGroup';



import Timeline from '@mui/lab/Timeline';
import TimelineItem from '@mui/lab/TimelineItem';
import TimelineSeparator from '@mui/lab/TimelineSeparator';
import TimelineConnector from '@mui/lab/TimelineConnector';
import TimelineContent from '@mui/lab/TimelineContent';
import TimelineDot from '@mui/lab/TimelineDot';
import TimelineOppositeContent, {
    timelineOppositeContentClasses,
} from '@mui/lab/TimelineOppositeContent';

import RepeatIcon from '@mui/icons-material/Repeat';
import PeopleAltIcon from '@mui/icons-material/PeopleAlt';
import ShoppingBasketIcon from '@mui/icons-material/ShoppingBasket';
import LayersRoundedIcon from '@mui/icons-material/LayersRounded';
import AttachMoneyIcon from '@mui/icons-material/AttachMoney';
import MonetizationOnIcon from '@mui/icons-material/MonetizationOn';

function ProductOneCityPerform() {

    const dispatch = useDispatch();

    const defaultMaterialTheme = createTheme();

    const [daterange, setdrange] = useState([
        new Date(moment().startOf('month')),
        new Date(moment().endOf('month'))
        //format(new Date(moment().startOf('month')),'yyyy-MM-dd'),
    ]);


    const [duration, setduration] = useState();

    var [scity, setscity] = useState('');

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
        dispatch(get_single_city_all_product_data({
            from: format(daterange[0], 'yyyy-MM-dd'),
            to: format(daterange[1], 'yyyy-MM-dd'),
            unit: duration,
            s: scity,
            ajax_call: 1
        }));

    }


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
            position: 'right'
        }
    }


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
        {  product_name:'a',total_rev: '1112',total_unit: '11%',total_order: '725',total_cus: '5%',total_profit: '422' },
        {  product_name:'b',total_rev: '1112',total_unit: '11%',total_order: '725',total_cus: '5%',total_profit: '422'},
        {  product_name:'c',total_rev: '1112',total_unit: '11%',total_order: '725',total_cus: '5%',total_profit: '422'},
        {  product_name:'d',total_rev: '1112',total_unit: '11%',total_order: '725',total_cus: '5%',total_profit: '422'},
        {  product_name:'e',total_rev: '1112',total_unit: '11%',total_order: '725',total_cus: '5%',total_profit: '422'},
        {  product_name:'f',total_rev: '1112',total_unit: '11%',total_order: '725',total_cus: '5%',total_profit: '422'},
        {  product_name:'g',total_rev: '1112',total_unit: '11%',total_order: '725',total_cus: '5%',total_profit: '422'},
        {  product_name:'h',total_rev: '1112',total_unit: '11%',total_order: '725',total_cus: '5%',total_profit: '422'},
        {  product_name:'i',total_rev: '1112',total_unit: '11%',total_order: '725',total_cus: '5%',total_profit: '422'},
        {  product_name:'j',total_rev: '1112',total_unit: '11%',total_order: '725',total_cus: '5%',total_profit: '422'},
        {  product_name:'k',total_rev: '1112',total_unit: '11%',total_order: '725',total_cus: '5%',total_profit: '422'},
        {  product_name:'l',total_rev: '1112',total_unit: '11%',total_order: '725',total_cus: '5%',total_profit: '422'},
        {  product_name:'m',total_rev: '1112',total_unit: '11%',total_order: '725',total_cus: '5%',total_profit: '422'},
        {  product_name:'n',total_rev: '1112',total_unit: '11%',total_order: '725',total_cus: '5%',total_profit: '422'},
        {  product_name:'o',total_rev: '1112',total_unit: '11%',total_order: '725',total_cus: '5%',total_profit: '422'},
    ]);

    var rev_obj         = {
        labels: ["Jan", "Feb", "Mar", "April", "May", "June", "July"],
        datasets: [
            {
            label: "Sales",
            tension: 0.4,
            borderDash: [2, 2],
            borderJoinStyle: 'round',
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
            borderJoinStyle: 'round',
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
    var order_obj       ={
        labels: ["Jan", "Feb", "Mar", "April", "May", "June", "July"],
        datasets: [
            {
            label: "Sales",
            tension: 0.4,
            borderDash: [2, 2],
            borderJoinStyle: 'round',
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
            borderJoinStyle: 'round',
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
    var profit_obj      = {
        labels: ["Jan", "Feb", "Mar", "April", "May", "June", "July"],
        datasets: [
            {
            label: "Sales",
            tension: 0.4,
            borderDash: [2, 2],
            borderJoinStyle: 'round',
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
            borderJoinStyle: 'round',
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
    var customer_obj         = {
        labels: ["Jan", "Feb", "Mar", "April", "May", "June", "July"],
        datasets: [
            {
            label: "Sales",
            tension: 0.4,
            borderDash: [2, 2],
            borderJoinStyle: 'round',
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
            borderJoinStyle: 'round',
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
    var rcus_obj        = {
        labels: ["Jan", "Feb", "Mar", "April", "May", "June", "July"],
        datasets: [
            {
            label: "Sales",
            tension: 0.4,
            borderDash: [2, 2],
            borderJoinStyle: 'round',
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
            borderJoinStyle: 'round',
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
    var unit_obj        = {
        labels: ["Jan", "Feb", "Mar", "April", "May", "June", "July"],
        datasets: [
            {
            label: "Sales",
            tension: 0.4,
            borderDash: [2, 2],
            borderJoinStyle: 'round',
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
            borderJoinStyle: 'round',
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

        <>

            {/* {JSON.stringify(rev_obj.length )} */}
            <Grid container>

                <Grid container sm={10} style={{ background: 'mediumseagreen', position: 'fixed', color: 'white', top: 0, width: '100%', padding: '8px', paddingLeft: '2%', zIndex: 1, borderRadius: '5px' }}>
                    <h4> Product :: Single city performance </h4>
                </Grid>

                <Grid item sm={12} style={{ marginTop: '5%', zIndex: '0' }}>

                    <form onSubmit={dateSubmit}>
                        <Grid container>
                            <Grid item sm={6}>
                                {
                                    //Cus_scity &&
                                    // <Multiselect isObject={false}
                                    //     placeholder="Shipping-City"
                                    //     onRemove={(e) => { setscity(e[0]); }}
                                    //     onSelect={(e) => { setscity(e[0]); }}
                                    //     singleSelect={true}
                                    //     options={Cus_scity}
                                    //     selectedValues={[]}
                                    //     showCheckbox />
                                }
                            </Grid>

                            <Grid item sm={3}>
                                <DateRangePicker
                                    //placement='rightEnd'
                                    label="Timeline"
                                    value={daterange}
                                    onChange={setdrange}
                                    oneTap={false}
                                    ranges={[
                                        {label: 'Yesterday',value: [addDays(new Date(), -1), addDays(new Date(), -1)]},
                                        {label: 'Today',value: [new Date(), new Date()]},
                                        {label: 'Tomorrow',value: [addDays(new Date(), 1), addDays(new Date(), 1)]},
                                        {label: 'Last 7 days', value: [subDays(new Date(), 6), new Date()]},
                                        {label: 'This month', value: [subDays(new Date(), getDate(new Date()) - 1), new Date()]},
                                        {label: 'Last month',value: [startOfMonth(subDays(new Date(), getDate(new Date()))), endOfMonth(subDays(new Date(), getDate(new Date())))]},
                                        {label: 'Year To date',value: [startOfYear(new Date()), new Date()]}]}
                                    >
                                </DateRangePicker>
                            </Grid>

                            <Grid item sm={2}>
                                {/* <div onChange={(e) => { setduration(e.target.value) }}>
                                    <input type="radio" value="daily" name="unit" /> Daily
                                    <input type="radio" value="weekly" name="unit" /> Weekly
                                    <input selected type="radio" value="monthly" name="unit" /> Monthly
                                </div> */}
                                <RadioGroup style={{ display: 'inline-block' }} onChange={(e) => { setduration(e.target.value) }}>
                                    <Radio checked={duration === 'daily'} value="daily" name="duration" /> Day
                                    <Radio checked={duration === 'weekly'} value="weekly" name="duration" /> Week
                                    <Radio checked={duration === 'monthly'} value="monthly" name="duration" /> Month
                                </RadioGroup>
                                <input type="submit" value="Submit" />
                            </Grid>

                        </Grid>

                    </form>



                    <Grid container>

                        <Grid item sm={10} style={{ zIndex: 0 }}>

                            {
                            
                            comparison_table && comparison_table.length > 0 &&

                                <ThemeProvider theme={defaultMaterialTheme}>

                                    <MaterialTable style={{ borderRadius: '14px' }}

                                        columns={[

                                            { title: 'Product', field: 'product_name', render: row => <div style={{ background: 'whitesmoke' }}>  {row.product_name} </div> },
                                            { title: 'Revenue', field: 'total_rev', render: row => <div style={{ background: 'ghostwhite' }}>  {row.total_rev} </div> },
                                            { title: 'Unit', field: 'total_unit', render: row => <div style={{ background: 'whitesmoke' }}>  {row.total_unit} </div> },
                                            { title: 'Order', field: 'total_order', render: row => <div style={{ background: 'ghostwhite' }}>  {row.total_order} </div> },
                                            { title: 'Customer', field: 'total_cus', render: row => <div style={{ background: 'whitesmoke' }}>  {row.total_cus} </div> },
                                            { title: 'Profit', field: 'total_profit', render: row => <div style={{ background: 'ghostwhite' }}>  {row.total_profit} </div> },

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
                                            ResetSearch: CancelIcon

                                        }}

                                        options={
                                            {
                                                pageSize: 10,       // make initial page size
                                                emptyRowsWhenPaging: false,   // To avoid of having empty rows
                                                pageSizeOptions: [10, 15, 25, 40, 50],
                                                search: true,
                                                searchFieldAlignment: "right",
                                                exportButton: true,
                                                exportAllData: true,
                                                cellStyle: {
                                                    padding: '4px',
                                                    lineHeight: 2,
                                                    fontFamily: 'Circular-Loom',
                                                    textAlign: 'center',
                                                    borderBottom: '2px solid rgb(246, 224, 224)'
                                                },
                                                headerStyle: {
                                                    background: 'mediumseagreen',
                                                    fontSize: '17px',
                                                    color: 'white',
                                                    padding: '2px',
                                                    height: '40px'
                                                },
                                                // rowStyle: {
                                                //     backgroundColor: '#EEE',
                                                // }
                                                //rowStyle: (data, index) => index % 2 === 0 ? { background: "ghostwhite" } : {background:'white'},

                                            }
                                        }
                                        localization={{
                                            pagination: {
                                                labelRowsPerPage: '',
                                                showFirstLastPageButtons: false,
                                            }
                                        }}

                                    />

                                </ThemeProvider>}

                        </Grid>

                    </Grid>



                    <Grid container>

                        <Grid item sm={10}>

                            {/* <Grid item sm={8} >
                            <h4>Total Unit sold from each product</h4>
                            {single_city_unit_comparison && single_city_unit_comparison.length > 0 &&
                                <Line data={unit_obj}
                                    options={{ title: { display: true, text: 'Unit', fontSize: 20 }, lineTension: 0.3, legend: { display: true, position: 'right' }, }} />}
                        </Grid>

                        <Grid item sm={8} >
                            <h4>Total revenue from each product</h4>
                            {single_city_rev_comparison && single_city_rev_comparison.length > 0 &&
                                <Line data={rev_obj}
                                    options={{ title: { display: true, text: 'Revenue', fontSize: 20 }, lineTension: 0.3, legend: { display: true, position: 'right' } }} />}
                        </Grid>

                        <Grid item sm={8} >
                            <h4>Total customer bought each product</h4>
                            {single_city_cus_comparison && single_city_cus_comparison.length > 0 &&
                                <Line data={customer_obj}
                                    options={{ title: { display: true, text: 'Customer', fontSize: 20 }, lineTension: 0.3, legend: { display: true, position: 'right' } }} />}
                        </Grid>

                        <Grid item sm={8} >
                            <h4>Total order placed </h4>
                            {single_city_order_comparison && single_city_order_comparison.length > 0 &&
                                <Line data={order_obj}
                                    options={{ title: { display: true, text: 'Order', fontSize: 20 }, lineTension: 0.3, legend: { display: true, position: 'right' } }} />}
                        </Grid>

                        <Grid item sm={8} >
                            <h4>Total profit from each product</h4>
                            {single_city_profit_comparison && single_city_profit_comparison.length > 0 &&
                                <Line data={profit_obj}
                                    options={{ title: { display: true, text: 'Profit', fontSize: 20 }, lineTension: 0.3, legend: { display: true, position: 'right' } }} />}
                        </Grid> */}

                            <Timeline
                                sx={{
                                    [`& .${timelineOppositeContentClasses.root}`]: {
                                        flex: 0.2,
                                    },
                                }}>

                                <TimelineItem>

                                    <TimelineOppositeContent color="textSecondary">
                                        Total order including each product
                                    </TimelineOppositeContent>

                                    <TimelineSeparator>
                                        <TimelineDot>
                                            <ShoppingBasketIcon />
                                        </TimelineDot>
                                        <TimelineConnector />
                                    </TimelineSeparator>

                                    <TimelineContent>
                                        {
                                            //single_city_order_comparison && single_city_order_comparison.length > 0 &&
                                            <Line data={order_obj}
                                                options={option} />}
                                    </TimelineContent>
                                </TimelineItem>


                                <TimelineItem>
                                    <TimelineOppositeContent color="textSecondary">
                                        Total unit sold from each product
                                    </TimelineOppositeContent>
                                    <TimelineSeparator>
                                        <TimelineDot>
                                            <LayersRoundedIcon />
                                        </TimelineDot>
                                        <TimelineConnector />
                                    </TimelineSeparator>
                                    <TimelineContent>
                                        {
                                            //single_city_unit_comparison && single_city_unit_comparison.length > 0 &&
                                            <Line data={unit_obj}
                                                options={option} />}
                                    </TimelineContent>
                                </TimelineItem>



                                <TimelineItem>
                                    <TimelineOppositeContent color="textSecondary">
                                        Total revenue generated from each product
                                    </TimelineOppositeContent>
                                    <TimelineSeparator>
                                        <TimelineDot>
                                            <AttachMoneyIcon />
                                        </TimelineDot>
                                        <TimelineConnector />
                                    </TimelineSeparator>
                                    <TimelineContent>
                                        {
                                            //single_city_rev_comparison && single_city_rev_comparison.length > 0 &&
                                            <Line data={rev_obj} options={option} />}

                                    </TimelineContent>
                                </TimelineItem>



                                <TimelineItem>
                                    <TimelineOppositeContent color="textSecondary">
                                        Total Customer from each product
                                    </TimelineOppositeContent>
                                    <TimelineSeparator>
                                        <TimelineDot>
                                            <PeopleAltIcon />
                                        </TimelineDot>
                                        <TimelineConnector />
                                    </TimelineSeparator>
                                    <TimelineContent>
                                        {
                                            //single_city_cus_comparison && single_city_cus_comparison.length > 0 &&
                                            <Line data={customer_obj} options={option} />}
                                    </TimelineContent>
                                </TimelineItem>



                                <TimelineItem>
                                    <TimelineOppositeContent color="textSecondary">
                                        Total profit from each product
                                    </TimelineOppositeContent>
                                    <TimelineSeparator>
                                        <TimelineDot>
                                            <MonetizationOnIcon />
                                        </TimelineDot>
                                        <TimelineConnector />
                                    </TimelineSeparator>
                                    <TimelineContent>
                                        {
                                            //single_city_profit_comparison && single_city_profit_comparison.length > 0 &&
                                            <Line data={profit_obj} options={option} />}
                                    </TimelineContent>
                                </TimelineItem>
                            </Timeline>

                        </Grid>
                    </Grid>

                </Grid>

            </Grid>

        </>
    )
}

export default ProductOneCityPerform