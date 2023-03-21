import { ReactSession }  from 'react-client-session';
import React, { useEffect, useState } from "react";
import Select from 'react-select';
import { Grid } from '@mantine/core';
import { useSelector, useDispatch } from "react-redux";
import { get_cussegs_List } from "../../../features/cus/CusListAndSeg";
function CusSegment() {
    
    
    var dispatch = useDispatch();
    
    // var Seglist = useSelector((state) => state.cusListAndSegs.clseg.segs);
    // if (!(Seglist !== undefined && Seglist !== null)) {
    //     dispatch(get_cussegs_List({ajax_call:2}));
    // }

    var is_dispatched1 = (dispatch_function) => {
        ReactSession.get('get_cussegs_List');
        if(ReactSession.get('get_cussegs_List')) {
            return true;
        }else {
            ReactSession.set('get_cussegs_List', "1");
            return false;
        }
    }
    if(!(is_dispatched1('get_cussegs_List'))) {
        dispatch(get_cussegs_List({ajax_call:2}));
    }


    var Seglist = useSelector((state) => state.cusListAndSegs.segs);
    var Seglist = structuredClone(Seglist);
 

    let ops = [];
    if(Seglist && Seglist.length > 0){
        for (var i of Seglist) {
            var lbl = i.name; var vlu = i.id;
            ops.push({value:vlu,label:lbl});
        }
    }
    var [seg, setSeg] = useState('');
    
    return (
        <div className="input-filters">
            <strong> Customer Segment :  </strong>
            {ops && <Select className='multi'
                placeholder="Select segment"
                defaultValue={''}
                onChange={(e)=>{setSeg(e.value)}}
                options={ops}
            />}
            <input name="seg" defaultValue={seg}/>
        </div>

  )

}

export default CusSegment