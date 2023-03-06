
import React, { useEffect, useState } from "react";
import Select from 'react-select';
import { Grid } from '@mantine/core';

function RetAfter() {


    var [RetAfter_bellow, setRetAfter_bellow] = useState(true);
    var [RetAfter_above, setRetAfter_above] = useState(false);
    var [RetAfter_between, setRetAfter_between] = useState(false);

    var handleChange = e => {

        setRetAfter_between(false);
        setRetAfter_above(false);
        setRetAfter_bellow(false);

        if(e === 'RetAfter_between') setRetAfter_between(true);
        if(e === 'RetAfter_above') setRetAfter_above(true);
        if(e === 'RetAfter_bellow') setRetAfter_bellow(true);
    }

    const options = [
        { value: 'RetAfter_bellow', label: 'Less than' },
        { value: 'RetAfter_above', label: 'More than' },
        { value: 'RetAfter_between', label: 'In-Between' },
    ];
      


    return (

        
        <Grid style={{marginTop: '9px'}}>

            <Grid.Col span={3} style={{display:'inline-flex'}}>

                <strong style={{marginTop: '9px'}}> Returned After   </strong>

                <Select
                    placeholder="Less than"
                    defaultValue={'RetAfter_bellow'}
                    onChange={(e)=>{handleChange(e.value)}}
                    options={options}
                />
            </Grid.Col>

            <Grid.Col span={8} >
                
                { RetAfter_bellow && 
                    <input style={{marginTop:'7px'}} defaultValue="0" type="number"  name="ret_after_max"  /> 
                }
            
    
                { RetAfter_above && 
                    <input style={{marginTop:'7px'}} defaultValue="0" type="number"  name="ret_after_min"  /> 
                }

                { RetAfter_between && 

                    <>
                        <div id="RetAfter_betwn"  style={{display:'inline-flex'}}>
                            <input style={{marginTop:'7px'}} defaultValue="0" type="number"  name="ret_after_minval"  />   
                            <input style={{marginTop:'7px'}} defaultValue="0" type="number"  name="ret_after_maxval"  /> 
                        </div>
                    </>
                }

            </Grid.Col>

        </Grid>
            
        
    )
}

export default RetAfter


// '<div id="ret_after_unit_bellow_div"  style="display:none;" >' +
// '<input form="order_filter" type="number" id="114" name="" value="" style="width:122px;" />' +
// '<button onclick="ret_after_remove_ounit()" class="btn"><i class="fa fa-close"></i></button>' + 
// '</div>' +

// '<div id="ret_after_unit_above_div" style="display:none;">' +
// '<input form = "order_filter" type="number" id="113" name="" value="" style="width:122px;" />' + 
// '<button onclick="ret_after_remove_ounit()" class="btn"><i class="fa fa-close"></i></button>' + 
// '</div>' +

// '<div id="ret_after_unit_between_div" style="display:inline-grid">' +
// '<input placeholder="From.." form = "order_filter" type="number" id="112" name="" value="" style="width:122px;" />' +  
// '<input placeholder="To.." form = "order_filter" type="number" id="111" name="" value="" style="width:122px;" />'  +
// '<button onclick="ret_after_remove_ounit()" class="btn"><i class="fa fa-close"></i></button>' + 

// '</div>';