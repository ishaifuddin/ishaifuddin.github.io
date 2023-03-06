import { ReactSession }  from 'react-client-session';
import React, { useEffect, useState } from "react";
import Select from 'react-select';
import { Grid } from '@mantine/core';
import { useSelector, useDispatch } from "react-redux";
import Multiselect from 'multiselect-react-dropdown';
import { get_cusret_getcity } from "../../../features/cus/CusRetSelCity";

function BillCountry() {
    
    var dispatch = useDispatch();
    const [bcountry, setbcountry] = useState('');

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
    // if (!(Cus_bcountry !== undefined && Cus_bcountry !== null)) {
    //    dispatch(get_cusret_getcity({ajax_call:2}));
    // }

    return (
        <Grid>
            
        <Grid.Col span={8} style={{}}>
                {Cus_bcountry && <Multiselect isObject={false} 
                    placeholder="Billing-Country"
                    onRemove={(e) => {setbcountry(JSON.stringify(e));}}
                    onSelect={(e) => {setbcountry(JSON.stringify(e));}}
                    options={Cus_bcountry}
                    selectedValues={[]}
                    showCheckbox/>}

            </Grid.Col>
            <input name="ob_country_list" style={{display:"none"}} defaultValue={bcountry}/>
        </Grid>
    )
}
export default BillCountry