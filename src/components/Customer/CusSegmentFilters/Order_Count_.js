import React, { useEffect, useState } from "react";
import Select from 'react-select';
import { Grid } from '@mantine/core';

function Order_Count_() {

    var [order_bellow, setorder_bellow] = useState(true);
    var [order_above, setorder_above] = useState(false);
    var [order_between, setorder_between] = useState(false);

    var handleChange = e => {

        setorder_between(false);
        setorder_above(false);
        setorder_bellow(false);

        if(e === 'order_between') setorder_between(true);
        if(e === 'order_above') setorder_above(true);
        if(e === 'order_bellow') setorder_bellow(true);
    }

    const options = [
        { value: 'order_bellow', label: 'Less than' },
        { value: 'order_above', label: 'More than' },
        { value: 'order_between', label: 'In-Between' },
    ];
      

    return (
        <div className="input-filters">
            <strong> Total Order :  </strong>
            
            <Select className="multi"
                placeholder="Less than"
                defaultValue={'order_bellow'}
                onChange={(e)=>{handleChange(e.value)}}
                options={options}
            />
            { order_bellow && 
                <input defaultValue="0" type="number" id="8" name="maximum_num_order" />   
            }
            { order_above && 
                <input defaultValue="0" type="number" id="7" name="minimum_num_order" />  
            }
            { order_between && 
                <div>
                    <input defaultValue="0" type="number" id="5" name="order_num_minval"  />    
                        
                    <input defaultValue="0" type="number" id="6" name="order_num_maxval"  />       
                </div>
            }
        </div>
    )
}

export default Order_Count_