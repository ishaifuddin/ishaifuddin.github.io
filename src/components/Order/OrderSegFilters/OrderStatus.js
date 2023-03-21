import React, { useEffect, useState } from "react";
import { Grid,Input } from '@mantine/core';
import Multiselect from 'multiselect-react-dropdown';
function OrderStatus() {
    
    const [os, setOs] = useState('');
    var osop = ['processing','cancelled','pending','completed','failed'];
    
    return (
        <div className="input-filters">
            <strong> Order Status :</strong>
            <Multiselect isObject={false}  style={{}}
                placeholder="Select Status"
                onRemove={(e) => {setOs(JSON.stringify(e));}}
                onSelect={(e) => {setOs(JSON.stringify(e));}}
                options={osop}
                selectedValues={[]}
                showCheckbox/>
            <Input name="o_status_list" type={'hidden'} value={os}/>
        </div>
    )
}
export default OrderStatus