import { ReactSession }  from 'react-client-session';
import React from 'react'
import { useSelector, useDispatch } from "react-redux";
import Grid from '@mui/material/Grid';
import { useState } from 'react';
import MaterialTable from 'material-table';
import { ThemeProvider, createTheme } from '@mui/material';


import { get_cus_groupBy1stMonthList } from '../../features/cus/CusListGroupBy1stBuy';



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
import { Card } from 'react-bootstrap';


function CusGroupByFirstMonth() {
    
    var dispatch1 = useDispatch();
    var defaultMaterialTheme  = createTheme();

    // var is_dispatched1 = (dispatch_function) => {
    //     ReactSession.get("get_cus_groupBy1stMonthList");
    //     if(ReactSession.get("get_cus_groupBy1stMonthList")) {
    //         return true;
    //     }else {
    //         ReactSession.set("get_cus_groupBy1stMonthList", "1");
    //         return false;
    //     }
    // }
    // if (!(is_dispatched1('get_cus_groupBy1stMonthList'))) {
    //     dispatch1(get_cus_groupBy1stMonthList({ajax_seg:2}));
    // }

    // var CusGroupBy1stBuy      = useSelector((state) => state.cusGroupBy1stMonth.cuslist_groupBy1stBuy);
    // if(CusGroupBy1stBuy.length > 0){
    //     var CusGroupBy1stBuy_obj  = structuredClone(CusGroupBy1stBuy);
    // }



    /////////////////////////// DUMMY DATA /////////////////////////////////
    /////////////////////////// DUMMY DATA /////////////////////////////////
    /////////////////////////// DUMMY DATA /////////////////////////////////
    /////////////////////////// DUMMY DATA /////////////////////////////////
    /////////////////////////// DUMMY DATA /////////////////////////////////
    /////////////////////////// DUMMY DATA /////////////////////////////////
    const [CusGroupBy1stBuy_obj, setTmret] = useState([
        { customers: 'John', returned : 23, orders : 12, OrderPerCustomer : 2, Revenue : 2122, RevenuePerCustomer : 32 },
        { customers: 'John', returned : 23, orders : 12, OrderPerCustomer : 2, Revenue : 2122, RevenuePerCustomer : 32 },
        { customers: 'John', returned : 23, orders : 12, OrderPerCustomer : 2, Revenue : 2122, RevenuePerCustomer : 32 },
        { customers: 'John', returned : 23, orders : 12, OrderPerCustomer : 2, Revenue : 2122, RevenuePerCustomer : 32 },
        { customers: 'John', returned : 23, orders : 12, OrderPerCustomer : 2, Revenue : 2122, RevenuePerCustomer : 32 },
        { customers: 'John', returned : 23, orders : 12, OrderPerCustomer : 2, Revenue : 2122, RevenuePerCustomer : 32 },
        { customers: 'John', returned : 23, orders : 12, OrderPerCustomer : 2, Revenue : 2122, RevenuePerCustomer : 32 },
        { customers: 'John', returned : 23, orders : 12, OrderPerCustomer : 2, Revenue : 2122, RevenuePerCustomer : 32 },
        { customers: 'John', returned : 23, orders : 12, OrderPerCustomer : 2, Revenue : 2122, RevenuePerCustomer : 32 },
        { customers: 'John', returned : 23, orders : 12, OrderPerCustomer : 2, Revenue : 2122, RevenuePerCustomer : 32 },
        { customers: 'John', returned : 23, orders : 12, OrderPerCustomer : 2, Revenue : 2122, RevenuePerCustomer : 32 },
        { customers: 'John', returned : 23, orders : 12, OrderPerCustomer : 2, Revenue : 2122, RevenuePerCustomer : 32 },
        { customers: 'John', returned : 23, orders : 12, OrderPerCustomer : 2, Revenue : 2122, RevenuePerCustomer : 32 },
        { customers: 'John', returned : 23, orders : 12, OrderPerCustomer : 2, Revenue : 2122, RevenuePerCustomer : 32 },
        { customers: 'John', returned : 23, orders : 12, OrderPerCustomer : 2, Revenue : 2122, RevenuePerCustomer : 32 },
        { customers: 'John', returned : 23, orders : 12, OrderPerCustomer : 2, Revenue : 2122, RevenuePerCustomer : 32 },
        { customers: 'John', returned : 23, orders : 12, OrderPerCustomer : 2, Revenue : 2122, RevenuePerCustomer : 32 },
        { customers: 'John', returned : 23, orders : 12, OrderPerCustomer : 2, Revenue : 2122, RevenuePerCustomer : 32 },
        { customers: 'John', returned : 23, orders : 12, OrderPerCustomer : 2, Revenue : 2122, RevenuePerCustomer : 32 },
        { customers: 'John', returned : 23, orders : 12, OrderPerCustomer : 2, Revenue : 2122, RevenuePerCustomer : 32 },
        { customers: 'John', returned : 23, orders : 12, OrderPerCustomer : 2, Revenue : 2122, RevenuePerCustomer : 32 },
        { customers: 'John', returned : 23, orders : 12, OrderPerCustomer : 2, Revenue : 2122, RevenuePerCustomer : 32 },
        { customers: 'John', returned : 23, orders : 12, OrderPerCustomer : 2, Revenue : 2122, RevenuePerCustomer : 32 },
        { customers: 'John', returned : 23, orders : 12, OrderPerCustomer : 2, Revenue : 2122, RevenuePerCustomer : 32 },
        { customers: 'John', returned : 23, orders : 12, OrderPerCustomer : 2, Revenue : 2122, RevenuePerCustomer : 32 },
        { customers: 'John', returned : 23, orders : 12, OrderPerCustomer : 2, Revenue : 2122, RevenuePerCustomer : 32 },
        { customers: 'John', returned : 23, orders : 12, OrderPerCustomer : 2, Revenue : 2122, RevenuePerCustomer : 32 },
        { customers: 'John', returned : 23, orders : 12, OrderPerCustomer : 2, Revenue : 2122, RevenuePerCustomer : 32 },
        { customers: 'John', returned : 23, orders : 12, OrderPerCustomer : 2, Revenue : 2122, RevenuePerCustomer : 32 },
        { customers: 'John', returned : 23, orders : 12, OrderPerCustomer : 2, Revenue : 2122, RevenuePerCustomer : 32 },
        { customers: 'John', returned : 23, orders : 12, OrderPerCustomer : 2, Revenue : 2122, RevenuePerCustomer : 32 },
        { customers: 'John', returned : 23, orders : 12, OrderPerCustomer : 2, Revenue : 2122, RevenuePerCustomer : 32 },
        { customers: 'John', returned : 23, orders : 12, OrderPerCustomer : 2, Revenue : 2122, RevenuePerCustomer : 32 },
        { customers: 'John', returned : 23, orders : 12, OrderPerCustomer : 2, Revenue : 2122, RevenuePerCustomer : 32 },
        { customers: 'John', returned : 23, orders : 12, OrderPerCustomer : 2, Revenue : 2122, RevenuePerCustomer : 32 },
        { customers: 'John', returned : 23, orders : 12, OrderPerCustomer : 2, Revenue : 2122, RevenuePerCustomer : 32 },
        { customers: 'John', returned : 23, orders : 12, OrderPerCustomer : 2, Revenue : 2122, RevenuePerCustomer : 32 },
        { customers: 'John', returned : 23, orders : 12, OrderPerCustomer : 2, Revenue : 2122, RevenuePerCustomer : 32 },
        { customers: 'John', returned : 23, orders : 12, OrderPerCustomer : 2, Revenue : 2122, RevenuePerCustomer : 32 },
        { customers: 'John', returned : 23, orders : 12, OrderPerCustomer : 2, Revenue : 2122, RevenuePerCustomer : 32 },
        { customers: 'John', returned : 23, orders : 12, OrderPerCustomer : 2, Revenue : 2122, RevenuePerCustomer : 32 },
        { customers: 'John', returned : 23, orders : 12, OrderPerCustomer : 2, Revenue : 2122, RevenuePerCustomer : 32 },
        { customers: 'John', returned : 23, orders : 12, OrderPerCustomer : 2, Revenue : 2122, RevenuePerCustomer : 32 },
        { customers: 'John', returned : 23, orders : 12, OrderPerCustomer : 2, Revenue : 2122, RevenuePerCustomer : 32 },
        { customers: 'John', returned : 23, orders : 12, OrderPerCustomer : 2, Revenue : 2122, RevenuePerCustomer : 32 },
        { customers: 'John', returned : 23, orders : 12, OrderPerCustomer : 2, Revenue : 2122, RevenuePerCustomer : 32 },
        { customers: 'John', returned : 23, orders : 12, OrderPerCustomer : 2, Revenue : 2122, RevenuePerCustomer : 32 },
        { customers: 'John', returned : 23, orders : 12, OrderPerCustomer : 2, Revenue : 2122, RevenuePerCustomer : 32 },
        { customers: 'John', returned : 23, orders : 12, OrderPerCustomer : 2, Revenue : 2122, RevenuePerCustomer : 32 },
        { customers: 'John', returned : 23, orders : 12, OrderPerCustomer : 2, Revenue : 2122, RevenuePerCustomer : 32 },
        { customers: 'John', returned : 23, orders : 12, OrderPerCustomer : 2, Revenue : 2122, RevenuePerCustomer : 32 },
        { customers: 'John', returned : 23, orders : 12, OrderPerCustomer : 2, Revenue : 2122, RevenuePerCustomer : 32 },
        { customers: 'John', returned : 23, orders : 12, OrderPerCustomer : 2, Revenue : 2122, RevenuePerCustomer : 32 },
        { customers: 'John', returned : 23, orders : 12, OrderPerCustomer : 2, Revenue : 2122, RevenuePerCustomer : 32 },
        { customers: 'John', returned : 23, orders : 12, OrderPerCustomer : 2, Revenue : 2122, RevenuePerCustomer : 32 },
        { customers: 'John', returned : 23, orders : 12, OrderPerCustomer : 2, Revenue : 2122, RevenuePerCustomer : 32 },
        { customers: 'John', returned : 23, orders : 12, OrderPerCustomer : 2, Revenue : 2122, RevenuePerCustomer : 32 },
        { customers: 'John', returned : 23, orders : 12, OrderPerCustomer : 2, Revenue : 2122, RevenuePerCustomer : 32 },
        { customers: 'John', returned : 23, orders : 12, OrderPerCustomer : 2, Revenue : 2122, RevenuePerCustomer : 32 },
        { customers: 'John', returned : 23, orders : 12, OrderPerCustomer : 2, Revenue : 2122, RevenuePerCustomer : 32 },
        
    ]);




    return (
        <Card className="dash-card"> 
            {
                CusGroupBy1stBuy_obj && CusGroupBy1stBuy_obj.length > 0 && 
                <ThemeProvider theme={defaultMaterialTheme}>
                <MaterialTable
                    columns={[
                        { title: 'FirstPurchase', field: 'FirstPurchase'
                        , render: row =>
                            <div style={{ background: 'mintcream', fontFamily: 'system-ui', fontSize: '16px', textAlign: 'left' }}> {row.FirstPurchase}</div>
                        },
                        { title: 'Customers', field: 'Customer' , render: row => <div style={{ background: 'whitesmoke' }}>  {row.Customer} </div>},
                        { title: 'Returned', field: 'Returned', render: row => <div style={{ background: 'whitesmoke' }}>  {row.Returned} </div> },
                        { title: 'Orders', field: 'Orders', render: row => <div style={{ background: 'whitesmoke' }}>  {row.Orders} </div>},
                        { title: 'Order/Customer', field: 'Order_Per_customer', render: row => <div style={{ background: 'whitesmoke' }}>  {row.Order_Per_customer} </div> },
                        { title: 'Revenue', field: 'Revenue', render: row => <div style={{ background: 'whitesmoke' }}>  {row.Revenue} </div>},
                        { title: 'Rev/Customer', field: 'Revenue_per_customer', render: row => <div style={{ background: 'whitesmoke' }}>  {row.Revenue_per_customer} </div> },
                    ]}
                    data={CusGroupBy1stBuy_obj}
                    title="Customers Group By 1st Purchase Month"
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
                        ResetSearch:CancelIcon,
                        Clear:CancelIcon
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
            }
        </Card>
    )
}

export default CusGroupByFirstMonth