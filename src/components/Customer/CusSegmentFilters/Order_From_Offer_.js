import React, { useEffect, useState } from "react";
import Select from 'react-select';
import { Grid } from '@mantine/core';

function Order_From_Offer_() {

    var [order_number_bellow_ofo, setorder_number_bellow_ofo] = useState(true);
    var [order_number_above_ofo, setorder_number_above_ofo] = useState(false);
    var [order_number_between_ofo, setorder_number_between_ofo] = useState(false);

    var handleChange = e => {

        setorder_number_between_ofo(false);
        setorder_number_above_ofo(false);
        setorder_number_bellow_ofo(false);

        if(e === 'order_number_between_ofo') setorder_number_between_ofo(true);
        if(e === 'order_number_above_ofo') setorder_number_above_ofo(true);
        if(e === 'order_number_bellow_ofo') setorder_number_bellow_ofo(true);
    }

    const options = [
        { value: 'order_number_bellow_ofo', label: 'Less than' },
        { value: 'order_number_above_ofo', label: 'More than' },
        { value: 'order_number_between_ofo', label: 'In-Between' },
    ];
      

    return (
        
        <>
        
            <Grid>

                <Grid.Col span={3} style={{display:'inline-flex'}}>
                    <strong style={{padding: '9px'}}> Order from offer :  </strong>
    
                    <Select
                        placeholder="Less than"
                        defaultValue={'order_number_bellow_ofo'}
                        onChange={(e)=>{handleChange(e.value)}}
                        options={options}
                    />

                </Grid.Col>
            
                

                <Grid.Col span={8} >

                    { order_number_bellow_ofo && 
                        <input type="number" id="8_ofo" name="maximum_num_order_ofo" style={{marginTop:'7px'}} defaultValue="0"/>     
                    }

                    
                    { order_number_above_ofo && 
                        <input type="number" id="7_ofo" name="minimum_num_order_ofo" style={{marginTop:'7px'}} defaultValue="0"/>     
                    } 


                    { order_number_between_ofo && 
                        <>
                            <div style={{display:'inline-flex'}}>
                                <input type="number" id="5_ofo" name="order_num_minval_ofo" style={{marginTop:'7px'}} defaultValue="0" />    
                                    
                                <input type="number" id="6_ofo" name="order_num_maxval_ofo" style={{marginTop:'7px'}} defaultValue="0" />   
                            </div> 
                        </>
                    }

                </Grid.Col>

            </Grid>  
        
        </>
    )
}

export default Order_From_Offer_