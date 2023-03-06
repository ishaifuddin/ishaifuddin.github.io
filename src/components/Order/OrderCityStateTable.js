import React from 'react'
import Grid from '@mui/material/Grid';

import Search from '@material-ui/icons/Search'
import ViewColumn from '@material-ui/icons/ViewColumn'
import SaveAlt from '@material-ui/icons/SaveAlt'
import ChevronLeft from '@material-ui/icons/ChevronLeft'
import ChevronRight from '@material-ui/icons/ChevronRight'
import FirstPage from '@material-ui/icons/FirstPage'
import LastPage from '@material-ui/icons/LastPage'
import Add from '@material-ui/icons/Add'
import Check from '@material-ui/icons/Check'
import FilterList from '@material-ui/icons/FilterList'
import Remove from '@material-ui/icons/Remove'


import MaterialTable from 'material-table';
import { ThemeProvider, createTheme } from '@mui/material';
import { useSelector } from "react-redux";


function OrderCityStateTable() {

    const defaultMaterialTheme = createTheme();

    var Order_numrev_shiploc_data = useSelector((state) => state.order_numrev_shipLoc_ChartTable);

    var billcitycloneData = [];
    if (Order_numrev_shiploc_data && Order_numrev_shiploc_data.billcity_table && (Order_numrev_shiploc_data.billcity_table).length > 0) {
        billcitycloneData = structuredClone(Order_numrev_shiploc_data.billcity_table);
    }


    var billstatecloneData = [];
    if ( Order_numrev_shiploc_data && Order_numrev_shiploc_data.billstate_table && (Order_numrev_shiploc_data.billstate_table).length > 0) {
        billstatecloneData = structuredClone(Order_numrev_shiploc_data.billstate_table);
    }



    var shipcitycloneData = [];
    if (Order_numrev_shiploc_data && Order_numrev_shiploc_data.shipcity_table && (Order_numrev_shiploc_data.shipcity_table).length > 0) {
        shipcitycloneData = structuredClone(Order_numrev_shiploc_data.shipcity_table);
    }
    var shipstatecloneData = [];
    if (Order_numrev_shiploc_data && Order_numrev_shiploc_data.shipstate_table && (Order_numrev_shiploc_data.shipstate_table).length > 0) {
        shipstatecloneData = structuredClone(Order_numrev_shiploc_data.shipstate_table);
    }



    var city_columns = [
        { title: 'City', field: 'city' , render: row => <div style={{background:'mintcream'}}>  {row.city} </div>},

        { title: 'Order', field: '', render: row => <div style={{background:'ghostwhite'}}>  {row.total_order} </div>, customSort: (a, b) => a.total_order - b.total_order },
        { title: '[%]', field: 'total_order_change',
        render: row => <div style={{background:'whitesmoke'}}>  {row.total_order_change} </div>, customSort: (a, b) => a.total_order_change - b.total_order_change },

        { title: 'Revenue', field: 'total_order_rev',
        render: row => <div style={{background:'ghostwhite'}}>  {row.total_order_rev} </div>, customSort: (a, b) => a.total_order_rev - b.total_order_rev },
        { title: '[%]', field: 'total_order_amount_change',
        render: row => <div style={{background:'whitesmoke'}}>  {row.total_order_amount_change} </div>, customSort: (a, b) => a.total_order_amount_change - b.total_order_amount_change },

        { title: 'NewOrder', field: 'new_order',render: row => <div style={{background:'ghostwhite'}}>  {row.new_order} </div>, customSort: (a, b) => a.new_order - b.new_order },
        { title: '[%]', field: 'new_order_change',
        render: row => <div style={{background:'whitesmoke'}}>  {row.new_order_change} </div>, customSort: (a, b) => a.new_order_change - b.new_order_change },

        { title: 'NewRev', field: 'new_order_rev',
        render: row => <div style={{background:'ghostwhite'}}>  {row.new_order_rev} </div>, customSort: (a, b) => a.new_order_rev - b.new_order_rev },
        { title: '[%]', field: 'new_order_rev_change',
        render: row => <div style={{background:'whitesmoke'}}>  {row.new_order_rev_change} </div>, customSort: (a, b) => a.new_order_rev_change - b.new_order_rev_change },

        { title: 'RetOrder', field: 'ret_order',
        render: row => <div style={{background:'ghostwhite'}}>  {row.ret_order} </div>, customSort: (a, b) => a.ret_order - b.ret_order },
        { title: '[%]', field: 'ret_order_change', 
        render: row => <div style={{background:'whitesmoke'}}>  {row.ret_order_change} </div>,customSort: (a, b) => a.ret_order_change - b.ret_order_change },

        { title: 'RetRev', field: 'ret_order_rev',
        render: row => <div style={{background:'ghostwhite'}}>  {row.ret_order_rev} </div>, customSort: (a, b) => a.ret_order_rev - b.ret_order_rev },
        { title: '[%]', field: 'ret_order_rev_change',
        render: row => <div style={{background:'whitesmoke'}}>  {row.ret_order_rev_change} </div>, customSort: (a, b) => a.ret_order_rev_change - b.ret_order_rev_change },

        { title: 'AOV', field: 'avg_order_rev',
        render: row => <div style={{background:'ghostwhite'}}>  {row.avg_order_rev} </div>, customSort: (a, b) => a.avg_order_rev - b.avg_order_rev },
        { title: '[%]', field: 'avg_order_rev_change',
        render: row => <div style={{background:'whitesmoke'}}>  {row.avg_order_rev_change} </div>, customSort: (a, b) => a.avg_order_rev_change - b.avg_order_rev_change },

        { title: 'Profit', field: 'order_profit',
        render: row => <div style={{background:'ghostwhite'}}>  {row.order_profit} </div>, customSort: (a, b) => a.order_profit - b.order_profit },
        { title: '[%]', field: 'order_profit_change',
        render: row => <div style={{background:'whitesmoke'}}>  {row.order_profit_change} </div>, customSort: (a, b) => a.order_profit_change - b.order_profit_change }
    ];

    var state_columns = [
        { title: 'State', field: 'state' , render: row => <div style={{background:'mintcream'}}>  {row.state} </div>},

        { title: 'Order', field: '', render: row => <div style={{background:'ghostwhite'}}>  {row.total_order} </div>, customSort: (a, b) => a.total_order - b.total_order },
        { title: '[%]', field: 'total_order_change',
        render: row => <div style={{background:'whitesmoke'}}>  {row.total_order_change} </div>, customSort: (a, b) => a.total_order_change - b.total_order_change },

        { title: 'Revenue', field: 'total_order_rev',
        render: row => <div style={{background:'ghostwhite'}}>  {row.total_order_rev} </div>, customSort: (a, b) => a.total_order_rev - b.total_order_rev },
        { title: '[%]', field: 'total_order_amount_change',
        render: row => <div style={{background:'whitesmoke'}}>  {row.total_order_amount_change} </div>, customSort: (a, b) => a.total_order_amount_change - b.total_order_amount_change },

        { title: 'NewOrder', field: 'new_order',render: row => <div style={{background:'ghostwhite'}}>  {row.new_order} </div>, customSort: (a, b) => a.new_order - b.new_order },
        { title: '[%]', field: 'new_order_change',
        render: row => <div style={{background:'whitesmoke'}}>  {row.new_order_change} </div>, customSort: (a, b) => a.new_order_change - b.new_order_change },

        { title: 'NewRev', field: 'new_order_rev',
        render: row => <div style={{background:'ghostwhite'}}>  {row.new_order_rev} </div>, customSort: (a, b) => a.new_order_rev - b.new_order_rev },
        { title: '[%]', field: 'new_order_rev_change',
        render: row => <div style={{background:'whitesmoke'}}>  {row.new_order_rev_change} </div>, customSort: (a, b) => a.new_order_rev_change - b.new_order_rev_change },

        { title: 'RetOrder', field: 'ret_order',
        render: row => <div style={{background:'ghostwhite'}}>  {row.ret_order} </div>, customSort: (a, b) => a.ret_order - b.ret_order },
        { title: '[%]', field: 'ret_order_change', 
        render: row => <div style={{background:'whitesmoke'}}>  {row.ret_order_change} </div>,customSort: (a, b) => a.ret_order_change - b.ret_order_change },

        { title: 'RetRev', field: 'ret_order_rev',
        render: row => <div style={{background:'ghostwhite'}}>  {row.ret_order_rev} </div>, customSort: (a, b) => a.ret_order_rev - b.ret_order_rev },
        { title: '[%]', field: 'ret_order_rev_change',
        render: row => <div style={{background:'whitesmoke'}}>  {row.ret_order_rev_change} </div>, customSort: (a, b) => a.ret_order_rev_change - b.ret_order_rev_change },

        { title: 'AOV', field: 'avg_order_rev',
        render: row => <div style={{background:'ghostwhite'}}>  {row.avg_order_rev} </div>, customSort: (a, b) => a.avg_order_rev - b.avg_order_rev },
        { title: '[%]', field: 'avg_order_rev_change',
        render: row => <div style={{background:'whitesmoke'}}>  {row.avg_order_rev_change} </div>, customSort: (a, b) => a.avg_order_rev_change - b.avg_order_rev_change },

        { title: 'Profit', field: 'order_profit',
        render: row => <div style={{background:'ghostwhite'}}>  {row.order_profit} </div>, customSort: (a, b) => a.order_profit - b.order_profit },
        { title: '[%]', field: 'order_profit_change',
        render: row => <div style={{background:'whitesmoke'}}>  {row.order_profit_change} </div>, customSort: (a, b) => a.order_profit_change - b.order_profit_change }
    ];

    return (
        
        <Grid container>

            <Grid  item sm={11} style={{ marginTop:'20px', boxShadow: "rgb(65 69 88 / 10%) 0px 7px 14px 0px, rgb(0 0 0 / 7%) 0px 3px 6px 0px" }}>
                
                {billcitycloneData &&

                    <ThemeProvider theme={defaultMaterialTheme}>
                        <MaterialTable style={{borderRadius:'14px'}}
                            columns={city_columns}
                            data={billcitycloneData}
                            title="Order & Rev from Billing-city"
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
                                ThirdStateCheck: Remove,
                                Clear: Remove
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
                    </ThemeProvider>
                }
            </Grid>


            <Grid item sm={11} style={{ marginTop:'20px', boxShadow: "rgb(65 69 88 / 10%) 0px 7px 14px 0px, rgb(0 0 0 / 7%) 0px 3px 6px 0px" }}>

                {billstatecloneData &&
                    <ThemeProvider theme={defaultMaterialTheme}>
                        <MaterialTable style={{borderRadius:'14px'}}
                            columns={state_columns}
                            data={billstatecloneData}
                            title="Order & Rev from Billing-State"
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
                                ThirdStateCheck: Remove,
                                Clear: Remove
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
                    </ThemeProvider>
                }
            </Grid>


            <Grid  item sm={11} style={{ marginTop:'20px', boxShadow: "rgb(65 69 88 / 10%) 0px 7px 14px 0px, rgb(0 0 0 / 7%) 0px 3px 6px 0px" }}>

                {shipcitycloneData &&
                    <ThemeProvider theme={defaultMaterialTheme}>
                        <MaterialTable style={{borderRadius:'14px'}}
                            columns={city_columns}
                            data={shipcitycloneData}
                            title="Order & Rev from Shipping-city"
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
                                ThirdStateCheck: Remove,
                                Clear: Remove
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
                    </ThemeProvider>
                }
            </Grid>


            <Grid item sm={11} style={{ marginTop:'20px', boxShadow: "rgb(65 69 88 / 10%) 0px 7px 14px 0px, rgb(0 0 0 / 7%) 0px 3px 6px 0px" }}>
                
                {shipstatecloneData &&
                    <ThemeProvider theme={defaultMaterialTheme}>
                        <MaterialTable style={{borderRadius:'14px'}}
                            columns={state_columns}
                            data={shipstatecloneData}
                            title="Order & Rev from Shipping-State"
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
                                ThirdStateCheck: Remove,
                                Clear: Remove
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
                    </ThemeProvider>
                }

            </Grid>

        </Grid>
    )
}

export default OrderCityStateTable