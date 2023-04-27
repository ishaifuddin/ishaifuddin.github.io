import { ReactSession } from "react-client-session";
import React, { useEffect, useState } from "react";
import Radio from "@mui/material/Radio";
import RadioGroup from "@mui/material/RadioGroup";
import { useSelector, useDispatch } from "react-redux";
import Grid from "@mui/material/Grid";
import { DateRangePicker } from "rsuite";
import moment from "moment";
import Select from "react-select";
import axios from "axios";
import { addRole } from "../../../features/DynamicPricing/CurrentRules";
import { format } from "date-fns";
//import date

import { get_product_and_catagory_and_sku_data } from "../../../features/product/ProductListAndSegment";
import { Get_Product_Purchase_Based_Cus_Seg_Obj } from "../../../features/product/ProductPurchaseBasedCusSeg";
import { Card } from "@mui/material";

function DiscountOnEntireShop({ data, target_segment_name }) {
  var [schedule_type, setSchedule_type] = useState("manual");
  var [start, setStart] = useState(null);
  var [end, setEnd] = useState(null);

  var [offername, setoffername] = useState("");
  var [target_segment_name_, settarget_segment_name_] = useState("");
  var [target_segment_id, settarget_segment_id] = useState("");
  var [offer, setOffer] = useState("");
  var [offertype, setOffertype] = useState("percent");
  var [disable_role_onsale, setdisable_role_onsale] = useState("1");
  var [pr, setpr] = useState(10);
  var [status, setStatus] = useState();

  var [drflag, setdrflag] = useState(false);

  useEffect(() => {
    if (data !== undefined) {
      var sinrole = data.onerule;
      if (sinrole && sinrole.length > 0) {
        console.log(target_segment_name);
        for (var i of sinrole) {
          setoffername(i.name);
          settarget_segment_name_(target_segment_name);
          settarget_segment_id(i.target_segment);

          var dtail = i.dtail.split("_next_");
          setOffer(dtail[0]);
          setOffertype(dtail[1]);

          setdisable_role_onsale(i.osrun);
          setpr(i.pr);
          setStatus(i.status);

          if (i.schedule !== "manual") {
            var schedule = i.schedule.split("To");
            setStart(new Date(schedule[0]));
            setEnd(new Date(schedule[1]));
            setSchedule_type("tl");
            setdrflag(true);
          }
        }
      }
    }
  }, []);

  var dispatch = useDispatch();

  useEffect(() => {
    var is_dispatched1 = () => {
      ReactSession.get("Get_Product_Purchase_Based_Cus_Seg_Obj");
      if (ReactSession.get("Get_Product_Purchase_Based_Cus_Seg_Obj")) {
        return true;
      } else {
        ReactSession.set("Get_Product_Purchase_Based_Cus_Seg_Obj", "1");
        return false;
      }
    };

    if (!is_dispatched1()) {
      dispatch(Get_Product_Purchase_Based_Cus_Seg_Obj({ ajax_call: 2 }));
    }

    var is_dispatched2 = () => {
      ReactSession.get("get_product_and_catagory_and_sku_data");
      if (ReactSession.get("get_product_and_catagory_and_sku_data")) {
        return true;
      } else {
        ReactSession.set("get_product_and_catagory_and_sku_data", "1");
        return false;
      }
    };

    if (!is_dispatched2()) {
      dispatch(get_product_and_catagory_and_sku_data({ ajax_call: 2 }));
    }
  }, []);

  var pro_Pur_based_cussegment = useSelector(
    (state) =>
      state.Product_Purchase_Based_Customer_List_and_Segment
        .Product_Purchase_Based_Cus_Segment_Obj
  );
  pro_Pur_based_cussegment = structuredClone(pro_Pur_based_cussegment);

  var Cus_Purchase_based_segment = useSelector(
    (state) =>
      state.Product_Purchase_Based_Customer_List_and_Segment
        .Product_Purchase_Based_Cus_Segment_Obj
  );
  var Customer_segment_options = [];
  if (Cus_Purchase_based_segment && Cus_Purchase_based_segment.length > 0) {
    for (var i of Cus_Purchase_based_segment) {
      var label = i.name;
      var value = i.id;
      Customer_segment_options.push({ value: value, label: label });
    }
  }

  var [daterange, setdrange] = useState([
    new Date(moment().startOf("month")),
    new Date(moment().endOf("month")),
  ]);

  var handleChange = (event) => {
    setOffertype(event.target.value);
  };

  var Handle_setOnsale = (event) => {
    setdisable_role_onsale(event.target.value);
  };

  var handle_setschedule_type = (event) => {
    setSchedule_type(event.target.value);
  };

  var formSubmit = (event) => {
    event.preventDefault();

    var form_ = new FormData(event.target);
    var form_data = Object.fromEntries(form_.entries());

    var entire_offer = form_data["entire_offer"];
    var entire_offer_type = form_data["entire_offer_type"];
    var discount_string = entire_offer + "_next_" + entire_offer_type;

    let name = form_data["name"];
    let pr = form_data["pr"];
    let target = form_data["target"];
    let onsalerun = form_data["onsalerun"];
    let type = "entire";
    let schedule_ = 0;

    let f = 0;
    let t = 0;

    var status = 0;
    if (schedule_type === "tl") {
      f = format(daterange[0], "yyyy-MM-dd"); //daterange[0];
      t = format(daterange[1], "yyyy-MM-dd"); //daterange[1];
      const today = new Date();
      if (today >= f && today <= t) {
        status = "On";
      } else {
        status = "Off";
      }
      schedule_ = f + "-To-" + t;
    } else if (schedule_type === "manual") {
      schedule_ = "manual";
      status = "On";
    }

    var post = 1;

    dispatch(
      addRole({
        status: status,
        name: name,
        type: type,
        target_segment: target,
        schedule: schedule_,
      })
    );

    axios
      .post(
        "https://server.shopex.io/dynamicpricing/dpdis_save_and_sending.php",
        {
          post: post,
          name: name,
          type: type,
          data: discount_string,
          target: target,
          from: f,
          to: t,
          onsalerun: onsalerun,
          pr: pr,
          ajax_call: 2,
        },
        { withCredentials: true }
      )
      .then(function (response) {})
      .catch(function (error) {
        console.log(error);
      });
  };

  return (
    <Card className="dash-card price">
      <form id="dpriceform" onSubmit={formSubmit}>
        <div className="input-filters">
          <strong>Set a relevant offer name: </strong>
          <input
            required={true}
            name="name"
            type="text"
            defaultValue={offername || ""}
          />
        </div>

        <div className="input-filters">
          <strong>
            Select target Segment: <p>{target_segment_name_}</p>{" "}
          </strong>

          {Customer_segment_options && (
            <Select
              className="multi"
              placeholder={"Select target"}
              defaultValue={target_segment_id}
              onChange={(e) => {
                settarget_segment_id(e.value);
                settarget_segment_name_(e.label);
              }}
              options={Customer_segment_options}
            />
          )}

          <input
            name="target"
            type="hidden"
            defaultValue={target_segment_id || ""}
          />
        </div>
        <div className="input-filters">
          <strong>Offer: </strong>

          <input name="entire_offer" type="number" defaultValue={offer} />

          <RadioGroup
            defaultValue={offertype || "percent"}
            style={{ display: "inline-block" }}
            onChange={handleChange}
          >
            <Radio
              checked={offertype === "percent"}
              value="percent"
              name="type"
            />
            % Off
            <Radio
              checked={offertype === "amount"}
              value="amount"
              name="type"
            />
            $ Off
            <Radio
              checked={offertype === "fixedprice"}
              value="fixedprice"
              name="type"
            />
            $ Each Product
          </RadioGroup>
          <input
            name="entire_offer_type"
            type="hidden"
            defaultValue={offertype || "percent"}
          />
        </div>

        <div className="input-filters">
          <strong>
            Disable this offer for
            <span> on-sale </span> products:
          </strong>
          <RadioGroup
            defaultValue={disable_role_onsale}
            style={{ display: "inline-block" }}
            onChange={Handle_setOnsale}
          >
            <Radio
              checked={disable_role_onsale === "1"}
              value="1"
              name="onsale_on_off"
            />
            Yes
            <Radio
              checked={disable_role_onsale === "0"}
              value="0"
              name="onsale_on_off"
            />
            No
          </RadioGroup>
          <input
            name="onsalerun"
            type="hidden"
            defaultValue={disable_role_onsale}
          />
        </div>

        <div className="input-filters">
          <strong>Set Schedule for this offer: </strong>
          <RadioGroup
            defaultValue={schedule_type}
            style={{ display: "inline-block" }}
            onChange={handle_setschedule_type}
          >
            <Radio
              checked={schedule_type === "manual"}
              value="manual"
              name="schedule"
            />
            Start now and End manually
            <Radio
              checked={schedule_type === "tl"}
              value="tl"
              name="schedule"
            />
            Set Timeline
          </RadioGroup>

          {drflag === false && schedule_type === "tl" && (
            <DateRangePicker
              label="Timeline"
              value={daterange}
              onChange={setdrange}
              oneTap={false}
            ></DateRangePicker>
          )}

          {drflag === true && schedule_type === "tl" && (
            <DateRangePicker
              label="Timeline"
              value={[start, end]}
              onChange={setdrange}
              oneTap={false}
            ></DateRangePicker>
          )}

          {/* <input name="schedule_dr" type="hidden" defaultValue={daterange} /> */}
        </div>

        <div className="input-filters">
          <strong>Set Priority for this rule: </strong>
          <input required={true} name="pr" type="number" defaultValue={pr} />
        </div>
        <input type="submit" style={{ width: "100%", maxWidth: "500px" }} />
      </form>
    </Card>
  );
}

export default DiscountOnEntireShop;
