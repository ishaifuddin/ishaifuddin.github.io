import { ReactSession }  from 'react-client-session';
import React, { useEffect, useState } from "react";
import Select from 'react-select';
import { Grid,Input } from '@mantine/core';
import { useSelector, useDispatch } from "react-redux";
import Multiselect from 'multiselect-react-dropdown';
import { get_cusret_getcity } from "../../../features/cus/CusRetSelCity";
function Shipmeth() {
    
    var dispatch = useDispatch();
    const [shipmeth, setShipmeth] = useState('');
    
    //var Cus_Shipmeth = useSelector((state) => state.CusRetSC.shipmeth);
    
    // if (!(Cus_Shipmeth !== undefined && Cus_Shipmeth !== null)) {
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

    var Cus_Shipmeth = useSelector((state) => state.CusRetSC.shipmeth);

    return (

        <Grid>

           
            <Grid.Col span={8} style={{}}>
                
                { Cus_Shipmeth && <Multiselect isObject={false} 
                    placeholder="Shipping-Method"
                    onRemove={(e) => {setShipmeth(JSON.stringify(e));}}
                    onSelect={(e) => {setShipmeth(JSON.stringify(e));}}
                    options={Cus_Shipmeth}
                    selectedValues={[]}
                    showCheckbox/>}

            
                <Input name="sm" type={'hidden'} value={shipmeth}/>

            </Grid.Col>

        </Grid>
        
    )
}
export default Shipmeth