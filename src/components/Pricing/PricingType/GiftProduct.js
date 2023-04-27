import { ReactSession } from "react-client-session";
import React from "react";
import Radio from "@mui/material/Radio";
import RadioGroup from "@mui/material/RadioGroup";
import { useState, useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import Grid from "@mui/material/Grid";

import ProductCatagory from "../../Product/ProductSegmentFilters/ProductCatagory";
import Products from "../../Product/ProductSegmentFilters/Products";

import Multiselect from "multiselect-react-dropdown";

import { DateRangePicker } from "rsuite";
import moment from "moment";
import Select from "react-select";
import { format } from "date-fns";
import axios from "axios";

import { get_product_and_catagory_and_sku_data } from "../../../features/product/ProductListAndSegment";
import { Get_Product_Purchase_Based_Cus_Seg_Obj } from "../../../features/product/ProductPurchaseBasedCusSeg";

import { addRole } from "../../../features/DynamicPricing/CurrentRules";
import { Card } from "@material-ui/core";

function GiftProduct({
  offername,
  schedule,
  gifts,
  giftfor,
  giftfor_List,
  products,
  target_segment_name,
  target_segment_id,
  minItem,
  minAmount,
  status,
  osrun,
  pr,
}) {
  var dispatch = useDispatch();
  var [schedule_type, setSchedule_type] = useState("manual");

  var [pr, setPr] = useState(10);
  var [status, setStatus] = useState(0);
  var [onsalerun, setOnsalerun] = useState("1");

  var [cat, setCat] = useState(false);
  var [prod, setProd] = useState(false);
  var [all, setAll] = useState(false);

  var [minQuantitydiv, setminQ] = useState(false);
  var [minAmountdiv, setminA] = useState(false);

  // var product_obj = useSelector((state) => state.product_List_And_Segments.all_product_object);
  // var product_cat_obj = useSelector((state) => state.product_List_And_Segments.all_product_cat_object);

  var [GiftOnProduct, setGiftOnProduct] = useState([]);
  var [GiftOnCategory, setGiftOnCategory] = useState([]);

  var [Target_segment_Name, setTarget_segment_Name] = useState("");
  var [Target_segment_Id, setTarget_segment_Id] = useState("");

  var [gift_min_quantity, setGift_min_quantity] = useState(0);
  var [gift_min_amount, setGift_min_amount] = useState(0);

  var [daterange, setdrange] = useState([
    new Date(moment().startOf("month")),
    new Date(moment().endOf("month")),
  ]);

  var [item_amount, setItem_amount] = useState(0);

  var [all_or_cat_or_product_radio, SetAll_or_cat_or_product_radio] =
    useState("prod");

  var gift_available_for = (e) => {
    setProd(false);
    setCat(false);
    setAll(false);

    var v = e.target.value;
    SetAll_or_cat_or_product_radio(v);

    if (v === "prod") setProd(true);
    else if (v === "cat") setCat(true);
    else if (v === "all") setAll(true);
  };

  var [product_optionsH, SetProduct_options] = useState([]); // Gifts Options - List of Products
  var [offer_as_gifts, SetOfferASgifts] = useState([]); // Preselected Gifts Options - List of Products - When Editing Rule
  var [offerName, setOfferName] = useState("");

  useEffect(() => {
    SetAll_or_cat_or_product_radio(giftfor);
    setOfferName(offername);
    setTarget_segment_Name(target_segment_name);
    setTarget_segment_Id(target_segment_id);
    SetOfferASgifts(gifts);
    SetProduct_options(products);
    setPr(pr);
    setStatus(status);
    setOnsalerun(osrun);

    if (giftfor === "prod") {
      setProd(true);
      setGiftOnProduct(giftfor_List);
    } else if (giftfor === "cat") {
      setGiftOnCategory(giftfor_List);
      setCat(true);
    } else if (giftfor === "all") {
      setAll(true);
    }

    // var minitem             = sinrule[0].dtail.split("_next_")[3];
    // var minamount           = sinrule[0].dtail.split("_next_")[4];

    if (minItem === "NOITEM") {
      setminA(true);
      setGift_min_amount(minAmount);
    } else if (minAmount === "NOAMOUNT") {
      setminQ(true);
      setGift_min_quantity(minItem);
    }

    var is_dispatched1 = () => {
      ReactSession.get("get_product_and_catagory_and_sku_data");
      if (ReactSession.get("get_product_and_catagory_and_sku_data")) {
        return true;
      } else {
        ReactSession.set("get_product_and_catagory_and_sku_data", "1");
        return false;
      }
    };

    if (!is_dispatched1()) {
      dispatch(get_product_and_catagory_and_sku_data({ ajax_call: 2 }));
    }

    var is_dispatched11 = () => {
      ReactSession.get("Get_Product_Purchase_Based_Cus_Seg_Obj");
      if (ReactSession.get("Get_Product_Purchase_Based_Cus_Seg_Obj")) {
        return true;
      } else {
        ReactSession.set("Get_Product_Purchase_Based_Cus_Seg_Obj", "1");
        return false;
      }
    };

    if (!is_dispatched11()) {
      dispatch(Get_Product_Purchase_Based_Cus_Seg_Obj({ ajax_call: 2 }));
    }
  }, []);

  //console.log();

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

  var minimum_amount_OR_quantity = (e) => {
    setminA(false);
    setminQ(false);
    var v = e.target.value;
    setItem_amount(v);
    if (v === "minAdiv") {
      setminA(true);
    } else if (v === "minQdiv") {
      setminQ(true);
    }
  };

  var [giftproduct, setProduct] = useState("");
  var [target, settarget] = useState();

  var formSubmit = (event) => {
    event.preventDefault();
    var form_ = new FormData(event.target);
    var form_data = Object.fromEntries(form_.entries());

    let name = form_data["name"];
    let pr = form_data["pr"];
    let target = form_data["target"];
    let min_item_or_amount = form_data["item_or_amount"]; //
    let onsalerun = form_data["onsalerun"];
    let giftstring = form_data["giftstring"];
    let type = "gift_dis";
    let schedule = 0;

    let amount = "",
      item = "";
    if (min_item_or_amount === "minQdiv") {
      amount = "NOAMOUNT";
    } else if (min_item_or_amount === "minAdiv") {
      item = "NOITEM";
    }

    var discount_string = "";
    var pro_or_cats = "";

    var available_for = "";

    if (cat || prod || all) {
      if (cat || prod) {
        if (cat) {
          available_for = "cat";
          pro_or_cats = JSON.parse(form_data["productCatList"]);
        }

        if (prod) {
          available_for = "prod";
          pro_or_cats = JSON.parse(form_data["productList"]);
        }

        if (pro_or_cats.length > 0) {
          for (var i = 0; i < pro_or_cats.length; i++) {
            var pro_or_cat_id = pro_or_cats[i];
            discount_string = discount_string
              .concat(available_for)
              .concat("shopex")
              .concat(pro_or_cat_id)
              .concat("shopex")
              .concat(giftstring)
              .concat("shopex")
              .concat(item)
              .concat("shopex")
              .concat(amount)
              .concat("_break_");
          }
        }
      }

      if (all) {
        available_for = "all";
        discount_string = discount_string
          .concat(available_for)
          .concat("shopex")
          .concat(giftstring)
          .concat("shopex")
          .concat(item)
          .concat("shopex")
          .concat(amount)
          .concat("_break_");
      }
    }

    var status = 0;
    var schedule_ = "";
    var f = "";
    var t = "";
    if (schedule_type === "tl") {
      f = format(daterange[0], "yyyy-MM-dd");
      t = format(daterange[1], "yyyy-MM-dd");
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

    // let fd = new FormData();    //formdata object
    var post = 1;

    var status = 0;
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

  var product_obj = useSelector(
    (state) => state.product_List_And_Segments.all_product_object
  );

  var ops = [];
  if (product_obj && product_obj.length > 0) {
    for (var i of product_obj) {
      var label = i.product_name;
      var value = i.product_id;
      ops.push({ value: value, label: label });
    }
  }

  return (
    <Card className="dash-card price">
      <form id="dpriceform" onSubmit={formSubmit}>
        <div className="input-filters">
          <strong>Set a relevant offer name:</strong>
          <input
            style={{ height: "40px", width: "300px", fontSize: "16px" }}
            required={true}
            name="name"
            type="text"
            defaultValue={offerName}
          />
        </div>
        <div className="input-filters">
          <strong>Select target Segment:</strong>
          {Customer_segment_options && (
            <Select
              className="multi"
              placeholder={Target_segment_Name || "Select target Segment"}
              defaultValue={Target_segment_Id}
              onChange={(e) => {
                settarget(e.value);
              }}
              options={Customer_segment_options}
            />
          )}
          <input name="target" type="hidden" defaultValue={target} />
        </div>
        <div className="input-filters">
          <strong>Discount is available for:</strong>
          <RadioGroup
            defaultValue={all_or_cat_or_product_radio || "prod"}
            style={{ display: "inline-block" }}
            onChange={(e) => {
              gift_available_for(e);
            }}
          >
            <Radio
              checked={all_or_cat_or_product_radio === "all"}
              value="all"
              name="cat_or_product"
            />
            All
            <Radio
              checked={all_or_cat_or_product_radio === "prod"}
              value="prod"
              name="cat_or_product"
            />{" "}
            Specific Product
            <Radio
              checked={all_or_cat_or_product_radio === "cat"}
              value="cat"
              name="cat_or_product"
            />{" "}
            Specific Category
          </RadioGroup>
          {cat && <ProductCatagory data={GiftOnCategory} />}
          {prod && <Products data={GiftOnProduct} />}
          <RadioGroup
            style={{ display: "inline-block" }}
            onChange={(e) => {
              minimum_amount_OR_quantity(e);
            }}
          >
            <Radio value="minQdiv" name="item_or_amount_r" /> Minimal Quantity
            <Radio value="minAdiv" name="item_or_amount_r" /> Minimul amount
          </RadioGroup>
          <input
            name="item_or_amount"
            type="hidden"
            defaultValue={item_amount}
          />
        </div>
        {minQuantitydiv && (
          <div className="input-filters">
            <strong>
              Minimal Quantity need to buy from any selected product:
            </strong>
            <input
              type="number"
              defaultValue={gift_min_quantity}
              name="gift_min_quantity"
            />
          </div>
        )}
        {minAmountdiv && (
          <div className="input-filters">
            <strong>
              Minimul amount need to spent on any selected product:
            </strong>
            <input
              type="number"
              defaultValue={gift_min_amount}
              name="gift_min_amount"
            />
          </div>
        )}
        <div className="input-filters">
          <strong>Offer as gift</strong>

          {/* {JSON.stringify(offer_as_gifts)}
                    <h1></h1>
                    {JSON.stringify(product_optionsH)}
                    */}

          {ops && ops.length > 0 && (
            <Multiselect
              displayValue="label"
              placeholder="+ Gift"
              onRemove={(e) => {
                var gifts = "";
                for (var i of e) {
                  gifts = gifts.concat(i.value).concat("next_gift");
                }
                setProduct(JSON.stringify(gifts));
              }}
              onSelect={(e) => {
                var gifts = "";
                for (var i of e) {
                  gifts = gifts.concat(i.value).concat("next_gift");
                }
                setProduct(JSON.stringify(gifts));
              }}
              options={ops}
              selectedValues={offer_as_gifts}
              showCheckbox
            />
          )}

          <input
            name="giftstring111"
            type="hidden"
            defaultValue={offer_as_gifts}
          />
          <input name="giftstring" type="hidden" defaultValue={giftproduct} />
        </div>
        <div className="input-filters">
          <strong>
            Disable this offer for <span style={{ color: "red" }}>on-sale</span>
            products:
          </strong>

          <RadioGroup
            style={{ display: "inline-block" }}
            onChange={(e) => {
              setOnsalerun(e.target.value);
            }}
          >
            <Radio value="1" name="onsale_on_off" /> Yes
            <Radio value="0" name="onsale_on_off" /> No
          </RadioGroup>
          <input name="onsalerun" type="hidden" defaultValue={onsalerun} />
        </div>
        <div className="input-filters">
          <strong>Set Schedule for this offer:</strong>

          <RadioGroup
            style={{ display: "inline-block" }}
            onChange={(e) => {
              setSchedule_type(e.target.value);
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
              ></DateRangePicker>
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

          {/* from : format(daterange[0],'yyyy-MM-dd'), to : format(daterange[1],'yyyy-MM-dd'), */}
          {/* <input name="schedule_option" type="hidden" defaultValue={schudule} /> */}
          {/* <input name="schedule" type="hidden" defaultValue={format(daterange[0],'yyyy-MM-dd').concat("TO").concat(format(daterange[1],'yyyy-MM-dd'))} /> */}
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

export default GiftProduct;
