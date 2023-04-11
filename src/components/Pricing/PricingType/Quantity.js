import { ReactSession } from "react-client-session";
import React, { useEffect, useState } from "react";
import ProductCatagory from "../../Product/ProductSegmentFilters/ProductCatagory";
import Products from "../../Product/ProductSegmentFilters/Products";
import Radio from "@mui/material/Radio";
import RadioGroup from "@mui/material/RadioGroup";
import { useSelector, useDispatch } from "react-redux";
import { format } from "date-fns";
import Grid from "@mui/material/Grid";
import { DateRangePicker } from "rsuite";
import moment from "moment";
import Select from "react-select";
import axios from "axios";

import { get_product_and_catagory_and_sku_data } from "../../../features/product/ProductListAndSegment";
import { Get_Product_Purchase_Based_Cus_Seg_Obj } from "../../../features/product/ProductPurchaseBasedCusSeg";

import { addRole } from "../../../features/DynamicPricing/CurrentRules";

function Quantity({
  target_segment_name,
  target_segment_id,
  offername,
  schedule,
  osrun,
  status,
  pr,
  for_category,
  for_product,
  offer_on_pro_or_cat,
  qt,
}) {
  var dispatch = useDispatch();

  var [rules, setRules] = useState([
    { from: "", to: "", offer: "", type: "percent" },
  ]);
  //var [rules1, setRules1] = useState([{from: "", to : "", offer : "", type : "percent"}]);

  var [QDIS_OnProduct, setQdisOnProduct] = useState([]);
  var [QDIS_OnCategory, setQdisOnCategory] = useState([]);

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

  var [final, setFinal] = useState([]);
  var newRules = [];

  var [cat, setCat] = useState(false);
  var [prod, setProd] = useState(false);
  var [all, setAll] = useState(false);

  var [target_segment_name1, setTarget_segment_name] = useState("");
  var [target_segment_id1, setTarget_segment_id] = useState("");
  var [rulename, setOfferName] = useState("");
  var [pr, setPriority] = useState(10);
  var [NOosrun, setNoOSrun] = useState(1);

  useEffect(() => {
    if (offer_on_pro_or_cat) {
      setTarget_segment_name(target_segment_name);
      setTarget_segment_id(target_segment_id);
      setOfferName(offername);
      setPriority(pr);
      setNoOSrun(osrun);

      //var sch_ = schedule;

      setRules(qt);

      if (offer_on_pro_or_cat === "prod") {
        setProd(true);
        setCat(false);
        setQdisOnProduct(for_product);
      } else if (offer_on_pro_or_cat === "cat") {
        setCat(true);
        setProd(false);
        setQdisOnCategory(for_category);
      }
    }
  }, [offername]);

  var available_for = (e) => {
    setProd(false);
    setCat(false);
    setAll(false);

    var v = e.target.value;
    if (v == "prod") setProd(true);
    else if (v === "cat") setCat(true);
    else if (v === "all") setAll(true);
  };

  var handleChange = (i, e) => {
    newRules = [...rules];
    newRules[i][e.target.name] = e.target.value;
    setRules(newRules);
    setFinal([]);
    setFinal(newRules);
  };

  var addRules = (len) => {
    setRules([...rules, { from: "", to: "", offer: "", type: "percent" }]);
    newRules = [...rules];
    setFinal([]);
    setFinal(newRules);
  };

  var removeRules = (idx) => {
    newRules = [...rules];
    newRules.splice(idx, 1);
    setRules(newRules);
    setFinal([]);
    setFinal(newRules);
  };

  var Cus_Purchase_based_segment = useSelector(
    (state) =>
      state.Product_Purchase_Based_Customer_List_and_Segment
        .Product_Purchase_Based_Cus_Segment_Obj
  );
  Cus_Purchase_based_segment = structuredClone(Cus_Purchase_based_segment);



  var ops = [];
  
  if(Cus_Purchase_based_segment){
    for (var i of Cus_Purchase_based_segment) {
      var label = i.name;
      var value = i.id;
      ops.push({ value: value, label: label });
    }
  }

  var [daterange, setdrange] = useState([
    new Date(moment().startOf("month")),
    new Date(moment().endOf("month")),
  ]);

  var [schedule_type, set_schedule_type] = useState("manual");

  //var[onsale,setOnsale] = useState('1');

  var [target, settarget] = useState();

  var formSubmit = (event) => {
    event.preventDefault();
    var form_ = new FormData(event.target);
    var form_data = Object.fromEntries(form_.entries());

    var discount_string = "";
    var pro_or_cats = "";

    var available_for = "";
    if (final.length > 0 && (cat || prod || all)) {
      if (cat || prod) {
        if (cat) {
          available_for = "cat";
          pro_or_cats = JSON.parse(form_data["productCatList"]);
        }

        if (prod) {
          available_for = "prod";
          pro_or_cats = JSON.parse(form_data["productList"]);
        }

        for (var i = 0; i < pro_or_cats.length; i++) {
          var pro_or_cat_id = pro_or_cats[i];
          for (var j = 0; j < final.length; j++) {
            var from = final[j].from;
            var to = final[j].to;
            var offer = final[j].offer;
            var typee = final[j].type;
            discount_string = discount_string
              .concat(available_for)
              .concat("shopex")
              .concat(pro_or_cat_id)
              .concat("shopex")
              .concat(from)
              .concat("shopex")
              .concat(to)
              .concat("shopex")
              .concat(offer)
              .concat("shopex")
              .concat(typee)
              .concat("_break_");
          }
        }
      }

      if (all) {
        available_for = "all";
        for (var i = 0; i < final.length; i++) {
          var from = final[i].from;
          var to = final[i].to;
          var offer = final[i].offer;
          var typee = final[i].type;
          discount_string = discount_string
            .concat(available_for)
            .concat("shopex")
            .concat(from)
            .concat("shopex")
            .concat(to)
            .concat("shopex")
            .concat(offer)
            .concat("shopex")
            .concat(typee)
            .concat("_break_");
        }
      }
    }

    let f = "";
    let t = "";

    var post = 1;
    let name = form_data["name"];
    let pr = form_data["pr"];
    let target = form_data["target"];
    let onsalerun = form_data["onsalerun"];
    let type = "q_dis";

    var status = 0;
    var schedule_ = "";
    if (schedule_type === "tl") {
      let schedule_dr = form_data["schedule_dr)"];
      let dateArray = schedule_dr.split("TO");
      f = dateArray[0];
      t = dateArray[1];
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

  //var[,setQdisOnProduct]=useState([]);
  //var[

  return (
    <>
      <form onSubmit={formSubmit}>
        <strong> Set a relevant offer name </strong>
        <input
          style={{ height: "40px", width: "300px", fontSize: "16px" }}
          required={true}
          name="name"
          type="text"
          defaultValue={rulename}
        />
        <div style={{ margin: "2% 0% 2% 0%", width: "90%" }}>
          <strong> Select target Segment </strong>

          {ops && (
            <Select
              placeholder={target_segment_name1 || "Select target Segment"}
              defaultValue={target_segment_id1}
              onChange={(e) => {
                settarget(e.value);
              }}
              options={ops}
            />
          )}
          <input name="target" type="hidden" defaultValue={target} />
        </div>
        Discount is available for
        <RadioGroup
          style={{ display: "inline-block" }}
          onChange={(e) => {
            available_for(e);
          }}
        >
          <Radio checked={prod} value="prod" name="cat_or_product" /> Specific
          Product
          <Radio checked={cat} value="cat" name="cat_or_product" /> Specific
          Category
          <Radio checked={all} value="all" name="cat_or_product" /> All
        </RadioGroup>
        {/* {JSON.stringify(QDIS_OnCategory)}
                    <h1></h1>
                {JSON.stringify(QDIS_OnProduct)}
                */}
        {cat && <ProductCatagory data={QDIS_OnCategory} />}
        {prod && <Products data={QDIS_OnProduct} />}
        <div>
          <button
            className="button add"
            type="button"
            onClick={() => addRules(rules.length + 1)}
          >
            <strong style={{ padding: "10px" }}>+ADD</strong>
          </button>
        </div>
        {rules.map((element, index) => (
          <div className="form-inline" key={index} id={"id-" + index}>
            <label>From</label>

            <input
              required={true}
              name="from"
              type="number"
              value={element.from}
              onChange={(e) => handleChange(index, e)}
            />

            <label>To</label>
            <input
              required={true}
              name="to"
              type="number"
              value={element.to}
              onChange={(e) => handleChange(index, e)}
            />

            <label>Offer</label>
            <input
              required={true}
              name="offer"
              type="number"
              value={element.offer}
              onChange={(e) => handleChange(index, e)}
            />

            <RadioGroup
              defaultValue={element.type}
              style={{ display: "inline-block" }}
              onChange={(e) => {
                handleChange(index, e);
              }}
            >
              <Radio
                checked={element.type === "percent"}
                value="percent"
                name="type"
              />{" "}
              % Off
              <Radio
                checked={element.type === "amount"}
                value="amount"
                name="type"
              />{" "}
              $ Off
              <Radio
                checked={element.type === "fixedprice"}
                value="fixedprice"
                name="type"
              />{" "}
              $ Each Product
            </RadioGroup>

            {index ? (
              <button
                type="button"
                className="button remove"
                onClick={() => removeRules(index)}
              >
                Remove
              </button>
            ) : null}
          </div>
        ))}
        <Grid>
          <strong>
            Disable this offer for <span style={{ color: "red" }}>on-sale</span>{" "}
            products{" "}
          </strong>

          <RadioGroup
            style={{ display: "inline-block" }}
            onChange={(e) => {
              setNoOSrun(e.target.value);
            }}
          >
            <Radio value="1" name="onsale_on_off" /> Yes
            <Radio value="0" name="onsale_on_off" /> No
          </RadioGroup>
          <input name="onsalerun" type="hidden" defaultValue={NOosrun} />
        </Grid>
        <Grid>
          <strong>Set Schedule for this offer </strong>

          <RadioGroup
            style={{ display: "inline-block" }}
            onChange={(e) => {
              set_schedule_type(e.target.value);
            }}
          >
            <Radio value="manual" name="schedule" /> Start now and End manually
            <Radio value="tl" name="schedule" /> Set Timeline
          </RadioGroup>

          {schedule_type === "tl" && (
            <>
              <DateRangePicker
                label="Timeline"
                value={daterange}
                onChange={setdrange}
                oneTap={false}
              >
                {" "}
              </DateRangePicker>
              <input
                name="schedule_dr"
                type={"hidden"}
                defaultValue={
                  format(daterange[0], "yyyy-MM-dd") +
                  "To" +
                  format(daterange[1], "yyyy-MM-dd")
                }
              />
            </>
          )}

          <input name="schedule" type="hidden" defaultValue={daterange} />
        </Grid>
        <Grid style={{ margin: "2% 0% 2% 0%" }}>
          <strong> Set Priority for this rule </strong>
          <input required={true} name="pr" type="number" defaultValue={pr} />
        </Grid>
        <input type="submit" />
      </form>
    </>
  );
}

export default Quantity;
