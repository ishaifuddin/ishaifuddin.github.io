import React, { useEffect, useState } from "react";
import ProductListAndSegments from '../components/Product/ProductListAndSegments'
import ProductSalesTable from '../components/Product/ProductSalesTable'
import ProductPurchaseCusSeg from '../components/Product/ProductPurchaseCusSeg'
import ProductOneCityPerform from '../components/Product/ProductOneCityPerform'
import ProductPerformance from '../components/Product/ProductPerformance'
import ProductSegmentPerformance from '../components/Product/ProductSegmentPerformance'

import Grid from '@mui/material/Grid';
import Button from '@mui/material/Button';

function Products() {

        var[ProductListAndSegments1,setProductListAndSegments]           = useState(true);
        var[ProductSalesTable1,setProductSalesTable]                     = useState(false);
        var[ProductPurchaseCusSeg1,setProductPurchaseCusSeg]             = useState(false);
        var[ProductOneCityPerform1,setProductOneCityPerform]             = useState(false);
        var[ProductPerformance1,setProductPerformance]                   = useState(false);
        var[ProductSegmentPerformance1,setProductSegmentPerformance]     = useState(false);

        var product_sections = (section) => {
                setProductListAndSegments(false); 
                setProductSalesTable(false); 
                setProductPerformance(false);
                setProductOneCityPerform(false);
                setProductPurchaseCusSeg(false);
                setProductSegmentPerformance(false);
                if(section === 'ProductListAndSegments1')         {setProductListAndSegments(true); }
                else if(section === 'ProductSalesTable1')         {setProductSalesTable(true); }
                else if(section === 'ProductPerformance1')        {setProductPerformance(true);}
                else if(section === 'ProductOneCityPerform1')     {setProductOneCityPerform(true);}
                else if(section === 'ProductPurchaseCusSeg1' )    {setProductPurchaseCusSeg(true);}
                else if(section === 'ProductSegmentPerformance1') {setProductSegmentPerformance(true);}
        }

        return (
      
                <>
        
                        <Grid container style={{margin:'2%'}}>

                                <Button value='ProductListAndSegments1' onClick={(e) => { product_sections(e.target.value);}} 
                                        color={ProductListAndSegments1 ? "primary" : "secondary"}>Product List And Segments
                                </Button>

                                <Button value='ProductSalesTable1' onClick={(e) => { product_sections(e.target.value);}}  
                                        color={ProductSalesTable1 ? "primary" : "secondary"}>Product Sales 
                                </Button>

                                <Button value='ProductPerformance1' onClick={(e) => { product_sections(e.target.value);}} 
                                        color={ProductPerformance1 ? "primary" : "secondary"}>Product Performance
                                </Button>

                                <Button value='ProductOneCityPerform1' onClick={(e) => { product_sections(e.target.value); }} 
                                        color={ProductOneCityPerform1 ? "primary" : "secondary"} >Product One City Perform
                                </Button>

                                <Button value='ProductPurchaseCusSeg1' onClick={(e) => { product_sections(e.target.value);}} 
                                        color={ProductPurchaseCusSeg1 ? "primary" : "secondary"} >Product Purchase Customer Seg
                                </Button>
                                
                                <Button value='ProductSegmentPerformance1' onClick={(e) => { product_sections(e.target.value);}} 
                                        color={ProductSegmentPerformance1 ? "primary" : "secondary"}>Product Segment Performance
                                </Button>

                        </Grid>

                        { ProductListAndSegments1 &&  <ProductListAndSegments/>   }

                        { ProductSalesTable1 && <ProductSalesTable/> }
                                
                        { ProductPurchaseCusSeg1 && <ProductPurchaseCusSeg/>}

                        { ProductOneCityPerform1 &&  <ProductOneCityPerform/>}

                        { ProductPerformance1 && <ProductPerformance/>}

                        { ProductSegmentPerformance1 && <ProductSegmentPerformance/>}

                </>
        )

}

export default Products