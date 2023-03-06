import { ReactSession }  from 'react-client-session';
import React, { useEffect, useState } from "react";
import Select from 'react-select';
import { Grid,Input } from '@mantine/core';
import { useSelector, useDispatch } from "react-redux";
import Multiselect from 'multiselect-react-dropdown';
import { get_cusret_getcity } from "../../../features/cus/CusRetSelCity";
function Shipal2() {
    
    var dispatch = useDispatch();
    const [Sa2, setSa2] = useState('');
    // var Cus_Sa2 = useSelector((state) => state.CusRetSC.cusretSC.sa2);
    
    // if (!(Cus_Sa2 !== undefined && Cus_Sa2 !== null)) {
    //    dispatch(get_cusret_getcity({ajax_call:2}));
    // }

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

    var Cus_Sa2 = useSelector((state) => state.CusRetSC.sa2);

    return (

        
        <Grid style={{marginTop:'20px'}}>

            <Grid.Col span={8} style={{}}>
                { Cus_Sa2 && <Multiselect isObject={false} 
                placeholder="Ship-Address Line 2"
                onRemove={(e) => {setSa2(JSON.stringify(e));}}
                onSelect={(e) => {setSa2(JSON.stringify(e));}}
                options={Cus_Sa2}
                selectedValues={[]}
                showCheckbox/>}
            </Grid.Col>
            
            <Input name="sa2" type={'hidden'} value={Sa2}/>

        </Grid>
        
    )
}
export default Shipal2