import React, { useState } from "react";
import PersonalData from '../components/Profile/PersonalData'
import Plan from '../components/Profile/Plan'

import ReportIssue from '../components/Profile/ReportIssue'
import Shops from '../components/Profile/Shops'


import Grid from '@mui/material/Grid';
import Button from '@mui/material/Button';
import Team from "../components/Profile/Team";

function Profile() {

        var [PersonalData1, setPersonalData] = useState(true);
        var [Plan1, setPlan] = useState(false);
        var [Team1, setTeam] = useState(false);

        var [ReportIssue1, setReportIssue] = useState(false);
        var [Shops1, setShops] = useState(false);

        var product_sections = (section) => {

                setPersonalData(false);
                setPlan(false);

                setReportIssue(false);
                setShops(false);
                setTeam(false);

                if (section === 'PersonalData1') { setPersonalData(true); }
                if (section === 'Team1') { setTeam(true); }
                else if (section === 'Plan1') { setPlan(true); }

                else if (section === 'ReportIssue1') { setReportIssue(true); }
                else if (section === 'Shops1') { setShops(true); }

        }

        return (

                <>

                        <Grid container>

                                <Grid item sm={12}>

                                        <Grid container style={{ margin: '2%' }}>

                                                <Button value='PersonalData1' onClick={(e) => { product_sections(e.target.value); }}
                                                        color={PersonalData1 ? "primary" : "secondary"}>Personal data
                                                </Button>

                                                <Button value='Plan1' onClick={(e) => { product_sections(e.target.value); }}
                                                        color={Plan1 ? "primary" : "secondary"}>Plan
                                                </Button>

                                                <Button value='Team1' onClick={(e) => { product_sections(e.target.value); }}
                                                        color={Team1 ? "primary" : "secondary"}>Team
                                                </Button>

                                                <Button value='ReportIssue1' onClick={(e) => { product_sections(e.target.value); }}
                                                        color={ReportIssue1 ? "primary" : "secondary"} >Report Issue
                                                </Button>

                                                <Button value='Shops1' onClick={(e) => { product_sections(e.target.value); }}
                                                        color={Shops1 ? "primary" : "secondary"} >Shops
                                                </Button>

                                        </Grid>

                                        {PersonalData1 && <PersonalData />}

                                        {Plan1 && <Plan />}

                                        {Team1 && <Team />}

                                        {ReportIssue1 && <ReportIssue />}

                                        {Shops1 && <Shops />}
                                </Grid>

                        </Grid>

                </>
        )
}

export default Profile