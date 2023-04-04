import React, { useEffect, useState } from "react";
// import {Line} from 'react-chartjs-2';
// //import date-fns as "date-fns";
// import { format } from 'date-fns'
// import startOfMonth from 'date-fns/startOfMonth'
// import endOfMonth from 'date-fns/endOfMonth'
// import startOfYear from 'date-fns/startOfYear'

// import { addDays,subDays,subMonths,getDate } from 'date-fns';
// import { useSelector, useDispatch } from "react-redux";

// import { Chart as ChartJS } from 'chart.js/auto'
// import { Chart }            from 'react-chartjs-2'

// import axios from 'axios';
// import { DateRangePicker } from 'rsuite';

// //import { DatePicker, DateRangePicker } from '@mantine/dates';

// import Grid from '@mui/material/Grid';
// import Button from '@mui/material/Button';

// import Moment from 'react-moment';
// import moment from 'moment';

// import MaterialTable from 'material-table';
// import { ThemeProvider, createTheme } from '@mui/material';

//const defaultMaterialTheme = createTheme();

// import CusLocCT from "../components/Customer/CusLocCT";
// import CusRetention from "../components/Customer/CusRetention";
// import CusRetentionSC from "../components/Customer/CusRetentionSC";
// import CusListAndSegment from "../components/Customer/CusListAndSegment";

function Customers() {
  // const defaultMaterialTheme = createTheme();
  // const dispatch = useDispatch();

  // var[Reports,setReports] = useState(true);
  // var[Retention,setRetention]=useState(false);
  // var[RetentionSpecificCity,setRetentionSpecificCity]=useState(false);
  // var[CustomerSegmentsAndFilters,setCustomerSegmentsAndFilters]=useState(false);
  // var[SegmentTracker,setSegmentTracker]=useState(false);

  return (
    <>
      {/*   
            <Grid container style={{margin:'2%'}}>

          

              <Grid item sm={8} style={{display:'block',margin:'2%',marginTop:'0%'}}>

                <Button onClick={(e) => { 
                          setReports(true); 
                          setRetention(false); 
                          setRetentionSpecificCity(false);
                          setCustomerSegmentsAndFilters(false);
                          setSegmentTracker(false);
                        }} 
                        color={Reports ? "primary" : "secondary"}>
                        Reports
                </Button>

                <Button onClick={(e) => { 
                          setRetention(true); 
                          setReports(false); 
                          setRetentionSpecificCity(false);
                          setCustomerSegmentsAndFilters(false);
                          setSegmentTracker(false);
                        }} 
                        color={Retention ? "primary" : "secondary"}>
                        Retention
                </Button>

                <Button onClick={(e) => { 
                          setRetentionSpecificCity(true); 
                          setRetention(false); 
                          setReports(false); 
                          setCustomerSegmentsAndFilters(false);
                          setSegmentTracker(false);
                        }} 
                        color={RetentionSpecificCity ? "primary" : "secondary"}>
                        Retention - Specific city
                </Button>

                <Button onClick={(e) => { 
                          setCustomerSegmentsAndFilters(true); 
                          setRetentionSpecificCity(false); 
                          setRetention(false); 
                          setReports(false); 
                          setSegmentTracker(false);
                        }} 
                        color={CustomerSegmentsAndFilters ? "primary" : "secondary"} >
                        Customer Segments and Filters
                </Button>

                <Button onClick={(e) => { 
                          setSegmentTracker(true); 
                          setCustomerSegmentsAndFilters(false); 
                          setRetentionSpecificCity(false); 
                          setRetention(false); 
                          setReports(false); 
                        }} 
                        color={SegmentTracker ? "primary" : "secondary"} >
                        Segment Tracker
                </Button>
                
              </Grid>

            </Grid>
      */}

      {/* 
            <Grid container >

              <Grid item sm={11}>
              
                { Reports &&  <CusLocCT/>   }

                { Retention && <CusRetention/> }
                  
                { RetentionSpecificCity && <CusRetentionSC/>}

                { CustomerSegmentsAndFilters &&  <CusListAndSegment/>}

              </Grid>
              
            </Grid>
      */}

      {/* <CusLocCT/>


      <CusRetention/>
      

      <CusRetentionSC/>


      <CusListAndSegment/> */}
    </>
  );
}

export default Customers;
