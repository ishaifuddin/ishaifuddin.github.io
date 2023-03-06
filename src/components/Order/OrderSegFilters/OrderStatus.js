import React, { useEffect, useState } from "react";
import { Grid,Input } from '@mantine/core';
import Multiselect from 'multiselect-react-dropdown';
function OrderStatus() {
    
    const [os, setOs] = useState('');
    var osop = ['processing','cancelled','pending','completed','failed'];
    
    return (

        <Grid style={{marginTop:'7px'}}>
            
            <Grid.Col span={2} style={{marginTop:'7px'}}>
                <strong> Order Status </strong>
            </Grid.Col>

            <Grid.Col span={8} style={{}}>
                <Multiselect isObject={false} 
                    placeholder="Select Status"
                    onRemove={(e) => {setOs(JSON.stringify(e));}}
                    onSelect={(e) => {setOs(JSON.stringify(e));}}
                    options={osop}
                    selectedValues={[]}
                    showCheckbox/>

            </Grid.Col>

            <Input name="o_status_list" type={'hidden'} value={os}/>

        </Grid>
    )
}
export default OrderStatus