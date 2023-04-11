import { ReactSession } from "react-client-session";
import React, { useState, useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { Modal, Button, Group, useMantineTheme } from "@mantine/core";

import Multiselect from "multiselect-react-dropdown";
import Grid from "@mui/material/Grid";
import MaterialTable from "material-table";
import { ThemeProvider, createTheme } from "@mui/material";

import Search from "@material-ui/icons/Search";
import SaveAlt from "@material-ui/icons/SaveAlt";
import ChevronLeft from "@material-ui/icons/ChevronLeft";
import ChevronRight from "@material-ui/icons/ChevronRight";
import FirstPage from "@material-ui/icons/FirstPage";
import LastPage from "@material-ui/icons/LastPage";
import Check from "@material-ui/icons/Check";
import FilterList from "@material-ui/icons/FilterList";
import CancelIcon from "@mui/icons-material/Cancel";
import DehazeIcon from "@material-ui/icons/Dehaze";

import Spends from "./CusSegmentFilters/Spends";
import Aov_ from "./CusSegmentFilters/Aov_";
import Order_Count_ from "./CusSegmentFilters/Order_Count_";
import Item_Count_ from "./CusSegmentFilters/Item_Count_";
import Joined_ from "./CusSegmentFilters/Joined_";
import First_Ordered_ from "./CusSegmentFilters/First_Ordered_";
import Last_Ordered_ from "./CusSegmentFilters/Last_Ordered_";
import Dbet_ret_ from "./CusSegmentFilters/Dbet_ret_";
import Order_From_Offer_ from "./CusSegmentFilters/Order_From_Offer_";
import Total_Discount_ from "./CusSegmentFilters/Total_Discount_";
import Avg_Discount_ from "./CusSegmentFilters/Avg_Discount_";
import Total_Profit_ from "./CusSegmentFilters/Total_Profit_";
import Coupon_Use_ from "./CusSegmentFilters/Coupon_Use_";
import Customer_Source_ from "./CusSegmentFilters/Customer_Source_";
import Customer_Tag_ from "./CusSegmentFilters/Customer_Tag_";
import Billing_City_ from "./CusSegmentFilters/Billing_City_";
import Billing_Country_ from "./CusSegmentFilters/Billing_Country_";
import Shipping_City_ from "./CusSegmentFilters/Shipping_City_";
import Shipping_Country_ from "./CusSegmentFilters/Shipping_Country_";
import Shipping_Cost_ from "./CusSegmentFilters/Shipping_Cost_";
import Avg_Shipping_Cost_ from "./CusSegmentFilters/Avg_Shipping_Cost_";

import { get_cusList_data } from "../../features/cus/CusListAndSeg";
import { get_cusfilter_List_data } from "../../features/cus/CusListAndSeg";
import { get_cussegs_List } from "../../features/cus/CusListAndSeg";
import { get_selseg_List } from "../../features/cus/CusListAndSeg";

import Typography from "@material-ui/core/Typography";
import NavButton from "../../pages/NavButton";

//import SideNav from '../../pages/SideNav';

function CusListAndSegment() {
  var dispatch = useDispatch();
  const defaultMaterialTheme = createTheme();
  var [segname, setSegname] = useState("Customers from last 6month/s");
  var [opened, setOpened] = useState(false);

  /////
  var is_dispatched = (dispatch_function) => {
    ReactSession.get("get_cusList_data");
    if (ReactSession.get("get_cusList_data")) {
      return true;
    } else {
      ReactSession.set("get_cusList_data", "1");
      return false;
    }
  };
  if (!is_dispatched("get_cusList_data")) {
    dispatch(get_cusList_data({ ajax_call: 2 }));
  }
  var Cuslist = useSelector((state) => state.cusListAndSegs.list);
  var cusListCloneData = [];
  cusListCloneData = structuredClone(Cuslist);

  var is_dispatched1 = (dispatch_function) => {
    ReactSession.get("get_cussegs_List");
    if (ReactSession.get("get_cussegs_List")) {
      return true;
    } else {
      ReactSession.set("get_cussegs_List", "1");
      return false;
    }
  };
  if (!is_dispatched1("get_cussegs_List")) {
    dispatch(get_cussegs_List({ ajax_call: 2 }));
  }

  useEffect(() => {
    dispatch(get_cussegs_List({ ajax_call: 2 }));
  }, []);

  var Seglist = useSelector((state) => state.cusListAndSegs.segs);
  var Seglist1 = Seglist;
  var Seglist = [];
  Seglist = structuredClone(Seglist1);

  var filterSubmit = (event) => {
    event.preventDefault();
    var fdata = new FormData(event.target);
    var data = Object.fromEntries(fdata.entries());
    setSegname("");
    dispatch(get_cusfilter_List_data(data));
    dispatch(get_cussegs_List({ ajax_call: 2 }));
  };

  var [segfils, setfils] = useState([
    "Spend",
    "Aov",
    "Order_Count",
    "Item_Count",
    "Joined",
    "First_Ordered",
    "Last_Ordered",
    "Average_Day_Between_order",
    "Order_From_Offer",
    "Total_Discount",
    "Avg_Discount",
    "Total_Profit",
    "Coupon_Use",
    "Customer_Source",
    "Customer_Tag",
    "Billing_City",
    "Billing_Country",
    "Shipping_City",
    "Shipping_Country",
    "Shipping_Cost",
    "Avg_Shipping_Cost",
  ]);

  var [filterList, setfilterList] = useState([]);

  var addfilter = (e, arg) => {
    // cus-Filter De-selested from Dropdown
    if (arg === 99) {
      // Get previous state
      var prev_state = JSON.parse(localStorage.getItem("filts"));

      // Get Removed state
      var removed_filter = prev_state.filter((x) => !e.includes(x));
      var remfil = removed_filter[0];

      var newfils = filterList.filter((item) => item.key !== remfil);
      setfilterList(newfils);

      // Update The latest selected's as previous state in local-Storage
      localStorage.setItem("filts", JSON.stringify(e));
    }

    // cus-Filter Selected from Dropdown
    if (arg !== 99) {
      localStorage.setItem("filts", JSON.stringify(e));

      if (arg === "Spend")
        setfilterList(filterList.concat(<Spends key={"Spend"} />));

      if (arg === "Aov") setfilterList(filterList.concat(<Aov_ key={"Aov"} />));

      if (arg === "Order_Count")
        setfilterList(filterList.concat(<Order_Count_ key={"Order_Count"} />));

      if (arg === "Item_Count")
        setfilterList(filterList.concat(<Item_Count_ key={"Item_Count"} />));

      if (arg === "Joined")
        setfilterList(filterList.concat(<Joined_ key={"Joined"} />));

      if (arg === "First_Ordered")
        setfilterList(
          filterList.concat(<First_Ordered_ key={"First_Ordered"} />)
        );

      if (arg === "Last_Ordered")
        setfilterList(
          filterList.concat(<Last_Ordered_ key={"Last_Ordered"} />)
        );

      if (arg === "Average_Day_Between_order")
        setfilterList(
          filterList.concat(<Dbet_ret_ key={"Average_Day_Between_order"} />)
        );

      if (arg === "Order_From_Offer")
        setfilterList(
          filterList.concat(<Order_From_Offer_ key={"Order_From_Offer"} />)
        );

      if (arg === "Total_Profit")
        setfilterList(
          filterList.concat(<Total_Profit_ key={"Total_Profit"} />)
        );

      if (arg === "Total_Discount")
        setfilterList(
          filterList.concat(<Total_Discount_ key={"Total_Discount"} />)
        );

      if (arg === "Coupon_Use")
        setfilterList(filterList.concat(<Coupon_Use_ key={"Coupon_Use"} />));

      if (arg === "Billing_City")
        setfilterList(
          filterList.concat(<Billing_City_ key={"Billing_City"} />)
        );

      if (arg === "Billing_Country")
        setfilterList(
          filterList.concat(<Billing_Country_ key={"Billing_Country"} />)
        );

      if (arg === "Shipping_City")
        setfilterList(
          filterList.concat(<Shipping_City_ key={"Shipping_City"} />)
        );

      if (arg === "Shipping_Country")
        setfilterList(
          filterList.concat(<Shipping_Country_ key={"Shipping_Country"} />)
        );

      if (arg === "Shipping_Cost")
        setfilterList(
          filterList.concat(<Shipping_Cost_ key={"Shipping_Cost"} />)
        );

      if (arg === "Customer_Source")
        setfilterList(
          filterList.concat(<Customer_Source_ key={"Customer_Source"} />)
        );

      if (arg === "Customer_Tag")
        setfilterList(
          filterList.concat(<Customer_Tag_ key={"Customer_Tag"} />)
        );

      if (arg === "Avg_Shipping_Cost")
        setfilterList(
          filterList.concat(<Avg_Shipping_Cost_ key={"Avg_Shipping_Cost"} />)
        );
      if (arg === "Avg_Discount")
        setfilterList(
          filterList.concat(<Avg_Discount_ key={"Avg_Discount"} />)
        );
    }
  };

  const theme = useMantineTheme();
  var columns = [
    {
      title: "Customer",
      field: "name",
      render: (row) => (
        <div>
          <a href={"/Customers/profile/" + row.chc}> {row.name}</a>
        </div>
      ),
    },
    {
      title: "Joined",
      field: "reg",
      render: (row) => (
        <div style={{ background: "whitesmoke" }}> {row.reg} </div>
      ),
    },
    {
      title: "FirstOrder",
      field: "fod",
      render: (row) => (
        <div style={{ background: "ghostwhite" }}> {row.fod} </div>
      ),
    },
    {
      title: "LastOrder",
      field: "lod",
      render: (row) => (
        <div style={{ background: "whitesmoke" }}> {row.lod} </div>
      ),
    },
    {
      title: "Order",
      field: "total_order",
      render: (row) => (
        <div style={{ background: "ghostwhite" }}> {row.total_order} </div>
      ),
    },
    {
      title: "Av.DayGap",
      field: "adbo",
      render: (row) => (
        <div style={{ background: "whitesmoke" }}> {row.adbo} </div>
      ),
    },
    {
      title: "Spent",
      field: "total_spent",
      render: (row) => (
        <div style={{ background: "ghostwhite" }}> {row.total_spent} </div>
      ),
    },
    {
      title: "Discount",
      field: "total_discount",
      render: (row) => (
        <div style={{ background: "whitesmoke" }}> {row.total_discount} </div>
      ),
    },
    {
      title: "AOV",
      field: "aov",
      render: (row) => (
        <div style={{ background: "ghostwhite" }}> {row.aov} </div>
      ),
    },
    {
      title: "Profit",
      field: "profit",
      render: (row) => (
        <div style={{ background: "whitesmoke" }}> {row.profit} </div>
      ),
    },
  ];

  return (
    <>
      <Grid container spacing={3}>
        <Grid item xs={12} className="top-wrap">
          <div className="notifications">
            <h6>Customer List and Segments</h6>
            <div className="notify">
              <NavButton />
            </div>
          </div>
        </Grid>
        <Grid item xs={12}>
          <Modal
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
            title="Customer segments"
          >
            {Seglist && (
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
                    ResetSearch: CancelIcon,
                    Clear: CancelIcon,
                  }}
                  localization={{
                    pagination: {
                      labelRowsPerPage: "",
                      showFirstLastPageButtons: false,
                    },
                  }}
                />
              </ThemeProvider>
            )}
          </Modal>

          {/* Customer filters Dropdown  */}
          <Grid>
            {segfils && segfils.length > 0 && (
              <Multiselect
                isObject={false}
                style={{ background: "#fff" }}
                placeholder=" + Add Filter"
                onRemove={(e) => {
                  addfilter(e, 99);
                }}
                onSelect={(e) => {
                  addfilter(e, e[e.length - 1]);
                }}
                options={segfils}
                selectedValues={[]}
                showCheckbox
              />
            )}

            {Seglist && (
              <Group position="left">
                <Button onClick={() => setOpened(true)}>
                  Customer Segments
                </Button>
              </Group>
            )}
          </Grid>

          {/* Customer filters  */}

          <form className="dash-card" onSubmit={filterSubmit}>
            {filterList.length > 0 && (
              <div className="input-filters">
                <strong>Create Segment :</strong>
                <input
                  type="text"
                  name="segname"
                  size="45"
                  value={segname}
                  onChange={(e) => setSegname(e.target.value)}
                  placeholder="Insert segment name...Ex: Loyal Customer"
                />
              </div>
            )}
            {filterList}
            {filterList.length > 0 && (
              <input
                style={{ marginTop: ".5rem" }}
                type="submit"
                value="Submit"
              />
            )}
          </form>
          {/* Customer List */}

          <Grid>
            {cusListCloneData && cusListCloneData.length > 0 && (
              <ThemeProvider theme={defaultMaterialTheme}>
                <MaterialTable
                  columns={columns}
                  data={cusListCloneData}
                  // title={segname}
                  title="strong"
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
                    ResetSearch: CancelIcon,
                    Clear: CancelIcon,
                  }}
                  options={{
                    pageSize: 10, // make initial page size
                    emptyRowsWhenPaging: false, // To avoid of having empty rows
                    pageSizeOptions: [10, 15, 25, 40, 50],
                    search: true,
                    searchFieldAlignment: "right",
                    exportButton: true,
                    exportAllData: true,
                    cellStyle: {
                      padding: "4px",
                      lineHeight: 2,
                      fontFamily: "Circular-Loom",
                      textAlign: "center",
                      borderBottom: "2px solid rgb(246, 224, 224)",
                    },
                    headerStyle: {
                      background: "mediumseagreen",
                      fontSize: "17px",
                      color: "white",
                      padding: "2px",
                      height: "40px",
                    },
                    // rowStyle: {
                    //     backgroundColor: '#EEE',
                    // }
                    //rowStyle: (data, index) => index % 2 === 0 ? { background: "ghostwhite" } : {background:'white'},
                  }}
                  localization={{
                    pagination: {
                      labelRowsPerPage: "",
                      showFirstLastPageButtons: false,
                    },
                  }}
                />
              </ThemeProvider>
            )}
          </Grid>
        </Grid>
      </Grid>
    </>
  );
}

export default CusListAndSegment;
