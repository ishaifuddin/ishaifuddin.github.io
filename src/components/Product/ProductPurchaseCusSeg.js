import { ReactSession } from 'react-client-session';
import React, { useState, useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import Radio from '@mui/material/Radio';
import RadioGroup from '@mui/material/RadioGroup';
import { Modal, Button, Group, useMantineTheme } from '@mantine/core';

import Multiselect from 'multiselect-react-dropdown';
import Grid from "@mui/material/Grid";
import Search from '@material-ui/icons/Search'
import SaveAlt from '@material-ui/icons/SaveAlt'
import ChevronLeft from '@material-ui/icons/ChevronLeft'
import ChevronRight from '@material-ui/icons/ChevronRight'
import FirstPage from '@material-ui/icons/FirstPage'
import LastPage from '@material-ui/icons/LastPage'
import Check from '@material-ui/icons/Check'
import FilterList from '@material-ui/icons/FilterList'
import Remove from '@material-ui/icons/Remove'

import MaterialTable from 'material-table';
import { ThemeProvider, createTheme } from '@mui/material';

import BillCity from "../Order/OrderSegFilters/BillCity";
import ShipCity from "../Order/OrderSegFilters/ShipCity";
import ProductFilter from "./ProductFilter";

import { Get_Product_Purchase_Based_Cus_List_Obj } from "../../features/product/ProductPurchaseBasedCusSeg";
import { Get_Product_Purchase_Based_Cus_Seg_Obj } from "../../features/product/ProductPurchaseBasedCusSeg";

import { get_product_and_catagory_and_sku_data } from '../../features/product/ProductListAndSegment';
// import OutlinedInput from '@mui/material/OutlinedInput';
// import InputLabel from '@mui/material/InputLabel';
// import MenuItem from '@mui/material/MenuItem';
// import FormControl from '@mui/material/FormControl';
// import ListItemText from '@mui/material/ListItemText';
// import Select from '@mui/material/Select';
// import Checkbox from '@mui/material/Checkbox';


const ITEM_HEIGHT = 48;
const ITEM_PADDING_TOP = 8;
const MenuProps = {
    PaperProps: {
        style: {
            maxHeight: ITEM_HEIGHT * 4.5 + ITEM_PADDING_TOP,
            width: 'fit-content',
        },
    },
};



function ProductPurchaseCusSeg() {

    const [product_purchaseBasedSegment, setProduct_purchaseBasedSegment] = useState('');

    const Select_purchase_Based_cus_segment = (event) => {
        setProduct_purchaseBasedSegment(event.target.name);
        const { target: { value }, } = event;
        dispatch(Get_Product_Purchase_Based_Cus_List_Obj({ segid: value}))
    };


    const defaultMaterialTheme = createTheme();
    const theme = useMantineTheme();

    var dispatch = useDispatch();

    var product_obj = useSelector((state) => state.product_List_And_Segments.all_product_object);
   
    useEffect(() => {

        var is_dispatched1 = () => {
            ReactSession.get("Get_Product_Purchase_Based_Cus_Seg_Obj");
            if (ReactSession.get("Get_Product_Purchase_Based_Cus_Seg_Obj")) {
                return true;
            } else {
                ReactSession.set("Get_Product_Purchase_Based_Cus_Seg_Obj", "1");
                return false;
            }
        }

        if (!(is_dispatched1())) {
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
          }
      
          if (!(is_dispatched2())) {
            dispatch(get_product_and_catagory_and_sku_data({ ajax_call: 2 }));
          }

    }, [])
    
    var ops = [];
    if (product_obj && (product_obj.length > 0)) {
        for (var i of product_obj) {
            var label = i.product_name; var value = i.product_id;
            ops.push({ value: value, label: label });
        }
    }


    var [seletedpros, setSeletedPros] = useState('');
    var [segname, setSegname] = useState('');

    var [billCity_, setbillCity_] = useState(false);
    var [shipCity_, setshipCity_] = useState(false);

    var [BillShip, setBillShip] = useState('');


    var customer_list_object = useSelector((state) => state.Product_Purchase_Based_Customer_List_and_Segment);

    var product_purchase_Submit = (event) => {
        event.preventDefault();
        const fdata = new FormData(event.target);
        const data = Object.fromEntries(fdata.entries());
        setSegname('');
        dispatch(Get_Product_Purchase_Based_Cus_List_Obj(data));
    }

    var [filterList1, setfilterList1] = useState([]);

    var product_selected_deselected = (e, arg) => {

        // cus-Filter De-selested from Dropdown
        if (arg === 99) {

            // Get previous state
            var prev_state = JSON.parse(localStorage.getItem('shopex_Product_cusseg_filts'));

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


    var segs = [];
    if ((customer_list_object.Product_Purchase_Based_Cus_Segment_Obj).length > 0) {
        segs = structuredClone(customer_list_object.Product_Purchase_Based_Cus_Segment_Obj);
    }

    var [opened, setOpened] = useState(false);

    var consumers = [];
    if ((customer_list_object.Product_Purchase_Based_Cus_List_Obj).length > 0) {
        consumers = structuredClone(customer_list_object.Product_Purchase_Based_Cus_List_Obj)
    }

    return (

        <>

            <Grid container>


                <Grid container sm={10} style={{ background: 'mediumseagreen', position: 'fixed', color: 'white', top: 0, width: '100%', padding: '8px', paddingLeft: '2%', zIndex: 1, borderRadius: '5px' }}>
                    <h4> Product :: Customer segment based on product purchase </h4>
                </Grid>

                <Grid item sm={12} style={{marginTop:'5%',zIndex:'0'}}>


                    {/* <InputLabel id="demo-multiple-checkbox-label">Segmnent's</InputLabel>
                    <Select
                        labelId="demo-multiple-checkbox-label"
                        id="demo-multiple-checkbox"
                        single
                        value={SName}
                        onChange={Select_purchase_Based_cus_segment}
                        input={<OutlinedInput label="Segmnent's" />}
                        MenuProps={MenuProps}
                    >
                        {segs.map((item) => (
                            <MenuItem key={item.name} value={item.id}>
                                <Checkbox checked={segs.indexOf(item) > -1} />
                                <ListItemText primary={item.name} secondary={item.filter} />
                            </MenuItem>
                        ))}
                    </Select> */}


                    {/* Segment List Modal  */}


                    <Modal
                        overflow="inside"
                        overlayColor={theme.colorScheme === 'dark' ? theme.colors.dark[9] : theme.colors.gray[2]}
                        overlayOpacity={0.55}
                        overlayBlur={3}
                        size="70%"
                        opened={opened}
                        onClose={() => setOpened(false)}
                        title="Customer segments">

                        <ThemeProvider theme={defaultMaterialTheme}>

                            {
                                segs && <MaterialTable style={{borderRadius:'14px'}}
                                    columns={[
                                        {
                                            title: 'Segment',
                                            field: 'name',
                                            render: row =>
                                                <Button onClick={() => { setSegname(row.name); dispatch(Get_Product_Purchase_Based_Cus_List_Obj({ segid: row.id })) }}> {row.name} </Button>
                                        },
                                        { title: 'Filter', field: 'filter' ,render: row => <div style={{background:'whitesmoke'}}>  {row.filter} </div>},
                                        { title: 'Created', field: 'created',render: row => <div style={{background:'ghostwhite'}}>  {row.created} </div> }
                                    ]}
                                    data={segs || []}
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
                                                fontFamily: 'Circular-Loom',
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

                    </Modal>


                    {/* Customer filters Dropdown  */}
                    <div>
                        {structuredClone(customer_list_object.Product_Purchase_Based_Cus_Segment_Obj) &&
                            <Group position="left" style={{ marginTop: '15px' }} >
                                <Button onClick={() => setOpened(true)}>Customer Segments</Button>
                            </Group>
                        }
                    </div>




                    {/* Modal :: Customers List :: product purchase behavior  */}

                    <div style={{ margin: '15px' }}>

                        <form onSubmit={product_purchase_Submit}>

                            <div style={{ width: '60%' }}>

                                <input style={{ width: '400px', height: '41px', fontSize: '17px' }} name="proseg" type="text" placeholder="insert segment name to save " />

                                {ops &&

                                    <Multiselect
                                        displayValue="label"
                                        placeholder="Select-Product"
                                        onRemove={
                                            (e) => {
                                                var arr = [];
                                                for (var i of e) {
                                                    var data = i.value + '_SHOPEX_' + i.label;
                                                    arr.push(data);
                                                }
                                                setSeletedPros(JSON.stringify(arr));
                                                product_selected_deselected(arr, 99);
                                            }
                                        }
                                        onSelect={
                                            (e) => {
                                                var arr = [];
                                                var data = "";
                                                for (var i of e) {
                                                    data = i.value + '_SHOPEX_' + i.label;
                                                    arr.push(data);
                                                }
                                                setSeletedPros(JSON.stringify(arr));
                                                product_selected_deselected(arr, data);
                                            }
                                        }
                                        options={ops}
                                        selectedValues={[]}
                                        showCheckbox />
                                }

                            </div>


                            <div style={{ display: 'inline-flex', width: '85%', marginTop: '2%' }}>

                                <strong style={{ margin: '11px' }}> Location </strong>
                                <RadioGroup style={{ display: 'inline-block' }}
                                    onChange={(e) => {
                                        if (e.target.value == 'Billing_City') {
                                            setbillCity_(true);
                                            setshipCity_(false);
                                            setBillShip('Billing_City');
                                        } else if (e.target.value == 'Shipping_City') {
                                            setbillCity_(false);
                                            setshipCity_(true);
                                            setBillShip('Shipping_City');
                                        }
                                    }
                                    }>
                                    <Radio onClick={(e) => { if (e.target.value === BillShip) setbillCity_(false); }} value="Billing_City" name="onsale" /> Billing City
                                    <Radio onClick={(e) => { if (e.target.value === BillShip) setshipCity_(false); }} value="Shipping_City" name="onsale" /> Shipping City
                                </RadioGroup>

                                {
                                    billCity_ && <div style={{ width: '40%' }}>
                                        <BillCity />
                                    </div>
                                }

                                {
                                    shipCity_ && <div style={{ width: '40%' }}>
                                        <ShipCity />
                                    </div>
                                }

                            </div>


                            <div>
                                {filterList1}
                                {filterList1.length > 0 &&
                                <input type="submit" value="Submit" />}
                            </div>

                            <input name="billship" type={'hidden'} value={BillShip} />
                            <input name="prods" type={'hidden'} value={seletedpros} />

                        </form>

                    </div>


                    <ThemeProvider theme={defaultMaterialTheme}>

                        {consumers && <MaterialTable style={{borderRadius:'14px'}}

                            columns={[
                                { title: 'Customer', field: 'email' },
                                { title: 'Spend', field: 'total_spend' },
                                { title: 'Unit', field: 'total_unit' },
                                { title: 'Order', field: 'total_order' },
                                { title: 'On-Dis-Order', field: 'total_ondis' },
                                { title: 'FirstBuy', field: 'first_purchase' },
                                { title: 'LastBuy', field: 'last_purchase' },
                                { title: 'AvgDayGapOfPurchase', field: 'avgDayGapOfPurchase' }
                            ]}
                            data={consumers}
                            title={product_purchaseBasedSegment}
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
                                        fontFamily: 'Circular-Loom',
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

            </Grid>

        </>
    )
}

export default ProductPurchaseCusSeg