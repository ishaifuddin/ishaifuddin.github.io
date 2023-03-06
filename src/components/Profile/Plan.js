import { ReactSession }  from 'react-client-session';
import React, { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { plan_ } from '../../features/profile/Plan';

function Plan() {

    var dispatch = useDispatch();

    useEffect(() => {
      
        var is_dispatched = () => {
          ReactSession.get("get_profile_plan");
          if(ReactSession.get("get_profile_plan")) {
              return true;
          }else {
              ReactSession.set("get_profile_plan", "1");
              return false;
          }
        }
        
        if(!(is_dispatched())) {
          dispatch(plan_({ajax_call:2}));
        }
      
    },[])

    var Profile_plan = useSelector((state) => state.Profile_plan.profile_plan);
   
    return (

        <div>

            <h3>Current Plan :: </h3>
            <h5>{Profile_plan}</h5>

        </div>
    )
}

export default Plan