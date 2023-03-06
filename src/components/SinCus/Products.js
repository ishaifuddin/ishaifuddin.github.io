import React, { useEffect, useState } from "react";
import axios from "axios";
import Search from '@material-ui/icons/Search'
import SaveAlt from '@material-ui/icons/SaveAlt'
import ChevronLeft from '@material-ui/icons/ChevronLeft'
import ChevronRight from '@material-ui/icons/ChevronRight'
import FirstPage from '@material-ui/icons/FirstPage'
import LastPage from '@material-ui/icons/LastPage'
import Check from '@material-ui/icons/Check'
import FilterList from '@material-ui/icons/FilterList'
import CancelIcon from '@mui/icons-material/Cancel';

import MaterialTable from 'material-table';
import { ThemeProvider, createTheme } from '@mui/material';

import { useParams } from 'react-router-dom'
import Grid from "@mui/material/Grid";

import Timeline from '@mui/lab/Timeline';
//import TimelineItem from '@mui/lab/TimelineItem';
import TimelineSeparator from '@mui/lab/TimelineSeparator';
import TimelineConnector from '@mui/lab/TimelineConnector';
import TimelineContent from '@mui/lab/TimelineContent';
import TimelineDot from '@mui/lab/TimelineDot';
//import FastfoodIcon from '@mui/icons-material/Fastfood';
//import HotelIcon from '@mui/icons-material/Hotel';
import Typography from '@mui/material/Typography';

import PersonPinIcon from '@mui/icons-material/PersonPin';


import TimelineItem, {
    timelineItemClasses,
} from '@mui/lab/TimelineItem';


import Orders from "./Orders";


function Products() {

    const { chc } = useParams();

    const defaultMaterialTheme = createTheme();

   
    var [pros, setPros] = useState([]);
    var [ondis_pros, setOndisPros] = useState([]);
    var [profile, setprofile] = useState([{}]);


    useEffect(() => {

        // axios.post('https://server.shopex.io/customers/single-customer/SingleCustomer_products.php', {
        //     customer_chc: chc
        // }, { withCredentials: true })
        // .then(function (response) {
        //     setprofile(response.data.profile);
        //     setPros(response.data.pros);
        //     setOndisPros(response.data.pros_ondis);
        // })
        // .catch(function (error) {
        //     console.log(error);
        // });

        ///
        const getProduct = async () => {
            try {
              const res = await axios.post('https://server.shopex.io/customers/single-customer/SingleCustomer_products.php', {customer_chc: chc}, { withCredentials: true });
              setprofile(res.data.profile);
              setPros(res.data.pros);
              setOndisPros(res.data.pros_ondis);
            } catch {}
        };
        getProduct();
        ///

    }, [chc])

    console.log(profile);

    var columns = [
        { title: 'Product', field: 'Product', render: row => <div style={{ background: 'mintcream', fontFamily: 'system-ui', fontSize: '16px', textAlign: 'left' }}>  {row.Product} </div> },
        { title: 'firstbuy', field: 'firstbuy', render: row => <div style={{ background: 'whitesmoke' }}>  {row.firstbuy} </div> },
        { title: 'lastbuy', field: 'lastbuy', render: row => <div style={{ background: 'ghostwhite' }}>  {row.lastbuy} </div> },
        { title: 'avg buy gap', field: 'avg_buy_gap', render: row => <div style={{ background: 'whitesmoke' }}>  {row.avg_buy_gap} </div> },
        { title: 'Total unit', field: 'totalunit', render: row => <div style={{ background: 'ghostwhite' }}>  {row.totalunit} </div> },
        { title: 'Total spent', field: 'totalspent', render: row => <div style={{ background: 'whitesmoke' }}>  {row.totalspent} </div> },
        { title: 'Total order', field: 'totalorder', render: row => <div style={{ background: 'ghostwhite' }}>  {row.totalorder} </div> }
    ];


    var ondisbuy_columns = [
        { title: 'Product', field: 'Product', render: row => <div style={{ background: 'mintcream', fontFamily: 'system-ui', fontSize: '16px', textAlign: 'left' }}>  {row.Product} </div> },
        { title: 'Total unit', field: 'totalunit', render: row => <div style={{ background: 'ghostwhite' }}>  {row.totalunit} </div> },
        { title: 'Total spent', field: 'totalspent', render: row => <div style={{ background: 'whitesmoke' }}>  {row.totalspent} </div> },
        { title: 'Times bought', field: 'timesbought', render: row => <div style={{ background: 'ghostwhite' }}>  {row.timesbought} </div> }

    ];

    var timelinecontentstyle = { background:"ghostwhite","margin": "0px", "fontWeight": "400", "lineHeight": "1", "letterSpacing": "0.00938em", "flex": "1 1 0%", "padding": "3px 6px 5px 9px", "textAlign": "left", "fontSize": "12px", "boxShadow": "rgb(65 69 88 / 10%) 0px 7px 14px 0px, rgb(0 0 0 / 7%) 0px 3px 6px 0px", "height": "35px", "fontFamily": "system-ui" };

    return (

        <>

            <Grid container style={{"background":"rgb(52, 195, 255)","width":"82%","margin":"1%","borderRadius":"50px","padding":"4px","boxShadow":"rgb(65 69 88 / 10%) 0px 7px 14px 0px, rgb(0 0 0 / 7%) 0px 3px 6px 0px"}}>
                <Grid style={{ display: 'inline-flex' }}>
                    <PersonPinIcon style={{"fontSize":"60px","color":"snow","borderRadius":"30px","padding":"6px","marginTop":"3px"}}/>
                    <div style={{}}>
                        <h5 style={{ marginTop: '11px', marginLeft: '10px', color: 'white', letterSpacing: '1px' }}>{profile[0].name}</h5>
                        <p style={{ marginLeft: '10px', marginTop: '0px', color: 'white' }}>{profile[0].mail}</p>
                    </div>
                </Grid>
            </Grid>

            <Grid container>

                <Grid item sm={2}>

                    {profile.map((element, index) => (

                        <Timeline
                            sx={{
                                [`& .${timelineItemClasses.root}:before`]: {
                                    flex: 0,
                                    padding: 0,
                                },
                            }}>

                            {/* <TimelineItem style={{ minHeight: '57px' }}>
                                <TimelineSeparator>
                                    <TimelineDot variant="outlined" color="primary" />
                                    <TimelineConnector />
                                </TimelineSeparator>
                                <TimelineContent style={timelinecontentstyle}>
                                    <Typography variant="p" component="p">
                                        Name
                                    </Typography>
                                    <Typography>{element.name}</Typography>
                                </TimelineContent>
                            </TimelineItem>


                            <TimelineItem style={{ minHeight: '57px' }}>
                                <TimelineSeparator>
                                    <TimelineDot variant="outlined" color="secondary" />
                                    <TimelineConnector />
                                </TimelineSeparator>
                                <TimelineContent style={timelinecontentstyle}>
                                    <Typography variant="p" component="span">
                                        Mail
                                    </Typography>
                                    <Typography>{element.mail}</Typography>
                                </TimelineContent>
                            </TimelineItem> */}





                            <TimelineItem style={{ minHeight: '57px' }}>
                                <TimelineSeparator>
                                    <TimelineDot variant="outlined" color="primary" />
                                    <TimelineConnector />
                                </TimelineSeparator>
                                <TimelineContent style={timelinecontentstyle}>
                                    <Typography variant="p" component="span">
                                        Order
                                    </Typography>
                                    <Typography>{element.order}</Typography>
                                </TimelineContent>
                            </TimelineItem>



                            <TimelineItem style={{ minHeight: '57px' }}>

                                <TimelineSeparator>
                                    <TimelineDot variant="outlined" color="secondary" />
                                    <TimelineConnector />
                                </TimelineSeparator>

                                <TimelineContent style={timelinecontentstyle}>
                                    <Typography variant="p" component="span">
                                        Engage :: order
                                    </Typography>
                                    <Typography>{element.en_email_order}</Typography>
                                </TimelineContent>

                            </TimelineItem>

                            <TimelineItem style={{ minHeight: '57px' }}>
                                <TimelineSeparator>
                                    <TimelineDot variant="outlined" color="primary" />
                                    <TimelineConnector />
                                </TimelineSeparator>
                                <TimelineContent style={timelinecontentstyle}>
                                    <Typography variant="p" component="span">
                                        Spent
                                    </Typography>
                                    <Typography>{element.spent}</Typography>
                                </TimelineContent>
                            </TimelineItem>



                            <TimelineItem style={{ minHeight: '57px' }}>
                                <TimelineSeparator>
                                    <TimelineDot variant="outlined" color="secondary" />
                                    <TimelineConnector />
                                </TimelineSeparator>
                                <TimelineContent style={timelinecontentstyle}>
                                    <Typography variant="p" component="span">
                                        AOV
                                    </Typography>
                                    <Typography>{element.aov}</Typography>
                                </TimelineContent>
                            </TimelineItem>



                            <TimelineItem style={{ minHeight: '57px' }}>
                                <TimelineSeparator>
                                    <TimelineDot variant="outlined" color="primary" />
                                    <TimelineConnector />
                                </TimelineSeparator>
                                <TimelineContent style={timelinecontentstyle}>
                                    <Typography variant="p" component="span">
                                        Last Order
                                    </Typography>
                                    <Typography>{element.lod}</Typography>
                                </TimelineContent>
                            </TimelineItem>



                            <TimelineItem style={{ minHeight: '57px' }}>
                                <TimelineSeparator>
                                    <TimelineDot variant="outlined" color="secondary" />
                                    <TimelineConnector />
                                </TimelineSeparator>
                                <TimelineContent style={timelinecontentstyle}>
                                    <Typography variant="p" component="span">
                                        First Order
                                    </Typography>
                                    <Typography>{element.fod}</Typography>
                                </TimelineContent>
                            </TimelineItem>



                            <TimelineItem style={{ minHeight: '57px' }}>
                                <TimelineSeparator>
                                    <TimelineDot variant="outlined" color="primary" />
                                    <TimelineConnector />
                                </TimelineSeparator>
                                <TimelineContent style={timelinecontentstyle}>
                                    <Typography variant="p" component="span">
                                        AOP
                                    </Typography>
                                    <Typography>{element.aop}</Typography>
                                </TimelineContent>
                            </TimelineItem>


                            <TimelineItem style={{ minHeight: '57px' }}>
                                <TimelineSeparator>
                                    <TimelineDot variant="outlined" color="secondary" />
                                    <TimelineConnector />
                                </TimelineSeparator>
                                <TimelineContent style={timelinecontentstyle}>
                                    <Typography variant="p" component="span">
                                        Avg. Day Gap
                                    </Typography>
                                    <Typography>{element.adbo}</Typography>
                                </TimelineContent>
                            </TimelineItem>



                            <TimelineItem style={{ minHeight: '57px' }}>
                                <TimelineSeparator>
                                    <TimelineDot variant="outlined" color="primary" />
                                    <TimelineConnector />
                                </TimelineSeparator>
                                <TimelineContent style={timelinecontentstyle}>
                                    <Typography variant="p" component="span">
                                        Registration
                                    </Typography>
                                    <Typography>{element.regdate}</Typography>
                                </TimelineContent>
                            </TimelineItem>


                            <TimelineItem style={{ minHeight: '57px' }}>
                                <TimelineSeparator>
                                    <TimelineDot variant="outlined" color="secondary" />
                                    <TimelineConnector />
                                </TimelineSeparator>
                                <TimelineContent style={timelinecontentstyle}>
                                    <Typography variant="p" component="span">
                                        Shipping Cost
                                    </Typography>
                                    <Typography>{element.shipping}</Typography>
                                </TimelineContent>
                            </TimelineItem>


                            <TimelineItem style={{ minHeight: '57px' }}>
                                <TimelineSeparator>
                                    <TimelineDot variant="outlined" color="primary" />
                                    <TimelineConnector />
                                </TimelineSeparator>
                                <TimelineContent style={timelinecontentstyle}>
                                    <Typography variant="p" component="span">
                                        Avg. Shipping Cost
                                    </Typography>
                                    <Typography>{element.avg_shipping}</Typography>
                                </TimelineContent>
                            </TimelineItem>




                            <TimelineItem style={{ minHeight: '57px' }}>
                                <TimelineSeparator>
                                    <TimelineDot variant="outlined" color="secondary" />
                                    <TimelineConnector />
                                </TimelineSeparator>
                                <TimelineContent style={timelinecontentstyle}>
                                    <Typography variant="p" component="span">
                                        Discount
                                    </Typography>
                                    <Typography>{element.discount}</Typography>
                                </TimelineContent>
                            </TimelineItem>



                            <TimelineItem style={{ minHeight: '57px' }}>
                                <TimelineSeparator>
                                    <TimelineDot variant="outlined" color="primary" />
                                    <TimelineConnector />
                                </TimelineSeparator>
                                <TimelineContent style={timelinecontentstyle}>
                                    <Typography variant="p" component="span">
                                        Avg. Discount
                                    </Typography>
                                    <Typography>{element.avg_discount}</Typography>
                                </TimelineContent>
                            </TimelineItem>


                            <TimelineItem style={{ minHeight: '57px' }}>
                                <TimelineSeparator>
                                    <TimelineDot variant="outlined" color="secondary" />
                                    
                                </TimelineSeparator>
                                <TimelineContent style={timelinecontentstyle}>
                                    <Typography variant="p" component="span">
                                        Tax
                                    </Typography>
                                    <Typography>{element.sum_total_tax}</Typography>
                                </TimelineContent>
                            </TimelineItem>


                        </Timeline>

                    ))}

                </Grid>




                {/* {profile.map((element, index) => (

                        <div>
                            <strong> Name :: {element.name} </strong>
                            <strong> mail :: {element.mail} </strong>
                            <strong> order :: {element.order} </strong>
                            <strong> en_email_order :: {element.en_email_order} </strong>
                            <strong> spent :: {element.spent} </strong>
                            <strong> aov :: {element.aov} </strong>
                            <strong> lod :: {element.lod} </strong>
                            <strong> fod :: {element.fod} </strong>
                            <strong> aop :: {element.aop} </strong>
                            <strong> adbo :: {element.adbo} </strong>
                            <strong> regdate :: {element.regdate} </strong>
                            <strong> shipping :: {element.shipping} </strong>
                            <strong> avg_shipping :: {element.avg_shipping} </strong>
                            <strong> discount :: {element.discount} </strong>
                            <strong> avg_discount :: {element.avg_discount} </strong>
                            <strong> sum_total_tax :: {element.sum_total_tax} </strong>
                        </div>

                    ))} */}

                <Grid item sm={8}>

                    <Grid style={{marginTop:'8px'}}>
                        <ThemeProvider theme={defaultMaterialTheme}>
                            <MaterialTable style={{borderRadius:'14px'}}
                                columns={columns}
                                data={pros}
                                title={'Product Purchased'}

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
                                            lineHeight: 2,
                                            fontFamily: 'Circular-Loom',
                                            textAlign: 'center',
                                            borderBottom: '2px solid rgb(246, 224, 224)'
                                        },
                                        headerStyle: {
                                            background: 'rgb(52, 195, 255)',
                                            fontSize: '17px',
                                            color: 'white',
                                            padding: '2px',
                                            height: '40px'
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
                                    }
                                }}
                            />
                        </ThemeProvider>
                    </Grid>


                    <Grid style={{marginTop:'20px'}}>
                        <ThemeProvider theme={defaultMaterialTheme}>
                            <MaterialTable style={{borderRadius:'14px'}}
                                columns={ondisbuy_columns}
                                data={ondis_pros}
                                title={'Product Purchased on discount'}

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
                                            lineHeight: 2,
                                            fontFamily: 'Circular-Loom',
                                            textAlign: 'center',
                                            borderBottom: '2px solid rgb(246, 224, 224)'
                                        },
                                        headerStyle: {
                                            background: 'rgb(52, 195, 255)',
                                            fontSize: '17px',
                                            color: 'white',
                                            padding: '2px',
                                            height: '40px'
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
                                    }
                                }}
                            />
                        </ThemeProvider>
                    </Grid>

                    <Orders />

                </Grid>

            </Grid>
        </>

    )

}

export default Products