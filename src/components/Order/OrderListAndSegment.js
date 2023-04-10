import { ReactSession } from "react-client-session";
import React, { useEffect, useState, useRef } from "react";
import { useSelector, useDispatch } from "react-redux";
import { Modal, Button, Group, useMantineTheme } from "@mantine/core";

import Multiselect from "multiselect-react-dropdown";
import Grid from "@mui/material/Grid";
import Moment from "react-moment";
import moment from "moment";

import Search from "@material-ui/icons/Search";
import SaveAlt from "@material-ui/icons/SaveAlt";
import ChevronLeft from "@material-ui/icons/ChevronLeft";
import ChevronRight from "@material-ui/icons/ChevronRight";
import FirstPage from "@material-ui/icons/FirstPage";
import LastPage from "@material-ui/icons/LastPage";
import Check from "@material-ui/icons/Check";
import FilterList from "@material-ui/icons/FilterList";
import Remove from "@material-ui/icons/Remove";

import MaterialTable from "material-table";
import { ThemeProvider, createTheme } from "@mui/material";

import CusMail from "./OrderSegFilters/CusMail";
import TransecID from "./OrderSegFilters/TransecID";
import OrderID from "./OrderSegFilters/OrderID";
import OrderFromNC from "./OrderSegFilters/OrderFromNC";
import OrderFromC from "./OrderSegFilters/OrderFromC";
import OrderStatus from "./OrderSegFilters/OrderStatus";
import Amount from "./OrderSegFilters/Amount";
import Billal1 from "./OrderSegFilters/Billal1";
import Billal2 from "./OrderSegFilters/Billal2";
import BillCity from "./OrderSegFilters/BillCity";
import BillCountry from "./OrderSegFilters/BillCountry";
import NthOrder from "./OrderSegFilters/NthOrder";
import OrderDiscount from "./OrderSegFilters/OrderDiscount";
import OrderSrc from "./OrderSegFilters/OrderSrc";
import Paymeth from "./OrderSegFilters/Paymeth";
import Products from "./OrderSegFilters/Products";
import ProductCount from "./OrderSegFilters/ProductCount";
import ProductUnit from "./OrderSegFilters/ProductUnit";
import RetAfter from "./OrderSegFilters/RetAfter";
import Shipal1 from "./OrderSegFilters/Shipal1";
import Shipal2 from "./OrderSegFilters/Shipal2";
import ShipCity from "./OrderSegFilters/ShipCity";
import ShipCost from "./OrderSegFilters/ShipCost";
import ShipCountry from "./OrderSegFilters/ShipCountry";
import Shipmeth from "./OrderSegFilters/Shipmeth";
import ShipPostCode from "./OrderSegFilters/ShipPostCode";
import Tax from "./OrderSegFilters/Tax";
import CouponCode from "./OrderSegFilters/CouponCode";

import { get_order_List } from "../../features/order/OrderListAndSegs";
import { get_order_segs } from "../../features/order/OrderListAndSegs";
import { get_order_filtered_List } from "../../features/order/OrderListAndSegs";
import { get_selseg_List } from "../../features/order/OrderListAndSegs";
import CusSegment from "./OrderSegFilters/CusSegment";
import { Card } from "react-bootstrap";
import NavButton from "../../pages/NavButton";

//import SideNav from '../../pages/SideNav';

function OrderList() {
  var dispatch = useDispatch();

  const defaultMaterialTheme = createTheme();
  const theme = useMantineTheme();

  const [opened, setOpened] = useState(false);
  const [filterList, setfilterList] = useState([]);
  var [segname, setSegname] = useState("Orders from last 6month/s");

  var filterSubmit = (event) => {
    event.preventDefault();
    const fdata = new FormData(event.target);
    const data = Object.fromEntries(fdata.entries());
    data["ajax_call"] = 1;
    setSegname("");
    dispatch(get_order_filtered_List(data));
  };

  var Order_list_seg = useSelector((state) => state.order_List_And_Segs);

  var ocus = Order_list_seg.ocus;
  var olist = Order_list_seg.olist;
  var oprofit = Order_list_seg.oprofit;
  var oorder = Order_list_seg.order;
  var orev = Order_list_seg.orev;
  var osegs = Order_list_seg.osegs;

  useEffect(() => {
    dispatch(get_order_List({ ajax_call: 2 }));
    dispatch(get_order_segs({ ajax_call: 2 }));
  }, []);

  var OListCloneData = [];
  if (Order_list_seg.olist && olist.length > 0) {
    OListCloneData = structuredClone(olist);
  }

  var Seglist = [];
  if (Order_list_seg.osegs && osegs.length > 0) {
    Seglist = structuredClone(osegs);
  }

  var [filts, setfils] = useState([
    "Customer-Email",
    "Order-id",
    "Order-Status",
    "Order-from-a-timeline",
    "Order-from-a-daterange",
    "Amount",
    "Tax",
    "Shipping_Cost",
    "Shipping_country",
    //'Shipping_state',
    "Shipping_city",
    "Ship_address_line_1",
    "Ship_address_line_2",
    "Shipping_Method",
    "Shipping_Post_Code",
    "Billing_country",
    //'Billing_state',
    "Billing_city",
    "Bill_address_line_1",
    "Bill_address_line_2",
    //'Billing_post_code',
    "Nth_Order",
    "Customer_Return_After",
    "Products",
    "Product_Count",
    "Product_Unit",
    "Payment_method",
    //'Created_Via',
    "Transection-id",
    "Coupon-Used",
    "Customer_segment",
    "Order_Source",
    "Order_Discount",
  ]);

  var addfilter = (e, arg) => {
    // cus-Filter De-selested from Dropdown
    if (arg === 99) {
      // Get previous state
      var prev_state = JSON.parse(localStorage.getItem("shopex_Order_filts"));

      // Get Removed state
      var removed_filter = prev_state.filter((x) => !e.includes(x));
      var remfil = removed_filter[0];

      var newfils = filterList.filter((item) => item.key !== remfil);
      setfilterList(newfils);

      // Update The latest selected's as previous state in local-Storage
      localStorage.setItem("shopex_Order_filts", JSON.stringify(e));
    }

    // cus-Filter Selected from Dropdown
    if (arg !== 99) {
      localStorage.setItem("shopex_Order_filts", JSON.stringify(e));

      if (arg === "Customer-Email")
        setfilterList(filterList.concat(<CusMail key={"Customer-Email"} />));

      if (arg === "Order-id")
        setfilterList(filterList.concat(<OrderID key={"Order-id"} />));

      if (arg === "Order-from-a-timeline")
        setfilterList(
          filterList.concat(<OrderFromNC key={"Order-from-a-timeline"} />)
        );

      if (arg === "Order-from-a-daterange")
        setfilterList(
          filterList.concat(<OrderFromC key={"Order-from-a-daterange"} />)
        );

      if (arg === "Order-Status")
        setfilterList(filterList.concat(<OrderStatus key={"Order-Status"} />));

      if (arg === "Transection-id")
        setfilterList(filterList.concat(<TransecID key={"Transection-id"} />));

      if (arg === "Amount")
        setfilterList(filterList.concat(<Amount key={"Amount"} />));

      if (arg === "Tax") setfilterList(filterList.concat(<Tax key={"Tax"} />));

      if (arg === "Bill_address_line_1")
        setfilterList(
          filterList.concat(<Billal1 key={"Bill_address_line_1"} />)
        );

      if (arg === "Bill_address_line_2")
        setfilterList(
          filterList.concat(<Billal2 key={"Bill_address_line_2"} />)
        );

      if (arg === "Billing_city")
        setfilterList(filterList.concat(<BillCity key={"Billing_city"} />));

      if (arg === "Billing_country")
        setfilterList(
          filterList.concat(<BillCountry key={"Billing_country"} />)
        );

      if (arg === "Ship_address_line_1")
        setfilterList(
          filterList.concat(<Shipal1 key={"Ship_address_line_1"} />)
        );

      if (arg === "Ship_address_line_2")
        setfilterList(
          filterList.concat(<Shipal2 key={"Ship_address_line_2"} />)
        );

      if (arg === "Shipping_city")
        setfilterList(filterList.concat(<ShipCity key={"Shipping_city"} />));

      if (arg === "Shipping_country")
        setfilterList(
          filterList.concat(<ShipCountry key={"Shipping_country"} />)
        );

      if (arg === "Shipping_Cost")
        setfilterList(filterList.concat(<ShipCost key={"Shipping_Cost"} />));

      if (arg === "Shipping_Method")
        setfilterList(filterList.concat(<Shipmeth key={"Shipping_Method"} />));

      if (arg === "Shipping_Post_Code")
        setfilterList(
          filterList.concat(<ShipPostCode key={"Shipping_Post_Code"} />)
        );

      if (arg === "Customer_Return_After")
        setfilterList(
          filterList.concat(<RetAfter key={"Customer_Return_After"} />)
        );

      if (arg === "Product_Unit")
        setfilterList(filterList.concat(<ProductUnit key={"Product_Unit"} />));

      if (arg === "Products")
        setfilterList(filterList.concat(<Products key={"Products"} />));

      if (arg === "Product_Count")
        setfilterList(
          filterList.concat(<ProductCount key={"Product_Count"} />)
        );

      if (arg === "Payment_method")
        setfilterList(filterList.concat(<Paymeth key={"Payment_method"} />));

      if (arg === "Order_Source")
        setfilterList(filterList.concat(<OrderSrc key={"Order_Source"} />));

      if (arg === "Order_Discount")
        setfilterList(
          filterList.concat(<OrderDiscount key={"Order_Discount"} />)
        );

      if (arg === "Nth_Order")
        setfilterList(filterList.concat(<NthOrder key={"Nth_Order"} />));

      if (arg === "Coupon-Used")
        setfilterList(filterList.concat(<CouponCode key={"Coupon-Used"} />));

      if (arg === "Customer_segment")
        setfilterList(
          filterList.concat(<CusSegment key={"Customer_segment"} />)
        );
    }
  };

  var columns = [
    { title: "Customer", field: "cusname" },
    { title: "orderid", field: "orderid" },
    { title: "Status", field: "status" },
    { title: "Date", field: "created" },
    { title: "Time", field: "time" },
    { title: "Amount", field: "amount" },
    { title: "Discount", field: "discount" },
    { title: "Tax", field: "tax" },
    { title: "Ship.Cost", field: "shipcost" },
    { title: "Ship.City", field: "scity" },
    { title: "1st/Nth", field: "foro" },
    { title: "RetAfter", field: "ret_after" },
    { title: "Product", field: "total_prod" },
    { title: "Unit", field: "total_unit" },
    { title: "PayMethod", field: "paymeth" },
  ];

  var [segname, setSegname] = useState("Orders from Past 1month");

  //console.log(Seglist);

  return (
    <Grid container spacing={3}>
      <Grid item md={12} className="top-wrap">
        <div className="notifications">
          <h6>Order : List and segments</h6>
          <div className="notify">
            <NavButton />
          </div>
        </div>
      </Grid>
      <Grid item sm={12}>
        {/* Order filters Dropdown  */}
        {filts && (
          <Multiselect
            isObject={false}
            placeholder=" + Add Filter"
            onRemove={(e) => {
              addfilter(e, 99);
            }}
            onSelect={(e) => {
              addfilter(e, e[e.length - 1]);
            }}
            options={filts}
            selectedValues={[]}
            showCheckbox
          />
        )}

        {Seglist && (
          <Group position="left" style={{ marginTop: "1rem" }}>
            <Button
              style={{ backgroundColor: "rgb(5, 175, 197)" }}
              onClick={() => setOpened(true)}
            >
              Order Segments
            </Button>
          </Group>
        )}

        {/* Order filters  */}
        <form className="dash-card" onSubmit={filterSubmit}>
          {/* <input style={{ display: 'none' }} defaultValue="1" type="number" name="ajax_call" /> */}
          {filterList.length > 0 && (
            <div className="input-filters">
              <strong>Create Segment :</strong>
              <input
                type="text"
                name="order_seg_name"
                size="100%"
                placeholder="Insert segment name...Ex: Loyal Customer"
              />
            </div>
          )}
          {filterList}
          {filterList.length > 0 && <input type="submit" value="Submit" />}
        </form>
      </Grid>

      <Grid item md={12}>
        {/* Order Segment List Modal  */}
        <Modal
          className="dashboard"
          style={{ padding: "0" }}
          overflow="inside"
          overlayColor={
            theme.colorScheme === "dark"
              ? theme.colors.dark[9]
              : theme.colors.gray[2]
          }
          overlayOpacity={0.55}
          overlayBlur={3}
          size="70%"
          opened={opened}
          onClose={() => setOpened(false)}
          title="Order segments"
        >
          {Seglist && (
            <Card className="dash-card">
              <ThemeProvider theme={defaultMaterialTheme}>
                <MaterialTable
                  columns={[
                    {
                      title: "Segment",
                      field: "name",
                      render: (row) => (
                        <div
                          onClick={() => {
                            setSegname(row.name);
                            dispatch(get_selseg_List({ segid: row.id }));
                          }}
                        >
                          {" "}
                          {row.name}
                        </div>
                      ),
                    },
                    { title: "Filter", field: "filter" },
                    { title: "Created", field: "created" },
                  ]}
                  data={Seglist}
                  title=""
                  icons={{
                    Check: Check,
                    DetailPanel: ChevronRight,
                    Export: SaveAlt,
                    Filter: FilterList,
                    FirstPage: FirstPage,
                    LastPage: LastPage,
                    NextPage: ChevronRight,
                    PreviousPage: ChevronLeft,
                    Search: Search,
                    ThirdStateCheck: Remove,
                    Clear: Remove,
                  }}
                  options={{
                    showFirstLastPageButtons: false,
                    search: true,
                    searchFieldAlignment: "right",
                    selection: true,
                    exportButton: true,
                    exportAllData: true,
                  }}
                />
              </ThemeProvider>
            </Card>
          )}
        </Modal>
        <Card className="dash-card">
          {/* Orders List */}
          <ThemeProvider theme={defaultMaterialTheme}>
            <MaterialTable
              columns={[
                {
                  title: "Order",
                  render: (row) => (
                    <div style={{ background: "whitesmoke" }}>
                      <strong>
                        {" "}
                        <a href={"/Orders/" + row.orderid}>
                          {" "}
                          {row.orderid}{" "}
                        </a>{" "}
                      </strong>{" "}
                      {"\n"}
                      <p>
                        {" "}
                        <a href={"/Customers/profile/" + row.chc}>
                          {" "}
                          {row.cusname}{" "}
                        </a>{" "}
                      </p>
                      <span>{row.paymeth}</span>
                    </div>
                  ),
                },
                {
                  title: "1st/Nth",
                  field: "foro",
                  render: (row) => (
                    <div style={{ background: "whitesmoke" }}> {row.foro} </div>
                  ),
                },

                {
                  title: "RetAfter",
                  field: "ret_after",
                  render: (row) => (
                    <div style={{ background: "ghostwhite" }}>
                      {" "}
                      {row.ret_after}{" "}
                    </div>
                  ),
                },

                {
                  title: "Date",
                  field: "created",
                  render: (row) => (
                    <div style={{ background: "whitesmoke" }}>
                      {" "}
                      {row.created}{" "}
                    </div>
                  ),
                },

                {
                  title: "Status",
                  field: "status",
                  render: (row) => (
                    <div style={{ background: "ghostwhite" }}>
                      {" "}
                      {row.status}{" "}
                    </div>
                  ),
                },

                {
                  title: "Amount",
                  field: "amount",
                  render: (row) => (
                    <div style={{ background: "whitesmoke" }}>
                      {" "}
                      {row.amount}{" "}
                    </div>
                  ),
                },

                {
                  title: "Ship.City",
                  field: "scity",
                  render: (row) => (
                    <div style={{ background: "ghostwhite" }}>
                      {" "}
                      {row.scity}{" "}
                    </div>
                  ),
                },

                {
                  title: "Item",
                  field: "total_prod",
                  render: (row) => (
                    <div style={{ background: "whitesmoke" }}>
                      {" "}
                      {row.total_prod}{" "}
                    </div>
                  ),
                },

                {
                  title: "Unit",
                  field: "total_unit",
                  render: (row) => (
                    <div style={{ background: "ghostwhite" }}>
                      {" "}
                      {row.total_unit}{" "}
                    </div>
                  ),
                },
              ]}
              data={OListCloneData}
              title={segname}
              icons={{
                Check: Check,
                DetailPanel: ChevronRight,
                Export: SaveAlt,
                Filter: FilterList,
                FirstPage: FirstPage,
                LastPage: LastPage,
                NextPage: ChevronRight,
                PreviousPage: ChevronLeft,
                Search: Search,
                ThirdStateCheck: Remove,
              }}
              onSelectionChange={(data) => {
                for (const key in data) {
                  //console.log(data[key].cusname);
                }
              }}
              options={{
                showFirstLastPageButtons: false,
                pageSize: 10, // make initial page size
                emptyRowsWhenPaging: false, // To avoid of having empty rows
                pageSizeOptions: [10, 15, 25, 40, 50],
                search: true,
                searchFieldAlignment: "right",
                exportButton: true,
                exportAllData: true,
                cellStyle: {
                  padding: "0px",
                  lineHeight: 2,
                  fontFamily: "Circular-Loom",
                  textAlign: "center",
                  borderBottom: "2px solid rgb(246, 224, 224)",
                },
              }}
              localization={{
                pagination: {
                  labelRowsPerPage: "",
                  showFirstLastPageButtons: false,
                },
              }}
            />
          </ThemeProvider>
        </Card>
      </Grid>
    </Grid>
  );
}

export default OrderList;
