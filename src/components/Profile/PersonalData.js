import { ReactSession }  from 'react-client-session';
import React, { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { personaldata_ } from '../../features/profile/PersonalData';

function PersonalData() {

    var dispatch = useDispatch();

    // useEffect(() => {
      
    //     var is_dispatched = () => {
    //       ReactSession.get("dis_profile_personal_data");
    //       if(ReactSession.get("dis_profile_personal_data")) {
    //           return true;
    //       }else {
    //           ReactSession.set("dis_profile_personal_data", "1");
    //           return false;
    //       }
    //     }
        
    //     if(!(is_dispatched())) {
    //       dispatch(personaldata_({type:1}));
    //     }
      
    // },[])


    // var personal_data = useSelector((state) => state.Profile_personal_data.personal_data);
    // console.log(personal_data);
    // console.log(personal_data[0]);



    const personal_data = [
        {
          name: "John Doe",
          email: "johndoe@example.com",
          phone: "123-456-7890",
          country: "United States",
          city: "New York",
          state: "NY",
          zip: "10001"
        },
        // Additional objects can be added here for more personal data
      ];
      

    var personalDataUpdate = (event) => {
        event.preventDefault();
        const fdata = new FormData(event.target);
        const data = Object.fromEntries(fdata.entries());
        dispatch(personaldata_(data));
    };

    return (
        
        <div>

            <form onSubmit={personalDataUpdate} style={{marginLeft: '40%'}}>
                
                <input defaultValue={2} name="type" type="hidden"/>
                
                <div style={{ marginRight: '10%' }}>

                    <strong> Full Name </strong> <br />
                    { personal_data[0] && <input name="name" type="text" defaultValue={personal_data[0].name} style={{ width: '270px' }} />}
                    <br/><br/>
                    
                    <strong> Email </strong> <br />
                    { personal_data[0] && <input name="email" type="text" defaultValue={personal_data[0].email} style={{ width: '270px' }} />}
                    <br/><br/>
                    
                    <strong> Contact Number </strong> <br />
                    { personal_data[0] && <input name="phone" type="text" defaultValue={personal_data[0].phone} style={{ width: '270px' }} />}
                    <br/><br/><br/>


                    <strong> Engage Email </strong> <br />
                    { personal_data[0] && <input name="engage_email" type="text" defaultValue={personal_data[0].engage_email} style={{ width: '270px' }} />}
                    <br/><br/><br/>

                </div>


                <div>
                   
                    <strong style={{ fontSize: '20px' }}> Location </strong> <br /><br />
                    
                    <span>Country</span><br/>
                    { personal_data[0] &&<input name="country" type="text" defaultValue={personal_data[0].country} style={{ width: '270px' }} />}
                    <br/><br/>
                    
                    <span>City</span><br/>
                    { personal_data[0] && <input name="city" type="text" defaultValue={personal_data[0].city} style={{ width: '270px' }} />}
                    <br/><br/>
                    
                    <span>State</span><br/>
                    { personal_data[0] && <input defaultValue={personal_data[0].state} name="state" type="text" style={{ width: '270px' }} />}
                    <br/><br />

                    <span>Zip</span><br/>
                    { personal_data[0] && <input defaultValue={personal_data[0].zip} name="zip" type="text" style={{ width: '270px' }} />}
                    <br/><br/>

                    <span>Joined</span><br />
                    { personal_data[0] && <input type="text" placeholder={1641916754} style={{ width: '270px' }} />}
                    <br/><br />

                </div>

            </form>

        </div>

    )

}

export default PersonalData