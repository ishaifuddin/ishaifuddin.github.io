import React, { useEffect, useState } from "react";
import Select from 'react-select';
import { Grid } from '@mantine/core';

function Joined_() {

    var [r_before, setr_before] = useState(true);
    var [r_after, setr_after] = useState(false);
    var [r_between, setr_between] = useState(false);

    var handleChange = e => {

        setr_between(false);
        setr_after(false);
        setr_before(false);

        if(e === 'r_between') setr_between(true);
        if(e === 'r_before') setr_before(true);
        if(e === 'r_after') setr_after(true);
    }

    const options = [
        { value: 'r_before', label: 'Over' },
        { value: 'r_after', label: 'In the past' },
        { value: 'r_between', label: 'In-Between' },
    ];
      

    return (

        <>
    
            <Grid>

                <Grid.Col span={3} style={{display:'inline-flex'}}>
                    <strong style={{padding: '9px'}}> Registered :  </strong>

                    <Select
                        placeholder="In the past"
                        defaultValue={'r_after'}
                        onChange={(e)=>{handleChange(e.value)}}
                        options={options}
                    />

                </Grid.Col>

                <Grid.Col span={8} >

                    { r_after && 
                        <>
                            <input type="number" name="ritp" style={{marginTop:'7px'}} defaultValue="0" />  

                            <label>  Day <input   type="radio" name="ritpunit" value="ritpday"/> </label>  
                            <label>  Month <input type="radio" name="ritpunit" value="ritpmonth"/> </label>  
                            <label>  Year <input  type="radio" name="ritpunit" value="ritpyear"/> </label>  
                        </>
                    }


                    { r_between && 
                        <>
                            <input type="number" style={{marginTop:'7px',display:'inline-flex'}}  id="rdf" name="rbf"/> To 
                            <input type="number"  id="rdt" name="rbt"/> 

                            <label>Day<input   type="radio" name="rbunit" value="rbday"/>  </label> 
                            <label>Month<input type="radio" name="rbunit" value="rbmonth"/>  </label>  
                            <label>Year<input  type="radio" name="rbunit" value="rbyear"/>  </label>  
                            
                            <strong>Ago</strong> 
                        </>
                    }

                    { r_before &&
                        <>
                            <input type="number"  name="ro" style={{marginTop:'7px'}} defaultValue="0" /> 

                            <label>  day <input  type="radio" name="rounit" value="roday"/>  </label>  
                            <label> month <input type="radio" name="rounit" value="romonth"/> </label>  
                            <label> year <input  type="radio" name="rounit" value="royear"/> </label>  
                            <strong>Ago</strong> 
                        </>
                    }

                </Grid.Col>

            </Grid>

        </>
    )
}

export default Joined_