//import { ReactSession }  from 'react-client-session';
import React, { useState, useRef } from "react";
//import { useSelector, useDispatch } from "react-redux";
//import Radio from '@mui/material/Radio';
//import RadioGroup from '@mui/material/RadioGroup';
//import Grid from "@mui/material/Grid";
import axios from "axios";

import { useNavigate } from "react-router-dom";
import { useParams } from "react-router-dom";

import { Navigate } from "react-router-dom";

function InsertShopURL() {
  var { cus } = useParams();

  const navigate = useNavigate();
  const navigateRef = useRef(navigate);

  var [wait, setWait] = useState(false);

  var filterSubmit = (event) => {
    event.preventDefault();

    setWait(true);

    const fdata = new FormData(event.target);
    const data = Object.fromEntries(fdata.entries());
    var soid = JSON.parse(localStorage.getItem("soid"));
    data["cus"] = cus;
    data["soid"] = soid;

    axios
      .post("https://server.shopex.io/registration/process_shop_url.php", data)
      .then(function (response) {
        navigateRef.current("/");
      })
      .catch(function (error) {
        console.log(error);
      });
  };

  return (
    <>
      <form onSubmit={filterSubmit}>
        <label htmlFor="shoplink"> Shop url </label>
        <input
          type="url"
          name="shoplink"
          required
          placeholder="https://example.com"
        />{" "}
        <br />
        <label htmlFor="consumer_secret"> Consumer secret </label>
        <input
          type="text"
          name="consumer_secret"
          required
          placeholder="consumer secret"
        />{" "}
        <br />
        <label htmlFor="consumer_key"> Consumer key </label>
        <input
          type="text"
          name="consumer_key"
          required
          placeholder="consumer key"
        />{" "}
        <br />
        <button type="submit">Submit</button>
        {wait && <h3> Please Wait, this might take a few minutes .. .. .. </h3>}
      </form>
    </>
  );
}

export default InsertShopURL;
