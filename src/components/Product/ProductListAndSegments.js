import { ReactSession } from 'react-client-session';
import React, { useEffect, useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import Multiselect from 'multiselect-react-dropdown';

import Search from '@material-ui/icons/Search'
import SaveAlt from '@material-ui/icons/SaveAlt'
import ChevronLeft from '@material-ui/icons/ChevronLeft'
import ChevronRight from '@material-ui/icons/ChevronRight'
import FirstPage from '@material-ui/icons/FirstPage'
import LastPage from '@material-ui/icons/LastPage'
import Check from '@material-ui/icons/Check'
import FilterList from '@material-ui/icons/FilterList'
import ListAltIcon from '@mui/icons-material/ListAlt';
import CancelIcon from '@mui/icons-material/Cancel';

import axios from "axios";
import MaterialTable from 'material-table';
import { ThemeProvider, createTheme, Button } from '@mui/material';

import { get_product_and_catagory_and_sku_data } from '../../features/product/ProductListAndSegment';
import { get_filtered_product_data } from '../../features/product/ProductListAndSegment';
import { get_product_segments } from '../../features/product/ProductListAndSegment';

import Products from "./ProductSegmentFilters/Products";
import ProductCatagory from "./ProductSegmentFilters/ProductCatagory";
import ProductSKU from "./ProductSegmentFilters/ProductSKU";
import ProductCurrentPrice from "./ProductSegmentFilters/ProductCurrentPrice";
import ProductHeight from "./ProductSegmentFilters/ProductHeight";
import ProductWidth from "./ProductSegmentFilters/ProductWidth";
import ProductLength from "./ProductSegmentFilters/ProductLength";
import ProductWeight from "./ProductSegmentFilters/ProductWeight";
import ProductStock from "./ProductSegmentFilters/ProductStock";
import ProductOnSale from "./ProductSegmentFilters/ProductOnSale";
import ProductType from "./ProductSegmentFilters/ProductType";

import ProductFilter from "./ProductFilter";
import { get_products_from_selected_catagory } from "../../features/product/ProductListAndSegment";
import Grid from "@mui/material/Grid";
//import SingleProduct from '../../pages/SingleProduct';
import SingleProduct from '../SinPro/SingleProduct';
//import SideNav from '../../pages/SideNav';

import { EditCost } from '../../features/product/ProductListAndSegment';

function ProductListAndSegments() {

  var dispatch = useDispatch();
  const defaultMaterialTheme = createTheme();
  var [segname, setSegname] = useState('Orders from last 6month/s');


  // var Product_list_seg = useSelector((state) => state.product_List_And_Segments);
  // useEffect(() => {

  //   var is_dispatched1 = () => {
  //     ReactSession.get("get_product_and_catagory_and_sku_data");
  //     if (ReactSession.get("get_product_and_catagory_and_sku_data")) {
  //       return true;
  //     } else {
  //       ReactSession.set("get_product_and_catagory_and_sku_data", "1");
  //       return false;
  //     }
  //   }

  //   var is_dispatched2 = () => {
  //     ReactSession.get("get_product_segments");
  //     if (ReactSession.get("get_product_segments")) {
  //       return true;
  //     } else {
  //       ReactSession.set("get_product_segments", "1");
  //       return false;
  //     }
  //   }

  //   if (!(is_dispatched1())) {
  //     dispatch(get_product_and_catagory_and_sku_data({ ajax_call: 2 }));
  //   }


  //   if (!(is_dispatched2())) {
  //     dispatch(get_product_segments({ ajax_call: 2 }));
  //   }

  // }, [])





  // var product_table = Product_list_seg.product_table_object;
  // if (product_table.length > 0)
  //   var product_table_clone = structuredClone(product_table);


  // var cat_table = Product_list_seg.product_cat_table_object;
  // if (cat_table.length > 0)
  //   var cat_table_clone = structuredClone(cat_table);


  var Update_cog = (event) => {
    
      event.preventDefault();
      const fdata = new FormData(event.target);
      const data = Object.fromEntries(fdata.entries());
      
      axios.post('https://server.shopex.io/products/product_cost_update.php',data,{withCredentials: true})
      .then(function (response) {
        
      })
      .catch(function (error) {
          console.log(error);
      })
  };


  var [filterList_, setfilterList] = useState([]);
  
  var [filts, setfils] = useState([
    'Products',
    'Catagory',
    'SKU',
    'Current_Price',
    'Height',
    'Width',
    'Length',
    'Weight',
    'Stock',
    'on_sale',
    'Type'
  ]);



  var addfilter = (e, arg) => {

    // cus-Filter De-selested from Dropdown
    if (arg === 99) {

      // Get previous state
      var prev_state = JSON.parse(localStorage.getItem('shopex_Product_filts'));
      console.log(prev_state);


      // Get Removed state
      var removed_filter = prev_state.filter(x => !e.includes(x));
      var remfil = removed_filter[0];

      var newfils = filterList_.filter((item) => item.key !== remfil);
      setfilterList(newfils);

      // Update The latest selected's as previous state in local-Storage
      localStorage.setItem('shopex_Product_filts', JSON.stringify(e));
    }


    // cus-Filter Selected from Dropdown
    if (arg !== 99) {

      localStorage.setItem('shopex_Product_filts', JSON.stringify(e));
      //alert(arg);

      if (arg === "Products") setfilterList(filterList_.concat(<Products key={'Products'} />));

      if (arg === "Catagory") setfilterList(filterList_.concat(<ProductCatagory key={'Catagory'} />));

      if (arg === "SKU") setfilterList(filterList_.concat(<ProductSKU key={'SKU'} />));

      if (arg === "Current_Price") setfilterList(filterList_.concat(<ProductCurrentPrice key={'Current_Price'} />));

      if (arg === "Height") setfilterList(filterList_.concat(<ProductHeight key={'Height'} />));

      if (arg === "Width") setfilterList(filterList_.concat(<ProductWidth key={'Width'} />));

      if (arg === "Length") setfilterList(filterList_.concat(<ProductLength key={'Length'} />));

      if (arg === "Weight") setfilterList(filterList_.concat(<ProductWeight key={'Weight'} />));

      if (arg === "Stock") setfilterList(filterList_.concat(<ProductStock key={'Stock'} />));

      if (arg === "on_sale") setfilterList(filterList_.concat(<ProductOnSale key={'on_sale'} />));

      if (arg === "Type") setfilterList(filterList_.concat(<ProductType key={'Type'} />));

    }

  };


  var showSingleCatPrduct = (e) => { }

  var filterSubmit = (event) => {

    event.preventDefault();
    const fdata = new FormData(event.target);
    const data = Object.fromEntries(fdata.entries());
    setSegname('');
    dispatch(get_filtered_product_data(data));

  };


  var product_obj = useSelector((state) => state.product_List_And_Segments.all_product_object);
  var ops = [];

  if (product_obj && (product_obj.length > 0)) {
    for (var i of product_obj) {
      var label = i.product_name; 
      var value = i.product_id;
      ops.push({ value: value, label: label });
    }
  }

  var [filterList1, setfilterList1] = useState([]);

  var product_selected_deselected = (e, arg) => {

    // cus-Filter De-selested from Dropdown
    if (arg === 99) {

      // Get previous state
      var prev_state = JSON.parse(localStorage.getItem('shopex_Product_cusseg_filts'));
      console.log(prev_state);

      // Get Removed state
      var removed_filter = prev_state.filter(x => !e.includes(x));
      var remfil = removed_filter[0];

      var newfils = filterList1.filter((item) => item.key !== remfil);
      setfilterList1(newfils);

      // Update The latest selected's as previous state in local-Storage
      localStorage.setItem('shopex_Product_cusseg_filts', JSON.stringify(e));
    }

    // cus-Filter Selected from Dropdown
    if (arg !== 99) {
      localStorage.setItem('shopex_Product_cusseg_filts', JSON.stringify(e));
      setfilterList1(filterList1.concat(<ProductFilter key={arg} productnid={arg} />));
    }

  }

  var [seletedpros, setSeletedPros] = useState('');
  var [billCity_, setbillCity_] = useState(false);
  var [shipCity_, setshipCity_] = useState(false);
  var [BillShip, setBillShip] = useState('');

  var handleCogChange = (e) => {
    var id = e.target.name;
    var cost = e.target.value;
    dispatch(EditCost({"id":id,"cost":cost}));
  }




  /////////////////// DUMMY DATA //////////////////////////
  /////////////////// DUMMY DATA //////////////////////////
  /////////////////// DUMMY DATA //////////////////////////
  /////////////////// DUMMY DATA //////////////////////////

 
  var [cat_table_clone, setTmnew] = useState([
    {  catagory_name: 'spray_catagory' },
    {  catagory_name: 'spray_catagory' },
    {  catagory_name: 'spray_catagory' },
    {  catagory_name: 'spray_catagory' },
    {  catagory_name: 'spray_catagory' },
    {  catagory_name: 'spray_catagory' },
    {  catagory_name: 'spray_catagory' },
    {  catagory_name: 'spray_catagory' },
    {  catagory_name: 'spray_catagory' },
    {  catagory_name: 'spray_catagory' },
    {  catagory_name: 'spray_catagory' },
    {  catagory_name: 'spray_catagory' },
    {  catagory_name: 'spray_catagory' },
    {  catagory_name: 'spray_catagory' },
    {  catagory_name: 'spray_catagory' },
    {  catagory_name: 'spray_catagory' },
    {  catagory_name: 'spray_catagory' },
    {  catagory_name: 'spray_catagory' },
    {  catagory_name: 'spray_catagory' },
    {  catagory_name: 'spray_catagory' },
    {  catagory_name: 'spray_catagory' },
    {  catagory_name: 'spray_catagory' },
    {  catagory_name: 'spray_catagory' },
    {  catagory_name: 'spray_catagory' },
    {  catagory_name: 'spray_catagory' },
    {  catagory_name: 'spray_catagory' },
    {  catagory_name: 'spray_catagory' },
    {  catagory_name: 'spray_catagory' },
    {  catagory_name: 'spray_catagory' },
    {  catagory_name: 'spray_catagory' },
    {  catagory_name: 'spray_catagory' },
    {  catagory_name: 'spray_catagory' },
    {  catagory_name: 'spray_catagory' },
    {  catagory_name: 'spray_catagory' },
    {  catagory_name: 'spray_catagory' },
    {  catagory_name: 'spray_catagory' },

  ]);
  
  var [product_table_clone, setTmnew] = useState([
    {  product_name: 'spray', reguler_price: 23, curr_price : 22 , stock_quantity: 6 , product_type : 'simple', cog : 18 },
    {  product_name: 'spray', reguler_price: 23, curr_price : 22 , stock_quantity: 6 , product_type : 'simple', cog : 18 },
    {  product_name: 'spray', reguler_price: 23, curr_price : 22 , stock_quantity: 6 , product_type : 'simple', cog : 18 },
    {  product_name: 'spray', reguler_price: 23, curr_price : 22 , stock_quantity: 6 , product_type : 'simple', cog : 18 },
    {  product_name: 'spray', reguler_price: 23, curr_price : 22 , stock_quantity: 6 , product_type : 'simple', cog : 18 },
    {  product_name: 'spray', reguler_price: 23, curr_price : 22 , stock_quantity: 6 , product_type : 'simple', cog : 18 },
    {  product_name: 'spray', reguler_price: 23, curr_price : 22 , stock_quantity: 6 , product_type : 'simple', cog : 18 },
    {  product_name: 'spray', reguler_price: 23, curr_price : 22 , stock_quantity: 6 , product_type : 'simple', cog : 18 },
    {  product_name: 'spray', reguler_price: 23, curr_price : 22 , stock_quantity: 6 , product_type : 'simple', cog : 18 },
    {  product_name: 'spray', reguler_price: 23, curr_price : 22 , stock_quantity: 6 , product_type : 'simple', cog : 18 },
    {  product_name: 'spray', reguler_price: 23, curr_price : 22 , stock_quantity: 6 , product_type : 'simple', cog : 18 },
    {  product_name: 'spray', reguler_price: 23, curr_price : 22 , stock_quantity: 6 , product_type : 'simple', cog : 18 },
    {  product_name: 'spray', reguler_price: 23, curr_price : 22 , stock_quantity: 6 , product_type : 'simple', cog : 18 },
    {  product_name: 'spray', reguler_price: 23, curr_price : 22 , stock_quantity: 6 , product_type : 'simple', cog : 18 },
    {  product_name: 'spray', reguler_price: 23, curr_price : 22 , stock_quantity: 6 , product_type : 'simple', cog : 18 },
    {  product_name: 'spray', reguler_price: 23, curr_price : 22 , stock_quantity: 6 , product_type : 'simple', cog : 18 },
    {  product_name: 'spray', reguler_price: 23, curr_price : 22 , stock_quantity: 6 , product_type : 'simple', cog : 18 },
    {  product_name: 'spray', reguler_price: 23, curr_price : 22 , stock_quantity: 6 , product_type : 'simple', cog : 18 },
    {  product_name: 'spray', reguler_price: 23, curr_price : 22 , stock_quantity: 6 , product_type : 'simple', cog : 18 },
    {  product_name: 'spray', reguler_price: 23, curr_price : 22 , stock_quantity: 6 , product_type : 'simple', cog : 18 },
    {  product_name: 'spray', reguler_price: 23, curr_price : 22 , stock_quantity: 6 , product_type : 'simple', cog : 18 },
    {  product_name: 'spray', reguler_price: 23, curr_price : 22 , stock_quantity: 6 , product_type : 'simple', cog : 18 },
    {  product_name: 'spray', reguler_price: 23, curr_price : 22 , stock_quantity: 6 , product_type : 'simple', cog : 18 },
    {  product_name: 'spray', reguler_price: 23, curr_price : 22 , stock_quantity: 6 , product_type : 'simple', cog : 18 },
    {  product_name: 'spray', reguler_price: 23, curr_price : 22 , stock_quantity: 6 , product_type : 'simple', cog : 18 },
    {  product_name: 'spray', reguler_price: 23, curr_price : 22 , stock_quantity: 6 , product_type : 'simple', cog : 18 },
    {  product_name: 'spray', reguler_price: 23, curr_price : 22 , stock_quantity: 6 , product_type : 'simple', cog : 18 },
    {  product_name: 'spray', reguler_price: 23, curr_price : 22 , stock_quantity: 6 , product_type : 'simple', cog : 18 },
    {  product_name: 'spray', reguler_price: 23, curr_price : 22 , stock_quantity: 6 , product_type : 'simple', cog : 18 },
    {  product_name: 'spray', reguler_price: 23, curr_price : 22 , stock_quantity: 6 , product_type : 'simple', cog : 18 },
    {  product_name: 'spray', reguler_price: 23, curr_price : 22 , stock_quantity: 6 , product_type : 'simple', cog : 18 },
    {  product_name: 'spray', reguler_price: 23, curr_price : 22 , stock_quantity: 6 , product_type : 'simple', cog : 18 },
    {  product_name: 'spray', reguler_price: 23, curr_price : 22 , stock_quantity: 6 , product_type : 'simple', cog : 18 },
    {  product_name: 'spray', reguler_price: 23, curr_price : 22 , stock_quantity: 6 , product_type : 'simple', cog : 18 },
    {  product_name: 'spray', reguler_price: 23, curr_price : 22 , stock_quantity: 6 , product_type : 'simple', cog : 18 },
    {  product_name: 'spray', reguler_price: 23, curr_price : 22 , stock_quantity: 6 , product_type : 'simple', cog : 18 },
    {  product_name: 'spray', reguler_price: 23, curr_price : 22 , stock_quantity: 6 , product_type : 'simple', cog : 18 },
    {  product_name: 'spray', reguler_price: 23, curr_price : 22 , stock_quantity: 6 , product_type : 'simple', cog : 18 },
    {  product_name: 'spray', reguler_price: 23, curr_price : 22 , stock_quantity: 6 , product_type : 'simple', cog : 18 },
    {  product_name: 'spray', reguler_price: 23, curr_price : 22 , stock_quantity: 6 , product_type : 'simple', cog : 18 },
    {  product_name: 'spray', reguler_price: 23, curr_price : 22 , stock_quantity: 6 , product_type : 'simple', cog : 18 },
    {  product_name: 'spray', reguler_price: 23, curr_price : 22 , stock_quantity: 6 , product_type : 'simple', cog : 18 },
    {  product_name: 'spray', reguler_price: 23, curr_price : 22 , stock_quantity: 6 , product_type : 'simple', cog : 18 },
    {  product_name: 'spray', reguler_price: 23, curr_price : 22 , stock_quantity: 6 , product_type : 'simple', cog : 18 },
    {  product_name: 'spray', reguler_price: 23, curr_price : 22 , stock_quantity: 6 , product_type : 'simple', cog : 18 },
  ]);
  
  

  return (

    <>

      <Grid container>

        <Grid item sm={10} style={{ background: 'mediumseagreen', position: 'fixed', color: 'white', top: 0, width: '100%', padding: '8px', paddingLeft: '2%', zIndex: 1, borderRadius: '5px'}}> 
            <h4> Product :: List and segments </h4> 
        </Grid>

        <Grid item sm={12}  style={{zIndex:'0',marginTop:'5%'}}>
          
          <Grid item sm={6}>

            <h4> Product Filter </h4>
            
            <Multiselect isObject={false} 
              placeholder=" + Add Filter" 
              onRemove={(e) => { addfilter(e, 99) }} onSelect={(e) => { addfilter(e, e[e.length - 1]) }} 
              options={filts} 
              selectedValues={[]} showCheckbox 
            />
            
              {/* {Seglist && 
              <Group position="left" style={{marginTop:'15px'}} >
              <Button onClick={() => setOpened(true)}>Order Segments</Button>
              </Group>
              }*/}

          </Grid>

          <Grid container>

            <Grid item xs={6} md={8} sm={4}>

              <form onSubmit={filterSubmit}>

                <input style={{ display: 'none' }} defaultValue="1" type="number" name="ajax_call" />

                {filterList_.length > 0 &&
                  <>
                    <strong>Create Segment :</strong>
                    <input style={{ marginBottom: '15px', width: '65%', height: '40px', fontSize: '15px' }}
                      type="text"
                      name="segname"
                      size="45"
                      placeholder="Insert segment name" />
                  </>
                }

                {filterList_}

                {filterList_.length > 0 && <input type="submit" value="Submit" />}

              </form>

            </Grid>

          </Grid>


          <Grid container>

            <Grid item sm={2} style={{ zIndex: 0,marginRight:'20px' }}>

              <ThemeProvider theme={defaultMaterialTheme}>

                {
                
                //cat_table && cat_table.length > 0 &&

                  <MaterialTable style={{borderRadius:'14px'}}

                    columns={[{ title: 'Catagory Name', field: 'catagory_name', },]}

                    //product_show_segment.php
                    onRowClick={(event, rowData) => {
                      dispatch(get_products_from_selected_catagory({ id: rowData.catagory_id, see_sin_cat: 1 }))
                    }}

                    data={cat_table_clone}
                    title=""
                    actions={[
                      {
                        icon: ListAltIcon,
                        tooltip: 'Fetch',
                        // onClick: (event, rowData) => alert("You saved " + rowData.catagory_id)
                      }
                    ]}

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
                      Clear: CancelIcon
                    }}
                    options={
                      {
                        pageSize: 10,       // make initial page size
                        emptyRowsWhenPaging: false,   // To avoid of having empty rows
                        pageSizeOptions: [10, 15, 25, 40, 50],
                        search: true,
                        searchFieldAlignment: "right",
                        exportButton: true,
                        exportAllData: true,
                        cellStyle: {
                          padding: '4px',
                        },
                        headerStyle: {
                          backgrounor: '#01579b',
                          or: '#FFF'
                        },
                      }
                    }

                    localization={{
                      pagination: {
                        labelRowsPerPage: ''
                      },
                      header: {
                        actions: ''
                      },
                    }}
                  />
                }
              </ThemeProvider>

            </Grid>



            <Grid item sm={9}>

              <ThemeProvider theme={defaultMaterialTheme}>
                {
                
                //product_table && product_table.length > 0 &&
                
                <MaterialTable style={{borderRadius:'14px'}}
                    columns={[
                      {
                        title: 'Product',
                        field: 'product_name',render: row => 
                        <div style={{background:'mintcream',fontFamily: 'system-ui',fontSize: '16px',textAlign: 'left'}}>  
                          <a href={'/Products/'+ row.product_id}> {row.product_name}</a>
                        </div>
                      },
                      { title: 'Regular Price', field: 'reguler_price',     render: row => <div style={{background:'whitesmoke'}}>  {row.reguler_price} </div> },
                      { title: 'Current Price', field: 'curr_price',        render: row => <div style={{background:'ghostwhite'}}>  {row.curr_price} </div> },
                      { title: 'On-Stock',      field: 'stock_quantity',    render: row => <div style={{background:'whitesmoke'}}>  {row.stock_quantity} </div> },
                      { title: 'Type',          field: 'product_type',      render: row => <div style={{background:'ghostwhite'}}>  {row.product_type} </div> },
                      {
                        title: 'COG', field: 'cog',
                        render: (row) => <> {row.product_type == 'simple' && <input name={row.product_id} form='cogform' type="number" placeholder={row.cog} onChange={handleCogChange} />} </>
                      },
                      {
                        title: '', field: '',
                        render: (row) => <> <input form='cogform' type="submit" value="Save-COG" /> </>
                      },
                    ]}
                    data={product_table_clone}
                    title="Current Products"
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
                      ResetSearch: CancelIcon

                    }}
                    options={
                      {
                          pageSize: 10,       // make initial page size
                          emptyRowsWhenPaging: false,   // To avoid of having empty rows
                          pageSizeOptions: [10, 15, 25, 40, 50],
                          search: true,
                          searchFieldAlignment: "right",
                          exportButton: true,
                          exportAllData: true,
                          cellStyle: {
                              padding: '4px',
                              lineHeight: 2,
                              fontFamily: 'system-ui',
                              textAlign: 'center',
                              borderBottom: '2px solid rgb(246, 224, 224)'
                          },
                          headerStyle: {
                              background:'mediumseagreen', 
                              fontSize: '17px', 
                              color:'white',
                              padding:'2px',
                              height:'40px'
                          },
                          // rowStyle: {
                          //     backgroundColor: '#EEE',
                          // }
                          //rowStyle: (data, index) => index % 2 === 0 ? { background: "ghostwhite" } : {background:'white'},

                      }
                    }
                    localization={{
                      pagination: {
                        labelRowsPerPage: '',
                        showFirstLastPageButtons: false,
                      }
                    }}
                  />
                }
              </ThemeProvider>

            </Grid>

            <form onSubmit={Update_cog} id="cogform">  </form>

          </Grid>
 
        </Grid>

      </Grid>


    </>

  )

}

export default ProductListAndSegments

