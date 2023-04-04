import Grid from "@mui/material/Grid";
import React, { useRef } from "react";
import { useNavigate } from "react-router-dom";
import axios from "axios";

import { Navigate } from "react-router-dom";

function Reg_verify() {
  const navigate = useNavigate();
  const navigateRef = useRef(navigate);

  var filterSubmit = (event) => {
    event.preventDefault();

    const fdata = new FormData(event.target);
    const data = Object.fromEntries(fdata.entries());

    axios
      .post(
        "https://server.shopex.io/registration/reg_process_vericode.php",
        data
      )

      .then(function (response) {
        if (response.data === "welcome") {
          navigateRef.current("/Stripe_index");
        } else if (response.data === "Not") {
          alert("Verification Failled");
        } else if (response.data === "Not") {
          alert("No Invitetion Sent to you");
        }
      })
      .catch(function (error) {
        console.log(error);
      });
  };

  return (
    <Grid container>
      <form onSubmit={filterSubmit} style={{ marginLeft: "40%" }}>
        <Grid item sm={10} style={{ display: "grid" }}>
          <strong>Inser the email you registered with </strong>
          <input
            type="email"
            name="email"
            autoComplete="off"
            required
            placeholder=""
          />

          <strong>
            Inser the confirmation code sent to your email address [ also check
            the spam box ]{" "}
          </strong>
          <input
            type="text"
            name="verification_code"
            autoComplete="off"
            required
            placeholder=""
          />

          <button type="submit">Submit</button>
        </Grid>
      </form>
    </Grid>
  );
}

export default Reg_verify;
