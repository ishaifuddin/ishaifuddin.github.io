import { ReactSession }  from 'react-client-session';
import React from 'react'
import Grid from '@mui/material/Grid';
import { useState } from 'react';
import MaterialTable from 'material-table';
import { ThemeProvider, createTheme } from '@mui/material';


import Search from '@material-ui/icons/Search'
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

import { useSelector, useDispatch } from "react-redux";

import { get_custm_data } from '../../features/cus/CustomersFromThisMonth';
import { Card } from 'react-bootstrap';

function CusFromThisMonth() {


    var defaultMaterialTheme  = createTheme();

    var dispatch4  = useDispatch();
    
   
    // var is_dispatched2 = (dispatch_function) => {
    //     ReactSession.get("get_custm_data");
    //     if(ReactSession.get("get_custm_data")) {
    //         return true;
    //     }else {
    //         ReactSession.set("get_custm_data", "1");
    //         return false;
    //     }
    // }

    // if(!(is_dispatched2('get_custm_data'))) {
    //     dispatch4(get_custm_data({ajax_seg:2}));
    // }
  
    // var new_customer_this_month = useSelector((state) => state.cusTM.newcus_obj);
    // if(new_customer_this_month.length > 0){
    //     var tmnew = structuredClone(new_customer_this_month);
    // }

    // var ret_customer_this_month = useSelector((state) => state.cusTM.retcus_obj);
    // if(ret_customer_this_month.length > 0)  {
    //     var tmret = structuredClone(ret_customer_this_month);
    // }
    
    
    /////////////////////////// DUMMY DATA /////////////////////////////////
    /////////////////////////// DUMMY DATA /////////////////////////////////
    /////////////////////////// DUMMY DATA /////////////////////////////////
    /////////////////////////// DUMMY DATA /////////////////////////////////
    /////////////////////////// DUMMY DATA /////////////////////////////////
    /////////////////////////// DUMMY DATA /////////////////////////////////

    const [tmret, setTmret] = useState([
        { name: 'John', spend: 23 },
        {  name: 'Jane', spend: 31 },
        {  name: 'Bob', spend: 45  },
        {  name: 'Alice', spend: 27},
        { name: 'John', spend: 23 },
        {  name: 'Jane', spend: 31 },
        {  name: 'Bob', spend: 45  },
        {  name: 'Alice', spend: 27},
        { name: 'John', spend: 23 },
        {  name: 'Jane', spend: 31 },
        {  name: 'Bob', spend: 45  },
        {  name: 'Alice', spend: 27},
        { name: 'John', spend: 23 },
        {  name: 'Jane', spend: 31 },
        {  name: 'Bob', spend: 45  },
        {  name: 'Alice', spend: 27},
        { name: 'John', spend: 23 },
        {  name: 'Jane', spend: 31 },
        {  name: 'Bob', spend: 45  },
        {  name: 'Alice', spend: 27},
        { name: 'John', spend: 23 },
        {  name: 'Jane', spend: 31 },
        {  name: 'Bob', spend: 45  },
        {  name: 'Alice', spend: 27},
    ]);


    const [tmnew, setTmnew] = useState([
        {  name: 'John', spend: 23, Returned_after : '12' },
        {  name: 'Jane', spend: 31 , Returned_after : '1' },
        {  name: 'Bob', spend: 45 , Returned_after : '2' },
        {  name: 'Alice', spend: 27, Returned_after : '6' },
        {  name: 'John', spend: 23, Returned_after : '12' },
        {  name: 'Jane', spend: 31 , Returned_after : '1' },
        {  name: 'Bob', spend: 45 , Returned_after : '2' },
        {  name: 'Alice', spend: 27, Returned_after : '6' },
        {  name: 'John', spend: 23, Returned_after : '12' },
        {  name: 'Jane', spend: 31 , Returned_after : '1' },
        {  name: 'Bob', spend: 45 , Returned_after : '2' },
        {  name: 'Alice', spend: 27, Returned_after : '6' },
        {  name: 'John', spend: 23, Returned_after : '12' },
        {  name: 'Jane', spend: 31 , Returned_after : '1' },
        {  name: 'Bob', spend: 45 , Returned_after : '2' },
        {  name: 'Alice', spend: 27, Returned_after : '6' },
        {  name: 'John', spend: 23, Returned_after : '12' },
        {  name: 'Jane', spend: 31 , Returned_after : '1' },
        {  name: 'Bob', spend: 45 , Returned_after : '2' },
        {  name: 'Alice', spend: 27, Returned_after : '6' },
        {  name: 'John', spend: 23, Returned_after : '12' },
        {  name: 'Jane', spend: 31 , Returned_after : '1' },
        {  name: 'Bob', spend: 45 , Returned_after : '2' },
        {  name: 'Alice', spend: 27, Returned_after : '6' },
        {  name: 'John', spend: 23, Returned_after : '12' },
        {  name: 'Jane', spend: 31 , Returned_after : '1' },
        {  name: 'Bob', spend: 45 , Returned_after : '2' },
        {  name: 'Alice', spend: 27, Returned_after : '6' },
        {  name: 'John', spend: 23, Returned_after : '12' },
        {  name: 'Jane', spend: 31 , Returned_after : '1' },
        {  name: 'Bob', spend: 45 , Returned_after : '2' },
        {  name: 'Alice', spend: 27, Returned_after : '6' },


    ]);
    


    return (
        <>
            {/* New and Returning Customers From this Month */}
            <Grid item md={6}>
                <Card className='dash-card'>
                    <ThemeProvider theme={defaultMaterialTheme}>
                        {tmnew && 
                        <MaterialTable style={{borderRadius:'14px'}}
                            columns={[
                                { title: 'Customer', field: 'customer' },
                                { title: 'Spend', field: 'spend' }
                            ]}
                            data={tmnew}
                            title="New Customer from this month"
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
                        />}
                    </ThemeProvider>
                </Card>
            </Grid>
            <Grid item md={6}>
                <Card className='dash-card'>
                    <ThemeProvider theme={defaultMaterialTheme}>
                    { tmret && <MaterialTable
                            columns={[
                                { title: 'Customer', field: 'customer' },
                                { title: 'Spend', field: 'spend' },
                                { title: 'Returned-after', field: 'ret_after' },
                                { title: 'Placed-Nth-Order', field: 'placed_Nth_order'}
                            ]}
                            data={tmret}
                            title="Repeat customer From this month"
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
                    }
                    </ThemeProvider>
                </Card>
            </Grid>
        </>
    )
}

export default CusFromThisMonth