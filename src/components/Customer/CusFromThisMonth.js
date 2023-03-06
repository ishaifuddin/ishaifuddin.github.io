import { ReactSession }  from 'react-client-session';
import React from 'react'
import Grid from '@mui/material/Grid';

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

function CusFromThisMonth() {


    var defaultMaterialTheme  = createTheme();

    var dispatch4  = useDispatch();
    
   
    var is_dispatched2 = (dispatch_function) => {
        ReactSession.get("get_custm_data");
        if(ReactSession.get("get_custm_data")) {
            return true;
        }else {
            ReactSession.set("get_custm_data", "1");
            return false;
        }
    }

    if(!(is_dispatched2('get_custm_data'))) {
        dispatch4(get_custm_data({ajax_seg:2}));
    }
  
    var new_customer_this_month = useSelector((state) => state.cusTM.newcus_obj);
    if(new_customer_this_month.length > 0){
        var tmnew = structuredClone(new_customer_this_month);
    }

    var ret_customer_this_month = useSelector((state) => state.cusTM.retcus_obj);
    if(ret_customer_this_month.length > 0)  {
        var tmret = structuredClone(ret_customer_this_month);
    }
    
    


    return (
    
        <div>
            
            
            {/* New and Returning Customers From this Month */}
            
            <Grid style={{margin:"20px"}}>
                    
                <ThemeProvider theme={defaultMaterialTheme}>
                {tmnew && 
                    <MaterialTable style={{borderRadius:'14px'}}
                        columns={[
                            { title: 'Customer', field: 'customer' },
                            { title: 'Spend', field: 'spend' }
                        ]}
                        data={tmnew}
                        title="New Customer from this month"
                    />}
                </ThemeProvider>

            </Grid>


            <Grid style={{margin:"20px"}}>
                    
                <ThemeProvider theme={defaultMaterialTheme}>
                { tmret && <MaterialTable style={{borderRadius:'14px'}}
                        columns={[
                            { title: 'Customer', field: 'customer' },
                            { title: 'Spend', field: 'spend' },
                            { title: 'Returned-after', field: 'ret_after' },
                            { title: 'Placed-Nth-Order', field: 'placed_Nth_order'}
                        ]}
                        data={tmret}
                        title="Repeat customer From this month"
                    />
                }
                </ThemeProvider>

            </Grid>


        </div>
    )
}

export default CusFromThisMonth