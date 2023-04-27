import React, { useState } from "react";
import { Link } from "react-router-dom";

import List from "@mui/material/List";
import ListSubheader from "@mui/material/ListSubheader";
import ListItemButton from "@mui/material/ListItemButton";
import ListItemIcon from "@mui/material/ListItemIcon";
import ListItemText from "@mui/material/ListItemText";
import Collapse from "@mui/material/Collapse";
import ExpandLess from "@mui/icons-material/ExpandLess";
import ExpandMore from "@mui/icons-material/ExpandMore";
import NavigateNextOutlinedIcon from "@mui/icons-material/NavigateNextOutlined";
import PermContactCalendarIcon from "@material-ui/icons/PermContactCalendar";

import PeopleIcon from "@mui/icons-material/People";
import WidgetsIcon from "@mui/icons-material/Widgets";
import ShoppingBasketIcon from "@mui/icons-material/ShoppingBasket";
import CampaignIcon from "@mui/icons-material/Campaign";
import DiscountRoundedIcon from "@mui/icons-material/DiscountRounded";
import LocalOfferIcon from "@mui/icons-material/LocalOffer";
import ScheduleSendIcon from "@mui/icons-material/ScheduleSend";
import ManageAccountsIcon from "@mui/icons-material/ManageAccounts";
import AnalyticsIcon from "@mui/icons-material/Analytics";

function SideNav() {
  var [open1, setOpen1] = useState(false);
  var [open2, setOpen2] = useState(false);
  var [open3, setOpen3] = useState(false);
  var [open4, setOpen4] = useState(false);
  var [open5, setOpen5] = useState(false);
  var [open6, setOpen6] = useState(false);

  const [selectedIndex, setSelectedIndex] = useState(0);

  const handleClick1 = () => {
    setSelectedIndex(1);
    setOpen1(!open1);
  };
  const handleClick2 = () => {
    setSelectedIndex(2);
    setOpen2(!open2);
  };
  const handleClick3 = () => {
    setSelectedIndex(3);
    setOpen3(!open3);
  };
  const handleClick4 = () => {
    setSelectedIndex(4);
    setOpen4(!open4);
  };
  const handleClick5 = () => {
    setSelectedIndex(5);
    setOpen5(!open5);
  };
  const handleClick6 = () => {
    setSelectedIndex(6);
    setOpen6(!open6);
  };

  const handleListItemClick = (event, index) => {
    setSelectedIndex(index);
  };

  return (
    <>
      {/* <Grid style={{ width: '250px' }}>

                <Sidenav style={{ boxShadow: '0 7px 14px 0 rgb(65 69 88 / 10%), 0 3px 6px 0 rgb(0 0 0 / 7%)'}} >

                    <Sidenav.Body>

                        <Nav style={{position:'fixed' }}>

                            <Nav.Item style={headerStyles} href="/Customers/reports" icon={<UserBadgeIcon style={{ fontSize: '18px' }} />} > Edit Profile </Nav.Item>

                            <Nav.Item active icon={<DashboardIcon style={iconStyle} />}> Dashboard </Nav.Item>

                            <Nav.Menu title="Customers" icon={<PeoplesIcon style={iconStyle} />}>
                                <Timeline style={itemStyle}>
                                    <Timeline.Item style={TimelineItemStyle}><Nav.Item style={{ padding: '0px' }} href="/Customers/reports"> Reports </Nav.Item></Timeline.Item>
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

            </Grid> */}

      <List
        className="nav-list"
        component="nav"
        aria-labelledby="nested-list-subheader"
        subheader={
          <Link to="/Dashboard">
            <img className="logo" src="/images/shopex.png" />
          </Link>
        }
      >
        <hr />
        <ListItemButton
          selected={selectedIndex === 0}
          onClick={(event) => handleListItemClick(event, 0)}
        >
          <ListItemText>
            <Link to="/Dashboard">
              <ListItemIcon>
                <AnalyticsIcon style={{ color: "#7366E3" }} />
              </ListItemIcon>
              Dashboard
            </Link>
          </ListItemText>
        </ListItemButton>

        <ListItemButton selected={selectedIndex === 1} onClick={handleClick1}>
          <ListItemIcon>
            <PeopleIcon style={{ color: "#F44D48" }} />
          </ListItemIcon>
          <ListItemText primary="Customers" />
          {open1 ? <ExpandLess /> : <ExpandMore />}
        </ListItemButton>

        <Collapse className="nice" in={open1} timeout="auto" unmountOnExit>
          <ListItemButton sx={{ pl: 4 }}>
            <ListItemIcon>
              <NavigateNextOutlinedIcon />
            </ListItemIcon>
            <ListItemText>
              <Link to="/Customers/reports">Reports</Link>{" "}
            </ListItemText>
          </ListItemButton>
        </Collapse>

        <Collapse in={open1} timeout="auto" unmountOnExit>
          <ListItemButton sx={{ pl: 4 }}>
            <ListItemIcon>
              <NavigateNextOutlinedIcon />
            </ListItemIcon>
            <ListItemText>
              {" "}
              <Link to="/Customers/CustomerAndSegemnt">List And Segemnt</Link>
            </ListItemText>
          </ListItemButton>
        </Collapse>

        <Collapse in={open1} timeout="auto" unmountOnExit>
          <ListItemButton sx={{ pl: 4 }}>
            <ListItemIcon>
              <NavigateNextOutlinedIcon />
            </ListItemIcon>
            <ListItemText>
              {" "}
              <Link to="/Customers/retention">Retention</Link>{" "}
            </ListItemText>
          </ListItemButton>
        </Collapse>

        <Collapse in={open1} timeout="auto" unmountOnExit>
          <ListItemButton sx={{ pl: 4 }}>
            <ListItemIcon>
              <NavigateNextOutlinedIcon />
            </ListItemIcon>
            <ListItemText>
              {" "}
              <Link to="/Customers/retention/selected-city">
                Retention-SingleCity
              </Link>
            </ListItemText>
          </ListItemButton>
        </Collapse>

        <ListItemButton selected={selectedIndex === 2} onClick={handleClick2}>
          <ListItemIcon>
            <WidgetsIcon style={{ color: "#2BCEA1" }} />
          </ListItemIcon>
          <ListItemText primary="Products" />
          {open2 ? <ExpandLess /> : <ExpandMore />}
        </ListItemButton>

        <Collapse in={open2} timeout="auto" unmountOnExit>
          <ListItemButton sx={{ pl: 4 }}>
            <ListItemIcon>
              <NavigateNextOutlinedIcon />
            </ListItemIcon>
            <ListItemText>
              {" "}
              <Link to="/Products">Available</Link>{" "}
            </ListItemText>
          </ListItemButton>
        </Collapse>
        <Collapse in={open2} timeout="auto" unmountOnExit>
          <ListItemButton sx={{ pl: 4 }}>
            <ListItemIcon>
              <NavigateNextOutlinedIcon />
            </ListItemIcon>
            <ListItemText>
              {" "}
              <Link to="/Products/Sales">Sales</Link>{" "}
            </ListItemText>
          </ListItemButton>
        </Collapse>
        <Collapse in={open2} timeout="auto" unmountOnExit>
          <ListItemButton sx={{ pl: 4 }}>
            <ListItemIcon>
              <NavigateNextOutlinedIcon />
            </ListItemIcon>
            <ListItemText>
              {" "}
              <Link to="/Products/Performance">Performance</Link>{" "}
            </ListItemText>
          </ListItemButton>
        </Collapse>
        <Collapse in={open2} timeout="auto" unmountOnExit>
          <ListItemButton sx={{ pl: 4 }}>
            <ListItemIcon>
              <NavigateNextOutlinedIcon />
            </ListItemIcon>
            <ListItemText>
              {" "}
              <Link to="/Products/Specific-city">
                {" "}
                ShipCity-Performance
              </Link>{" "}
            </ListItemText>
          </ListItemButton>
        </Collapse>
        <Collapse in={open2} timeout="auto" unmountOnExit>
          <ListItemButton sx={{ pl: 4 }}>
            <ListItemIcon>
              <NavigateNextOutlinedIcon />
            </ListItemIcon>
            <ListItemText>
              {" "}
              <Link to="/Products/Customer-Segment-based-on-product-purchase">
                {" "}
                OrderBased Segment{" "}
              </Link>{" "}
            </ListItemText>
          </ListItemButton>
        </Collapse>
        <Collapse in={open2} timeout="auto" unmountOnExit>
          <ListItemButton sx={{ pl: 4 }}>
            <ListItemIcon>
              <NavigateNextOutlinedIcon />
            </ListItemIcon>
            <ListItemText>
              {" "}
              <Link to="/Products/Product-segment-performance">
                {" "}
                Segment Performance{" "}
              </Link>{" "}
            </ListItemText>
          </ListItemButton>
        </Collapse>

        <ListItemButton selected={selectedIndex === 3} onClick={handleClick3}>
          <ListItemIcon>
            <ShoppingBasketIcon style={{ color: "#FB7A40" }} />
          </ListItemIcon>
          <ListItemText primary="Orders" />
          {open3 ? <ExpandLess /> : <ExpandMore />}
        </ListItemButton>

        <Collapse in={open3} timeout="auto" unmountOnExit>
          <ListItemButton sx={{ pl: 4 }}>
            <ListItemIcon>
              <NavigateNextOutlinedIcon />
            </ListItemIcon>
            <ListItemText>
              {" "}
              <Link to="/Orders/Report">Report</Link>{" "}
            </ListItemText>
          </ListItemButton>
        </Collapse>
        <Collapse in={open3} timeout="auto" unmountOnExit>
          <ListItemButton sx={{ pl: 4 }}>
            <ListItemIcon>
              <NavigateNextOutlinedIcon />
            </ListItemIcon>
            <ListItemText>
              {" "}
              <Link to="/Orders">List And Segments</Link>{" "}
            </ListItemText>
          </ListItemButton>
        </Collapse>

        <ListItemButton selected={selectedIndex === 4} onClick={handleClick4}>
          <ListItemIcon>
            <CampaignIcon style={{ color: "#2C7AE5" }} />
          </ListItemIcon>
          <ListItemText primary="Campaign" />
          {open4 ? <ExpandLess /> : <ExpandMore />}
        </ListItemButton>

        <Collapse in={open4} timeout="auto" unmountOnExit>
          <ListItemButton sx={{ pl: 4 }}>
            <ListItemIcon>
              <NavigateNextOutlinedIcon />
            </ListItemIcon>
            <ListItemText>
              {" "}
              <Link to="/campaign">Campaign</Link>{" "}
            </ListItemText>
          </ListItemButton>
        </Collapse>
        <Collapse in={open4} timeout="auto" unmountOnExit>
          <ListItemButton sx={{ pl: 4 }}>
            <ListItemIcon>
              <NavigateNextOutlinedIcon />
            </ListItemIcon>
            <ListItemText>
              {" "}
              <Link to="/campaign/orders">Orders</Link>{" "}
            </ListItemText>
          </ListItemButton>
        </Collapse>
        <Collapse in={open4} timeout="auto" unmountOnExit>
          <ListItemButton sx={{ pl: 4 }}>
            <ListItemIcon>
              <NavigateNextOutlinedIcon />
            </ListItemIcon>
            <ListItemText>
              {" "}
              <Link to="/campaign/compare">Compare</Link>{" "}
            </ListItemText>
          </ListItemButton>
        </Collapse>

        <ListItemButton selected={selectedIndex === 5} onClick={handleClick5}>
          <ListItemIcon>
            <DiscountRoundedIcon style={{ color: "#ECA13B" }} />
          </ListItemIcon>
          <ListItemText primary="Pricing" />
          {open5 ? <ExpandLess /> : <ExpandMore />}
        </ListItemButton>

        <Collapse in={open5} timeout="auto" unmountOnExit>
          <ListItemButton sx={{ pl: 4 }}>
            <ListItemIcon>
              <NavigateNextOutlinedIcon />
            </ListItemIcon>
            <ListItemText>
              {" "}
              <Link to="/pricing">Create New</Link>{" "}
            </ListItemText>
          </ListItemButton>
        </Collapse>
        <Collapse in={open5} timeout="auto" unmountOnExit>
          <ListItemButton sx={{ pl: 4 }}>
            <ListItemIcon>
              <NavigateNextOutlinedIcon />
            </ListItemIcon>
            <ListItemText>
              {" "}
              <Link to="/pricing/created">Available</Link>{" "}
            </ListItemText>
          </ListItemButton>
        </Collapse>

        <ListItemButton
          selected={selectedIndex === 7}
          onClick={(event) => handleListItemClick(event, 7)}
        >
          <ListItemIcon>
            <LocalOfferIcon style={{ color: "#DE2868" }} />
          </ListItemIcon>
          <ListItemText>
            <Link to="/coupons">Coupon</Link>
          </ListItemText>
        </ListItemButton>

        <ListItemButton selected={selectedIndex === 6} onClick={handleClick6}>
          <ListItemIcon>
            <ScheduleSendIcon style={{ color: "#05AFC5" }} />
          </ListItemIcon>
          <ListItemText primary="Engage" />
          {open6 ? <ExpandLess /> : <ExpandMore />}
        </ListItemButton>

        <Collapse in={open6} timeout="auto" unmountOnExit>
          <ListItemButton sx={{ pl: 4 }}>
            <ListItemIcon>
              <NavigateNextOutlinedIcon />
            </ListItemIcon>
            <ListItemText>
              {" "}
              <Link to="/engage/available">Available</Link>{" "}
            </ListItemText>
          </ListItemButton>
        </Collapse>
        <Collapse in={open6} timeout="auto" unmountOnExit>
          <ListItemButton sx={{ pl: 4 }}>
            <ListItemIcon>
              <NavigateNextOutlinedIcon />
            </ListItemIcon>
            <ListItemText>
              {" "}
              <Link to="/engage/createnew">Create New</Link>{" "}
            </ListItemText>
          </ListItemButton>
        </Collapse>

        <ListItemButton
          selected={selectedIndex === 8}
          onClick={(event) => handleListItemClick(event, 8)}
        >
          <ListItemIcon>
            <ManageAccountsIcon style={{ color: "#4FA953" }} />
          </ListItemIcon>
          <ListItemText>
            <Link to="/profile">Profile</Link>
          </ListItemText>
        </ListItemButton>
      </List>
    </>
  );
}

export default SideNav;
