import React, { useEffect, useState } from "react";
import Select from 'react-select';
import { Grid } from '@mantine/core';

function Spends() {


    var [shipcost_bellow, setshipcost_bellow] = useState(true);
    var [shipcost_above, setshipcost_above] = useState(false);
    var [shipcost_between, setshipcost_between] = useState(false);

    var handleChange = e => {

        setshipcost_between(false);
        setshipcost_above(false);
        setshipcost_bellow(false);

        if(e === 'shipcost_between') setshipcost_between(true);
        if(e === 'shipcost_above') setshipcost_above(true);
        if(e === 'shipcost_bellow') setshipcost_bellow(true);
    }

    const options = [
        { value: 'shipcost_bellow', label: 'Less than' },
        { value: 'shipcost_above', label: 'More than' },
        { value: 'shipcost_between', label: 'In-Between' },
    ];
      


    return (

        <div className="input-filters">
            <strong> Shipping Cost :  </strong>

            <Select className="multi"
                placeholder="Less than"
                defaultValue={'shipcost_bellow'}
                onChange={(e)=>{handleChange(e.value)}}
                options={options}
            />
            
            { shipcost_bellow && 
                <input defaultValue="0" type="number" id="shipcost_b" name="shipcost_max"  /> 
            }
        
            { shipcost_above && 

                <input defaultValue="0" type="number" id="shipcost_a" name="shipcost_min"  /> 
            }

            { shipcost_between && 
                <div id="ship_cost_betwn"  style={{display:'inline-flex',marginTop:'7px'}}>
                    <input defaultValue="0" type="number" id="shipcost_min" name="shipcost_amount_minval"  /> 
                    <input defaultValue="0" type="number" id="shipcost_max" name="shipcost_amount_maxval"  /> 
                </div>
            }
        </div>
    )
}

export default Spends