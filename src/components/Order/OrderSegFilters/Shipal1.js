import { ReactSession }  from 'react-client-session';
import React, { useEffect, useState } from "react";
import Select from 'react-select';
import { Grid,Input } from '@mantine/core';
import { useSelector, useDispatch } from "react-redux";
import Multiselect from 'multiselect-react-dropdown';
import { get_cusret_getcity } from "../../../features/cus/CusRetSelCity";
function Shipal1() {
    
    var dispatch = useDispatch();
    const [Sa1, setSa1] = useState('');
    
    // var Cus_Sa1 = useSelector((state) => state.CusRetSC.cusretSC.sa1);
    
    // if (!(Cus_Sa1 !== undefined && Cus_Sa1 !== null)) {
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

    var Cus_Sa1 = useSelector((state) => state.CusRetSC.sa1);

    return (

        
        <Grid style={{marginTop:'20px'}}>

            <Grid.Col span={8} style={{}}>
                { Cus_Sa1 && <Multiselect isObject={false} 
                placeholder="Ship-Address Line 1"
                onRemove={(e) => {setSa1(JSON.stringify(e));}}
                onSelect={(e) => {setSa1(JSON.stringify(e));}}
                options={Cus_Sa1}
                selectedValues={[]}
                showCheckbox/>}
            </Grid.Col>
            
            <Input name="sa1" type={'hidden'} value={Sa1}/>

        </Grid>
        
    )
}
export default Shipal1