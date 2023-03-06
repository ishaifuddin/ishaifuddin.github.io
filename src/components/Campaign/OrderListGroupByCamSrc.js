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

import { get_all_orders_group_by_campaign } from '../../features/campaign/OrderListAndGroupByCam';

function OrderListGroupbyCamSrc() {
    
    
    const dispatch = useDispatch();
    const defaultMaterialTheme = createTheme();

    var is_dispatched = (dispatch_function) => {
        ReactSession.get(dispatch_function);
        if(ReactSession.get(dispatch_function)) {
            return true;
        }else {
            ReactSession.set(dispatch_function, "1");
            console.log('get_all_orders_group_by_campaign session assigned');
            return false;
        }
    }

    
    if(!(is_dispatched('get_all_orders_group_by_campaign'))) {
        dispatch(get_all_orders_group_by_campaign({ajax_call:'groupbysrc'}));
    }

    var group_by_campaign_source = useSelector((state) => state.campaign.orderGroupByCamSrc);
    group_by_campaign_source = structuredClone(group_by_campaign_source);
    			
    return (
        
        <Grid style={{margin:'3%'}}>

            <h4> Camapign comparison </h4>

            {
                group_by_campaign_source &&  group_by_campaign_source.length > 0 && 
                <ThemeProvider theme={defaultMaterialTheme}>
                <MaterialTable
                    columns={[
                        { title: 'Source', field: 'Source' },
                        { title: 'Traffic', field: 'Traffic' },
                        { title: 'Orders', field: 'Orders' },
                        { title: 'Revenue', field: 'Revenue'},
                        { title: 'Average_order_Rev', field: 'Average_order_Rev' }
                    ]}
                    data={group_by_campaign_source}
                    title="Group By Campaign Source"
                />
                </ThemeProvider>
            }

        </Grid>
    )
}

export default OrderListGroupbyCamSrc