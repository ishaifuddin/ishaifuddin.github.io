import React from "react";
import "./shopexLanding.css";
import HomeSx from "./HomeSx";
import FeatureSx from "./FeatureSx";
import FactSx from "./FactSx";
import PriceSx from "./PriceSx";
import FooterSx from "./FooterSx";
import NavbarSx from "./NavbarSx";

function LandingPageSx() {
  return (
    <React.Fragment>
      <NavbarSx />
      <HomeSx />
      <FeatureSx />
      <FactSx />
      <PriceSx />
      <FooterSx />
    </React.Fragment>
  );
}

export default LandingPageSx;
