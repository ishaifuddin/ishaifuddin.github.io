import { ReactSession }  from 'react-client-session';

import React, { useEffect, useState } from "react";
import Select from 'react-select';
import { Grid } from '@mantine/core';
import { useSelector, useDispatch } from "react-redux";
import Multiselect from 'multiselect-react-dropdown';
import { get_cusret_getcity } from "../../../features/cus/CusRetSelCity";

function Billing_Country_() {
    
    var dispatch = useDispatch();
    var [bcountry, setbcountry] = useState('');
    
        
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

    var Cus_bcountry = useSelector((state) => state.CusRetSC.bcountry);
    ///

  

    return (

        <div className="input-filters" style={{display: 'block'}}>
            <Multiselect isObject={false} 
                placeholder="Billing-Country"
                onRemove={(e) => {setbcountry(JSON.stringify(e));}}
                onSelect={(e) => {setbcountry(JSON.stringify(e));}}
                options={Cus_bcountry}
                selectedValues={[]}
                showCheckbox/>
            <input name="bcountrylist" style={{display:"none"}} defaultValue={bcountry}/>
        </div>
    )
}
export default Billing_Country_