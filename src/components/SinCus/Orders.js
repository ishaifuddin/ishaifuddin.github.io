import React, { useEffect, useState } from "react";
import axios from "axios";


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
import { ThemeProvider, createTheme } from '@mui/material';

import { useParams } from 'react-router-dom'
import Grid from "@mui/material/Grid";

function Orders() {

    const { chc } = useParams();

    const defaultMaterialTheme = createTheme();

    var current_customer_chc = chc;
    var [orderlist, setOrderlist] = useState([]);
    var [orderbyday, setOrderbyday] = useState([]);

    useEffect(() => {

        axios.post('https://server.shopex.io/customers/single-customer/SingleCustomer_orders.php', {
            customer_chc: current_customer_chc
        }, { withCredentials: true })
            .then(function (response) {
                setOrderlist(response.data.orderlist);
                setOrderbyday(response.data.orderday);
            })
            .catch(function (error) {
                console.log(error);
            });
    }, [current_customer_chc])

    var columns = [
        { title: 'Date', field: 'date', render: row => <div style={{ background: 'whitesmoke' }}>  {row.date} </div> },
        { title: 'Id', field: 'orderid', render: row => <div style={{ background: 'ghostwhite' }}> <strong>  <a href={'/Orders/' + row.orderid}> {row.orderid} </a> </strong> </div> },
        { title: 'Status', field: 'order_status', render: row => <div style={{ background: 'whitesmoke' }}>  {row.order_status} </div> },
        { title: 'Amotal', field: 'order_total', render: row => <div style={{ background: 'ghostwhite' }}>  {row.order_total} </div> },
        { title: 'Total product', field: 'total_product', render: row => <div style={{ background: 'whitesmoke' }}>  {row.total_product} </div> },
        { title: 'Total unit', field: 'total_unit', render: row => <div style={{ background: 'ghostwhite' }}>  {row.total_unit} </div> }
    ];

    var orderbyday_columns = [
        { title: 'Day', field: 'day', render: row => <div style={{ background: 'whitesmoke' }}>  {row.day} </div> },
        { title: 'Order', field: 'order', render: row => <div style={{ background: 'ghostwhite' }}>  {row.order} </div> },
    ];

    return (

        <>

            <Grid style={{marginTop:'20px'}}>

                <ThemeProvider theme={defaultMaterialTheme}>
                    <MaterialTable style={{borderRadius:'14px'}}
                        columns={columns}
                        data={orderlist}
                        title={'Previous Order'}

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

            </Grid>



            <Grid style={{marginTop:'20px'}}>

                <ThemeProvider theme={defaultMaterialTheme}>
                    <MaterialTable style={{borderRadius:'14px'}}
                        columns={orderbyday_columns}
                        data={orderbyday}
                        title={'Order placed on different weekday'}

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
                        localization={{
                            pagination: {
                              labelRowsPerPage: '',
                            }
                        }}
                    />
                </ThemeProvider>
            </Grid>



        </>
    )
}

export default Orders