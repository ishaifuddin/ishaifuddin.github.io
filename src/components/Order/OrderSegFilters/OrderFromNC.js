import React, { useEffect, useState } from "react";
import Select from 'react-select';
import { Grid,Input } from '@mantine/core';
import { useSelector, useDispatch } from "react-redux";
import Multiselect from 'multiselect-react-dropdown';

function OrderFromNC() {


    var [Order_between, setOrder_between] = useState(true);
    var [Order_itp, setOrder_itp] = useState(false);
    var [Order_before, setOrder_before] = useState(false);

    var handleChange = e => {

        setOrder_between(false);
        setOrder_itp(false);
        setOrder_before(false);

        if(e === 'orders_from_between') setOrder_between(true);
        if(e === 'orders_from_itp') setOrder_itp(true);
        if(e === 'orders_from_over') setOrder_before(true);
    }

    const options = [
        { value: 'orders_from_over', label: 'Over' },
        { value: 'orders_from_itp', label: 'Past' },
        { value: 'orders_from_between', label: 'In-Between' },
    ];
      

  
    return (
        
        

        <Grid>

            <Grid.Col span={3} style={{display:'inline-flex'}}>

                <strong style={{marginTop: '9px'}}> Order Created :  </strong>

                <Select
                    placeholder="Past"
                    defaultValue={'orders_from_itp'}
                    onChange={(e)=>{handleChange(e.value)}}
                    options={options}
                />

            </Grid.Col>

            <Grid.Col span={8} >
                
                { Order_between && 
                    
                    <>
                        <input  type="number" name="lod_from"/> to   &nbsp; 
                        <input  type="number" name="lod_to"/> 
                    
                        <input  type="radio" name="lob_unit" value="lob_day"/> D  &nbsp; 
                        <input  type="radio" name="lob_unit" value="lob_month"/> M  &nbsp;
                        <input  type="radio" name="lob_unit" value="lob_year"/> Y  &nbsp; 
                        <p>Ago</p> 
                    </>
                    
                }


                { Order_itp && 
                    <>
                        <input  type="number" name="lod_itp"/> 
                        <input  type="radio"  name="loitp_unit" value="loitp_day"/> &nbsp; D &nbsp; 
                        <input  type="radio"  name="loitp_unit" value="loitp_month"/> &nbsp; M &nbsp;
                        <input  type="radio"  name="loitp_unit" value="loitp_year"/> &nbsp;  Y  &nbsp;
                    </>
                    
                }

                { Order_before && 

                    <>
                        <input  type="number" name="lod_over"/> 
                        <input  type="radio"  name="loo_unit" value="loo_day"/> &nbsp; D  &nbsp;
                        <input  type="radio"  name="loo_unit" value="loo_month"/> &nbsp; M  &nbsp;
                        <input  type="radio"  name="loo_unit" value="loo_year"/>  &nbsp; Y  &nbsp;
                        <p> Ago </p> 
                    </>
                }

            </Grid.Col>

        </Grid>
        
    )
}

export default OrderFromNC
