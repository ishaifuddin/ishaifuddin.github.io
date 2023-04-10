import { ReactSession } from "react-client-session";
import React, { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { personaldata_ } from "../../features/profile/PersonalData";
import Grid from "@mui/material/Grid";

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
      zip: "10001",
    },
    // Additional objects can be added here for more personal data
  ];

  var personalDataUpdate = (e) => {
    e.preventDefault();
    const fdata = new FormData(e.target);
    const data = Object.fromEntries(fdata.entries());
    dispatch(personaldata_(data));
  };

  return (
    <section className="personal-data">
      <form onSubmit={personalDataUpdate}>
        <input defaultValue={2} name="type" type="hidden" />

        <Grid container spacing={3} style={{ padding: 0 }}>
          <Grid item md={6} sm={12}>
            <div>
              <strong> Personal Info </strong> <br />
              <br />
              <label> Full Name </label> <br />
              {personal_data[0] && (
                <input
                  name="name"
                  type="text"
                  defaultValue={personal_data[0].name}
                />
              )}
              <br />
              <br />
              <label> Email </label> <br />
              {personal_data[0] && (
                <input
                  name="email"
                  type="text"
                  defaultValue={personal_data[0].email}
                />
              )}
              <br />
              <br />
              <label> Contact Number </label> <br />
              {personal_data[0] && (
                <input
                  name="phone"
                  type="text"
                  defaultValue={personal_data[0].phone}
                />
              )}
              <br />
              <br />
              <label> Engage Email </label> <br />
              {personal_data[0] && (
                <input
                  name="engage_email"
                  type="text"
                  defaultValue={personal_data[0].engage_email}
                />
              )}
              <br />
              <br />
            </div>
          </Grid>

          <Grid item md={6} sm={12}>
            <div>
              <strong> Location </strong> <br />
              <br />
              <label>Country</label>
              <br />
              {personal_data[0] && (
                <input
                  name="country"
                  type="text"
                  defaultValue={personal_data[0].country}
                />
              )}
              <br />
              <br />
              <label>City</label>
              <br />
              {personal_data[0] && (
                <input
                  name="city"
                  type="text"
                  defaultValue={personal_data[0].city}
                />
              )}
              <br />
              <br />
              <label>State</label>
              <br />
              {personal_data[0] && (
                <input
                  defaultValue={personal_data[0].state}
                  name="state"
                  type="text"
                />
              )}
              <br />
              <br />
              <label>Zip</label>
              <br />
              {personal_data[0] && (
                <input
                  defaultValue={personal_data[0].zip}
                  name="zip"
                  type="text"
                />
              )}
              <br />
              <br />
              <label>Joined</label>
              <br />
              {personal_data[0] && (
                <input type="text" placeholder={1641916754} />
              )}
              <br />
              <br />
            </div>
          </Grid>
        </Grid>
      </form>
    </section>
  );
}
export default PersonalData;
