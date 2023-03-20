import React, { useEffect, useState } from "react";
import Select from 'react-select';
import { Grid } from '@mantine/core';

function Spends() {

    var [spend_bellow, setspend_bellow] = useState(true);
    var [spend_above, setspend_above] = useState(false);
    var [spend_between, setspend_between] = useState(false);

    var handleChange = e => {

        setspend_between(false);
        setspend_above(false);
        setspend_bellow(false);

        if(e === 'spend_between') setspend_between(true);
        if(e === 'spend_above') setspend_above(true);
        if(e === 'spend_bellow') setspend_bellow(true);
    }

    const options = [
        { value: 'spend_bellow', label: 'Less than' },
        { value: 'spend_above', label: 'More than' },
        { value: 'spend_between', label: 'In-Between' },
    ];

    return (
        <div className="input-filters">
            <strong> Spent :  </strong>
            <Select className="multi"
                placeholder="Less than"
                defaultValue={'spend_bellow'}
                onChange={(e)=>{handleChange(e.value)}}
                options={options}
            />
            
            { spend_bellow && 
                <input defaultValue="0" type="number" id="4" name="order_amount_max"  /> 
            }
        

            { spend_above && 
                <input defaultValue="0" type="number" id="3" name="order_amount_min"  /> 
            }

            { spend_between && 
                <div id="spend_betwn"  style={{display:'inline-flex'}}>
                    <input defaultValue="0" type="number" id="1" name="order_amount_minval"  />   
                    <input defaultValue="0" type="number" id="2" name="order_amount_maxval"  /> 
                </div>
            }
        </div>
    )
}

export default Spends