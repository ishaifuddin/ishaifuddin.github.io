import React from 'react';
import HomeSx from './HomeSx';
import FeatureSx from './FeatureSx';
import FactSx from './FactSx';
import PriceSx from './PriceSx'

function LandingPageSx() {
  
  return (
    <React.Fragment>
        <HomeSx/>
        <FeatureSx />
        <FactSx/>
        <PriceSx />
    </React.Fragment>
  );
}

export default LandingPageSx;
