import { ReactSession } from 'react-client-session';
import React from 'react'
import { useSelector, useDispatch } from "react-redux";

import { get_cusLocCT_data } from "../../features/cus/CusLocCT";

import Timeline from '@mui/lab/Timeline';
import TimelineItem from '@mui/lab/TimelineItem';
import TimelineSeparator from '@mui/lab/TimelineSeparator';
import TimelineConnector from '@mui/lab/TimelineConnector';
import TimelineContent from '@mui/lab/TimelineContent';
import TimelineDot from '@mui/lab/TimelineDot';
import TimelineOppositeContent, {
    timelineOppositeContentClasses,
} from '@mui/lab/TimelineOppositeContent';


import PeopleAltIcon from '@mui/icons-material/PeopleAlt';
import ShoppingBasketIcon from '@mui/icons-material/ShoppingBasket';
import LayersRoundedIcon from '@mui/icons-material/LayersRounded';
import AttachMoneyIcon from '@mui/icons-material/AttachMoney';

import { Chart as ChartJS, CategoryScale, LinearScale, PointElement, LineElement, Title, Tooltip, Legend, } from 'chart.js';
import { Line } from 'react-chartjs-2';

ChartJS.register(CategoryScale, LinearScale, PointElement, LineElement, Title, Tooltip, Legend);
  
  
function CusCityStateChart() {

    var dispatch5 = useDispatch();

    var is_dispatched = (dispatch_function) => {
        ReactSession.get("get_cusLocCT_data");
        if (ReactSession.get("get_cusLocCT_data")) {
            return true;
        } else {
            ReactSession.set("get_cusLocCT_data", "1");
            return false;
        }
    }
    if (!(is_dispatched('get_cusLocCT_data'))) {
        dispatch5(get_cusLocCT_data({ ajax_seg: 2 }));
    }
    var CusLocChartTable = useSelector((state) => state.cusLocChartTable);


    {/* Billing And Shipping City, Customer & Revenue Chart */ }
    var shipcity_rev_obj = {};
    var shipcity_rev_dataset = structuredClone(CusLocChartTable.shipcity_rev);
    var label = structuredClone(CusLocChartTable.label);
    shipcity_rev_obj.labels = label;
    shipcity_rev_obj.datasets = shipcity_rev_dataset;

    var shipcity_cus_obj = {};
    var shipcity_cus_dataset = structuredClone(CusLocChartTable.shipcity_cus);
    shipcity_cus_obj.labels = label;
    shipcity_cus_obj.datasets = shipcity_cus_dataset;

    var billcity_cus_obj = {};
    var billcity_cus_dataset = structuredClone(CusLocChartTable.billcity_cus);
    billcity_cus_obj.labels = label;
    billcity_cus_obj.datasets = billcity_cus_dataset;

    var billcity_rev_obj = {};
    var billcity_rev_dataset = structuredClone(CusLocChartTable.billcity_rev);
    billcity_rev_obj.labels = label;
    billcity_rev_obj.datasets = billcity_rev_dataset;

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
            position: 'right'
        }
    }

    var fourChart = { background: 'white', marginTop: '2%', marginBottom: '2%', borderRadius: "5px", boxShadow: "rgb(65 69 88 / 10%) 0px 7px 14px 0px, rgb(0 0 0 / 7%) 0px 3px 6px 0px", padding: "10px" };

    return (

        <>
            
            <Timeline
                sx={{
                    [`& .${timelineOppositeContentClasses.root}`]: {
                        flex: 0.2,
                    },
                }}>

                <TimelineItem>

                    <TimelineOppositeContent color="textSecondary">
                        Customer :: Billing city
                    </TimelineOppositeContent>

                    <TimelineSeparator>
                        <TimelineDot>
                            <ShoppingBasketIcon />
                        </TimelineDot>
                        <TimelineConnector />
                    </TimelineSeparator>

                    <TimelineContent>
                        {billcity_cus_obj.labels && billcity_cus_obj.datasets &&
                            <Line data={billcity_cus_obj} options={option} />
                        }
                    </TimelineContent>
                </TimelineItem>


                <TimelineItem>
                    <TimelineOppositeContent color="textSecondary">
                        Customer :: Shipping city
                    </TimelineOppositeContent>
                    <TimelineSeparator>
                        <TimelineDot>
                            <LayersRoundedIcon />
                        </TimelineDot>
                        <TimelineConnector />
                    </TimelineSeparator>
                    <TimelineContent>
                        {shipcity_cus_obj.labels && shipcity_cus_obj.datasets &&
                            <Line data={shipcity_cus_obj} options={option} />
                        }
                    </TimelineContent>
                </TimelineItem>



                <TimelineItem>
                    <TimelineOppositeContent color="textSecondary">
                        Revenue :: Billing city
                    </TimelineOppositeContent>
                    <TimelineSeparator>
                        <TimelineDot>
                            <AttachMoneyIcon />
                        </TimelineDot>
                        <TimelineConnector />
                    </TimelineSeparator>
                    <TimelineContent>
                        {billcity_rev_obj.labels && billcity_rev_obj.datasets &&
                            <Line data={billcity_rev_obj} options={option} />
                        }
                    </TimelineContent>
                </TimelineItem>



                <TimelineItem>
                    <TimelineOppositeContent color="textSecondary">
                        Revenue :: Shipping City
                    </TimelineOppositeContent>
                    <TimelineSeparator>
                        <TimelineDot>
                            <PeopleAltIcon />
                        </TimelineDot>
                        <TimelineConnector />
                    </TimelineSeparator>
                    <TimelineContent>
                        {shipcity_rev_obj.labels && shipcity_rev_obj.datasets &&
                            <Line data={shipcity_rev_obj} options={option} />
                        }
                    </TimelineContent>
                </TimelineItem>

            </Timeline>
        </>
    )

}

export default CusCityStateChart