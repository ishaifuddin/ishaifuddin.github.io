import { ReactSession } from 'react-client-session';

import React, { useEffect, useState, useRef } from "react";

import { useSelector, useDispatch } from "react-redux";

import EmailEditor from 'react-email-editor';
import axios from "axios";
import Grid from '@mui/material/Grid';
import Button from '@mui/material/Button';
import moment from 'moment';

import OutlinedInput from '@mui/material/OutlinedInput';
import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import ListItemText from '@mui/material/ListItemText';
import Select from '@mui/material/Select';
import Checkbox from '@mui/material/Checkbox';


// import AppBar from '@mui/material/AppBar';
// import Toolbar from '@mui/material/Toolbar';
// import Typography from '@mui/material/Typography';
// import Container from '@mui/material/Container';
// import AdbIcon from '@mui/icons-material/Adb';

// import ScheduleSendIcon from '@mui/icons-material/ScheduleSend';

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



function CreateNew() {

    var username_from_session = ReactSession.get("username");

    // if (!(username_from_session)) {
    //     ReactSession.set("username", "Bob");
    //     console.log("session cookie set");
    // }

    var date = moment();
    var currentDate = date.format('YYYY-MM-D');


    const emailEditorRef = useRef(null);
    var [name, setName] = useState('');
    var [designs, setDesigns] = useState([]);

    //var [from, setFrom] = useState('');
    //var [replyto, setReplyto] = useState('');
    var [subject, setSubject] = useState('');
    var [segments, setSegments] = useState();
    var [target, setTarget] = useState('');
    var [SegmentName, setSegmentName] = useState(null);
    var [SegmentType, setSegmentType] = useState(null);
    var [TargetSegment, setTargetSegment] = useState('');

    function handleChange(selectedOption) {
        setTarget(selectedOption.value);
        setSegmentName(null);
    }

    function HandleSubject(event) {
        setSubject(event.target.value);
        //alert(subject);
    }

    const saveDesign = () => {

        var type = "create_update_template";
        var automation_name = name;
        // var from                 = from;
        // var to                   = to;
        //var subject                 = subject;
        var status = 1;
        var count = 0;


        emailEditorRef.current.editor.exportHtml((data) => {
            var { design, html } = data;
            axios.post('https://server.shopex.io/engage/mailtemp.php', {
                type: type,
                template_html: html,
                template_design: design,
                automation_name: automation_name,
                subject: subject,
                segment_row_id: target,
                date: currentDate
            }, { withCredentials: true })
                .then(function (response) {
                })
                .catch(function (error) {
                    console.log(error);
                });

        });
    };


    var [selectedTarget, setSelected] = useState('');

    const getDesign = (design) => {
        setName(design.replaceAll('_', ' '));
        const post_data = { automation_name: design, type: 'select_single_template' };
        axios.post('https://server.shopex.io/engage/mailtemp.php', post_data, { withCredentials: true })
            .then(function (response) {
                emailEditorRef.current.editor.loadDesign(JSON.parse(response.data.design));
                setSubject(response.data.subject);
                setSegmentName(response.data.segment_name);
                setSegmentType(response.data.segment_type);
                setSelected(response.data.segment_id);
                //setTargetSegment({ value: response.data.segment_id, label: "SegmentType ::   " + response.data.segment_type + "   ::   " + response.data.segment_name })
            })
            .catch(function (error) {
                console.log(error);
            })
    };

    useEffect(() => {
        axios.get('https://server.shopex.io/engage/mailtemp.php', { withCredentials: true })
            .then(function (response) {

                var segs = response.data.customer_segments;
                var ops = [];
                for (var i of segs) {
                    var label = "Type ::   " + i.type + "   ::   " + i.segname;
                    var value = i.id;
                    ops.push({ value: value, label: label });
                }
                setSegments(ops);
                setDesigns(response.data.designs);
            })
            .catch(function (error) {
                console.log(error);
            })
    }, [])

    const dispatch = useDispatch();

    var om_enter = (e) => { e.target.style.textDecoration = 'underline'; }
    var om_out = (e) => { e.target.style.textDecoration = 'none'; }



    const Select_purchase_Based_cus_segment = (event) => {
        const { target: { value }, } = event;
        //    console.log(value);
        setSelected(value);
    };


    return (

        <>

            <Grid container>

                {/* <Grid item sm={2}>
                    <SideNav />
                </Grid> */}



                <Grid item sm={12}>

                    {/* <AppBar position="fixed">
                        <Container maxWidth="xl">
                            <Toolbar disableGutters>
                                <ScheduleSendIcon sx={{ display: { xs: 'none', md: 'flex' }, mr: 1 }} />
                                <Typography
                                    variant="h6"
                                    noWrap
                                    component="a"
                                    href="/"
                                    sx={{
                                        mr: 2,
                                        display: { xs: 'none', md: 'flex' },
                                        fontFamily: 'monospace',
                                        fontWeight: 700,
                                        letterSpacing: '.3rem',
                                        color: 'inherit',
                                        textDecoration: 'none',
                                    }}
                                >
                                    Engage
                                </Typography>

                                <AdbIcon sx={{ display: { xs: 'flex', md: 'none' }, mr: 1 }} />
                                <Typography
                                    variant="h5"
                                    noWrap
                                    component="a"
                                    href=""
                                    sx={{
                                        mr: 2,
                                        display: { xs: 'flex', md: 'none' },
                                        flexGrow: 1,
                                        fontFamily: 'monospace',
                                        fontWeight: 700,
                                        letterSpacing: '.3rem',
                                        color: 'inherit',
                                        textDecoration: 'none',
                                    }}
                                >
                                    LOGO
                                </Typography>



                            </Toolbar>
                        </Container>
                    </AppBar> */}

                    <Grid container>




                        <Grid item sm={12} style={{ display: 'block', margin: '1% 0% 1% 23px' }}>

                            {/* { SegmentName && <strong>  Target Segment :: Type - {SegmentType} :: {SegmentName} </strong> }

                            {segments &&
                                <Select
                                    placeholder="Select target Segment"
                                    //defaultValue={}
                                    onChange={handleChange}
                                    options={segments}
                                />
                            }

                            <InputLabel id="demo-multiple-checkbox-label">Segmnent's</InputLabel>
                             */}

                            {segments && <>
                                <InputLabel id="demo-simple-select-label">Target Segmnent</InputLabel>
                                <Select
                                    labelId="demo-multiple-checkbox-label"
                                    id="demo-multiple-checkbox"
                                    single
                                    value={selectedTarget}
                                    onChange={Select_purchase_Based_cus_segment}
                                    input={<OutlinedInput label="" />}
                                    MenuProps={MenuProps}>

                                    {segments.map((item) => (
                                        <MenuItem value={item.value}>{item.label} </MenuItem>
                                    ))}
                                </Select></>


                            }

                        </Grid>

                        <Grid item sm={3} style={{ display: 'block', margin: '15px', marginRight: '0px' }}>

                            <span style={{ margin: '7px', display: 'grid' }}>
                                <strong> Email-automation name </strong>
                                <input style={{ height: '40px', width: '300px', fontSize: '16px' }}
                                    required={true} name="name" type="text" defaultValue={name} onChange={e => setName(e.target.value)} />
                            </span>

                            <span style={{ margin: '7px', display: 'grid' }}>
                                <strong> Email-Subject </strong>
                                <input style={{ height: '40px', width: '300px', fontSize: '16px' }}
                                    required={true} name="name" type="text" defaultValue={subject} onChange={HandleSubject} />
                            </span>

                            <Button style={{ margin: '7px', display: 'table' }} variant="contained" onClick={saveDesign}> Save automation </Button>



                            <span style={{ margin: '7px', display: 'table' }}>

                                <h4 style={{ marginBottom: '20px' }}> Created automation's ::   </h4>

                                {designs.map((element, index) => (

                                    <Grid

                                        style={{ marginBottom: '20px', display: 'table' }}
                                        key={index}
                                        onClick={(e) => { getDesign(element) }}
                                        onMouseEnter={om_enter}
                                        onMouseLeave={om_out}>

                                        <button style={{ background: 'none' }}>
                                            <svg stroke="currentColor"
                                                fill="currentColor"
                                                strokeWidth="0"
                                                viewBox="0 0 16 16"
                                                height="24"
                                                width="24"
                                                xmlns="http://www.w3.org/2000/svg"
                                                style={{ margin: '-6px', color: 'teal' }}>
                                                <path d="M10.943 6H5.057L5 8h.5c.18-1.096.356-1.192 1.694-1.235l.293-.01v5.09c0 .47-.1.582-.898.655v.5H9.41v-.5c-.803-.073-.903-.184-.903-.654V6.755l.298.01c1.338.043 1.514.14 1.694 1.235h.5l-.057-2z"></path><path d="M14 4.5V14a2 2 0 0 1-2 2H4a2 2 0 0 1-2-2V2a2 2 0 0 1 2-2h5.5L14 4.5zm-3 0A1.5 1.5 0 0 1 9.5 3V1H4a1 1 0 0 0-1 1v12a1 1 0 0 0 1 1h8a1 1 0 0 0 1-1V4.5h-2z">
                                                </path>
                                            </svg>

                                        </button>
                                        <span style={{ overflowWrap: "break-word", display: 'table-cell', cursor: 'pointer' }}> {element.replace(/_/g, " ")}  </span>

                                    </Grid>

                                ))}

                            </span>

                        </Grid>


                        {/* {JSON.stringify(segments)} */}

                        <Grid item sm={8} style={{ display: 'block' }}>
                            <EmailEditor ref={emailEditorRef} style={{ background: 'snow', minHeight: '89vh', boxShadow: 'rgb(65 69 88 / 10%) 0px 7px 14px 0px, rgb(0 0 0 / 7%) 0px 3px 6px 0px' }} />
                        </Grid>

                    </Grid>

                </Grid>

            </Grid>





        </>
    )
}

export default CreateNew