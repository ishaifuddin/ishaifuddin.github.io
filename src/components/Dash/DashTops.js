import React, { useEffect, useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import Grid from '@mui/material/Grid';
import { get_tops } from "../../features/dash/DashTopsSlice";
import MaterialTable from 'material-table';
import { ThemeProvider, createTheme } from '@mui/material';

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

import { Timeline } from 'rsuite';

function DashTops() {

  const defaultMaterialTheme = createTheme();

  var dispatch = useDispatch();
  var tops = useSelector((state) => state.dashTops);

  useEffect(() => {
    //if (!(tops !== undefined && tops !== null)) {
    dispatch(get_tops());
    //}
  }, []);

  var dash_tops = useSelector((state) => state.dashTops);
  var tops = dash_tops.tops;

  var dash_tm = useSelector((state) => state.dashTops.l30);

  if (dash_tm.l30new) {
    var tmnew = structuredClone(dash_tm.l30new);
    var tmnew_note = dash_tm.l30new_note.split('_note_');
  }


  if (dash_tm.l30ret) {
    var tmret = structuredClone(dash_tm.l30ret);
    var tmret_note = dash_tm.l30ret_note.split('_note_');
  }

  var weekday = dash_tops.weekday;

  if (tops !== undefined && tops !== null) {
    var tpbr = structuredClone(tops.tpbr);
    var tpbp = structuredClone(tops.tpbp);
    var tpbu = structuredClone(tops.tpbu);
    var tcbr = structuredClone(tops.tcbr);
    var tcbu = structuredClone(tops.tcbu);
    var tcbp = structuredClone(tops.tcbp);
  }

  return (

    <>

      <Grid container style={{ display: 'flex' }}>
        
        <Grid item sm={4} style={{ marginBottom: '2%', padding: '1%' }}>
        
          {
        
            tmnew && tmnew.length > 0 &&
            
            <ThemeProvider theme={defaultMaterialTheme}>
            
              <MaterialTable
                columns={[
                  { title: 'Name', field: 'name',render: row => <div style={{ background: 'whitesmoke' }}> <a href={'/Customers/profile/' + row.chc}> {row.name}</a> </div> },
                  // { title: 'chc', field: 'chc' },
                  { title: 'spend', field: 'spend',render: row => <div style={{ background: 'whitesmoke' }}>  {row.spend} </div> }
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
                    headerStyle: {
                      background: 'rgb(52, 195, 255)',
                      fontSize: '17px',
                      color: 'white',
                      padding: '2px',
                      height: '40px'
                    },
                    // rowStyle: {
                    //     backgroundColor: '#EEE',
                    // }
                    rowStyle: (data, index) => index % 2 === 0 ? { background: "ghostwhite" } : { background: 'white' },

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

          }

        </Grid>
        
        { tmnew_note &&
          <Grid item sm={2} style={{ marginBottom: '2%', paddingTop: '15%' }}>
            <Timeline>
              <Timeline.Item>Total :: {tmnew_note[0]}  </Timeline.Item>
              <Timeline.Item>Spent : {tmnew_note[1]} </Timeline.Item>
              <Timeline.Item>Avg. Spent : {tmnew_note[2]} </Timeline.Item>
            </Timeline>
          </Grid>
        }


        <Grid item sm={4} style={{ marginBottom: '2%', padding: '1%' }}>
          {
            tmret && tmret.length > 0 &&
            <ThemeProvider theme={defaultMaterialTheme}>
              <MaterialTable
                columns={[
                  { title: 'Name', field: 'name',render: row => <div style={{ background: 'whitesmoke' }}>  <a href={'/Customers/profile/' + row.chc}> {row.name}</a> </div> },
                  // { title: 'chc', field: 'chc' },
                  { title: 'spend', field: 'spend',render: row => <div style={{ background: 'ghostwhite' }}>  {row.spend} </div> }
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
                    headerStyle: {
                      background: 'rgb(52, 195, 255)',
                      fontSize: '17px',
                      color: 'white',
                      padding: '2px',
                      height: '40px'
                    },
                    // rowStyle: {
                    //     backgroundColor: '#EEE',
                    // }
                    rowStyle: (data, index) => index % 2 === 0 ? { background: "ghostwhite" } : { background: 'white' },

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
          }

        </Grid>
        
        {tmret_note && 
          <Grid item sm={2} style={{ marginBottom: '2%', paddingTop: '15%' }}>
            <Timeline>
              <Timeline.Item>Total :: {tmret_note[0]}  </Timeline.Item>
              <Timeline.Item>Spent : {tmret_note[1]} </Timeline.Item>
              <Timeline.Item>Avg. Spent : {tmret_note[2]} </Timeline.Item>
            </Timeline>
          </Grid>
        }

      </Grid>


      <Grid container style={{ display: 'flex' }}>
        
        <Grid item sm={4} style={{ marginBottom: '2%', padding: '1%' }}>

          {
            tpbr && tpbr.length > 0 &&
            <ThemeProvider theme={defaultMaterialTheme}>
              <MaterialTable style={{borderRadius:'14px'}}
                columns={[
                  { title: 'Product', field: 'proname', render: row => <div style={{ background: 'mintcream' }}>  {row.proname} </div> },
                  { title: 'Revenue', field: 'revenue', render: row => <div style={{ background: 'ghostwhite' }}>  {row.revenue} </div> },
                  { title: '%', field: 'percentage', render: row => <div style={{ background: 'whitesmoke' }}>  {row.percent} </div> }
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
                      background: 'rgb(52, 195, 255)',
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
              />
            </ThemeProvider>
          }
        </Grid>

        <Grid item sm={4} style={{ marginBottom: '2%', padding: '1%' }}>

          {
            tpbu && tpbu.length > 0 &&
            <ThemeProvider theme={defaultMaterialTheme}>
              <MaterialTable style={{borderRadius:'14px'}}
                columns={[
                  { title: 'product', render: row => <div style={{ background: 'mintcream' }}>  {row.proname} </div> },
                  { title: 'unit', render: row => <div style={{ background: 'ghostwhite' }}>  {row.unit} </div> },
                  { title: '%', render: row => <div style={{ background: 'whitesmoke' }}>  {row.percent} </div> }
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
                      background: 'rgb(52, 195, 255)',
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
              />
            </ThemeProvider>
          }

        </Grid>

        <Grid item sm={4} style={{ marginBottom: '2%', padding: '1%' }}>
          {
            tpbp && tpbp.length > 0 &&
            <ThemeProvider theme={defaultMaterialTheme}>
              <MaterialTable style={{borderRadius:'14px'}}
                columns={[
                  { title: 'Product', render: row => <div style={{ background: 'mintcream' }}>  {row.proname} </div> },
                  { title: 'Profit', render: row => <div style={{ background: 'ghostwhite' }}>  {row.profit} </div> },
                  { title: '%', render: row => <div style={{ background: 'whitesmoke' }}>  {row.percent} </div> }
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
                      background: 'rgb(52, 195, 255)',
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
              />
            </ThemeProvider>
          }
        </Grid>

      </Grid>



      <Grid container style={{ display: 'flex' }}>
       

        <Grid item sm={4} style={{ marginBottom: '2%', padding: '1%' }}>
          {
            tcbr && tcbr.length > 0 &&
            <ThemeProvider theme={defaultMaterialTheme}>
              <MaterialTable style={{borderRadius:'14px'}}
                columns={[
                  { title: 'Category', render: row => <div style={{ background: 'mintcream' }}>  {row.category} </div> },
                  { title: 'Revenue', render: row => <div style={{ background: 'ghostwhite' }}>  {row.revenue} </div> },
                  { title: '%', render: row => <div style={{ background: 'whitesmoke' }}>  {row.percent} </div> }
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
                    background: 'rgb(52, 195, 255)',
                    fontSize: '17px',
                    color: 'white',
                    padding: '2px',
                    height: '40px'
                  },
                  // rowStyle: {
                  //     backgroundColor: '#EEE',
                  // }
                  //rowStyle: (data, index) => index % 2 === 0 ? { background: "ghostwhite" } : {background:'white'},

                }}
              />
            </ThemeProvider>
          }
        </Grid>


        <Grid item sm={4} style={{ marginBottom: '2%', padding: '1%' }}>
          {
            tcbu && tcbu.length > 0 &&
            <ThemeProvider theme={defaultMaterialTheme}>
              <MaterialTable style={{borderRadius:'14px'}}
                columns={[
                  // { title: 'category', field: 'category' },
                  // { title: 'unit', field: 'unit' },
                  // { title: 'percentage', field: 'percentage' },
                  { title: 'Category', render: row => <div style={{ background: 'mintcream' }}>  {row.category} </div> },
                  { title: 'Unit', render: row => <div style={{ background: 'ghostwhite' }}>  {row.unit} </div> },
                  { title: '%', render: row => <div style={{ background: 'whitesmoke' }}>  {row.percent} </div> }
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
                    background: 'rgb(52, 195, 255)',
                    fontSize: '17px',
                    color: 'white',
                    padding: '2px',
                    height: '40px'
                  },
                  // rowStyle: {
                  //     backgroundColor: '#EEE',
                  // }
                  //rowStyle: (data, index) => index % 2 === 0 ? { background: "ghostwhite" } : {background:'white'},

                }}
              />
            </ThemeProvider>
          }
        </Grid>

        <Grid item sm={4} style={{ marginBottom: '2%', padding: '1%' }}>
          {
            tcbp && tcbp.length > 0 &&
            <ThemeProvider theme={defaultMaterialTheme}>
              <MaterialTable style={{borderRadius:'14px'}}
                columns={[
                  { title: 'Category', render: row => <div style={{ background: 'mintcream' }}>  {row.category} </div> },
                  { title: 'Profit', render: row => <div style={{ background: 'ghostwhite' }}>  {row.profit} </div> },
                  { title: '%', render: row => <div style={{ background: 'whitesmoke' }}>  {row.percent} </div> }
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
                    background: 'rgb(52, 195, 255)',
                    fontSize: '17px',
                    color: 'white',
                    padding: '2px',
                    height: '40px'
                  },
                  // rowStyle: {
                  //     backgroundColor: '#EEE',
                  // }
                  //rowStyle: (data, index) => index % 2 === 0 ? { background: "ghostwhite" } : {background:'white'},
                }}
              />
            </ThemeProvider>
          }
        </Grid>

      </Grid>

    </>
  )
}

export default DashTops