
import React, { useEffect, useState } from "react";
import Select from 'react-select';
import { Grid } from '@mantine/core';

function ShipCost() {


    var [ShipCost_bellow, setShipCost_bellow] = useState(true);
    var [ShipCost_above, setShipCost_above] = useState(false);
    var [ShipCost_between, setShipCost_between] = useState(false);

    var handleChange = e => {

        setShipCost_between(false);
        setShipCost_above(false);
        setShipCost_bellow(false);

        if(e === 'ShipCost_between') setShipCost_between(true);
        if(e === 'ShipCost_above') setShipCost_above(true);
        if(e === 'ShipCost_bellow') setShipCost_bellow(true);
    }

    const options = [
        { value: 'ShipCost_bellow', label: 'Less than' },
        { value: 'ShipCost_above', label: 'More than' },
        { value: 'ShipCost_between', label: 'In-Between' },
    ];
      


    return (

        <>
            <Grid style={{marginTop: '9px'}}>

                <Grid.Col span={3} style={{display:'inline-flex'}}>
                    <strong style={{marginTop: '9px'}}> Shipping-Cost   </strong>

                    <Select
                        placeholder="Less than"
                        defaultValue={'ShipCost_bellow'}
                        onChange={(e)=>{handleChange(e.value)}}
                        options={options}
                    />
                </Grid.Col>

                <Grid.Col span={8} >
                    
                    { ShipCost_bellow && 
                        <input style={{marginTop:'7px'}} defaultValue="0" type="number" id="4" name="order_shipcost_max"  /> 
                    }
                
        
                    { ShipCost_above && 
                        <input style={{marginTop:'7px'}} defaultValue="0" type="number" id="3" name="order_shipcost_min"  /> 
                    }

                    { ShipCost_between && 

                        <>
                            <div id="ShipCost_betwn"  style={{display:'inline-flex'}}>
                                <input style={{marginTop:'7px'}} defaultValue="0" type="number" id="1" name="order_shipcost_minval"  />   
                                <input style={{marginTop:'7px'}} defaultValue="0" type="number" id="2" name="order_shipcost_maxval"  /> 
                            </div>
                        </>
                    }

                </Grid.Col>

            </Grid>
            
        </>
    )
}

export default ShipCost



// '<select id="odiscount" onchange = "order_discount_range()" style="width:122px;font-size:14px;">' +
// '<option id="order_dis_bellow" value="amount_bellow">Less than</option>' +
// '<option id="order_dis_above"  value="">More than</option>' +
// '<option id="order_dis_between" Selected value="">In between</option>' +
// '</select>' +
// '<div id="order_dis_bellow_div"  style="display:none;" >' +
// '<input form = "order_filter" type="number" id="16" name="order_dis_max" value="" style="width:122px;" />' + ' $ ' +
// '<button onclick="remove_odis()" class="btn"><i class="fa fa-close"></i></button>' + 
// '</div>' +
// '<div id="order_dis_above_div" style="display:none;">' +
// '<input form = "order_filter" type="number" id="15" name="order_dis_min" value="" style="width:122px;" />' + ' $ ' +
// '<button onclick="remove_odis()" class="btn"><i class="fa fa-close"></i></button>' + 
// '</div>' +
// '<div id="order_dis_between_div" style="display:inline-grid">' +
// '<input form = "order_filter" type="number" id="14" name="order_dis_minval" value="" style="width:122px;" />' +  ' $ ' + ' to ' + 
// '<input form = "order_filter" type="number" id="13" name="order_dis_maxval" value="" style="width:122px;" />' + 
// '<button onclick="remove_odis()" class="btn"><i class="fa fa-close"></i></button>' + 
// '</div>';