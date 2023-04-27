import { ReactSession } from "react-client-session";
import React, { useState } from "react";

import { BrowserRouter, Routes, Route, Switch } from "react-router-dom";

import BlogPage from "./components/Home/BlogPage";
import SinglePost from "./components/Home/SinglePost";
import Dashboard from "./pages/Dashboard";
import SingleCustomer from "./pages/SingleCustomer";

// import Pricing from "./pages/Pricing";
// import Engage from "./pages/Engage";
// import Campaign from "./pages/Campaign";

import Coupons from "./pages/Coupons";
import Home from "./pages/Home";
import RegVerify from "./components/Home/RegVerify";
import StripeIndex from "./components/Home/StripeIndex";
import InsertShopURL from "./components/Home/InsertShopURL";
import Profile from "./pages/Profile";
import TeamForm from "./pages/TeamForm";

import CusReport from "./components/Customer/CusReport";
import CusListAndSegment from "./components/Customer/CusListAndSegment";
import CusRetention from "./components/Customer/CusRetention";
import CusRetentionSC from "./components/Customer/CusRetentionSC";

import ProductListAndSegments from "./components/Product/ProductListAndSegments";
import ProductOneCityPerform from "./components/Product/ProductOneCityPerform";
import ProductPerformance from "./components/Product/ProductPerformance";
import ProductPurchaseCusSeg from "./components/Product/ProductPurchaseCusSeg";
import ProductSalesTable from "./components/Product/ProductSalesTable";
import ProductSegmentPerformance from "./components/Product/ProductSegmentPerformance";
import SingleProduct from "./components/SinPro/SingleProduct";

import OrderReport from "./components/Order/OrderReport";
import OrderListAndSegments from "./components/Order/OrderListAndSegment";

import AddNewCampaign from "./components/Campaign/AddNewCampaign";
import OrderListAll from "./components/Campaign/OrderListAll";
import OrderListGroupByCamSrc from "./components/Campaign/OrderListGroupByCamSrc";

import PricingCreate from "./components/Pricing/PricingCreate";
import PricingCreatedList from "./components/Pricing/PricingCreatedList";
import LogOut from "./pages/LogOut";
import Available from "./components/Engage/Available";
import CreateNew from "./components/Engage/CreateNew";
import SideNav from "./pages/SideNav";

// Testing
import TestPage from "./pages/TestPage";

import { useSelector } from "react-redux";
import Grid from "@mui/material/Grid";
import SingleOrder from "./components/SinOrder/SingleOrder";

function App() {
  //var authenticated = JSON.parse(localStorage.getItem('authenticated'));
  //var status = useSelector((state) => state.dash.status);
  var status = "success";
  //var status = "";
  return (
    <BrowserRouter>
      <div className="wrapper">
        {status === "success" && (
          <aside className="aside">
            <SideNav />
          </aside>
        )}

        <main className={status !== "success" ? "dashboard pl-0" : "dashboard"}>
          <Routes>
            <Route path="/blog" element={<BlogPage />} />
            <Route path="/post/:id" element={<SinglePost />} />

            {status !== "success" && (
              <Route exact path="/" element={<Home />} />
            )}

            {/* Campaign */}
            <Route exact path="/campaign" element={<AddNewCampaign />} />
            <Route exact path="/campaign/orders" element={<OrderListAll />} />
            <Route
              exact
              path="/campaign/compare"
              element={<OrderListGroupByCamSrc />}
            />

            {/* Dashboard */}
            <Route exact path="/Dashboard" element={<Dashboard />} />

            {/* Customer */}
            <Route exact path="/Customers/reports" element={<CusReport />} />
            <Route
              exact
              path="/Customers/CustomerAndSegemnt"
              element={<CusListAndSegment />}
            />
            <Route
              exact
              path="/Customers/retention"
              element={<CusRetention />}
            />
            <Route
              exact
              path="/Customers/retention/selected-city"
              element={<CusRetentionSC />}
            />
            <Route
              exact
              path="/Customers/profile/:chc"
              element={<SingleCustomer />}
            />

            {/* Products */}
            <Route
              exact
              path="/Products"
              element={<ProductListAndSegments />}
            />
            <Route
              exact
              path="/Products/Sales"
              element={<ProductSalesTable />}
            />
            <Route
              exact
              path="/Products/Performance"
              element={<ProductPerformance />}
            />
            <Route
              exact
              path="/Products/Specific-city"
              element={<ProductOneCityPerform />}
            />
            <Route
              exact
              path="/Products/Customer-Segment-based-on-product-purchase"
              element={<ProductPurchaseCusSeg />}
            />
            <Route
              exact
              path="/Products/Product-segment-performance"
              element={<ProductSegmentPerformance />}
            />
            <Route exact path="/Products/:chc" element={<SingleProduct />} />

            {/* Orders */}
            <Route exact path="/Orders/Report" element={<OrderReport />} />
            <Route exact path="/Orders" element={<OrderListAndSegments />} />
            <Route exact path="/Orders/:chc" element={<SingleOrder />} />

            {/* Pricing */}
            <Route exact path="/pricing" element={<PricingCreate />} />
            <Route
              exact
              path="/pricing/created"
              element={<PricingCreatedList />}
            />

            {/* Coupon */}
            <Route exact path="/coupons" element={<Coupons />} />

            {/* Engage */}
            <Route exact path="/engage/available" element={<Available />} />
            <Route exact path="/engage/createnew" element={<CreateNew />} />

            {/* Registration Process */}
            <Route exact path="/RegVerify" element={<RegVerify />} />
            <Route exact path="/StripeIndex" element={<StripeIndex />} />
            <Route
              exact
              path="/InsertShopURL/:cus"
              element={<InsertShopURL />}
            />

            {/* Profile */}
            <Route exact path="/profile" element={<Profile />} />

            {/* Team Form */}
            <Route exact path="/TeamForm" element={<TeamForm />} />

            <Route exact path="/LogOut" element={<LogOut />} />

            {/* <Route  path="*" element={<Error/>} /> */}

            <Route exact path="/Testing" element={<TestPage />} />
          </Routes>
        </main>
      </div>
    </BrowserRouter>
  );
}

export default App;
