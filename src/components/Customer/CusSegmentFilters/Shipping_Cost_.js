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

        <>

            <Grid> 

                <Grid.Col span={3} style={{display:'inline-flex'}}>
                    <strong style={{padding: '9px'}}> Shipping Cost :  </strong>

                    <Select
                        placeholder="Less than"
                        defaultValue={'shipcost_bellow'}
                        onChange={(e)=>{handleChange(e.value)}}
                        options={options}
                    />
                </Grid.Col>

                <Grid.Col span={8} >
                    
                    { shipcost_bellow && 

                        <input style={{marginTop:'7px'}} defaultValue="0" type="number" id="shipcost_b" name="shipcost_max"  /> 
                    }
                
        
                    { shipcost_above && 

                        <input style={{marginTop:'7px'}} defaultValue="0" type="number" id="shipcost_a" name="shipcost_min"  /> 
                    }

                    { shipcost_between && 

                        <>
                            <div id="ship_cost_betwn"  style={{display:'inline-flex',marginTop:'7px'}}>
                                <input style={{marginTop:'7px'}} defaultValue="0" type="number" id="shipcost_min" name="shipcost_amount_minval"  /> 
                                <input style={{marginTop:'7px'}} defaultValue="0" type="number" id="shipcost_max" name="shipcost_amount_maxval"  /> 
                            </div>
                        </>
                    }

                </Grid.Col>

            </Grid>
            
        </>
    )
}

export default Spends