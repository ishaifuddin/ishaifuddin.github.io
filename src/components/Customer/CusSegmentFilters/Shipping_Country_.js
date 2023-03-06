import { ReactSession }  from 'react-client-session';

import React, { useEffect, useState } from "react";
import Select from 'react-select';
import { Grid } from '@mantine/core';
import { useSelector, useDispatch } from "react-redux";
import Multiselect from 'multiselect-react-dropdown';
import { get_cusret_getcity } from "../../../features/cus/CusRetSelCity";

function Shipping_Country_() {
    
    var dispatch = useDispatch();
    const [scountry, setscountry] = useState('');

    ///
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


    var Cus_scountry = useSelector((state) => state.CusRetSC.scountry);
    
    
    return (

        <>
            <div>
                <Multiselect isObject={false} 
                    placeholder="Shipping-Country" 
                    onRemove={(e) => {setscountry(JSON.stringify(e));}}
                    onSelect={(e) => {setscountry(JSON.stringify(e));}}
                    options={Cus_scountry}
                    selectedValues={[]}
                    showCheckbox/>

            </div>
            <input name="bcountrylist" style={{display:"none"}} defaultValue={scountry}/>
        </>
    )
}
export default Shipping_Country_