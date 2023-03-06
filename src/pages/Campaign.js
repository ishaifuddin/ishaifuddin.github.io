import React, { useState } from "react";
import Grid from '@mui/material/Grid';
import Button from '@mui/material/Button';
import Add_new_Campaign from "../components/Campaign/AddNewCampaign";
import OrderList_all from "../components/Campaign/OrderListAll";
import OrderList_groupby_cam_src from "../components/Campaign/OrderListGroupByCamSrc";
import SideNav from "./SideNav";

function Campaign() {

    var [groupbysource, setGroupbysource] = useState(false);
    var [singleorders, setSingleorders] = useState(false);
    var [campaignSource, setCampaignSource] = useState(true);


    return (

        <>
            <Grid container>

                <Grid item sm={2}>
                    <SideNav />
                </Grid>

                <Grid item sm={10}>

                    <Grid container style={{ margin: '2%' }}>

                        <Button onClick={(e) => { setCampaignSource(true); setGroupbysource(false); setSingleorders(false) }} color={campaignSource ? "primary" : "secondary"} >
                            Add Campaign Source
                        </Button>

                        <Button onClick={(e) => { setGroupbysource(true); setSingleorders(false); setCampaignSource(false) }} color={groupbysource ? "primary" : "secondary"} >
                            Group by Source
                        </Button>

                        <Button onClick={(e) => { setSingleorders(true); setGroupbysource(false); setCampaignSource(false) }} color={singleorders ? "primary" : "secondary"} >
                            Single Orders
                        </Button>

                    </Grid>

                    <Grid container>

                        <Grid item sm={8}>

                            {groupbysource &&
                                <>
                                    <OrderList_groupby_cam_src />
                                </>}

                            {singleorders &&
                                <>
                                    <OrderList_all />
                                </>}

                            {campaignSource &&
                                <>
                                    <Add_new_Campaign />
                                </>}

                        </Grid>

                    </Grid>
                </Grid>

            </Grid>

        </>
    )

}

export default Campaign