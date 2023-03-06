import { ReactSession }  from 'react-client-session';

import React, { useEffect,useState,useRef } from "react";

import { useSelector, useDispatch } from "react-redux";
import axios from "axios";
import Select from 'react-select';

import Grid from '@mui/material/Grid';
import Button from '@mui/material/Button';
import moment from 'moment';


import MaterialTable from 'material-table';
import { ThemeProvider, createTheme } from '@mui/material';

import { get_all_orders_from_campaign } from '../../features/campaign/OrderListAndGroupByCam';

function OrderListAll() {
    
    const dispatch = useDispatch();
    const defaultMaterialTheme = createTheme();

    useEffect(() => {
        var is_dispatched = (dispatch_function) => {
            ReactSession.get(dispatch_function);
            if(ReactSession.get(dispatch_function)) {
                return true;
            }else {
                console.log('get_all_orders_from_campaign session assigned');
                ReactSession.set(dispatch_function, "1");
                dispatch(get_all_orders_from_campaign({ajax_call:'order_list'}));
            }
        }
        is_dispatched('get_all_orders_from_campaign');
    },[])

    var Allorder = useSelector((state) => state.campaign.Allorder);
    Allorder = structuredClone(Allorder);

    return (

        <Grid style={{margin:'3%'}}>
            <h4> Orders From campaign </h4>
            {
                Allorder &&  Allorder.length > 0 && 
                <ThemeProvider theme={defaultMaterialTheme}>
                <MaterialTable
                    columns={[
                        { title: 'Camapign', field: 'Camapign' },
                        { title: 'Medium', field: 'Medium' },
                        { title: 'Source', field: 'Source' },
                        { title: 'OrderId', field: 'OrderId'},
                        { title: 'Amount', field: 'Amount' },
                        { title: 'Date', field: 'Date'},
                    ]}
                    data={Allorder}
                    title="Orders from Campaign"
                />
                </ThemeProvider>
            }
            
        </Grid>
    )
}

export default OrderListAll