
import React, { useEffect, useState } from "react";
import Select from 'react-select';
import { Grid } from '@mantine/core';

function Tax() {


    var [Tax_bellow, setTax_bellow] = useState(true);
    var [Tax_above, setTax_above] = useState(false);
    var [Tax_between, setTax_between] = useState(false);

    var handleChange = e => {

        setTax_between(false);
        setTax_above(false);
        setTax_bellow(false);

        if(e === 'Tax_between') setTax_between(true);
        if(e === 'Tax_above') setTax_above(true);
        if(e === 'Tax_bellow') setTax_bellow(true);
    }

    const options = [
        { value: 'Tax_bellow', label: 'Less than' },
        { value: 'Tax_above', label: 'More than' },
        { value: 'Tax_between', label: 'In-Between' },
    ];
      


    return (

        <>
            <Grid style={{marginTop: '19px'}}>
               
                <strong style={{marginTop: '15px',marginLeft:'10px'}}> Tax </strong>
               
                <Grid.Col span={3} style={{display:'inline-flex'}}>
                    

                    <Select
                        placeholder="Less than"
                        defaultValue={'Tax_bellow'}
                        onChange={(e)=>{handleChange(e.value)}}
                        options={options}
                    />
                </Grid.Col>

                <Grid.Col span={8} >
                    
                    { Tax_bellow && 
                        <input style={{marginTop:'7px'}} defaultValue="0" type="number" id="4" name="order_tot_tax_min_max"  /> 
                    }
                
        
                    { Tax_above && 
                        <input style={{marginTop:'7px'}} defaultValue="0" type="number" id="3" name="order_tot_tax_min"  /> 
                    }

                    { Tax_between && 

                        <>
                            <div id="Tax_betwn"  style={{display:'inline-flex'}}>
                                <input style={{marginTop:'7px'}} defaultValue="0" type="number" id="1" name="order_tot_tax_minval"  />   
                                <input style={{marginTop:'7px'}} defaultValue="0" type="number" id="2" name="order_tax_tot_maxval"  /> 
                            </div>
                        </>
                    }

                </Grid.Col>

            </Grid>
            
        </>
    )
}

export default Tax
