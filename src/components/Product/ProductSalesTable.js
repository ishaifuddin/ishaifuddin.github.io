import React, { useEffect, useState } from "react";
import { useSelector, useDispatch } from "react-redux";

import { format } from "date-fns";
import startOfMonth from "date-fns/startOfMonth";
import endOfMonth from "date-fns/endOfMonth";
import startOfYear from "date-fns/startOfYear";

import { addDays, subDays, getDate } from "date-fns";
import moment from "moment";

import { DateRangePicker } from "rsuite";
import "rsuite/dist/rsuite.css";

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

import { get_product_and_catagory_sales_object } from "../../features/product/ProductSalesTable";
import { get_products_sales_from_selected_catagory } from "../../features/product/ProductSalesTable";
import { Card } from "react-bootstrap";

function ProductSalesTable() {
  const defaultMaterialTheme = createTheme();
  const dispatch = useDispatch();
  var Product_sales_table = useSelector(
    (state) => state.Product_and_Catagory_sales
  );
  //console.log(Product_sales_table);

  useEffect(() => {
    if (
      !(
        Product_sales_table.sales_table_product_object !== undefined &&
        Product_sales_table.sales_table_product_object !== null
      )
    ) {
      dispatch(get_product_and_catagory_sales_object({ ajax_call: 2 }));
    }
  }, [dispatch]);

  const [daterange, setdrange] = useState([
    new Date(moment().startOf("month")),
    new Date(moment().endOf("month")),
  ]);
  const [daterange1, setdrange1] = useState([
    startOfMonth(subDays(new Date(), getDate(new Date()))),
    endOfMonth(subDays(new Date(), getDate(new Date()))),
  ]);

  const dateSubmit = (event) => {
    event.preventDefault();
    dispatch(
      get_product_and_catagory_sales_object({
        from: format(daterange[0], "yyyy-MM-dd"),
        to: format(daterange[1], "yyyy-MM-dd"),
        from1: format(daterange1[0], "yyyy-MM-dd"),
        to1: format(daterange1[1], "yyyy-MM-dd"),
        ajax_call: 1,
      })
    );
  };

  // var Product_sales_table = useSelector((state) => state.Product_and_Catagory_sales);
  // var cat_sales_table = Product_sales_table.sales_table_product_catagory_object;
  // var cat_table = [];
  // if (cat_sales_table && cat_sales_table.length > 0) {
  //     cat_table = structuredClone(cat_sales_table);
  // }

  // var prod_sales_table = Product_sales_table.sales_table_product_object;

  //var prod_table = [];
  // if (prod_sales_table && prod_sales_table.length > 0) {
  //     prod_table = structuredClone(prod_sales_table);
  // }

  /////////////////// DUMMY DATA //////////////////////////
  /////////////////// DUMMY DATA //////////////////////////
  /////////////////// DUMMY DATA //////////////////////////
  /////////////////// DUMMY DATA //////////////////////////

  var [cat_table, setTmnew] = useState([
    {
      catagory: "a",
      rev: "1112",
      rev_change: "11%",
      new_rev: "725",
      new_rev_change: "5%",
      ret_rev: "422",
      unit: "77",
      unit_change: "5%",
      order: "77",
      order_change: "3%",
      cus: "66",
      cus_change: "2%",
      new_cus: "43",
      new_cus_change: "23.99%",
      ret_cus: "32",
      ret_cus_change: "4%",
      profit: "768",
      profit_change: "5%",
    },
    {
      catagory: "b",
      rev: "1112",
      rev_change: "11%",
      new_rev: "725",
      new_rev_change: "5%",
      ret_rev: "422",
      unit: "77",
      unit_change: "5%",
      order: "77",
      order_change: "3%",
      cus: "66",
      cus_change: "2%",
      new_cus: "43",
      new_cus_change: "23.99%",
      ret_cus: "32",
      ret_cus_change: "4%",
      profit: "768",
      profit_change: "5%",
    },
    {
      catagory: "c",
      rev: "1112",
      rev_change: "11%",
      new_rev: "725",
      new_rev_change: "5%",
      ret_rev: "422",
      unit: "77",
      unit_change: "5%",
      order: "77",
      order_change: "3%",
      cus: "66",
      cus_change: "2%",
      new_cus: "43",
      new_cus_change: "23.99%",
      ret_cus: "32",
      ret_cus_change: "4%",
      profit: "768",
      profit_change: "5%",
    },
    {
      catagory: "d",
      rev: "1112",
      rev_change: "11%",
      new_rev: "725",
      new_rev_change: "5%",
      ret_rev: "422",
      unit: "77",
      unit_change: "5%",
      order: "77",
      order_change: "3%",
      cus: "66",
      cus_change: "2%",
      new_cus: "43",
      new_cus_change: "23.99%",
      ret_cus: "32",
      ret_cus_change: "4%",
      profit: "768",
      profit_change: "5%",
    },
    {
      catagory: "e",
      rev: "1112",
      rev_change: "11%",
      new_rev: "725",
      new_rev_change: "5%",
      ret_rev: "422",
      unit: "77",
      unit_change: "5%",
      order: "77",
      order_change: "3%",
      cus: "66",
      cus_change: "2%",
      new_cus: "43",
      new_cus_change: "23.99%",
      ret_cus: "32",
      ret_cus_change: "4%",
      profit: "768",
      profit_change: "5%",
    },
    {
      catagory: "f",
      rev: "1112",
      rev_change: "11%",
      new_rev: "725",
      new_rev_change: "5%",
      ret_rev: "422",
      unit: "77",
      unit_change: "5%",
      order: "77",
      order_change: "3%",
      cus: "66",
      cus_change: "2%",
      new_cus: "43",
      new_cus_change: "23.99%",
      ret_cus: "32",
      ret_cus_change: "4%",
      profit: "768",
      profit_change: "5%",
    },
    {
      catagory: "g",
      rev: "1112",
      rev_change: "11%",
      new_rev: "725",
      new_rev_change: "5%",
      ret_rev: "422",
      unit: "77",
      unit_change: "5%",
      order: "77",
      order_change: "3%",
      cus: "66",
      cus_change: "2%",
      new_cus: "43",
      new_cus_change: "23.99%",
      ret_cus: "32",
      ret_cus_change: "4%",
      profit: "768",
      profit_change: "5%",
    },
    {
      catagory: "h",
      rev: "1112",
      rev_change: "11%",
      new_rev: "725",
      new_rev_change: "5%",
      ret_rev: "422",
      unit: "77",
      unit_change: "5%",
      order: "77",
      order_change: "3%",
      cus: "66",
      cus_change: "2%",
      new_cus: "43",
      new_cus_change: "23.99%",
      ret_cus: "32",
      ret_cus_change: "4%",
      profit: "768",
      profit_change: "5%",
    },
    {
      catagory: "i",
      rev: "1112",
      rev_change: "11%",
      new_rev: "725",
      new_rev_change: "5%",
      ret_rev: "422",
      unit: "77",
      unit_change: "5%",
      order: "77",
      order_change: "3%",
      cus: "66",
      cus_change: "2%",
      new_cus: "43",
      new_cus_change: "23.99%",
      ret_cus: "32",
      ret_cus_change: "4%",
      profit: "768",
      profit_change: "5%",
    },
    {
      catagory: "j",
      rev: "1112",
      rev_change: "11%",
      new_rev: "725",
      new_rev_change: "5%",
      ret_rev: "422",
      unit: "77",
      unit_change: "5%",
      order: "77",
      order_change: "3%",
      cus: "66",
      cus_change: "2%",
      new_cus: "43",
      new_cus_change: "23.99%",
      ret_cus: "32",
      ret_cus_change: "4%",
      profit: "768",
      profit_change: "5%",
    },
    {
      catagory: "k",
      rev: "1112",
      rev_change: "11%",
      new_rev: "725",
      new_rev_change: "5%",
      ret_rev: "422",
      unit: "77",
      unit_change: "5%",
      order: "77",
      order_change: "3%",
      cus: "66",
      cus_change: "2%",
      new_cus: "43",
      new_cus_change: "23.99%",
      ret_cus: "32",
      ret_cus_change: "4%",
      profit: "768",
      profit_change: "5%",
    },
    {
      catagory: "l",
      rev: "1112",
      rev_change: "11%",
      new_rev: "725",
      new_rev_change: "5%",
      ret_rev: "422",
      unit: "77",
      unit_change: "5%",
      order: "77",
      order_change: "3%",
      cus: "66",
      cus_change: "2%",
      new_cus: "43",
      new_cus_change: "23.99%",
      ret_cus: "32",
      ret_cus_change: "4%",
      profit: "768",
      profit_change: "5%",
    },
    {
      catagory: "m",
      rev: "1112",
      rev_change: "11%",
      new_rev: "725",
      new_rev_change: "5%",
      ret_rev: "422",
      unit: "77",
      unit_change: "5%",
      order: "77",
      order_change: "3%",
      cus: "66",
      cus_change: "2%",
      new_cus: "43",
      new_cus_change: "23.99%",
      ret_cus: "32",
      ret_cus_change: "4%",
      profit: "768",
      profit_change: "5%",
    },
    {
      catagory: "n",
      rev: "1112",
      rev_change: "11%",
      new_rev: "725",
      new_rev_change: "5%",
      ret_rev: "422",
      unit: "77",
      unit_change: "5%",
      order: "77",
      order_change: "3%",
      cus: "66",
      cus_change: "2%",
      new_cus: "43",
      new_cus_change: "23.99%",
      ret_cus: "32",
      ret_cus_change: "4%",
      profit: "768",
      profit_change: "5%",
    },
    {
      catagory: "o",
      rev: "1112",
      rev_change: "11%",
      new_rev: "725",
      new_rev_change: "5%",
      ret_rev: "422",
      unit: "77",
      unit_change: "5%",
      order: "77",
      order_change: "3%",
      cus: "66",
      cus_change: "2%",
      new_cus: "43",
      new_cus_change: "23.99%",
      ret_cus: "32",
      ret_cus_change: "4%",
      profit: "768",
      profit_change: "5%",
    },
    {
      catagory: "p",
      rev: "1112",
      rev_change: "11%",
      new_rev: "725",
      new_rev_change: "5%",
      ret_rev: "422",
      unit: "77",
      unit_change: "5%",
      order: "77",
      order_change: "3%",
      cus: "66",
      cus_change: "2%",
      new_cus: "43",
      new_cus_change: "23.99%",
      ret_cus: "32",
      ret_cus_change: "4%",
      profit: "768",
      profit_change: "5%",
    },
    {
      catagory: "q",
      rev: "1112",
      rev_change: "11%",
      new_rev: "725",
      new_rev_change: "5%",
      ret_rev: "422",
      unit: "77",
      unit_change: "5%",
      order: "77",
      order_change: "3%",
      cus: "66",
      cus_change: "2%",
      new_cus: "43",
      new_cus_change: "23.99%",
      ret_cus: "32",
      ret_cus_change: "4%",
      profit: "768",
      profit_change: "5%",
    },
    {
      catagory: "r",
      rev: "1112",
      rev_change: "11%",
      new_rev: "725",
      new_rev_change: "5%",
      ret_rev: "422",
      unit: "77",
      unit_change: "5%",
      order: "77",
      order_change: "3%",
      cus: "66",
      cus_change: "2%",
      new_cus: "43",
      new_cus_change: "23.99%",
      ret_cus: "32",
      ret_cus_change: "4%",
      profit: "768",
      profit_change: "5%",
    },
    {
      catagory: "s",
      rev: "1112",
      rev_change: "11%",
      new_rev: "725",
      new_rev_change: "5%",
      ret_rev: "422",
      unit: "77",
      unit_change: "5%",
      order: "77",
      order_change: "3%",
      cus: "66",
      cus_change: "2%",
      new_cus: "43",
      new_cus_change: "23.99%",
      ret_cus: "32",
      ret_cus_change: "4%",
      profit: "768",
      profit_change: "5%",
    },
    {
      catagory: "t",
      rev: "1112",
      rev_change: "11%",
      new_rev: "725",
      new_rev_change: "5%",
      ret_rev: "422",
      unit: "77",
      unit_change: "5%",
      order: "77",
      order_change: "3%",
      cus: "66",
      cus_change: "2%",
      new_cus: "43",
      new_cus_change: "23.99%",
      ret_cus: "32",
      ret_cus_change: "4%",
      profit: "768",
      profit_change: "5%",
    },
    {
      catagory: "u",
      rev: "1112",
      rev_change: "11%",
      new_rev: "725",
      new_rev_change: "5%",
      ret_rev: "422",
      unit: "77",
      unit_change: "5%",
      order: "77",
      order_change: "3%",
      cus: "66",
      cus_change: "2%",
      new_cus: "43",
      new_cus_change: "23.99%",
      ret_cus: "32",
      ret_cus_change: "4%",
      profit: "768",
      profit_change: "5%",
    },
    {
      catagory: "v",
      rev: "1112",
      rev_change: "11%",
      new_rev: "725",
      new_rev_change: "5%",
      ret_rev: "422",
      unit: "77",
      unit_change: "5%",
      order: "77",
      order_change: "3%",
      cus: "66",
      cus_change: "2%",
      new_cus: "43",
      new_cus_change: "23.99%",
      ret_cus: "32",
      ret_cus_change: "4%",
      profit: "768",
      profit_change: "5%",
    },
    {
      catagory: "w",
      rev: "1112",
      rev_change: "11%",
      new_rev: "725",
      new_rev_change: "5%",
      ret_rev: "422",
      unit: "77",
      unit_change: "5%",
      order: "77",
      order_change: "3%",
      cus: "66",
      cus_change: "2%",
      new_cus: "43",
      new_cus_change: "23.99%",
      ret_cus: "32",
      ret_cus_change: "4%",
      profit: "768",
      profit_change: "5%",
    },
    {
      catagory: "x",
      rev: "1112",
      rev_change: "11%",
      new_rev: "725",
      new_rev_change: "5%",
      ret_rev: "422",
      unit: "77",
      unit_change: "5%",
      order: "77",
      order_change: "3%",
      cus: "66",
      cus_change: "2%",
      new_cus: "43",
      new_cus_change: "23.99%",
      ret_cus: "32",
      ret_cus_change: "4%",
      profit: "768",
      profit_change: "5%",
    },
    {
      catagory: "y",
      rev: "1112",
      rev_change: "11%",
      new_rev: "725",
      new_rev_change: "5%",
      ret_rev: "422",
      unit: "77",
      unit_change: "5%",
      order: "77",
      order_change: "3%",
      cus: "66",
      cus_change: "2%",
      new_cus: "43",
      new_cus_change: "23.99%",
      ret_cus: "32",
      ret_cus_change: "4%",
      profit: "768",
      profit_change: "5%",
    },
    {
      catagory: "z",
      rev: "1112",
      rev_change: "11%",
      new_rev: "725",
      new_rev_change: "5%",
      ret_rev: "422",
      unit: "77",
      unit_change: "5%",
      order: "77",
      order_change: "3%",
      cus: "66",
      cus_change: "2%",
      new_cus: "43",
      new_cus_change: "23.99%",
      ret_cus: "32",
      ret_cus_change: "4%",
      profit: "768",
      profit_change: "5%",
    },
    {
      catagory: "a1",
      rev: "1112",
      rev_change: "11%",
      new_rev: "725",
      new_rev_change: "5%",
      ret_rev: "422",
      unit: "77",
      unit_change: "5%",
      order: "77",
      order_change: "3%",
      cus: "66",
      cus_change: "2%",
      new_cus: "43",
      new_cus_change: "23.99%",
      ret_cus: "32",
      ret_cus_change: "4%",
      profit: "768",
      profit_change: "5%",
    },
    {
      catagory: "b1",
      rev: "1112",
      rev_change: "11%",
      new_rev: "725",
      new_rev_change: "5%",
      ret_rev: "422",
      unit: "77",
      unit_change: "5%",
      order: "77",
      order_change: "3%",
      cus: "66",
      cus_change: "2%",
      new_cus: "43",
      new_cus_change: "23.99%",
      ret_cus: "32",
      ret_cus_change: "4%",
      profit: "768",
      profit_change: "5%",
    },
    {
      catagory: "c1",
      rev: "1112",
      rev_change: "11%",
      new_rev: "725",
      new_rev_change: "5%",
      ret_rev: "422",
      unit: "77",
      unit_change: "5%",
      order: "77",
      order_change: "3%",
      cus: "66",
      cus_change: "2%",
      new_cus: "43",
      new_cus_change: "23.99%",
      ret_cus: "32",
      ret_cus_change: "4%",
      profit: "768",
      profit_change: "5%",
    },
    {
      catagory: "d1",
      rev: "1112",
      rev_change: "11%",
      new_rev: "725",
      new_rev_change: "5%",
      ret_rev: "422",
      unit: "77",
      unit_change: "5%",
      order: "77",
      order_change: "3%",
      cus: "66",
      cus_change: "2%",
      new_cus: "43",
      new_cus_change: "23.99%",
      ret_cus: "32",
      ret_cus_change: "4%",
      profit: "768",
      profit_change: "5%",
    },
    {
      catagory: "e1",
      rev: "1112",
      rev_change: "11%",
      new_rev: "725",
      new_rev_change: "5%",
      ret_rev: "422",
      unit: "77",
      unit_change: "5%",
      order: "77",
      order_change: "3%",
      cus: "66",
      cus_change: "2%",
      new_cus: "43",
      new_cus_change: "23.99%",
      ret_cus: "32",
      ret_cus_change: "4%",
      profit: "768",
      profit_change: "5%",
    },
  ]);

  var [prod_table, setTmnew] = useState([
    {
      product: "a",
      rev: "1112",
      rev_change: "11%",
      new_rev: "725",
      new_rev_change: "5%",
      ret_rev: "422",
      unit: "77",
      unit_change: "5%",
      order: "77",
      order_change: "3%",
      cus: "66",
      cus_change: "2%",
      new_cus: "43",
      new_cus_change: "23.99%",
      ret_cus: "32",
      ret_cus_change: "4%",
      profit: "768",
      profit_change: "5%",
    },
    {
      product: "b",
      rev: "1112",
      rev_change: "11%",
      new_rev: "725",
      new_rev_change: "5%",
      ret_rev: "422",
      unit: "77",
      unit_change: "5%",
      order: "77",
      order_change: "3%",
      cus: "66",
      cus_change: "2%",
      new_cus: "43",
      new_cus_change: "23.99%",
      ret_cus: "32",
      ret_cus_change: "4%",
      profit: "768",
      profit_change: "5%",
    },
    {
      product: "c",
      rev: "1112",
      rev_change: "11%",
      new_rev: "725",
      new_rev_change: "5%",
      ret_rev: "422",
      unit: "77",
      unit_change: "5%",
      order: "77",
      order_change: "3%",
      cus: "66",
      cus_change: "2%",
      new_cus: "43",
      new_cus_change: "23.99%",
      ret_cus: "32",
      ret_cus_change: "4%",
      profit: "768",
      profit_change: "5%",
    },
    {
      product: "d",
      rev: "1112",
      rev_change: "11%",
      new_rev: "725",
      new_rev_change: "5%",
      ret_rev: "422",
      unit: "77",
      unit_change: "5%",
      order: "77",
      order_change: "3%",
      cus: "66",
      cus_change: "2%",
      new_cus: "43",
      new_cus_change: "23.99%",
      ret_cus: "32",
      ret_cus_change: "4%",
      profit: "768",
      profit_change: "5%",
    },
    {
      product: "e",
      rev: "1112",
      rev_change: "11%",
      new_rev: "725",
      new_rev_change: "5%",
      ret_rev: "422",
      unit: "77",
      unit_change: "5%",
      order: "77",
      order_change: "3%",
      cus: "66",
      cus_change: "2%",
      new_cus: "43",
      new_cus_change: "23.99%",
      ret_cus: "32",
      ret_cus_change: "4%",
      profit: "768",
      profit_change: "5%",
    },
    {
      product: "a",
      rev: "1112",
      rev_change: "11%",
      new_rev: "725",
      new_rev_change: "5%",
      ret_rev: "422",
      unit: "77",
      unit_change: "5%",
      order: "77",
      order_change: "3%",
      cus: "66",
      cus_change: "2%",
      new_cus: "43",
      new_cus_change: "23.99%",
      ret_cus: "32",
      ret_cus_change: "4%",
      profit: "768",
      profit_change: "5%",
    },
    {
      product: "b",
      rev: "1112",
      rev_change: "11%",
      new_rev: "725",
      new_rev_change: "5%",
      ret_rev: "422",
      unit: "77",
      unit_change: "5%",
      order: "77",
      order_change: "3%",
      cus: "66",
      cus_change: "2%",
      new_cus: "43",
      new_cus_change: "23.99%",
      ret_cus: "32",
      ret_cus_change: "4%",
      profit: "768",
      profit_change: "5%",
    },
    {
      product: "c",
      rev: "1112",
      rev_change: "11%",
      new_rev: "725",
      new_rev_change: "5%",
      ret_rev: "422",
      unit: "77",
      unit_change: "5%",
      order: "77",
      order_change: "3%",
      cus: "66",
      cus_change: "2%",
      new_cus: "43",
      new_cus_change: "23.99%",
      ret_cus: "32",
      ret_cus_change: "4%",
      profit: "768",
      profit_change: "5%",
    },
    {
      product: "d",
      rev: "1112",
      rev_change: "11%",
      new_rev: "725",
      new_rev_change: "5%",
      ret_rev: "422",
      unit: "77",
      unit_change: "5%",
      order: "77",
      order_change: "3%",
      cus: "66",
      cus_change: "2%",
      new_cus: "43",
      new_cus_change: "23.99%",
      ret_cus: "32",
      ret_cus_change: "4%",
      profit: "768",
      profit_change: "5%",
    },
    {
      product: "e",
      rev: "1112",
      rev_change: "11%",
      new_rev: "725",
      new_rev_change: "5%",
      ret_rev: "422",
      unit: "77",
      unit_change: "5%",
      order: "77",
      order_change: "3%",
      cus: "66",
      cus_change: "2%",
      new_cus: "43",
      new_cus_change: "23.99%",
      ret_cus: "32",
      ret_cus_change: "4%",
      profit: "768",
      profit_change: "5%",
    },
    {
      product: "a",
      rev: "1112",
      rev_change: "11%",
      new_rev: "725",
      new_rev_change: "5%",
      ret_rev: "422",
      unit: "77",
      unit_change: "5%",
      order: "77",
      order_change: "3%",
      cus: "66",
      cus_change: "2%",
      new_cus: "43",
      new_cus_change: "23.99%",
      ret_cus: "32",
      ret_cus_change: "4%",
      profit: "768",
      profit_change: "5%",
    },
    {
      product: "b",
      rev: "1112",
      rev_change: "11%",
      new_rev: "725",
      new_rev_change: "5%",
      ret_rev: "422",
      unit: "77",
      unit_change: "5%",
      order: "77",
      order_change: "3%",
      cus: "66",
      cus_change: "2%",
      new_cus: "43",
      new_cus_change: "23.99%",
      ret_cus: "32",
      ret_cus_change: "4%",
      profit: "768",
      profit_change: "5%",
    },
    {
      product: "c",
      rev: "1112",
      rev_change: "11%",
      new_rev: "725",
      new_rev_change: "5%",
      ret_rev: "422",
      unit: "77",
      unit_change: "5%",
      order: "77",
      order_change: "3%",
      cus: "66",
      cus_change: "2%",
      new_cus: "43",
      new_cus_change: "23.99%",
      ret_cus: "32",
      ret_cus_change: "4%",
      profit: "768",
      profit_change: "5%",
    },
    {
      product: "d",
      rev: "1112",
      rev_change: "11%",
      new_rev: "725",
      new_rev_change: "5%",
      ret_rev: "422",
      unit: "77",
      unit_change: "5%",
      order: "77",
      order_change: "3%",
      cus: "66",
      cus_change: "2%",
      new_cus: "43",
      new_cus_change: "23.99%",
      ret_cus: "32",
      ret_cus_change: "4%",
      profit: "768",
      profit_change: "5%",
    },
    {
      product: "e",
      rev: "1112",
      rev_change: "11%",
      new_rev: "725",
      new_rev_change: "5%",
      ret_rev: "422",
      unit: "77",
      unit_change: "5%",
      order: "77",
      order_change: "3%",
      cus: "66",
      cus_change: "2%",
      new_cus: "43",
      new_cus_change: "23.99%",
      ret_cus: "32",
      ret_cus_change: "4%",
      profit: "768",
      profit_change: "5%",
    },
    {
      product: "a",
      rev: "1112",
      rev_change: "11%",
      new_rev: "725",
      new_rev_change: "5%",
      ret_rev: "422",
      unit: "77",
      unit_change: "5%",
      order: "77",
      order_change: "3%",
      cus: "66",
      cus_change: "2%",
      new_cus: "43",
      new_cus_change: "23.99%",
      ret_cus: "32",
      ret_cus_change: "4%",
      profit: "768",
      profit_change: "5%",
    },
    {
      product: "b",
      rev: "1112",
      rev_change: "11%",
      new_rev: "725",
      new_rev_change: "5%",
      ret_rev: "422",
      unit: "77",
      unit_change: "5%",
      order: "77",
      order_change: "3%",
      cus: "66",
      cus_change: "2%",
      new_cus: "43",
      new_cus_change: "23.99%",
      ret_cus: "32",
      ret_cus_change: "4%",
      profit: "768",
      profit_change: "5%",
    },
    {
      product: "c",
      rev: "1112",
      rev_change: "11%",
      new_rev: "725",
      new_rev_change: "5%",
      ret_rev: "422",
      unit: "77",
      unit_change: "5%",
      order: "77",
      order_change: "3%",
      cus: "66",
      cus_change: "2%",
      new_cus: "43",
      new_cus_change: "23.99%",
      ret_cus: "32",
      ret_cus_change: "4%",
      profit: "768",
      profit_change: "5%",
    },
    {
      product: "d",
      rev: "1112",
      rev_change: "11%",
      new_rev: "725",
      new_rev_change: "5%",
      ret_rev: "422",
      unit: "77",
      unit_change: "5%",
      order: "77",
      order_change: "3%",
      cus: "66",
      cus_change: "2%",
      new_cus: "43",
      new_cus_change: "23.99%",
      ret_cus: "32",
      ret_cus_change: "4%",
      profit: "768",
      profit_change: "5%",
    },
    {
      product: "e",
      rev: "1112",
      rev_change: "11%",
      new_rev: "725",
      new_rev_change: "5%",
      ret_rev: "422",
      unit: "77",
      unit_change: "5%",
      order: "77",
      order_change: "3%",
      cus: "66",
      cus_change: "2%",
      new_cus: "43",
      new_cus_change: "23.99%",
      ret_cus: "32",
      ret_cus_change: "4%",
      profit: "768",
      profit_change: "5%",
    },
    {
      product: "a",
      rev: "1112",
      rev_change: "11%",
      new_rev: "725",
      new_rev_change: "5%",
      ret_rev: "422",
      unit: "77",
      unit_change: "5%",
      order: "77",
      order_change: "3%",
      cus: "66",
      cus_change: "2%",
      new_cus: "43",
      new_cus_change: "23.99%",
      ret_cus: "32",
      ret_cus_change: "4%",
      profit: "768",
      profit_change: "5%",
    },
    {
      product: "b",
      rev: "1112",
      rev_change: "11%",
      new_rev: "725",
      new_rev_change: "5%",
      ret_rev: "422",
      unit: "77",
      unit_change: "5%",
      order: "77",
      order_change: "3%",
      cus: "66",
      cus_change: "2%",
      new_cus: "43",
      new_cus_change: "23.99%",
      ret_cus: "32",
      ret_cus_change: "4%",
      profit: "768",
      profit_change: "5%",
    },
    {
      product: "c",
      rev: "1112",
      rev_change: "11%",
      new_rev: "725",
      new_rev_change: "5%",
      ret_rev: "422",
      unit: "77",
      unit_change: "5%",
      order: "77",
      order_change: "3%",
      cus: "66",
      cus_change: "2%",
      new_cus: "43",
      new_cus_change: "23.99%",
      ret_cus: "32",
      ret_cus_change: "4%",
      profit: "768",
      profit_change: "5%",
    },
    {
      product: "d",
      rev: "1112",
      rev_change: "11%",
      new_rev: "725",
      new_rev_change: "5%",
      ret_rev: "422",
      unit: "77",
      unit_change: "5%",
      order: "77",
      order_change: "3%",
      cus: "66",
      cus_change: "2%",
      new_cus: "43",
      new_cus_change: "23.99%",
      ret_cus: "32",
      ret_cus_change: "4%",
      profit: "768",
      profit_change: "5%",
    },
    {
      product: "e",
      rev: "1112",
      rev_change: "11%",
      new_rev: "725",
      new_rev_change: "5%",
      ret_rev: "422",
      unit: "77",
      unit_change: "5%",
      order: "77",
      order_change: "3%",
      cus: "66",
      cus_change: "2%",
      new_cus: "43",
      new_cus_change: "23.99%",
      ret_cus: "32",
      ret_cus_change: "4%",
      profit: "768",
      profit_change: "5%",
    },
    {
      product: "a",
      rev: "1112",
      rev_change: "11%",
      new_rev: "725",
      new_rev_change: "5%",
      ret_rev: "422",
      unit: "77",
      unit_change: "5%",
      order: "77",
      order_change: "3%",
      cus: "66",
      cus_change: "2%",
      new_cus: "43",
      new_cus_change: "23.99%",
      ret_cus: "32",
      ret_cus_change: "4%",
      profit: "768",
      profit_change: "5%",
    },
    {
      product: "b",
      rev: "1112",
      rev_change: "11%",
      new_rev: "725",
      new_rev_change: "5%",
      ret_rev: "422",
      unit: "77",
      unit_change: "5%",
      order: "77",
      order_change: "3%",
      cus: "66",
      cus_change: "2%",
      new_cus: "43",
      new_cus_change: "23.99%",
      ret_cus: "32",
      ret_cus_change: "4%",
      profit: "768",
      profit_change: "5%",
    },
    {
      product: "c",
      rev: "1112",
      rev_change: "11%",
      new_rev: "725",
      new_rev_change: "5%",
      ret_rev: "422",
      unit: "77",
      unit_change: "5%",
      order: "77",
      order_change: "3%",
      cus: "66",
      cus_change: "2%",
      new_cus: "43",
      new_cus_change: "23.99%",
      ret_cus: "32",
      ret_cus_change: "4%",
      profit: "768",
      profit_change: "5%",
    },
    {
      product: "d",
      rev: "1112",
      rev_change: "11%",
      new_rev: "725",
      new_rev_change: "5%",
      ret_rev: "422",
      unit: "77",
      unit_change: "5%",
      order: "77",
      order_change: "3%",
      cus: "66",
      cus_change: "2%",
      new_cus: "43",
      new_cus_change: "23.99%",
      ret_cus: "32",
      ret_cus_change: "4%",
      profit: "768",
      profit_change: "5%",
    },
    {
      product: "e",
      rev: "1112",
      rev_change: "11%",
      new_rev: "725",
      new_rev_change: "5%",
      ret_rev: "422",
      unit: "77",
      unit_change: "5%",
      order: "77",
      order_change: "3%",
      cus: "66",
      cus_change: "2%",
      new_cus: "43",
      new_cus_change: "23.99%",
      ret_cus: "32",
      ret_cus_change: "4%",
      profit: "768",
      profit_change: "5%",
    },
    {
      product: "a",
      rev: "1112",
      rev_change: "11%",
      new_rev: "725",
      new_rev_change: "5%",
      ret_rev: "422",
      unit: "77",
      unit_change: "5%",
      order: "77",
      order_change: "3%",
      cus: "66",
      cus_change: "2%",
      new_cus: "43",
      new_cus_change: "23.99%",
      ret_cus: "32",
      ret_cus_change: "4%",
      profit: "768",
      profit_change: "5%",
    },
    {
      product: "b",
      rev: "1112",
      rev_change: "11%",
      new_rev: "725",
      new_rev_change: "5%",
      ret_rev: "422",
      unit: "77",
      unit_change: "5%",
      order: "77",
      order_change: "3%",
      cus: "66",
      cus_change: "2%",
      new_cus: "43",
      new_cus_change: "23.99%",
      ret_cus: "32",
      ret_cus_change: "4%",
      profit: "768",
      profit_change: "5%",
    },
    {
      product: "c",
      rev: "1112",
      rev_change: "11%",
      new_rev: "725",
      new_rev_change: "5%",
      ret_rev: "422",
      unit: "77",
      unit_change: "5%",
      order: "77",
      order_change: "3%",
      cus: "66",
      cus_change: "2%",
      new_cus: "43",
      new_cus_change: "23.99%",
      ret_cus: "32",
      ret_cus_change: "4%",
      profit: "768",
      profit_change: "5%",
    },
    {
      product: "d",
      rev: "1112",
      rev_change: "11%",
      new_rev: "725",
      new_rev_change: "5%",
      ret_rev: "422",
      unit: "77",
      unit_change: "5%",
      order: "77",
      order_change: "3%",
      cus: "66",
      cus_change: "2%",
      new_cus: "43",
      new_cus_change: "23.99%",
      ret_cus: "32",
      ret_cus_change: "4%",
      profit: "768",
      profit_change: "5%",
    },
    {
      product: "e",
      rev: "1112",
      rev_change: "11%",
      new_rev: "725",
      new_rev_change: "5%",
      ret_rev: "422",
      unit: "77",
      unit_change: "5%",
      order: "77",
      order_change: "3%",
      cus: "66",
      cus_change: "2%",
      new_cus: "43",
      new_cus_change: "23.99%",
      ret_cus: "32",
      ret_cus_change: "4%",
      profit: "768",
      profit_change: "5%",
    },
    {
      product: "a",
      rev: "1112",
      rev_change: "11%",
      new_rev: "725",
      new_rev_change: "5%",
      ret_rev: "422",
      unit: "77",
      unit_change: "5%",
      order: "77",
      order_change: "3%",
      cus: "66",
      cus_change: "2%",
      new_cus: "43",
      new_cus_change: "23.99%",
      ret_cus: "32",
      ret_cus_change: "4%",
      profit: "768",
      profit_change: "5%",
    },
    {
      product: "b",
      rev: "1112",
      rev_change: "11%",
      new_rev: "725",
      new_rev_change: "5%",
      ret_rev: "422",
      unit: "77",
      unit_change: "5%",
      order: "77",
      order_change: "3%",
      cus: "66",
      cus_change: "2%",
      new_cus: "43",
      new_cus_change: "23.99%",
      ret_cus: "32",
      ret_cus_change: "4%",
      profit: "768",
      profit_change: "5%",
    },
    {
      product: "c",
      rev: "1112",
      rev_change: "11%",
      new_rev: "725",
      new_rev_change: "5%",
      ret_rev: "422",
      unit: "77",
      unit_change: "5%",
      order: "77",
      order_change: "3%",
      cus: "66",
      cus_change: "2%",
      new_cus: "43",
      new_cus_change: "23.99%",
      ret_cus: "32",
      ret_cus_change: "4%",
      profit: "768",
      profit_change: "5%",
    },
    {
      product: "d",
      rev: "1112",
      rev_change: "11%",
      new_rev: "725",
      new_rev_change: "5%",
      ret_rev: "422",
      unit: "77",
      unit_change: "5%",
      order: "77",
      order_change: "3%",
      cus: "66",
      cus_change: "2%",
      new_cus: "43",
      new_cus_change: "23.99%",
      ret_cus: "32",
      ret_cus_change: "4%",
      profit: "768",
      profit_change: "5%",
    },
    {
      product: "e",
      rev: "1112",
      rev_change: "11%",
      new_rev: "725",
      new_rev_change: "5%",
      ret_rev: "422",
      unit: "77",
      unit_change: "5%",
      order: "77",
      order_change: "3%",
      cus: "66",
      cus_change: "2%",
      new_cus: "43",
      new_cus_change: "23.99%",
      ret_cus: "32",
      ret_cus_change: "4%",
      profit: "768",
      profit_change: "5%",
    },
    {
      product: "a",
      rev: "1112",
      rev_change: "11%",
      new_rev: "725",
      new_rev_change: "5%",
      ret_rev: "422",
      unit: "77",
      unit_change: "5%",
      order: "77",
      order_change: "3%",
      cus: "66",
      cus_change: "2%",
      new_cus: "43",
      new_cus_change: "23.99%",
      ret_cus: "32",
      ret_cus_change: "4%",
      profit: "768",
      profit_change: "5%",
    },
    {
      product: "b",
      rev: "1112",
      rev_change: "11%",
      new_rev: "725",
      new_rev_change: "5%",
      ret_rev: "422",
      unit: "77",
      unit_change: "5%",
      order: "77",
      order_change: "3%",
      cus: "66",
      cus_change: "2%",
      new_cus: "43",
      new_cus_change: "23.99%",
      ret_cus: "32",
      ret_cus_change: "4%",
      profit: "768",
      profit_change: "5%",
    },
    {
      product: "c",
      rev: "1112",
      rev_change: "11%",
      new_rev: "725",
      new_rev_change: "5%",
      ret_rev: "422",
      unit: "77",
      unit_change: "5%",
      order: "77",
      order_change: "3%",
      cus: "66",
      cus_change: "2%",
      new_cus: "43",
      new_cus_change: "23.99%",
      ret_cus: "32",
      ret_cus_change: "4%",
      profit: "768",
      profit_change: "5%",
    },
    {
      product: "d",
      rev: "1112",
      rev_change: "11%",
      new_rev: "725",
      new_rev_change: "5%",
      ret_rev: "422",
      unit: "77",
      unit_change: "5%",
      order: "77",
      order_change: "3%",
      cus: "66",
      cus_change: "2%",
      new_cus: "43",
      new_cus_change: "23.99%",
      ret_cus: "32",
      ret_cus_change: "4%",
      profit: "768",
      profit_change: "5%",
    },
    {
      product: "e",
      rev: "1112",
      rev_change: "11%",
      new_rev: "725",
      new_rev_change: "5%",
      ret_rev: "422",
      unit: "77",
      unit_change: "5%",
      order: "77",
      order_change: "3%",
      cus: "66",
      cus_change: "2%",
      new_cus: "43",
      new_cus_change: "23.99%",
      ret_cus: "32",
      ret_cus_change: "4%",
      profit: "768",
      profit_change: "5%",
    },
  ]);

  var handleCatClick = (id, event) => {
    event.preventDefault();
    dispatch(
      get_products_sales_from_selected_catagory({
        id: id,
        sales: 1,
        from: format(daterange[0], "yyyy-MM-dd"),
        to: format(daterange[1], "yyyy-MM-dd"),
        from1: format(daterange1[0], "yyyy-MM-dd"),
        to1: format(daterange1[1], "yyyy-MM-dd"),
      })
    );
  };

  return (
    <Grid container spacing={3}>
      <Grid item md={12}>
        <div className="notifications">
          <h6>Product : Sales data</h6>
        </div>
      </Grid>
      <Grid item md={12}>
        <form
          onSubmit={dateSubmit}
          className="date-period"
          style={{ marginBottom: "-15px" }}
        >
          <DateRangePicker
            //placement='rightEnd'
            label="Timeline"
            value={daterange}
            onChange={setdrange}
            oneTap={false}
            ranges={[
              {
                label: "Yesterday",
                value: [addDays(new Date(), -1), addDays(new Date(), -1)],
              },
              { label: "Today", value: [new Date(), new Date()] },
              {
                label: "Tomorrow",
                value: [addDays(new Date(), 1), addDays(new Date(), 1)],
              },
              {
                label: "Last 7 days",
                value: [subDays(new Date(), 6), new Date()],
              },
              {
                label: "This month",
                value: [
                  subDays(new Date(), getDate(new Date()) - 1),
                  new Date(),
                ],
              },
              //startOfMonth(new Date(2014, 8, 2, 11, 55, 0))
              {
                label: "Last month",
                value: [
                  startOfMonth(subDays(new Date(), getDate(new Date()))),
                  endOfMonth(subDays(new Date(), getDate(new Date()))),
                ],
              },
              {
                label: "Year To date",
                value: [startOfYear(new Date()), new Date()],
              },
            ]}
          ></DateRangePicker>

          <DateRangePicker
            //placement='rightEnd'
            label="Timeline"
            value={daterange1}
            onChange={setdrange1}
            oneTap={false}
            ranges={[
              {
                label: "Yesterday",
                value: [addDays(new Date(), -1), addDays(new Date(), -1)],
              },
              {
                label: "Today",
                value: [new Date(), new Date()],
              },
              {
                label: "Tomorrow",
                value: [addDays(new Date(), 1), addDays(new Date(), 1)],
              },
              {
                label: "Last 7 days",
                value: [subDays(new Date(), 6), new Date()],
              },

              {
                label: "This month",
                value: [
                  subDays(new Date(), getDate(new Date()) - 1),
                  new Date(),
                ],
              },

              //startOfMonth(new Date(2014, 8, 2, 11, 55, 0))
              {
                label: "Last month",
                value: [
                  startOfMonth(subDays(new Date(), getDate(new Date()))),
                  endOfMonth(subDays(new Date(), getDate(new Date()))),
                ],
              },
              {
                label: "Year To date",
                value: [startOfYear(new Date()), new Date()],
              },
            ]}
          ></DateRangePicker>
          <input
            className="period-btn"
            variant="contained"
            color="secondary"
            style={{ marginLeft: "0" }}
            type="submit"
            value="Submit"
          />
        </form>
      </Grid>
      <Grid item md={12}>
        <Card className="dash-card">
          <ThemeProvider theme={defaultMaterialTheme}>
            <MaterialTable
              columns={[
                {
                  title: "Product",
                  field: "product",
                  render: (row) => (
                    <div
                      style={{
                        fontFamily: "system-ui",
                        fontSize: "16px",
                        textAlign: "center",
                      }}
                    >
                      <a href={"/Products/" + row.pro_id}> {row.product}</a>
                    </div>
                  ),
                },
                {
                  title: "Rev",
                  field: "rev",
                  render: (row) => (
                    <div style={{ background: "whitesmoke" }}> {row.rev} </div>
                  ),
                },
                {
                  title: "%",
                  field: "rev_change",
                  render: (row) => (
                    <div style={{ background: "ghostwhite" }}>
                      {" "}
                      {row.rev_change}{" "}
                    </div>
                  ),
                },
                {
                  title: "NewRev",
                  field: "new_rev",
                  render: (row) => (
                    <div style={{ background: "whitesmoke" }}>
                      {" "}
                      {row.new_rev}{" "}
                    </div>
                  ),
                },
                {
                  title: "%",
                  field: "new_rev_change",
                  render: (row) => (
                    <div style={{ background: "ghostwhite" }}>
                      {" "}
                      {row.new_rev_change}{" "}
                    </div>
                  ),
                },
                {
                  title: "RetRev",
                  field: "ret_rev",
                  render: (row) => (
                    <div style={{ background: "whitesmoke" }}>
                      {" "}
                      {row.ret_rev}{" "}
                    </div>
                  ),
                },
                {
                  title: "%",
                  field: "ret_rev_change",
                  render: (row) => (
                    <div style={{ background: "ghostwhite" }}>
                      {" "}
                      {row.ret_rev_change}{" "}
                    </div>
                  ),
                },
                {
                  title: "Unit",
                  field: "unit",
                  render: (row) => (
                    <div style={{ background: "whitesmoke" }}> {row.unit} </div>
                  ),
                },
                {
                  title: "%",
                  field: "unit_change",
                  render: (row) => (
                    <div style={{ background: "ghostwhite" }}>
                      {" "}
                      {row.unit_change}{" "}
                    </div>
                  ),
                },
                {
                  title: "Order",
                  field: "order",
                  render: (row) => (
                    <div style={{ background: "whitesmoke" }}>
                      {" "}
                      {row.order}{" "}
                    </div>
                  ),
                },
                {
                  title: "%",
                  field: "order_change",
                  render: (row) => (
                    <div style={{ background: "ghostwhite" }}>
                      {" "}
                      {row.order_change}{" "}
                    </div>
                  ),
                },
                {
                  title: "Cus",
                  field: "cus",
                  render: (row) => (
                    <div style={{ background: "whitesmoke" }}> {row.cus} </div>
                  ),
                },
                {
                  title: "%",
                  field: "cus_change",
                  render: (row) => (
                    <div style={{ background: "ghostwhite" }}>
                      {" "}
                      {row.cus_change}{" "}
                    </div>
                  ),
                },
                {
                  title: "NewCus",
                  field: "new_cus",
                  render: (row) => (
                    <div style={{ background: "whitesmoke" }}>
                      {" "}
                      {row.new_cus}{" "}
                    </div>
                  ),
                },
                {
                  title: "%",
                  field: "new_cus_change",
                  render: (row) => (
                    <div style={{ background: "ghostwhite" }}>
                      {" "}
                      {row.new_cus_change}{" "}
                    </div>
                  ),
                },
                {
                  title: "RetCus",
                  field: "ret_cus",
                  render: (row) => (
                    <div style={{ background: "whitesmoke" }}>
                      {" "}
                      {row.ret_cus}{" "}
                    </div>
                  ),
                },
                {
                  title: "%",
                  field: "ret_cus_change",
                  render: (row) => (
                    <div style={{ background: "ghostwhite" }}>
                      {" "}
                      {row.ret_cus_change}{" "}
                    </div>
                  ),
                },
                {
                  title: "Profit",
                  field: "profit",
                  render: (row) => (
                    <div style={{ background: "whitesmoke" }}>
                      {" "}
                      {row.profit}{" "}
                    </div>
                  ),
                },
                {
                  title: "%",
                  field: "profit_change",
                  render: (row) => (
                    <div style={{ background: "ghostwhite" }}>
                      {" "}
                      {row.profit_change}{" "}
                    </div>
                  ),
                },
              ]}
              data={prod_table}
              title="Sales Data :: Products"
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
              }}
              options={{
                pageSize: 10, // make initial page size
                showFirstLastPageButtons: false,
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
      <Grid item md={12}>
        <Card className="dash-card">
          <ThemeProvider
            theme={defaultMaterialTheme}
            style={{ borderRadius: "14px" }}
          >
            <MaterialTable
              style={{ borderRadius: "14px" }}
              columns={[
                {
                  title: "Catagory",
                  field: "catagory",
                  render: (row) => (
                    <div
                      style={{
                        fontFamily: "system-ui",
                        fontSize: "16px",
                        textAlign: "center",
                      }}
                    >
                      <button
                        onClick={(event) => handleCatClick(row.cat_id, event)}
                        style={{ background: "none" }}
                      >
                        {" "}
                        {row.catagory}{" "}
                      </button>
                    </div>
                  ),
                },

                {
                  title: "Rev",
                  field: "rev",
                  render: (row) => (
                    <div style={{ background: "whitesmoke" }}> {row.rev} </div>
                  ),
                },
                {
                  title: "%",
                  field: "rev_change",
                  render: (row) => (
                    <div style={{ background: "ghostwhite" }}>
                      {" "}
                      {row.rev_change}{" "}
                    </div>
                  ),
                },
                {
                  title: "NewRev",
                  field: "new_rev",
                  render: (row) => (
                    <div style={{ background: "whitesmoke" }}>
                      {" "}
                      {row.new_rev}{" "}
                    </div>
                  ),
                },
                {
                  title: "%",
                  field: "new_rev_change",
                  render: (row) => (
                    <div style={{ background: "ghostwhite" }}>
                      {" "}
                      {row.new_rev_change}{" "}
                    </div>
                  ),
                },
                {
                  title: "RetRev",
                  field: "ret_rev",
                  render: (row) => (
                    <div style={{ background: "whitesmoke" }}>
                      {" "}
                      {row.ret_rev}{" "}
                    </div>
                  ),
                },
                {
                  title: "%",
                  field: "ret_rev_change",
                  render: (row) => (
                    <div style={{ background: "ghostwhite" }}>
                      {" "}
                      {row.ret_rev_change}{" "}
                    </div>
                  ),
                },
                {
                  title: "Unit",
                  field: "unit",
                  render: (row) => (
                    <div style={{ background: "whitesmoke" }}> {row.unit} </div>
                  ),
                },
                {
                  title: "%",
                  field: "unit_change",
                  render: (row) => (
                    <div style={{ background: "ghostwhite" }}>
                      {" "}
                      {row.unit_change}{" "}
                    </div>
                  ),
                },
                {
                  title: "Order",
                  field: "order",
                  render: (row) => (
                    <div style={{ background: "whitesmoke" }}>
                      {" "}
                      {row.order}{" "}
                    </div>
                  ),
                },
                {
                  title: "%",
                  field: "order_change",
                  render: (row) => (
                    <div style={{ background: "ghostwhite" }}>
                      {" "}
                      {row.order_change}{" "}
                    </div>
                  ),
                },
                {
                  title: "Cus",
                  field: "cus",
                  render: (row) => (
                    <div style={{ background: "whitesmoke" }}> {row.cus} </div>
                  ),
                },
                {
                  title: "%",
                  field: "cus_change",
                  render: (row) => (
                    <div style={{ background: "ghostwhite" }}>
                      {" "}
                      {row.cus_change}{" "}
                    </div>
                  ),
                },
                {
                  title: "NewCus",
                  field: "new_cus",
                  render: (row) => (
                    <div style={{ background: "whitesmoke" }}>
                      {" "}
                      {row.new_cus}{" "}
                    </div>
                  ),
                },
                {
                  title: "%",
                  field: "new_cus_change",
                  render: (row) => (
                    <div style={{ background: "ghostwhite" }}>
                      {" "}
                      {row.new_cus_change}{" "}
                    </div>
                  ),
                },
                {
                  title: "RetCus",
                  field: "ret_cus",
                  render: (row) => (
                    <div style={{ background: "whitesmoke" }}>
                      {" "}
                      {row.ret_cus}{" "}
                    </div>
                  ),
                },
                {
                  title: "%",
                  field: "ret_cus_change",
                  render: (row) => (
                    <div style={{ background: "ghostwhite" }}>
                      {" "}
                      {row.ret_cus_change}{" "}
                    </div>
                  ),
                },
                {
                  title: "Profit",
                  field: "profit",
                  render: (row) => (
                    <div style={{ background: "whitesmoke" }}>
                      {" "}
                      {row.profit}{" "}
                    </div>
                  ),
                },
                {
                  title: "%",
                  field: "profit_change",
                  render: (row) => (
                    <div style={{ background: "ghostwhite" }}>
                      {" "}
                      {row.profit_change}{" "}
                    </div>
                  ),
                },
              ]}
              data={cat_table}
              title="Sales data :: Catagory"
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
              }}
              options={{
                pageSize: 10, // make initial page size
                showFirstLastPageButtons: false,
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

export default ProductSalesTable;
