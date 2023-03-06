
import React, { useEffect, useState } from "react";
import Select from 'react-select';
import { Grid } from '@mantine/core';

function ProductCount() {


    var [ProductCount_bellow, setProductCount_bellow] = useState(true);
    var [ProductCount_above, setProductCount_above] = useState(false);
    var [ProductCount_between, setProductCount_between] = useState(false);

    var handleChange = e => {

        setProductCount_between(false);
        setProductCount_above(false);
        setProductCount_bellow(false);

        if(e === 'ProductCount_between') setProductCount_between(true);
        if(e === 'ProductCount_above') setProductCount_above(true);
        if(e === 'ProductCount_bellow') setProductCount_bellow(true);
    }

    const options = [
        { value: 'ProductCount_bellow', label: 'Less than' },
        { value: 'ProductCount_above', label: 'More than' },
        { value: 'ProductCount_between', label: 'In-Between' },
    ];
      


    return (

        <>
            <Grid>

                <Grid.Col span={3} style={{display:'inline-flex'}}>
                    <strong style={{marginTop: '9px'}}> Product Count   </strong>

                    <Select
                        placeholder="Less than"
                        defaultValue={'ProductCount_bellow'}
                        onChange={(e)=>{handleChange(e.value)}}
                        options={options}
                    />
                </Grid.Col>

                <Grid.Col span={8} >
                    
                    { ProductCount_bellow && 
                        <input style={{marginTop:'7px'}} defaultValue="0" type="number" id="4" name="order_prod_max"  /> 
                    }
                
        
                    { ProductCount_above && 
                        <input style={{marginTop:'7px'}} defaultValue="0" type="number" id="3" name="order_prod_min"  /> 
                    }

                    { ProductCount_between && 

                        <>
                            <div id="ProductCount_betwn"  style={{display:'inline-flex'}}>
                                <input style={{marginTop:'7px'}} defaultValue="0" type="number" id="1" name="order_prod_minval"  />   
                                <input style={{marginTop:'7px'}} defaultValue="0" type="number" id="2" name="order_prod_maxval"  /> 
                            </div>
                        </>
                    }

                </Grid.Col>

            </Grid>
            
        </>
    )
}

export default ProductCount



// '<select id="order_count_u" onchange = "order_unit_count_range()" style="width:122px;font-size:14px;">' +
// '<option id="order_unit_bellow" value="amount_bellow">Less than</option>' +
// '<option id="order_unit_above"  value="">More than</option>' +
// '<option id="order_unit_between" Selected value="">In between</option>' +
// '</select>' +

// '<div id="order_unit_bellow_div"  style="display:none;" >' +
// '<input form = "order_filter" type="number" id="106" name="order_unit_max" value="" style="width:122px;" />' +
// '<button onclick="remove_ounit()" class="btn"><i class="fa fa-close"></i></button>' + 
// '</div>' +

// '<div id="order_unit_above_div" style="display:none;">' +
// '<input form = "order_filter" type="number" id="105" name="order_unit_min" value="" style="width:122px;" />' + 
// '<button onclick="remove_ounit()" class="btn"><i class="fa fa-close"></i></button>' + 
// '</div>' +

// '<div id="order_unit_between_div" style="display:inline-grid">' +
// '<input form = "order_filter" type="number" id="104" name="order_unit_minval" value="" style="width:122px;" />' +  ' to ' + 
// '<input form = "order_filter" type="number" id="103" name="order_unit_maxval" value="" style="width:122px;" />'  +
// '<button onclick="remove_ounit()" class="btn"><i class="fa fa-close"></i></button>' + 

// '</div>';