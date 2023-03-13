import React, { useEffect, useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import Grid from '@mui/material/Grid';
import MaterialTable from 'material-table';
import { ThemeProvider, createTheme } from '@mui/material';


import { format } from 'date-fns'
import startOfMonth from 'date-fns/startOfMonth'
import endOfMonth from 'date-fns/endOfMonth'
import startOfYear from 'date-fns/startOfYear'

import { addDays, subDays, getDate } from 'date-fns';

import { get_init_data } from "../../features/dash/dashboard";

import { DateRangePicker } from 'rsuite';
import moment from 'moment';

import "rsuite/dist/rsuite.css";

import { Timeline } from 'rsuite';

import Button from '@mui/material/Button';

import Radio from '@mui/material/Radio';
import RadioGroup from '@mui/material/RadioGroup';




import Search from '@material-ui/icons/Search'
//import Vieumn from '@material-ui/icons/Vieumn'
import SaveAlt from '@material-ui/icons/SaveAlt'
import ChevronLeft from '@material-ui/icons/ChevronLeft'
import ChevronRight from '@material-ui/icons/ChevronRight'
import FirstPage from '@material-ui/icons/FirstPage'
import LastPage from '@material-ui/icons/LastPage'
import Add from '@material-ui/icons/Add'
import Check from '@material-ui/icons/Check'
import FilterList from '@material-ui/icons/FilterList'
import ListAltIcon from '@mui/icons-material/ListAlt';
import ClearIcon from '@mui/icons-material/Clear';
import CancelIcon from '@mui/icons-material/Cancel';

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

function DashTops() {

  const defaultMaterialTheme = createTheme();

  var dispatch = useDispatch();
  var tops = useSelector((state) => state.dashTops);

  // useEffect(() => {
   
  //   dispatch(get_tops());
   
  // }, []);

  // var dash_tops = useSelector((state) => state.dashTops);
  // var tops = dash_tops.tops;

  // var dash_tm = useSelector((state) => state.dashTops.l30);

  // if (dash_tm.l30new) {
  //   var tmnew = structuredClone(dash_tm.l30new);
  //   var tmnew_note = dash_tm.l30new_note.split('_note_');
  // }


  // if (dash_tm.l30ret) {
  //   var tmret = structuredClone(dash_tm.l30ret);
  //   var tmret_note = dash_tm.l30ret_note.split('_note_');
  // }

  // var weekday = dash_tops.weekday;

  // if (tops !== undefined && tops !== null) {
  //   var tpbr = structuredClone(tops.tpbr);
  //   var tpbp = structuredClone(tops.tpbp);
  //   var tpbu = structuredClone(tops.tpbu);
  //   var tcbr = structuredClone(tops.tcbr);
  //   var tcbu = structuredClone(tops.tcbu);
  //   var tcbp = structuredClone(tops.tcbp);
  // }

 const [tmret, setTmret] = useState([
  { name: 'John', spend: 23 },
  {  name: 'Jane', spend: 31 },
  {  name: 'Bob', spend: 45  },
  {  name: 'Alice', spend: 27},
]);


const [tmnew, setTmnew] = useState([
  { name: 'John', spend: 23 },
  {  name: 'Jane', spend: 31 },
  {  name: 'Bob', spend: 45  },
  {  name: 'Alice', spend: 27},
]);


const [tpbr, setTpbr] = useState([
  { product: 'John', revenue: 23, '%':'1' },
  { product: 'John', revenue: 23, '%':'1' },
  { product: 'John', revenue: 23, '%':'1' },
  { product: 'John', revenue: 23, '%':'1' },
  { product: 'John', revenue: 23, '%':'1' },
]);

const [tpbu, setTpbu] = useState([
  { product: 'John', unit: 23, '%':'1' },
  { product: 'John', unit: 23, '%':'1' },
  { product: 'John', unit: 23, '%':'1' },
  { product: 'John', unit: 23, '%':'1' },
  { product: 'John', unit: 23, '%':'1' },
]);


const [tpbp, setTpbp] = useState([
  { product: 'John', profit: 23, '%':'1' },
  { product: 'John', profit: 23, '%':'1' },
  { product: 'John', profit: 23, '%':'1' },
  { product: 'John', profit: 23, '%':'1' },
  { product: 'John', profit: 23, '%':'1' },
]);


const [tcbr, setTcbr] = useState([
  { category: 'John', revenue: 23, '%':'1' },
  { category: 'John', revenue: 23, '%':'1' },
  { category: 'John', revenue: 23, '%':'1' },
  { category: 'John', revenue: 23, '%':'1' },
  { category: 'John', revenue: 23, '%':'1' },
]);

const [tcbu, setTcbu] = useState([
  { category: 'John', unit: 23, '%':'1' },
  { category: 'John', unit: 23, '%':'1' },
  { category: 'John', unit: 23, '%':'1' },
  { category: 'John', unit: 23, '%':'1' },
  { category: 'John', unit: 23, '%':'1' },
]);


const [tcbp, setTcbp] = useState([
  { category: 'John', profit: 23, '%':'1' },
  { category: 'John', profit: 23, '%':'1' },
  { category: 'John', profit: 23, '%':'1' },
  { category: 'John', profit: 23, '%':'1' },
  { category: 'John', profit: 23, '%':'1' },
]);

var tmnew_note=[];
var tmret_note=[];

var cus_note=[];
var order_note=[];


/////////

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

const handleChange = (e) => {
  setduration(e.target.value)
};



var rev_note=[];
var prof_note=[];
var prof_note=[];
//var cusor_state=[];
const cusor_state = {
  labels: ["January", "February", "March", "April", "May", "June", "July"],
  
  datasets: [
    {
      
      label: "Sales",
      fill: false,
      tension: 0.4,
      borderDash: [2, 2],
      capBezierPoints: true,
      borderJoinStyle: 'bevel',
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
const options = {
  legend: {
    position: "center"
  }
};

//var revprof_state=[];
const revprof_state = {
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
      <Grid item md={12}>
      <div className="date-period" style={{marginBottom: '-15px'}}>
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
            {
              label: 'Last month',
              value: [startOfMonth(subDays(new Date(), getDate(new Date()))), endOfMonth(subDays(new Date(), getDate(new Date())))]
            },
            {
              label: 'Year To date',
              value: [startOfYear(new Date()), new Date()]
            }]}>

        </DateRangePicker>

        <RadioGroup style={{ display: 'inline-block', fontSize: '13px', color:'white  ', fontWeight: '500' }} onChange={(e) => { setduration(e.target.value) }}>
          <Radio checked={duration === 'daily'} value="daily" name="duration" /> Day
          <Radio checked={duration === 'weekly'} value="weekly" name="duration" /> Week
          <Radio checked={duration === 'monthly'}value="monthly" name="duration" /> Month
        </RadioGroup>

        <Button variant="contained" color="secondary" style={{fontSize: '12px', marginLeft: '1rem', padding: '3px 15px'}} onClick={dateSubmit}> Submit </Button>
      </div>
      </Grid>

    <Grid item sm={6}>
      <Card className='dash-card'>
        <h6>Revenue & Profit</h6>
        {/* <Chart type='line' data={revprof_state} /> */}
        <Line data={revprof_state} /><br/>

        <Timeline>
          <Timeline.Item>Revenue :: {rev_note[0]}</Timeline.Item>
          <Timeline.Item>Revenue/Order  :: {rev_note[1]}</Timeline.Item>
          <Timeline.Item>Revenue/Customer :: {rev_note[2]} </Timeline.Item>
          <Timeline.Item>Profit :: {prof_note[0]}</Timeline.Item>
          <Timeline.Item>Profit/Customer :: {prof_note[1]}</Timeline.Item>
        </Timeline>
        </Card>
    </Grid>
    <Grid item sm={6}>
      <Card className='dash-card'>
        <h6> Customer & Order </h6>
        {/* <Chart type='line' data={cusor_state} /> */}
        <Line data={cusor_state} options={options} /><br/>
        <Timeline>
          <Timeline.Item>customer :: {cus_note}  </Timeline.Item>
          <Timeline.Item>Order : {order_note} </Timeline.Item>
        </Timeline>
      </Card>
    </Grid>
        
    <Grid item sm={6}>
      {
        tmnew && tmnew.length > 0 &&
        <Card className='dash-card'>
        <ThemeProvider theme={defaultMaterialTheme}>
          <MaterialTable
            columns={[
              { title: 'Name', field: 'name',render: row => <div> <a href={'/Customers/profile/' + row.chc}> {row.name}</a> </div> },
              // { title: 'chc', field: 'chc' },
              { title: 'spend', field: 'spend',render: row => <div>  {row.spend} </div> }
            ]}
            data={tmnew}
            title="This Month New-Customer"
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
              ResetSearch: CancelIcon,
              Clear: CancelIcon
            }}
            options={
              {
                showFirstLastPageButtons: false,
                pageSize: 10,       // make initial page size
                emptyRowsWhenPaging: false,   // To avoid of having empty rows
                pageSizeOptions: [10, 15, 25, 40, 50],
                search: false,
                searchFieldAlignment: "right",
                exportButton: true,
                exportAllData: true,
                cellStyle: {
                  padding: '4px',
                  lineHeight: 2,
                  fontFamily: 'Circular-Loom',
                  textAlign: 'center',
                  
                },
                rowStyle: (data, index) => index % 2 === 0 ? { background: "white" } : { background: 'white' },
              }
            }
            localization={{
              pagination: {
                  labelRowsPerPage: '',
                  showFirstLastPageButtons: false,
                  showPageSizeOptions: false,
                  showPageJump: false,
              }
            }}
          /><br/>

          <Timeline>
            <Timeline.Item>Total : {tmnew_note !==undefined && tmnew_note[0]}  </Timeline.Item>
            <Timeline.Item>Spent : {tmnew_note !==undefined && tmnew_note[1]} </Timeline.Item>
            <Timeline.Item>Avg. Spent : {tmnew_note !==undefined && tmnew_note[2]} </Timeline.Item>
          </Timeline>
        </ThemeProvider>
        </Card>
      }
    </Grid>
    


    <Grid item sm={6}>
      {
        tmret && tmret.length > 0 &&
        <Card className='dash-card'>
          <ThemeProvider theme={defaultMaterialTheme}>
            <MaterialTable
              columns={[
                { title: 'Name', field: 'name',render: row => <div>  <a href={'/Customers/profile/' + row.chc}> {row.name}</a> </div> },
                { title: 'spend', field: 'spend',render: row => <div>  {row.spend} </div> }
              ]}
              data={tmret}
              title="This month Repeat Customer"
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
                ResetSearch: CancelIcon,
                Clear: CancelIcon
              }}
              options={
                {
                  showFirstLastPageButtons: false,
                  pageSize: 10,       // make initial page size
                  emptyRowsWhenPaging: false,   // To avoid of having empty rows
                  pageSizeOptions: [10, 15, 25, 40, 50],
                  search: false,
                  searchFieldAlignment: "right",
                  exportButton: true,
                  exportAllData: true,
                  cellStyle: {
                    padding: '4px',
                    lineHeight: 2,
                    textAlign: 'center',
                  
                  },
                  // rowStyle: {
                  //     backgroundColor: '#EEE',
                  // }
                  rowStyle: (data, index) => index % 2 === 0 ? { background: "white " } : { background: 'white' },

                }
              }
              localization={{
                pagination: {
                    labelRowsPerPage: '',
                    showFirstLastPageButtons: false,
                    showPageSizeOptions: false,
                    showPageJump: false,
                }
              }}
            /><br/>
            <Timeline>
              <Timeline.Item>Total :: {tmret_note !==undefined && tmret_note[0]}  </Timeline.Item>
              <Timeline.Item>Spent :: {tmret_note !==undefined && tmret_note[1]} </Timeline.Item>
              <Timeline.Item>Avg. Spent :: {tmret_note !==undefined && tmret_note[2]} </Timeline.Item>
            </Timeline>
          </ThemeProvider>
        </Card>
      }
    </Grid>
      
    
    <Grid item sm={4}>
      {
        tpbr && tpbr.length > 0 &&  
        <Card className='dash-card'>
        <ThemeProvider theme={defaultMaterialTheme}>
          <MaterialTable
            columns={[
              { title: 'Product', field: 'proname', render: row => <div>  {row.proname} </div> },
              { title: 'Revenue', field: 'revenue', render: row => <div>  {row.revenue} </div> },
              { title: '%', field: 'percentage', render: row => <div>  {row.percent} </div> }
            ]}
            data={tpbr}
            title="Top Product By Revenue"
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
              ResetSearch: CancelIcon,
              Clear: CancelIcon
            }}
            options={
              {
                showFirstLastPageButtons: false,
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
                  borderBottom: '1px solid rgb(246, 224, 224)'
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
                  showPageSizeOptions: false,
                  showPageJump: false,
              }
            }}
          />
        </ThemeProvider>
        </Card>
      }
    </Grid>

    <Grid item sm={4}>

      {
        tpbu && tpbu.length > 0 &&
        <Card className='dash-card'>
        <ThemeProvider theme={defaultMaterialTheme}>
          <MaterialTable
            columns={[
              { title: 'product', render: row => <div>  {row.proname} </div> },
              { title: 'unit', render: row => <div>  {row.unit} </div> },
              { title: '%', render: row => <div>  {row.percent} </div> }
            ]}
            data={tpbu}
            title="Top Product By Unit"
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
              ResetSearch: CancelIcon,
              Clear: CancelIcon
            }}
            options={
              {
                showFirstLastPageButtons: false,
                pageSize: 10,       // make initial page size
                emptyRowsWhenPaging: false,   // To avoid of having empty rows
                pageSizeOptions: [10, 15, 25, 40, 50],
                search: true,
                searchFieldAlignment: "right",
                exportAllData: true,
                cellStyle: {
                  padding: '4px',
                  lineHeight: 2,
                  fontFamily: 'Circular-Loom',
                  textAlign: 'center',
                  borderBottom: '2px solid rgb(246, 224, 224)'
                }
              }
            }
            localization={{
              pagination: {
                  labelRowsPerPage: '',
                  showFirstLastPageButtons: false,
                  showPageSizeOptions: false,
                  showPageJump: false,
              }
            }}
          />
        </ThemeProvider>
        </Card>
      }

    </Grid>

    <Grid item sm={4}>
      {
        tpbp && tpbp.length > 0 &&
        <Card className='dash-card'>
        <ThemeProvider theme={defaultMaterialTheme}>
          <MaterialTable
            columns={[
              { title: 'Product', render: row => <div>  {row.proname} </div> },
              { title: 'Profit', render: row => <div>  {row.profit} </div> },
              { title: '%', render: row => <div>  {row.percent} </div> }
            ]}
            data={tpbp}
            title="Top Product By Profit"
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
              ResetSearch: CancelIcon,
              Clear: CancelIcon
            }}
            options={
              {
                showFirstLastPageButtons: false,
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
                }

              }
            }
            localization={{
              pagination: {
                  labelRowsPerPage: '',
                  showFirstLastPageButtons: false,
                  showPageSizeOptions: false,
                  showPageJump: false,
              }
            }}
          />
        </ThemeProvider>
        </Card>
      }
    </Grid>
    

    <Grid item sm={4}>
      {
        tcbr && tcbr.length > 0 &&
        <Card className='dash-card'>
        <ThemeProvider theme={defaultMaterialTheme}>
          <MaterialTable
            columns={[
              { title: 'Category', render: row => <div>  {row.category} </div> },
              { title: 'Revenue', render: row => <div>  {row.revenue} </div> },
              { title: '%', render: row => <div>  {row.percent} </div> }
            ]}
            data={tcbr}
            title="Top Category By Revenue"
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
              ResetSearch: CancelIcon,
              Clear: CancelIcon
            }}
            options={{
              showFirstLastPageButtons: false,
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
              }
            }}
            localization={{
              pagination: {
                  labelRowsPerPage: '',
                  showFirstLastPageButtons: false,
                  showPageSizeOptions: false,
                  showPageJump: false,
              }
            }}
          />
        </ThemeProvider>
        </Card>
      }
    </Grid>


    <Grid item sm={4}>
      {
        tcbu && tcbu.length > 0 &&
        <Card className='dash-card'>
        <ThemeProvider theme={defaultMaterialTheme}>
          <MaterialTable
            columns={[
              // { title: 'category', field: 'category' },
              // { title: 'unit', field: 'unit' },
              // { title: 'percentage', field: 'percentage' },
              { title: 'Category', render: row => <div>  {row.category} </div> },
              { title: 'Unit', render: row => <div>  {row.unit} </div> },
              { title: '%', render: row => <div>  {row.percent} </div> }
            ]}
            data={tcbu}
            title="By-Unit"
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
              ResetSearch: CancelIcon,
              Clear: CancelIcon
            }}
            options={{
              showFirstLastPageButtons: false,
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
              }
            }}
            localization={{
              pagination: {
                  labelRowsPerPage: '',
                  showFirstLastPageButtons: false,
                  showPageSizeOptions: false,
                  showPageJump: false,
              }
            }}
          />
        </ThemeProvider>
        </Card>
      }
    </Grid>

    <Grid item sm={4}>
      {
        tcbp && tcbp.length > 0 &&
        <Card className='dash-card'>
        <ThemeProvider theme={defaultMaterialTheme}>
          <MaterialTable
            columns={[
              { title: 'Category', render: row => <div>  {row.category} </div> },
              { title: 'Profit', render: row => <div>  {row.profit} </div> },
              { title: '%', render: row => <div>  {row.percent} </div> }
            ]}
            data={tcbp}
            title="By-Profit"
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
              ResetSearch: CancelIcon,
              Clear: CancelIcon
            }}
            options={{
              showFirstLastPageButtons: false,
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
              }
            }}
            localization={{
              pagination: {
                  labelRowsPerPage: '',
                  showFirstLastPageButtons: false,
                  showPageSizeOptions: false,
                  showPageJump: false,
              }
            }}
          />
        </ThemeProvider>
        </Card>
      }
    </Grid>
    </>
  )
}

export default DashTops