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

        <>

            <Grid>

                <Grid.Col span={3} style={{display:'inline-flex'}}>
                    <strong style={{padding: '9px'}}> Total Order :  </strong>
                    
                    <Select
                        placeholder="Less than"
                        defaultValue={'order_bellow'}
                        onChange={(e)=>{handleChange(e.value)}}
                        options={options}
                    />
                </Grid.Col>
           

                <Grid.Col span={8} >

                    { order_bellow && 
                        <input style={{marginTop:'7px'}} defaultValue="0" type="number" id="8" name="maximum_num_order" />   
                    }


                    { order_above && 
                        <input style={{marginTop:'7px'}} defaultValue="0" type="number" id="7" name="minimum_num_order" />  
                    }

                    { order_between && 

                        <>
                            <div style={{display:'inline-flex'}}>
                                <input style={{marginTop:'7px'}} defaultValue="0" type="number" id="5" name="order_num_minval"  />    
                                    
                                <input style={{marginTop:'7px'}} defaultValue="0" type="number" id="6" name="order_num_maxval"  />       
                            </div>
                        </>
                    }

                </Grid.Col>

            </Grid>

        </>
    )
}

export default Order_Count_