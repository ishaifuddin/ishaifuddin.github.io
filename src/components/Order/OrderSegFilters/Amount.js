
import React, { useEffect, useState } from "react";
import Select from 'react-select';
import { Grid } from '@mantine/core';

function Amount() {


    var [amount_bellow, setamount_bellow] = useState(true);
    var [amount_above, setamount_above] = useState(false);
    var [amount_between, setamount_between] = useState(false);

    var handleChange = e => {

        setamount_between(false);
        setamount_above(false);
        setamount_bellow(false);

        if(e === 'amount_between') setamount_between(true);
        if(e === 'amount_above') setamount_above(true);
        if(e === 'amount_bellow') setamount_bellow(true);
    }

    const options = [
        { value: 'amount_bellow', label: 'Less than' },
        { value: 'amount_above', label: 'More than' },
        { value: 'amount_between', label: 'In-Between' },
    ];
      


    return (

        <>
            <Grid>

                <Grid.Col span={3} style={{display:'inline-flex'}}>
                    <strong style={{marginTop: '9px'}}> Amount :  </strong>

                    <Select
                        placeholder="Less than"
                        defaultValue={'amount_bellow'}
                        onChange={(e)=>{handleChange(e.value)}}
                        options={options}
                    />
                </Grid.Col>

                <Grid.Col span={8} >
                    
                    { amount_bellow && 
                        <input style={{marginTop:'7px'}} defaultValue="0" type="number" id="4" name="order_amount_max"  /> 
                    }
                
        
                    { amount_above && 
                        <input style={{marginTop:'7px'}} defaultValue="0" type="number" id="3" name="order_amount_min"  /> 
                    }

                    { amount_between && 

                        <>
                            <div id="amount_betwn"  style={{display:'inline-flex'}}>
                                <input style={{marginTop:'7px'}} defaultValue="0" type="number" id="1" name="order_amount_minval"  />   
                                <input style={{marginTop:'7px'}} defaultValue="0" type="number" id="2" name="order_amount_maxval"  /> 
                            </div>
                        </>
                    }

                </Grid.Col>

            </Grid>
            
        </>
    )
}

export default Amount