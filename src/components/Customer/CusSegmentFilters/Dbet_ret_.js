import React, { useEffect, useState } from "react";
import Select from 'react-select';
import { Grid } from '@mantine/core';

function Dbet_ret_() {

    var [daydiff_bellow, setdaydiff_bellow] = useState(true);
    var [daydiff_above, setdaydiff_above] = useState(false);
    var [daydiff_between, setdaydiff_between] = useState(false);

    var handleChange = e => {

        setdaydiff_between(false);
        setdaydiff_above(false);
        setdaydiff_bellow(false);

        if(e === 'daydiff_between') setdaydiff_between(true);
        if(e === 'daydiff_above') setdaydiff_above(true);
        if(e === 'daydiff_bellow') setdaydiff_bellow(true);
    }

    const options = [
        { value: 'daydiff_bellow', label: 'Less than' },
        { value: 'daydiff_above', label: 'More than' },
        { value: 'daydiff_between', label: 'In-Between' },
    ];
      

    return (
        
        <div className="input-filters">
            <strong>Each-Order-Gap :  </strong>
            <Select className="multi"
                placeholder="Less than"
                defaultValue={'daydiff_bellow'}
                onChange={(e)=>{handleChange(e.value)}}
                options={options}
            />

            { daydiff_bellow && 
                <input defaultValue="0" type="number" id="ddifb" name="daydiff_lessthan" />     
            }


            { daydiff_above && 
                <input defaultValue="0" type="number" id="ddifa" name="daydiff_morethan" />     
            }

            { daydiff_between && 
                <div>
                    <input defaultValue="0" type="number" id="ddiff" name="daydiff_from"  />    
                        
                    <input defaultValue="0" type="number" id="ddift" name="daydiff_to"  />       
                </div>
            }
        </div>
    )
}

export default Dbet_ret_