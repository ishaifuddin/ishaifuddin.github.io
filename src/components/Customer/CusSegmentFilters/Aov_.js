import React, { useEffect, useState } from "react";
import Select from 'react-select';
import { Grid } from '@mantine/core';

function Aov_() {

    var [aov_bellow, setaov_bellow] = useState(true);
    var [aov_above, setaov_above] = useState(false);
    var [aov_between, setaov_between] = useState(false);

    var handleChange = e => {

        setaov_between(false);
        setaov_above(false);
        setaov_bellow(false);

        if(e === 'aov_between') setaov_between(true);
        if(e === 'aov_above') setaov_above(true);
        if(e === 'aov_bellow') setaov_bellow(true);
    }

    const options = [
        { value: 'aov_bellow', label: 'Less than' },
        { value: 'aov_above', label: 'More than' },
        { value: 'aov_between', label: 'In-Between' },
    ];

    return (
        
        <>
            <Grid>

                <Grid.Col span={3} style={{display:'inline-flex'}}>
                    <strong style={{padding: '9px'}}> Avg. Order Value: </strong>
                    <Select
                        placeholder="Less Than"
                        defaultValue={'aov_bellow'}
                        onChange={(e)=>{handleChange(e.value)}}
                        options={options}
                    />
                </Grid.Col>
    
                <Grid.Col span={8} >

                    { aov_bellow && 

                        <input type="number" id="11" name="aov_bellow" style={{marginTop:'7px'}} defaultValue="0" />  
                    }


                    { aov_above && 
                        <input type="number" id="12" name="aov_above"  style={{marginTop:'7px'}} defaultValue="0"/>    
                    }

                    { aov_between && 
                        
                        <div style={{display:"inline-flex"}}>
                            <input type="number" id="9" name="aov_from" style={{marginTop:'7px'}} defaultValue="0" />     
                            <input type="number" id="10" name="aov_to"  style={{marginTop:'7px'}} defaultValue="0" /> 
                        </div>
                        
                    }

                </Grid.Col>

            </Grid>
        </>
    )
}

export default Aov_