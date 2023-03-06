import React, { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { get_recent_sales } from "../../features/dash/dashboard";

import ShoppingCartCheckoutIcon from '@mui/icons-material/ShoppingCartCheckout';
import UserCircleIcon from '@rsuite/icons/legacy/UserCircleO';
import Timeline from '@mui/lab/Timeline';
import TimelineItem from '@mui/lab/TimelineItem';
import TimelineSeparator from '@mui/lab/TimelineSeparator';
import TimelineConnector from '@mui/lab/TimelineConnector';
import TimelineContent from '@mui/lab/TimelineContent';
import TimelineDot from '@mui/lab/TimelineDot';
import TimelineOppositeContent, {
    timelineOppositeContentClasses,
} from '@mui/lab/TimelineOppositeContent';

// import RepeatIcon from '@mui/icons-material/Repeat';
// import PeopleAltIcon from '@mui/icons-material/PeopleAlt';
// import ShoppingBasketIcon from '@mui/icons-material/ShoppingBasket';
// import LayersRoundedIcon from '@mui/icons-material/LayersRounded';
// import AttachMoneyIcon from '@mui/icons-material/AttachMoney';




function DashRecentSales() {

  var dispatch = useDispatch();
  useEffect(() => {
    dispatch(get_recent_sales({ ajax_call: 'recent_sales' }));
  }, []);

  var recent_sales = useSelector((state) => state.dash.rsale.rsd);
  //console.log(recent_sales);

  //recent_sales = structuredClone(recent_sales);

  return (


    <>

      <Timeline sx={{[`& .${timelineOppositeContentClasses.root}`]: {flex: 0.2,},padding:'0px 40px', height: '89vh', overflow: 'auto',background:'white'}}>

        {recent_sales && recent_sales.map(sale => (
        
        <TimelineItem style={{width:'501px',minHeight:'90px'}}>

          <TimelineOppositeContent color="textSecondary" style={{padding:'12px 8px'}}>
            {sale.order_type === "New Customer" && 
              <>  
                <p style={{fontSize:'11px'}}> <span style={{color:'red'}}> New : </span>  {new Date(sale.atdate).toLocaleString('default', { month: 'short' }) + " " + new Date(sale.atdate).getDate()}  </p>  
              </> 
            }
            {sale.order_type !== "New Customer" && 
              <> 
                <p style={{fontSize:'11px'}}> <span style={{color:'green'}}> Rep : </span> {new Date(sale.atdate).toLocaleString('default', { month: 'short' }) + " " + new Date(sale.atdate).getDate()}  </p> 
              </> 
            }
             <span> $ {sale.order_total.toLocaleString()} </span>
          </TimelineOppositeContent>

          <TimelineSeparator>
            <TimelineDot style={{backgroundColor:'ghostwhite',color:'tomato'}}>
              <ShoppingCartCheckoutIcon />
            </TimelineDot>
            <TimelineConnector />
          </TimelineSeparator>

          <TimelineContent style={{padding: '12px 8px'}}>
            <p> <UserCircleIcon />{' ' + sale.cusname} </p>
            <span> #{sale.orderid} </span>
          </TimelineContent>

        </TimelineItem>
        
        ))}

      </Timeline>

    </>

  )
}

export default DashRecentSales