import { ReactSession }  from 'react-client-session';
import React, { useEffect, useState } from "react";
import Select from 'react-select';
import { Grid } from '@mantine/core';
import { useSelector, useDispatch } from "react-redux";
import Multiselect from 'multiselect-react-dropdown';
import { get_cusret_getcity } from "../../../features/cus/CusRetSelCity";
function ShipCity() {
    
    // var dispatch = useDispatch();
    // const [scountry, setScountry] = useState('');
    var dispatch = useDispatch();
    var [scountry, setScountry] = useState('');

    var is_dispatched = (dispatch_function) => {
        ReactSession.get('get_cusret_getcity');
        if(ReactSession.get('get_cusret_getcity')) {
            return true;
        }else {
            ReactSession.set('get_cusret_getcity', "1");
            return false;
        }
    }
    if(!(is_dispatched('get_cusret_getcity'))) {
        dispatch(get_cusret_getcity({ajax_call:2}));
    }
    var Cus_country = useSelector((state) => state.CusRetSC.scountry);
    // if (!(Cus_country !== undefined && Cus_country !== null)) {
    //    dispatch(get_cusret_getcity({ajax_call:2}));
    // }

    return (

        <Grid style={{marginTop:'20px'}}>

            <Grid.Col span={8} style={{}}>
                {Cus_country && <Multiselect isObject={false}
                    placeholder="Shipping-Country" 
                    onRemove={(e) => {setScountry(JSON.stringify(e));}}
                    onSelect={(e) => {setScountry(JSON.stringify(e));}}
                    options={Cus_country}
                    selectedValues={[]}
                    showCheckbox/>}

            </Grid.Col>

            <input name="os_country_list" style={{display:"none"}} defaultValue={scountry}/>

        </Grid>
           
        
    )
}
export default ShipCity