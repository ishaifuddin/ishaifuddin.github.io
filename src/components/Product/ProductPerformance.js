import React, { useState } from "react";
import { Line } from 'react-chartjs-2';
import { useSelector, useDispatch } from "react-redux";
import Radio from '@mui/material/Radio';
import RadioGroup from '@mui/material/RadioGroup';

import MaterialTable from 'material-table';
import { ThemeProvider, createTheme } from '@mui/material';

import Search from '@material-ui/icons/Search'
import SaveAlt from '@material-ui/icons/SaveAlt'
import ChevronLeft from '@material-ui/icons/ChevronLeft'
import ChevronRight from '@material-ui/icons/ChevronRight'
import FirstPage from '@material-ui/icons/FirstPage'
import LastPage from '@material-ui/icons/LastPage'
import Check from '@material-ui/icons/Check'
import FilterList from '@material-ui/icons/FilterList'
import CancelIcon from '@mui/icons-material/Cancel';

import { format } from 'date-fns'
import startOfMonth from 'date-fns/startOfMonth'
import endOfMonth from 'date-fns/endOfMonth'
import startOfYear from 'date-fns/startOfYear'
import moment from 'moment';

import { addDays, subDays, getDate } from 'date-fns';
import { DateRangePicker } from 'rsuite';
import "rsuite/dist/rsuite.css";

import Grid from "@mui/material/Grid";


import Products from './ProductSegmentFilters/Products'
import ProductCatagory from './ProductSegmentFilters/ProductCatagory'

import { get_performance_data } from "../../features/product/ProductPerformance";

//import SideNav from "../../pages/SideNav";


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

function ProductPerformance() {

    const dispatch = useDispatch();

    const defaultMaterialTheme = createTheme();

    const [daterange, setdrange] = useState([
        new Date(moment().startOf('month')),
        new Date(moment().endOf('month'))
        //format(new Date(moment().startOf('month')),'yyyy-MM-dd'),
    ]);


    const [duration, setDuration] = useState();

    var dateSubmit = (event) => {
        event.preventDefault();
        const fdata = new FormData(event.target);
        const data = Object.fromEntries(fdata.entries());
        //setSegname('');
        dispatch(get_performance_data(data));
    };



    // var selected_products = useSelector((state) => state.Product_performance);
    // if (selected_products.comparison_table_object !== undefined && selected_products.comparison_table_object.length > 0)
    //     var comparison_table = structuredClone(selected_products.comparison_table_object);



    // var label = useSelector((state) => state.Product_performance.comparison_chart_base_label);
    // var label = structuredClone(label);


    // ////////////////
    // var rev_comparison = useSelector((state) => state.Product_performance.rev_comparison);
    // var rev_obj = {};
    // if (rev_comparison) {
    //     rev_obj.labels = label;
    //     rev_obj.datasets = structuredClone(rev_comparison);
    // }
    // ////////////////
    // var order_comparison = useSelector((state) => state.Product_performance.order_comparison);
    // var order_obj = {};
    // if (order_comparison) {
    //     order_obj.labels = label;
    //     order_obj.datasets = structuredClone(order_comparison);
    // }
    // ////////////////
    // var profit_comparison = useSelector((state) => state.Product_performance.profit_comparison);
    // var profit_obj = {};
    // if (profit_comparison) {
    //     profit_obj.labels = label;
    //     profit_obj.datasets = structuredClone(profit_comparison);
    // }
    // ////////////////
    // var cus_comparison = useSelector((state) => state.Product_performance.cus_comparison);
    // var cus_obj = {};
    // if (cus_comparison) {
    //     cus_obj.labels = label;
    //     cus_obj.datasets = structuredClone(cus_comparison);
    // }

    // ////////////////
    // var rcus_comparison = useSelector((state) => state.Product_performance.rcus_comparison);
    // var rcus_obj = {};
    // if (rcus_comparison) {
    //     rcus_obj.labels = label;
    //     rcus_obj.datasets = structuredClone(rcus_comparison);
    // }
    // ////////////////
    // var unit_comparison = useSelector((state) => state.Product_performance.unit_comparison);
    // var unit_obj = {};
    // if (unit_comparison) {
    //     unit_obj.labels = label;
    //     unit_obj.datasets = structuredClone(unit_comparison);
    // }





    const [dr, setdr] = useState([
        new Date(moment().startOf('month')),
        new Date(moment().endOf('month'))
    ]);



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



    /////////////////// DUMMY DATA ////////////////////////
    /////////////////// DUMMY DATA ////////////////////////
    /////////////////// DUMMY DATA ////////////////////////
    /////////////////// DUMMY DATA ////////////////////////

    var [comparison_table, setTmnew] = useState([
        {  product_name:'a',total_cus: '1112',total_order: '11%',On_discount_buy: '725',total_unit: '5%',unit_per_order: '422',total_rev: '77',rev_per_order:'5%',total_profit: '77' },
        {  product_name:'b',total_cus: '1112',total_order: '11%',On_discount_buy: '725',total_unit: '5%',unit_per_order: '422',total_rev: '77',rev_per_order:'5%',total_profit: '77' },
        {  product_name:'c',total_cus: '1112',total_order: '11%',On_discount_buy: '725',total_unit: '5%',unit_per_order: '422',total_rev: '77',rev_per_order:'5%',total_profit: '77' },
        {  product_name:'d',total_cus: '1112',total_order: '11%',On_discount_buy: '725',total_unit: '5%',unit_per_order: '422',total_rev: '77',rev_per_order:'5%',total_profit: '77' },
        {  product_name:'e',total_cus: '1112',total_order: '11%',On_discount_buy: '725',total_unit: '5%',unit_per_order: '422',total_rev: '77',rev_per_order:'5%',total_profit: '77' },
        {  product_name:'f',total_cus: '1112',total_order: '11%',On_discount_buy: '725',total_unit: '5%',unit_per_order: '422',total_rev: '77',rev_per_order:'5%',total_profit: '77' },
        {  product_name:'g',total_cus: '1112',total_order: '11%',On_discount_buy: '725',total_unit: '5%',unit_per_order: '422',total_rev: '77',rev_per_order:'5%',total_profit: '77' },
        {  product_name:'h',total_cus: '1112',total_order: '11%',On_discount_buy: '725',total_unit: '5%',unit_per_order: '422',total_rev: '77',rev_per_order:'5%',total_profit: '77' },
        {  product_name:'i',total_cus: '1112',total_order: '11%',On_discount_buy: '725',total_unit: '5%',unit_per_order: '422',total_rev: '77',rev_per_order:'5%',total_profit: '77' },
        {  product_name:'j',total_cus: '1112',total_order: '11%',On_discount_buy: '725',total_unit: '5%',unit_per_order: '422',total_rev: '77',rev_per_order:'5%',total_profit: '77' },
        {  product_name:'k',total_cus: '1112',total_order: '11%',On_discount_buy: '725',total_unit: '5%',unit_per_order: '422',total_rev: '77',rev_per_order:'5%',total_profit: '77' },
        {  product_name:'l',total_cus: '1112',total_order: '11%',On_discount_buy: '725',total_unit: '5%',unit_per_order: '422',total_rev: '77',rev_per_order:'5%',total_profit: '77' },
        {  product_name:'m',total_cus: '1112',total_order: '11%',On_discount_buy: '725',total_unit: '5%',unit_per_order: '422',total_rev: '77',rev_per_order:'5%',total_profit: '77' },
        {  product_name:'n',total_cus: '1112',total_order: '11%',On_discount_buy: '725',total_unit: '5%',unit_per_order: '422',total_rev: '77',rev_per_order:'5%',total_profit: '77' },
        {  product_name:'o',total_cus: '1112',total_order: '11%',On_discount_buy: '725',total_unit: '5%',unit_per_order: '422',total_rev: '77',rev_per_order:'5%',total_profit: '77' },
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
    var cus_obj         = {
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

            <Grid container>

                <Grid item sm={10} style={{ background: 'mediumseagreen', position: 'fixed', color: 'white', top: 0, width: '100%', padding: '8px', paddingLeft: '2%', zIndex: 1, borderRadius: '5px' }}>
                    <h4> Product :: Performance </h4>
                </Grid>

                <Grid item sm={12} style={{ marginTop:'5%',zIndex:'0' }}>

                    <Grid container>

                        <Grid item sm={10}>

                            <form onSubmit={dateSubmit} style={{ boxShadow: 'rgb(65 69 88 / 10%) 0px 7px 14px 0px, rgb(0 0 0 / 7%) 0px 3px 6px 0px', marginBottom: '2%', padding: '10px' }}>

                                <DateRangePicker
                                    label="Timeline"
                                    value={dr}
                                    onChange={setdr}
                                    oneTap={false}
                                    ranges={[
                                        {label: 'Yesterday',value: [addDays(new Date(), -1), addDays(new Date(), -1)]},
                                        {label: 'Today',value: [new Date(), new Date()]},
                                        {label: 'Tomorrow',value: [addDays(new Date(), 1), addDays(new Date(), 1)] },
                                        {label: 'Last 7 days',value: [subDays(new Date(), 6), new Date()] },
                                        {label: 'This month',value: [subDays(new Date(), getDate(new Date()) - 1), new Date()]},
                                        {label: 'Last month', value: [startOfMonth(subDays(new Date(), getDate(new Date()))), endOfMonth(subDays(new Date(), getDate(new Date())))]},
                                        {label: 'Year To date',value: [startOfYear(new Date()), new Date()]}]}>
                                </DateRangePicker>

                                <Products />

                                <ProductCatagory />

                                <input name="dateRange" type={'hidden'} value={format(dr[0], 'yyyy-MM-dd') + 'To' + format(dr[1], 'yyyy-MM-dd')} />


                                <RadioGroup style={{ display: 'inline-block' }} onChange={(e) => { setDuration(e.target.value) }}>
                                    <Radio value="daily" name="onsale" /> Day
                                    <Radio value="weekly" name="onsale" /> Week
                                    <Radio value="monthly" name="onsale" /> Month
                                </RadioGroup>

                                <input name="unit" type={'hidden'} value={duration} />

                                <input name="ajax_call" type={'hidden'} value="1" />

                                <input type="submit" value="Submit" />

                            </form>

                        </Grid>

                    </Grid>



                    <Grid container>

                        <Grid item sm={12}>

                            {
                            
                                //comparison_table && comparison_table.length > 0 && 
                            
                                <ThemeProvider theme={defaultMaterialTheme}>

                                    <MaterialTable style={{borderRadius:'14px'}}

                                        columns={[

                                            { title: 'Product', field: 'product_name', render: row => <div style={{ background: 'whitesmoke' }}>  {row.product_name} </div> },
                                            { title: 'Cus', field: 'total_cus', render: row => <div style={{ background: 'ghostwhite' }}>  {row.total_cus} </div> },
                                            { title: 'Order', field: 'total_order', render: row => <div style={{ background: 'whitesmoke' }}>  {row.total_order} </div> },
                                            { title: 'offer-Order', field: 'On_discount_buy', render: row => <div style={{ background: 'ghostwhite' }}>  {row.On_discount_buy} </div> },
                                            { title: 'Unit', field: 'total_unit', render: row => <div style={{ background: 'whitesmoke' }}>  {row.total_unit} </div> },
                                            { title: 'Unit/Order', field: 'unit_per_order', render: row => <div style={{ background: 'ghostwhite' }}>  {row.unit_per_order} </div> },
                                            { title: 'Rev', field: 'total_rev', render: row => <div style={{ background: 'whitesmoke' }}>  {row.total_rev} </div> },
                                            { title: 'Rev/Order', field: 'rev_per_order', render: row => <div style={{ background: 'ghostwhite' }}>  {row.rev_per_order} </div> },
                                            { title: 'Rev/Cus', field: 'rev_per_cus', render: row => <div style={{ background: 'whitesmoke' }}>  {row.rev_per_cus} </div> },
                                            { title: 'Profit', field: 'total_profit', render: row => <div style={{ background: 'ghostwhite' }}>  {row.total_profit} </div> },

                                        ]}

                                        data={comparison_table}
                                        title="Sales Data :: Products"
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

                        <Grid item sm={11} style={{ boxShadow: 'rgb(65 69 88 / 10%) 0px 7px 14px 0px, rgb(0 0 0 / 7%) 0px 3px 6px 0px', marginTop: '2%', borderRadius: '10px' }}>

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
                                            //order_comparison && order_comparison.length > 0 &&
                                            <Line width={700} height={350} data={order_obj} options={option} />
                                        }
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
                                            //unit_comparison && unit_comparison.length > 0 &&
                                            <Line width={700} height={350} data={unit_obj} options={option} />
                                        }
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
                                            //rev_comparison && rev_comparison.length > 0 &&
                                            <Line width={700} height={350} data={rev_obj} options={option} />
                                        }
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
                                            //cus_comparison && cus_comparison.length > 0 &&
                                            <Line width={700} height={350} data={cus_obj} options={option} />
                                        }
                                    </TimelineContent>
                                </TimelineItem>



                                <TimelineItem>
                                    <TimelineOppositeContent color="textSecondary">
                                        Total Repeat Customer from each product
                                    </TimelineOppositeContent>
                                    <TimelineSeparator>
                                        <TimelineDot>
                                            <RepeatIcon />
                                        </TimelineDot>
                                        <TimelineConnector />
                                    </TimelineSeparator>
                                    <TimelineContent>
                                        {
                                            //rcus_comparison && rcus_comparison.length > 0 &&
                                            <Line width={700} height={350} data={rcus_obj} options={option} />
                                        }
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

export default ProductPerformance