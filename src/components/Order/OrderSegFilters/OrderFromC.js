import React, { useState } from "react";
import { Input } from '@mantine/core';
import { DateRangePicker } from 'rsuite';
import "rsuite/dist/rsuite.css";

import { format } from 'date-fns'
import startOfMonth from 'date-fns/startOfMonth'
import endOfMonth from 'date-fns/endOfMonth'
import startOfYear from 'date-fns/startOfYear'
import { addDays,subDays,getDate } from 'date-fns';
import moment from 'moment';

function OrderFromC() {

    var [dr, setdr] = useState([
        new Date(moment().startOf('month')),
        new Date(moment().endOf('month'))
    ]);


    //const [dr1, setdr1] = useState([format(dr[0],'yyyy-MM-dd')+'To'+format(dr[1],'yyyy-MM-dd')]);
    //console.log(dr1);

    return (
    
        <div>

            <strong> Order From Specific Date-Range </strong>
            
            <DateRangePicker 
        
                //placement='rightEnd'
                label="Timeline" 
                value={dr} 
                onChange={setdr} 
                oneTap={false}
                ranges={[
                {
                    label: 'Yesterday',
                    value: [addDays(new Date(), -1), addDays(new Date(), -1)]
                },
                {
                    label: 'Today',
                    value: [new Date(), new Date()]
                },
                {
                    label: 'Tomorrow',
                    value: [addDays(new Date(), 1), addDays(new Date(), 1)]
                },
                {
                    label: 'Last 7 days',
                    value: [subDays(new Date(), 6), new Date()]
                },

                {
                    label: 'This month',
                    value: [subDays(new Date(), getDate(new Date())-1), new Date()]
                },

                //startOfMonth(new Date(2014, 8, 2, 11, 55, 0))
                {
                    label: 'Last month',
                    value: [startOfMonth(subDays(new Date(), getDate(new Date()))),endOfMonth(subDays(new Date(), getDate(new Date())))]
                },
                {
                    label: 'Year To date',
                    value: [startOfYear(new Date()), new Date()]
                }]}>
                
            </DateRangePicker>

            <Input name="order_table_dr" type={'hidden'} value={ format(dr[0],'yyyy-MM-dd')+'To'+format(dr[1],'yyyy-MM-dd')}/>

        </div>
    )
}

export default OrderFromC