import React from "react";

import Grid from '@mui/material/Grid';

import { Sidenav, Nav } from 'rsuite';
import { Timeline } from 'rsuite';
import DashboardIcon from '@rsuite/icons/legacy/Dashboard';


import PeoplesIcon from '@rsuite/icons/Peoples';
import SendIcon from '@rsuite/icons/Send';
import GridIcon from '@rsuite/icons/Grid';
import CouponIcon from '@rsuite/icons/Coupon';
import UserBadgeIcon from '@rsuite/icons/UserBadge';
import OffIcon from '@rsuite/icons/Off';
import TagAuthorizeIcon from '@rsuite/icons/TagAuthorize';
import SpeakerIcon from '@rsuite/icons/Speaker';
import ListIcon from '@rsuite/icons/List';


//import CusLocCT from "../components/Customer/CusReport";
import { useNavigate } from 'react-router-dom';


function TestPage() {

    const navigate = useNavigate(); 
    const headerStyles = { "paddingLeft": "21%", "fontSize": "16px", "background": "rgb(52, 195, 255)", "color": "rgb(255, 255, 255)" }
    const itemStyle = {
        padding: '1%',
        background: 'white',
        paddingLeft: '9%',
        fontFamily: 'system-ui',
        color: '#1675e0',
        fontSize: 12,

    }

    const TimelineItemStyle = {
        padding: '1px 20px 0px 33px'
    }

    const iconStyle = {
        height: '20px', fontSize: '18px', color: '#1675e0'
    }

    return (

        <div>

            <Grid container>


                <Grid item sm={2}>

                    <Grid style={{ width: '250px' }}>

                        <Sidenav style={{ boxShadow: '0 7px 14px 0 rgb(65 69 88 / 10%), 0 3px 6px 0 rgb(0 0 0 / 7%)' }} >

                            <Sidenav.Body>

                                <Nav>

                                    <Nav.Item style={headerStyles} href="/Customers/reports" icon={<UserBadgeIcon style={{ fontSize: '18px' }} />} > Edit Profile </Nav.Item>

                                    <Nav.Item active icon={<DashboardIcon style={iconStyle} />}> Dashboard </Nav.Item>

                                    <Nav.Menu title="Customers" icon={<PeoplesIcon style={iconStyle} />}>
                                        <Timeline style={itemStyle}>
                                            <Timeline.Item style={TimelineItemStyle}>
                                                <Nav.Item style={{ padding: '0px' }}> 
                                                    <button onClick={
                                                        ()=>{
                                                            navigate(`/Customers/reports`)
                                                            //setCompo(<CusLocCT key={'CusLocCT'}/>);
                                                        }
                                                    }>
                                                        Reports
                                                    </button>  
                                                </Nav.Item>
                                            </Timeline.Item>
                                            <Timeline.Item style={TimelineItemStyle}><Nav.Item style={{ padding: '0px' }} href="/Customers/CustomerAndSegemnt"> Segments and Filters </Nav.Item></Timeline.Item>
                                            <Timeline.Item style={TimelineItemStyle}><Nav.Item style={{ padding: '0px' }} href="/Customers/retention"> Retention </Nav.Item></Timeline.Item>
                                            <Timeline.Item style={TimelineItemStyle}><Nav.Item style={{ padding: '0px' }} href="/Customers/retention/selected-city"> Retention-specific-city </Nav.Item></Timeline.Item>
                                            <Timeline.Item style={TimelineItemStyle}><Nav.Item style={{ padding: '0px' }} href="/"> Segment tracker </Nav.Item></Timeline.Item>
                                        </Timeline>
                                    </Nav.Menu>


                                    <Nav.Menu title="Orders" icon={<ListIcon style={iconStyle} />}>
                                        <Timeline style={itemStyle}>
                                            <Timeline.Item style={TimelineItemStyle}><Nav.Item style={{ padding: '0px' }} href="/Orders/">List and Segment</Nav.Item></Timeline.Item>
                                            <Timeline.Item style={TimelineItemStyle}><Nav.Item style={{ padding: '0px' }} href="/Orders/report" >Report</Nav.Item></Timeline.Item>
                                            <Timeline.Item style={TimelineItemStyle}><Nav.Item style={{ padding: '0px' }} href="/Orders/Segment-report" >Segment tracker</Nav.Item></Timeline.Item>
                                        </Timeline>
                                    </Nav.Menu>



                                    <Nav.Menu title="Products" icon={<GridIcon style={iconStyle} />}>
                                        <Timeline style={itemStyle}>
                                            <Timeline.Item style={TimelineItemStyle}><Nav.Item style={{ padding: '0px' }} href="/Products/"> Products  </Nav.Item></Timeline.Item>
                                            <Timeline.Item style={TimelineItemStyle}><Nav.Item style={{ padding: '0px' }} href="/Products/Sales"> Sales  </Nav.Item></Timeline.Item>
                                            <Timeline.Item style={TimelineItemStyle}><Nav.Item style={{ padding: '0px' }} href="/Products/Performance"> Performance </Nav.Item></Timeline.Item>
                                            <Timeline.Item style={TimelineItemStyle}><Nav.Item style={{ padding: '0px' }} href="/Products/Specific-city"> Specific city</Nav.Item></Timeline.Item>
                                            <Timeline.Item style={TimelineItemStyle}><Nav.Item style={{ padding: '0px' }} href="/Products/Customer-Segment-based-on-product-purchase"> Segment Based on Product-Buy </Nav.Item></Timeline.Item>
                                            <Timeline.Item style={TimelineItemStyle}><Nav.Item style={{ padding: '0px' }} href="/Products/Product-segment-performance"> Product Segments </Nav.Item></Timeline.Item>
                                        </Timeline>
                                    </Nav.Menu>



                                    <Nav.Menu title="Pricing" icon={<TagAuthorizeIcon style={iconStyle} />}>
                                        <Timeline style={itemStyle}>
                                            <Timeline.Item style={TimelineItemStyle}><Nav.Item style={{ padding: '0px' }} href="/Pricing/" >Create new</Nav.Item></Timeline.Item>
                                            <Timeline.Item style={TimelineItemStyle}><Nav.Item style={{ padding: '0px' }} href="/Pricing/Created" >Available</Nav.Item></Timeline.Item>
                                        </Timeline>
                                    </Nav.Menu>



                                    <Nav.Menu title="Engage" icon={<SendIcon style={iconStyle} />}>
                                        <Timeline style={itemStyle}>
                                            <Timeline.Item style={TimelineItemStyle}><Nav.Item style={{ padding: '0px' }} href="/Engage/CreateNew" >Create New</Nav.Item></Timeline.Item>
                                            <Timeline.Item style={TimelineItemStyle}><Nav.Item style={{ padding: '0px' }} href="/Engage/Available" >Available</Nav.Item></Timeline.Item>
                                        </Timeline>
                                    </Nav.Menu>

                                    <Nav.Menu title="Campaign" icon={<SpeakerIcon style={iconStyle} />}>
                                        <Timeline style={itemStyle}>
                                            <Timeline.Item style={TimelineItemStyle}><Nav.Item style={{ padding: '0px' }} href="/campaign/" > Add Source</Nav.Item></Timeline.Item>
                                            <Timeline.Item style={TimelineItemStyle}><Nav.Item style={{ padding: '0px' }} href="/campaign/orders" >Orders</Nav.Item></Timeline.Item>
                                            <Timeline.Item style={TimelineItemStyle}><Nav.Item style={{ padding: '0px' }} href="/campaign/Compare"  >Compare</Nav.Item></Timeline.Item>
                                        </Timeline>
                                    </Nav.Menu>


                                    <Nav.Menu title="Coupon" icon={<CouponIcon style={iconStyle} />}>
                                        <Timeline style={itemStyle}>
                                            <Timeline.Item style={TimelineItemStyle}><Nav.Item style={{ padding: '0px' }} href="/Coupons/" >Available</Nav.Item></Timeline.Item>
                                        </Timeline>
                                    </Nav.Menu>


                                    <Nav.Item href="/LogOut" style={headerStyles} icon={<OffIcon style={{ fontSize: '18px' }} />}>LogOut</Nav.Item>

                                </Nav>

                            </Sidenav.Body>

                        </Sidenav>

                    </Grid>

                </Grid>

                <Grid item sm={10}>

                    {/* {compo} */}

                </Grid>

            </Grid>






        </div>
    )
}


export default TestPage