import { ReactSession }  from 'react-client-session';
import React, { useEffect, useState } from "react";
import Select from 'react-select';
import { Grid,Input } from '@mantine/core';
import { useSelector, useDispatch } from "react-redux";
import Multiselect from 'multiselect-react-dropdown';
import { get_cusret_getcity } from "../../../features/cus/CusRetSelCity";
function Paymeth() {
    
    var dispatch = useDispatch();
    const [paymeth, setPaymeth] = useState('');
    
    // var Cus_paymeth = useSelector((state) => state.CusRetSC.cusretSC.paymeth);
    
    // if (!(Cus_paymeth !== undefined && Cus_paymeth !== null)) {
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

    var Cus_paymeth = useSelector((state) => state.CusRetSC.paymeth);

    return (

        <Grid>
            
           
            <Grid.Col span={8} style={{}}>
                    { Cus_paymeth && <Multiselect isObject={false} 
                        placeholder="Paymeth-Method"
                        onRemove={(e) => {setPaymeth(JSON.stringify(e));}}
                        onSelect={(e) => {setPaymeth(JSON.stringify(e));}}
                        options={Cus_paymeth}
                        selectedValues={[]}
                        showCheckbox/>}

            </Grid.Col>

            <Input name="pm" type={'hidden'} value={paymeth}/>
            
        </Grid>
    )
}
export default Paymeth