import React, { useEffect, useState } from "react";
import Select from 'react-select';
import { Grid } from '@mantine/core';

function Coupon_Use_() {


    var [coupon_bellow, setcoupon_bellow] = useState(true);
    var [coupon_above, setcoupon_above] = useState(false);
    var [coupon_between, setcoupon_between] = useState(false);

    var handleChange = e => {

        setcoupon_between(false);
        setcoupon_above(false);
        setcoupon_bellow(false);

        if(e === 'coupon_between') setcoupon_between(true);
        if(e === 'coupon_above') setcoupon_above(true);
        if(e === 'coupon_bellow') setcoupon_bellow(true);
    }

    const options = [
        { value: 'coupon_bellow', label: 'Less than' },
        { value: 'coupon_above', label: 'More than' },
        { value: 'coupon_between', label: 'In-Between' },
    ];
      


    return (

        <>

            

            <Grid> 

                <Grid.Col span={3} style={{display:'inline-flex'}}>
                    <strong style={{padding: '9px'}}> Coupon Used :  </strong>
                    <Select
                        placeholder="Less than"
                        defaultValue={'coupon_bellow'}
                        onChange={(e)=>{handleChange(e.value)}}
                        options={options}
                    />
                </Grid.Col>

                <Grid.Col span={8} >
                    
                    { coupon_bellow && 

                        <input style={{marginTop:'7px'}} defaultValue="0" type="number" id="coupon_b" name="coupon_max"  /> 
                    }
                
        
                    { coupon_above && 

                        <input style={{marginTop:'7px'}} defaultValue="0" type="number" id="coupon_a" name="coupon_min"  /> 
                    }

                    { coupon_between && 

                        <>
                            <div id="coupon_betwn" style={{display:'inline-flex'}}>
                                <input style={{marginTop:'7px'}} defaultValue="0" type="number" id="coupon_min" name="coupon_minval"  />    
                                <input style={{marginTop:'7px'}} defaultValue="0" type="number" id="coupon_max" name="coupon_maxval"  /> 
                            </div>
                        </>
                    }

                </Grid.Col>

                

            </Grid>
            
            

        </>
    )
}

export default Coupon_Use_