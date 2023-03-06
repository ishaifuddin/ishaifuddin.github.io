import React, { useEffect, useState } from "react";
import Select from 'react-select';
import { Grid } from '@mantine/core';

function Item_Count_() {

    var [numitem_bellow, setnumitem_bellow] = useState(true);
    var [numitem_above, setnumitem_above] = useState(false);
    var [numitem_between, setnumitem_between] = useState(false);

    var handleChange = e => {

        setnumitem_between(false);
        setnumitem_above(false);
        setnumitem_bellow(false);

        if(e === 'numitem_between') setnumitem_between(true);
        if(e === 'numitem_above') setnumitem_above(true);
        if(e === 'numitem_bellow') setnumitem_bellow(true);
    }

    const options = [
        { value: 'numitem_bellow', label: 'Less than' },
        { value: 'numitem_above', label: 'More than' },
        { value: 'numitem_between', label: 'In-Between' },
    ];
      

    return (
        
        <>
            <Grid>

                <Grid.Col span={3} style={{display:'inline-flex'}}>
                    <strong style={{padding: '9px'}}> Item-Purchase :  </strong>
                    <Select
                        placeholder="Less than"
                        defaultValue={'numitem_bellow'}
                        onChange={(e)=>{handleChange(e.value)}}
                        options={options}
                    />
                </Grid.Col>


                <Grid.Col span={8} >

                    { numitem_bellow && 
                        <input style={{marginTop:'7px'}} defaultValue="0" type="number" id="nib" name="numitem_lessthan" />     
                    }


                    { numitem_above && 
                        <input style={{marginTop:'7px'}} defaultValue="0" type="number" id="nia" name="numitem_morethan" />     
                    }

                    { numitem_between && 

                        <>
                            <div id="num_item_between" style={{display:'inline-flex'}}>
                                <input style={{marginTop:'7px'}} defaultValue="0" type="number" id="nibf" name="numitem_from"  />    
                                    
                                <input style={{marginTop:'7px'}} defaultValue="0" type="number" id="nibt" name="numitem_to"  />       
                            </div>
                        </>
                    }

                </Grid.Col>

            </Grid>
        </>
    )

}

export default Item_Count_