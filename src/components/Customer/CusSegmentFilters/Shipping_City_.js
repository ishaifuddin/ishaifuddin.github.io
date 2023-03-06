import { ReactSession }  from 'react-client-session';

import React, { useEffect, useState } from "react";
import Select from 'react-select';
import { Grid } from '@mantine/core';
import { useSelector, useDispatch } from "react-redux";
import Multiselect from 'multiselect-react-dropdown';
import { get_cusret_getcity } from "../../../features/cus/CusRetSelCity";
function Shipping_City_() {
    
    var dispatch = useDispatch();
    var [scity, setscity] = useState('');

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

    var Cus_scity = useSelector((state) => state.CusRetSC.scity);
    
    return (

        <>
            <div>
                <Multiselect isObject={false}
                    placeholder="Shipping-City" 
                    onRemove={(e) => {setscity(JSON.stringify(e));}}
                    onSelect={(e) => {setscity(JSON.stringify(e));}}
                    options={Cus_scity}
                    selectedValues={[]}
                    showCheckbox/>

            </div>
            <input name="scitylist" style={{display:"none"}} defaultValue={scity}/>
        </>
    )
}
export default Shipping_City_