import React from "react";
import axios from "axios";

import Button from "@material-ui/core/Button";
import TextField from "@material-ui/core/TextField";

function ReportIssue() {
  var Submit = (event) => {
    event.preventDefault();
    const fdata = new FormData(event.target);
    const data = Object.fromEntries(fdata.entries());
    //dispatch(profile_personal_data(data));
    axios
      .post("https://server.shopex.io/profile/profile_submit_issue.php", data, {
        withCredentials: true,
      })
      .then(
        (response) => {
          var initdata = response.data;
          //console.log(initdata);
        },
        (error) => {}
      );
  };

  return (
    <div style={{ maxWidth: "800px" }}>
      <form onSubmit={Submit}>
        <h6>Submit issue</h6>
        <br />
        <br />
        <input
          type="text"
          name="title"
          required
          placeholder="Enter Title Here"
          style={{ width: "100%" }}
        />
        <br />
        <br />
        <textarea
          type="text"
          rows={5}
          name="message"
          required
          placeholder="Write Something..."
          style={{ width: "100%" }}
        />
        <br />
        <br />
        <Button
          type="submit"
          size="large"
          variant="contained"
          color="secondary"
        >
          Submit Message
        </Button>
      </form>
    </div>
  );
}

export default ReportIssue;
