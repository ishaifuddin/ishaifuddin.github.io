import React, { useEffect, useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { Line } from 'react-chartjs-2';
import startOfMonth from 'date-fns/startOfMonth'
import endOfMonth from 'date-fns/endOfMonth'
import startOfYear from 'date-fns/startOfYear'
import moment from 'moment';
import { format } from 'date-fns'

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
import Button from '@mui/material/Button';

import MaterialTable from 'material-table';
import Multiselect from 'multiselect-react-dropdown';

import { ThemeProvider, createTheme } from '@mui/material';

import { get_product_segments } from "../../features/product/ProductListAndSegment";
import { get_product_segments_data } from "../../features/product/ProductSegments";


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
import { Card } from "react-bootstrap";



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


function ProductSegmentPerformance() {

    var dispatch = useDispatch();

    var defaultMaterialTheme = createTheme();

    var [daterange, setdrange] = useState([
        new Date(moment().startOf('month')),
        new Date(moment().endOf('month'))
        //format(new Date(moment().startOf('month')),'yyyy-MM-dd'),
    ]);

    var [segs, setSegs] = useState('');

    var Product_segs = useSelector((state) => state.product_List_And_Segments.product_segments);
    useEffect(() => {
        if (Product_segs && !(Product_segs.length > 0)) {
            dispatch(get_product_segments({ ajax_call: 2 }));
        }
    }, [dispatch])

    var Product_segs = useSelector((state) => state.product_List_And_Segments.product_segments);
    if (Product_segs && Product_segs.length > 0) {
        Product_segs = structuredClone(Product_segs);
    }

    var dateSubmit = (event) => {

        event.preventDefault();
        //const fdata = new FormData(event.target);
        //const data = Object.fromEntries(fdata.entries());
        //
        dispatch(get_product_segments_data({
            from: format(daterange[0], 'yyyy-MM-dd'),
            to: format(daterange[1], 'yyyy-MM-dd'),
            segs: segs,
            ajax_call: 1
        }));

        //
        //dispatch(get_product_segments_data(data));
    };



    var ops = [];

    if (Product_segs && Product_segs.length > 0) {
        for (var i of Product_segs) {
            var value = i.id;
            ops.push({ value: value, label: i.name });
        }
    }

    var selected_segments = useSelector((state) => state.Product_segments);

    var rev_obj = {};
    var order_obj = {};
    var profit_obj = {};
    var customer_obj = {};
    var rcustomer_obj = {};
    var unit_obj = {};
    var comparison_table = {};

    if (selected_segments.segment_comparison_table_object && selected_segments.segment_comparison_table_object.length > 0) {
        comparison_table = structuredClone(selected_segments.segment_comparison_table_object);
    }

    // if(selected_segments && selected_segments.length > 0){

    //     if(selected_segments.segment_comparison_table_object && selected_segments.segment_comparison_table_object.length > 0) {
    //         comparison_table = structuredClone(selected_segments.segment_comparison_table_object);
    //     }

    //     if(selected_segments.segment_comparison_chart_base_label && selected_segments.segment_comparison_chart_base_label.length > 0) {
    //         var label = structuredClone(selected_segments.segment_comparison_chart_base_label);
    //     }

    //     if(selected_segments.segment_rev_comparison && selected_segments.segment_rev_comparison.length > 0){
    //         rev_obj.labels = label;
    //         rev_obj.datasets = structuredClone(selected_segments.segment_rev_comparison);
    //     }

    //     if(selected_segments.segment_order_comparison && selected_segments.segment_order_comparison.length > 0){

    //         order_obj.labels = label;
    //         order_obj.datasets = structuredClone(selected_segments.segment_order_comparison);
    //     }

    //     if(selected_segments.segment_profit_comparison && selected_segments.segment_profit_comparison.length > 0){

    //         profit_obj.labels = label;
    //         profit_obj.datasets = structuredClone(selected_segments.segment_profit_comparison);
    //     }

    //     if(selected_segments.segment_cus_comparison && selected_segments.segment_cus_comparison.length > 0){

    //         customer_obj.labels = label;
    //         customer_obj.datasets = structuredClone(selected_segments.segment_cus_comparison);
    //     }

    //     if(selected_segments.segment_rcus_comparison && selected_segments.segment_rcus_comparison.length > 0){

    //         rcustomer_obj.labels = label;
    //         rcustomer_obj.datasets = structuredClone(selected_segments.segment_rcus_comparison);
    //     }

    //     if(selected_segments.segment_unit_comparison && selected_segments.segment_unit_comparison.length > 0){

    //         unit_obj.labels = label;
    //         unit_obj.datasets = structuredClone(selected_segments.segment_unit_comparison);
    //     }

    // }



    var label = useSelector((state) => state.Product_segments.segment_comparison_chart_base_label);
    var label = structuredClone(label);


    ////////////////
    var rev_comparison = useSelector((state) => state.Product_segments.segment_rev_comparison);
    var rev_obj = {};
    if (rev_comparison) {
        rev_obj.labels = label;
        rev_obj.datasets = structuredClone(rev_comparison);
    }
    ////////////////
    var order_comparison = useSelector((state) => state.Product_segments.segment_order_comparison);
    var order_obj = {};
    if (order_comparison) {
        order_obj.labels = label;
        order_obj.datasets = structuredClone(order_comparison);
    }
    ////////////////
    var profit_comparison = useSelector((state) => state.Product_segments.segment_profit_comparison);
    var profit_obj = {};
    if (profit_comparison) {
        profit_obj.labels = label;
        profit_obj.datasets = structuredClone(profit_comparison);
    }
    ////////////////
    var cus_comparison = useSelector((state) => state.Product_segments.segment_cus_comparison);
    var cus_obj = {};
    if (cus_comparison) {
        cus_obj.labels = label;
        cus_obj.datasets = structuredClone(cus_comparison);
    }

    ////////////////
    var rcus_comparison = useSelector((state) => state.Product_segments.segment_rcus_comparison);
    var rcus_obj = {};
    if (rcus_comparison) {
        rcus_obj.labels = label;
        rcus_obj.datasets = structuredClone(rcus_comparison);
    }
    ////////////////
    var unit_comparison = useSelector((state) => state.Product_segments.segment_unit_comparison);
    var unit_obj = {};
    if (unit_comparison) {
        unit_obj.labels = label;
        unit_obj.datasets = structuredClone(unit_comparison);
    }



    return (
        <Grid container spacing={3}>
            <Grid item md={12}>
                <div className="notifications">
                    <h6>Product : Product Segment performance</h6>
                </div>
            </Grid>
            <Grid item md={12}>
                <form onSubmit={dateSubmit}>
                    <input type="hidden" name="ajax_call" value="1" />
                    {
                        ops && ops.length > 0 &&
                        <Multiselect
                            displayValue="label"
                            placeholder="+Product-Segment"
                            onRemove={
                                (e) => {
                                    var arr = [];
                                    for (var i of e) {
                                        var data = i.value;
                                        arr.push(data);
                                    }
                                    setSegs(JSON.stringify(arr));
                                }
                            }
                            onSelect={
                                (e) => {
                                    var arr = [];
                                    var data = "";
                                    for (var i of e) {
                                        data = i.value;
                                        arr.push(data);
                                    }
                                    setSegs(JSON.stringify(arr));
                                }
                            }
                            options={ops}
                            selectedValues={[]}
                            showCheckbox />
                    }
                    <input name="segs" style={{ display: "none" }} defaultValue={segs} />
                    <div className="date-period">
                        <DateRangePicker
                        //placement='rightEnd'
                        label="Timeline"
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
                        <Button className='period-btn' variant="contained" color="secondary" type="submit" style={{marginLeft: 0}}>Submit</Button>
                    </div>
                </form>
            </Grid>
            <Grid item sm={12}>
                {comparison_table && comparison_table.length > 0 &&
                    <Card className='dash-card'>
                    <ThemeProvider theme={defaultMaterialTheme}>

                        <MaterialTable style={{ borderRadius: '14px' }}

                            columns={[

                                { title: 'Segment', field: 'segment',render: row => 
                                <div style={{background:'mintcream',fontFamily: 'system-ui',fontSize: '16px',textAlign: 'left'}}>  {row.segment}</div> },
                                { title: 'Cus', field: 'total_cus', render: row => <div style={{background:'whitesmoke'}}>  {row.total_cus} </div> },
                                { title: 'Order', field: 'total_order', render: row => <div style={{background:'ghostwhite'}}>  {row.total_order} </div>  },
                                { title: 'OrderOnOffer', field: 'ondisbuy',render: row => <div style={{background:'whitesmoke'}}>  {row.ondisbuy} </div>  },
                                { title: 'Unit', field: 'total_unit',render: row => <div style={{background:'ghostwhite'}}>  {row.total_unit} </div>  },
                                { title: 'Unit/Order', field: 'unit_per_order',render: row => <div style={{background:'whitesmoke'}}>  {row.unit_per_order} </div>  },
                                { title: 'Rev', field: 'total_rev',render: row => <div style={{background:'ghostwhite'}}>  {row.total_rev} </div>  },
                                { title: 'Rev/Order', field: 'rev_per_order',render: row => <div style={{background:'whitesmoke'}}>  {row.rev_per_order} </div>  },
                                { title: 'Rev/Cus', field: 'rev_per_cus',render: row => <div style={{background:'ghostwhite'}}>  {row.rev_per_cus} </div>  },
                                { title: 'Profit', field: 'total_profit',render: row => <div style={{background:'whitesmoke'}}>  {row.total_profit} </div> }
                            ]}
                            data={comparison_table}
                            title="Product Segment :: Comparison"
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
                                        fontFamily: 'system-ui',
                                        textAlign: 'center',
                                        borderBottom: '2px solid rgb(246, 224, 224)'
                                    }
                                }
                            }
                            localization={{
                                pagination: {
                                    labelRowsPerPage: '',
                                    showFirstLastPageButtons: false,
                                }
                            }}
                        />
                    </ThemeProvider>
                </Card>}
            </Grid>
            <Grid item sm={12}>
                <Card className='dash-card'>
                    <Timeline className="timeline">
                        <TimelineItem>
                            <TimelineSeparator>
                                <TimelineDot className="tml-title-icon">
                                    <span>Total order including each product</span>
                                    <ShoppingBasketIcon />
                                </TimelineDot>
                                <TimelineConnector />
                            </TimelineSeparator>
                            <TimelineContent className="tml-chart">
                                {order_comparison && order_comparison.length > 0 &&
                                    <Line width={700} height={350} data={order_obj} options={option} />
                                }
                            </TimelineContent>
                        </TimelineItem>

                        <TimelineItem>
                            <TimelineSeparator>
                                <TimelineDot className="tml-title-icon">
                                    <span>Total unit sold from each product</span>
                                    <LayersRoundedIcon />
                                </TimelineDot>
                                <TimelineConnector />
                            </TimelineSeparator>
                            <TimelineContent className="tml-chart">
                                {unit_comparison && unit_comparison.length > 0 &&
                                    <Line width={700} height={350} data={unit_obj} options={option} />
                                }
                            </TimelineContent>
                        </TimelineItem>

                        <TimelineItem>
                            <TimelineSeparator>
                                <TimelineDot className="tml-title-icon">
                                    <span>Total revenue generated from each product</span>
                                    <AttachMoneyIcon />
                                </TimelineDot>
                                <TimelineConnector />
                            </TimelineSeparator>
                            <TimelineContent className="tml-chart">
                                {rev_comparison && rev_comparison.length > 0 &&
                                    <Line width={700} height={350} data={rev_obj} options={option} />
                                }
                            </TimelineContent>
                        </TimelineItem>

                        <TimelineItem>
                            <TimelineSeparator>
                                <TimelineDot className="tml-title-icon">
                                    <span>Total Customer from each product</span>
                                    <PeopleAltIcon />
                                </TimelineDot>
                                <TimelineConnector />
                            </TimelineSeparator>
                            <TimelineContent className="tml-chart">
                                {cus_comparison && cus_comparison.length > 0 &&
                                    <Line width={700} height={350} data={cus_obj} options={option} />
                                }
                            </TimelineContent>
                        </TimelineItem>

                        <TimelineItem>
                            <TimelineSeparator>
                                <TimelineDot className="tml-title-icon">
                                    <span>Total Repeat Customer from each product</span>
                                    <RepeatIcon />
                                </TimelineDot>
                                <TimelineConnector />
                            </TimelineSeparator>
                            <TimelineContent className="tml-chart">
                                {rcus_comparison && rcus_comparison.length > 0 &&
                                    <Line width={700} height={350} data={rcus_obj} options={option} />
                                }
                            </TimelineContent>
                        </TimelineItem>

                        <TimelineItem>
                            <TimelineSeparator>
                                <TimelineDot className="tml-title-icon">
                                    <span>Total profit from each product</span>
                                    <MonetizationOnIcon />
                                </TimelineDot>
                                <TimelineConnector />
                            </TimelineSeparator>
                            <TimelineContent className="tml-chart">
                                {profit_comparison && profit_comparison.length > 0 &&
                                    <Line width={700} height={350} data={profit_obj} options={option} />
                                }
                            </TimelineContent>
                        </TimelineItem>

                    </Timeline>
                </Card>
            </Grid>
        </Grid>
    )
}

export default ProductSegmentPerformance