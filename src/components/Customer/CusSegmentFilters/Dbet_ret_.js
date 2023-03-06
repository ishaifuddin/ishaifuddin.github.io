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
        
        <>
            <Grid>

                <Grid.Col span={3} style={{display:'inline-flex'}}>
                    <strong style={{padding: '9px'}}> Each-Order-Gap :  </strong>
                    <Select
                        placeholder="Less than"
                        defaultValue={'daydiff_bellow'}
                        onChange={(e)=>{handleChange(e.value)}}
                        options={options}
                    />
                </Grid.Col>

                <Grid.Col span={8} >

                    { daydiff_bellow && 

                        <input style={{marginTop:'7px'}} defaultValue="0" type="number" id="ddifb" name="daydiff_lessthan" />     
                    }


                    { daydiff_above && 
                        <input style={{marginTop:'7px'}} defaultValue="0" type="number" id="ddifa" name="daydiff_morethan" />     
                    }

                    { daydiff_between && 

                        <>
                            <div style={{display:'inline-flex'}}>
                                <input style={{marginTop:'7px'}} defaultValue="0" type="number" id="ddiff" name="daydiff_from"  />    
                                    
                                <input style={{marginTop:'7px'}} defaultValue="0" type="number" id="ddift" name="daydiff_to"  />       
                            </div>
                        </>
                    }

                </Grid.Col>

            </Grid>
        </>
    )
}

export default Dbet_ret_