import React from "react";
import axios from "axios";
import Grid from "@mui/material/Grid";

function ReportIssue() {

  var Submit = (event) => {
    event.preventDefault();
    const fdata = new FormData(event.target);
    const data = Object.fromEntries(fdata.entries());
    //dispatch(profile_personal_data(data));
    axios.post('https://server.shopex.io/profile/profile_submit_issue.php', data, { withCredentials: true })
      .then((response) => {
        var initdata = response.data;
        //console.log(initdata); 
      }, (error) => { });
  };

  return (

    <>

      <Grid item sm={10} style={{ display: 'grid' }}>
        <form onSubmit={Submit} style={{ marginLeft: '40%' }}>
          <h4>Submit issue</h4>
          <textarea type="text" name="text" required placeholder="" />

          <button type="submit">Submit</button>
        </form>
      </Grid>
    
    </>

  )

}

export default ReportIssue