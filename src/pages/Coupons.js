import { ReactSession }  from 'react-client-session';
import React, { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import Grid from '@mui/material/Grid';
import MaterialTable from 'material-table';
import { ThemeProvider, createTheme } from '@mui/material';
import { get_all_coupons } from '../features/Coupons/Get_coupon_list';
import SideNav from './SideNav';

function Coupons() {
    
    const dispatch = useDispatch();
    const defaultMaterialTheme = createTheme();
    
    var All_coupons = useSelector((state) => state.coupon.Allcoupon);
    All_coupons = structuredClone(All_coupons);

    useEffect(() => {
        var is_dispatched = (dispatch_function) => {
            ReactSession.get('get_all_coupons');
            if(ReactSession.get('get_all_coupons')) {
                return true;
            }else {
                console.log('get_all_coupons session assigned');
                ReactSession.set('get_all_coupons', "1");
                dispatch(get_all_coupons({ajax_call:'get_all_coupons_list'}));
            }
        }
        is_dispatched('get_all_coupons');
    },[])

    
    return (

        <Grid container>

            <Grid item sm={10}>

                <h4> Available coupons </h4>
                <ThemeProvider theme={defaultMaterialTheme}>
                {    
                All_coupons &&  All_coupons.length > 0 && 
                <MaterialTable
                    columns={[
                        { title: 'ID', field: 'ID' },
                        { title: 'CODE', field: 'CODE' },
                        { title: 'AMOUNT', field: 'AMOUNT' },
                        { title: 'TYPE', field: 'TYPE'},
                        { title: 'TOTAL-USER', field: 'TOTAL-USER' }
                    ]}
                    data={All_coupons}
                    title="Created coupons"
                />
                }
                </ThemeProvider>

            </Grid>

        </Grid>
    )
}

export default Coupons