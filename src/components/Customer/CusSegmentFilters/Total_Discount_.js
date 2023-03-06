import React, { useEffect, useState } from "react";
import Select from 'react-select';
import { Grid } from '@mantine/core';

function Total_dis_() {

    var [dis_bellow, setdis_bellow] = useState(true);
    var [dis_above, setdis_above] = useState(false);
    var [dis_between, setdis_between] = useState(false);

    var handleChange = e => {

        setdis_between(false);
        setdis_above(false);
        setdis_bellow(false);

        if(e === 'dis_between') setdis_between(true);
        if(e === 'dis_above') setdis_above(true);
        if(e === 'dis_bellow') setdis_bellow(true);
    }

    const options = [
        { value: 'dis_bellow', label: 'Less than' },
        { value: 'dis_above', label: 'More than' },
        { value: 'dis_between', label: 'In-Between' },
    ];
      

    
    return (
    
        <>
            <Grid> 

                <Grid.Col span={3} style={{display:'inline-flex'}}>
                    <strong style={{padding: '9px'}}> Total Discount :  </strong>

                    <Select
                        placeholder="Less than"
                        defaultValue={'dis_bellow'}
                        onChange={(e)=>{handleChange(e.value)}}
                        options={options}
                    />
                </Grid.Col>

                <Grid.Col span={8} >
                    
                    { dis_bellow && 
                        <input style={{marginTop:'7px'}} defaultValue="0" type="number" id="pa" name="dis_max"  /> 
                    }
                
        
                    { dis_above && 

                        <input style={{marginTop:'7px'}} defaultValue="0" type="number" id="pa" name="dis_min"  /> 
                    }

                    { dis_between && 

                        <>
                            <div id="dis_betwn"  style={{display:'inline-flex',marginTop:'7px'}}>
                                <input style={{marginTop:'7px'}} defaultValue="0" type="number" id="dismin" name="dis_amount_minval"  />   to
                                <input style={{marginTop:'7px'}} defaultValue="0" type="number" id="dismax" name="dis_amount_maxval"  /> $ 
                            </div>
                        </>
                    }

                </Grid.Col>

            </Grid>
        </>
    )
}

export default Total_dis_