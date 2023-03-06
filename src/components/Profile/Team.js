import { ReactSession }  from 'react-client-session';
import React, { useEffect, useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import axios from "axios"; 
   
import { team_ } from '../../features/profile/Team';
import { shops_ } from '../../features/profile/Shops';

import Multiselect from 'multiselect-react-dropdown';
import MaterialTable from 'material-table';
import { ThemeProvider, createTheme } from '@mui/material';

import Search from '@material-ui/icons/Search'
import SaveAlt from '@material-ui/icons/SaveAlt'
import ChevronLeft from '@material-ui/icons/ChevronLeft'
import ChevronRight from '@material-ui/icons/ChevronRight'
import FirstPage from '@material-ui/icons/FirstPage'
import LastPage from '@material-ui/icons/LastPage'
import Check from '@material-ui/icons/Check'
import FilterList from '@material-ui/icons/FilterList'
import ListAltIcon from '@mui/icons-material/ListAlt';



function Team() {

    var dispatch = useDispatch();
    var dispatch1 = useDispatch();
    
    const defaultMaterialTheme = createTheme();

    useEffect(() => {
      
        var is_dispatched1 = () => {
          ReactSession.get("get_profile_team");
          if(ReactSession.get("get_profile_team")) {
              return true;
          }else {
              ReactSession.set("get_profile_team", "1");
              return false;
          }
        }
        
        if(!(is_dispatched1())) {
          dispatch(team_({ajax_call:2}));
        }



        var is_dispatched = () => {
            ReactSession.get("get_connected_shops");
            if(ReactSession.get("get_connected_shops")) {
                return true;
            }else {
                ReactSession.set("get_connected_shops", "1");
                return false;
            }
          }
          
        if(!(is_dispatched())) {
            dispatch1(shops_({ajax_call:2}));
        }
      
    },[])


     
    var Profile_team = useSelector((state) => state.profile_team.profile_team);
    var Profile_team = structuredClone(Profile_team);


    var ops = [];
    var Profile_shops = useSelector((state) => state.Profile_shops.profile_shops);
    if(Profile_shops.length > 0){
        for (var i of Profile_shops) {
            var label = i.shopurl; 
            var value = i.shopid;
            ops.push({value:value,label:label});
        }
    }

   

    var [role, setrole] = useState();
    var [AccessToID, setAccessToID] = useState('');
    var [AccessToURL,setAccessToURL] = useState('');


    var teamUpdate =(event) => {
        event.preventDefault();
        const fdata = new FormData(event.target);
        const data = Object.fromEntries(fdata.entries());
        //dispatch(profile_personal_data(data));
        axios.post('https://server.shopex.io/profile/profile_team_member_invite.php',data,{withCredentials: true})
        .then((response) => { 
            var initdata = response.data; 
            //console.log(initdata); 
        }, (error) => {}); 
    };

    return (
        
        <div style={{ display: 'flex' }}>
    
            <form onSubmit={teamUpdate} style={{marginLeft: '5%'}}>
    
                <h3> Add team member :: </h3>
                
                <h4> Select Role :: </h4>
                <div onChange={ (e) => {setrole(e.target.value)} }>
                    <input type="radio" value="2" name="power" /> Analyst
                    <input type="radio" value="3" name="power" /> Shop-Assistant
                </div>


                <div className="raccess" style={{ marginTop: '15px', marginBottom: '15px', background: 'snow', padding: '28px', width: 'max-content' }}>
                    
                    <h3 style={{ color: 'tomato' }}> Only Owner </h3>
                        <h6> Add / Delete shop </h6>
                        <h6> Add / Delete Team member</h6>
                        <h6> Create / Update / Cancel subscription</h6>
                    
                    <h3 style={{ color: 'tomato' }}> Owner & Analyst</h3>
                        <h6>Create/Edit/Delete Dynamic product pricing</h6>
                        <h6>Create cart recovery automation</h6>
                        <h6>Create engage email automation</h6>
                        <h6>Create segments</h6>
                        <h6>Download CSV </h6>
                        <h6>Create product group in Performance</h6>
                    
                    <h3 style={{ color: 'tomato' }}> Shop-Assistant</h3>
                        <h6> Data View and Order status change </h6>

                </div>
                
                
                {ops && ops.length > 0 && <Multiselect 
                displayValue="label"
                placeholder="Give access to :"
                onRemove={
                    (e) => { 
                        var aa=[];  
                        for (var i of e){
                            aa.push(i.value)
                        };
                        setAccessToID(JSON.stringify(aa));

                        var aa=[];  
                        for (var i of e){
                            aa.push(i.label)
                        };
                        setAccessToURL(JSON.stringify(aa));
                    }
                }
                onSelect={
                    (e) => { 
                        var aa=[];  
                        for (var i of e){
                            aa.push(i.value)
                        };
                        setAccessToID(JSON.stringify(aa));

                        var aa=[];  
                        for (var i of e){
                            aa.push(i.label)
                        };
                        setAccessToURL(JSON.stringify(aa));
                    }
                }
                options={ops}
                showCheckbox/>}

                <input name="shops" type={'hidden'} defaultValue={setAccessToID} />
                
                <input placeholder="Type email address.." type="email" name="email" style={{ width: '300px', height: '40px', fontSize: '20px', padding: '10px' }} />
                <button type="submit"> Send </button>
            
            </form>

            <div style={{ width: '-webkit-fill-available', marginLeft: '10%' }}>
                <h3 className="cplanh3"> Current members :: </h3>
                { Profile_team && Profile_team.length > 0 && 
                <ThemeProvider theme={defaultMaterialTheme}>

                    <MaterialTable
                    
                        columns={[

                            { title: 'Email', field: 'email'},
                            { title: 'Title', field: 'title'},
                            { title: 'Shop', field: 'shoplink'},                                
                        ]}

                        onRowClick={(event, rowData) => {
                            // dispatch(get_products_from_selected_catagory({
                            //     id:rowData.catagory_id,
                            //     sales:1,
                            //     from : format(daterange[0],'yyyy-MM-dd'), 
                            //     to : format(daterange[1],'yyyy-MM-dd'),
                            //     from1 : format(daterange1[0],'yyyy-MM-dd'),
                            //     to1 : format(daterange1[1],'yyyy-MM-dd'), 
                            // }))
                        }}

                        data={Profile_team}
                        title="Connected shops"
                        actions={[
                        {
                            icon: ListAltIcon,
                            tooltip: 'Fetch',
                            onClick: (event, rowData) => alert("You saved " + rowData.catagory_id)
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
                        }}

                        options={{
                            paging: false,
                            pageSize:10,       // make initial page size
                            emptyRowsWhenPaging: false,   // To avoid of having empty rows
                            pageSizeOptions:[10,15,25,40,50], 
                            searchFieldAlignment:"right",
                            cellStyle: {
                                padding: '5px',
                                textAlign:"left"
                            },
                            headerStyle: {
                                backgroundColor: '#01579b',
                                color: '#FFF',
                                textAlign:"left"
                            },
                        }}

                        localization={{
                            pagination: {
                                labelRowsPerPage: ''
                            },
                            header: {
                                actions: '',
                            },
                        }}
                    />
                
                </ThemeProvider>  
                }

            </div>


        </div>

    )
}

export default Team