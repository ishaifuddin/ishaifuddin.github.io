import { ReactSession } from "react-client-session";
import React, { useEffect, useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import axios from "axios";

import { team_ } from "../../features/profile/Team";
import { shops_ } from "../../features/profile/Shops";
import Grid from "@mui/material/Grid";
import Multiselect from "multiselect-react-dropdown";
import MaterialTable from "material-table";
import { ThemeProvider, createTheme, RadioGroup, Radio } from "@mui/material";

import Search from "@material-ui/icons/Search";
import SaveAlt from "@material-ui/icons/SaveAlt";
import ChevronLeft from "@material-ui/icons/ChevronLeft";
import ChevronRight from "@material-ui/icons/ChevronRight";
import FirstPage from "@material-ui/icons/FirstPage";
import LastPage from "@material-ui/icons/LastPage";
import Check from "@material-ui/icons/Check";
import FilterList from "@material-ui/icons/FilterList";
import ListAltIcon from "@mui/icons-material/ListAlt";

function Team() {
  var dispatch = useDispatch();
  var dispatch1 = useDispatch();

  const defaultMaterialTheme = createTheme();

  // useEffect(() => {

  //     var is_dispatched1 = () => {
  //       ReactSession.get("get_profile_team");
  //       if(ReactSession.get("get_profile_team")) {
  //           return true;
  //       }else {
  //           ReactSession.set("get_profile_team", "1");
  //           return false;
  //       }
  //     }

  //     if(!(is_dispatched1())) {
  //       dispatch(team_({ajax_call:2}));
  //     }

  //     var is_dispatched = () => {
  //         ReactSession.get("get_connected_shops");
  //         if(ReactSession.get("get_connected_shops")) {
  //             return true;
  //         }else {
  //             ReactSession.set("get_connected_shops", "1");
  //             return false;
  //         }
  //       }

  //     if(!(is_dispatched())) {
  //         dispatch1(shops_({ajax_call:2}));
  //     }

  // },[])

  var Profile_team = useSelector((state) => state.profile_team.profile_team);
  var Profile_team = structuredClone(Profile_team);

  var ops = [];
  var Profile_shops = useSelector((state) => state.Profile_shops.profile_shops);
  if (Profile_shops && Profile_shops.length > 0) {
    for (var i of Profile_shops) {
      var label = i.shopurl;
      var value = i.shopid;
      ops.push({ value: value, label: label });
    }
  }

  var [role, setrole] = useState();
  var [AccessToID, setAccessToID] = useState("");
  var [AccessToURL, setAccessToURL] = useState("");

  var teamUpdate = (event) => {
    event.preventDefault();
    const fdata = new FormData(event.target);
    const data = Object.fromEntries(fdata.entries());
    //dispatch(profile_personal_data(data));
    axios
      .post(
        "https://server.shopex.io/profile/profile_team_member_invite.php",
        data,
        { withCredentials: true }
      )
      .then(
        (response) => {
          var initdata = response.data;
          //console.log(initdata);
        },
        (error) => {}
      );
  };

  return (
    <Grid container spacing={5} style={{ padding: 0 }}>
      <Grid item md={6} sm={12}>
        <h6> Add team member :: </h6>
        <br />
        <form className="date-period" onSubmit={teamUpdate}>
          <strong> Select Role : </strong>
          <RadioGroup
            style={{
              display: "inline-block",
              fontSize: "13px",
              fontWeight: "500",
            }}
            onChange={(e) => {
              setrole(e.target.value);
            }}
          >
            <Radio type="radio" value="2" name="power" /> Analyst
            <Radio type="radio" value="3" name="power" /> Shop-Assistant
          </RadioGroup>

          <div className="raccess">
            <h6 style={{ color: "rgb(43, 206, 161)" }}> Only Owner </h6>
            <span> Add / Delete shop </span>
            <br />
            <span> Add / Delete Team member</span>
            <br />
            <span> Create / Update / Cancel subscription</span>
            <br />
            <br />

            <h6 style={{ color: "rgb(115, 102, 227)" }}> Owner & Analyst</h6>
            <span>Create/Edit/Delete Dynamic product pricing</span>
            <br />
            <span>Create cart recovery automation</span>
            <br />
            <span>Create engage email automation</span>
            <br />
            <span>Create segments</span>
            <br />
            <span>Download CSV </span>
            <br />
            <span>Create product group in Performance</span>
            <br />
            <br />

            <h6 style={{ color: "rgb(5, 175, 197)" }}> Shop-Assistant</h6>
            <span> Data View and Order status change </span>
            <br />
            <br />
          </div>

          {ops && ops.length > 0 && (
            <Multiselect
              displayValue="label"
              placeholder="Give access to :"
              onRemove={(e) => {
                var aa = [];
                for (var i of e) {
                  aa.push(i.value);
                }
                setAccessToID(JSON.stringify(aa));

                var aa = [];
                for (var i of e) {
                  aa.push(i.label);
                }
                setAccessToURL(JSON.stringify(aa));
              }}
              onSelect={(e) => {
                var aa = [];
                for (var i of e) {
                  aa.push(i.value);
                }
                setAccessToID(JSON.stringify(aa));

                var aa = [];
                for (var i of e) {
                  aa.push(i.label);
                }
                setAccessToURL(JSON.stringify(aa));
              }}
              options={ops}
              showCheckbox
            />
          )}

          <input name="shops" type={"hidden"} defaultValue={setAccessToID} />

          <div style={{ position: "relative" }}>
            <input
              placeholder="Type email address.."
              type="email"
              name="email"
            />
            <button className="send-mail" type="submit">
              {" "}
              Send{" "}
            </button>
          </div>
        </form>
      </Grid>
      <Grid item md={6} sm={12}>
        <div>
          <h6> Current members :: </h6>
          <br />
          {Profile_team && Profile_team.length > 0 && (
            <ThemeProvider theme={defaultMaterialTheme}>
              <MaterialTable
                columns={[
                  { title: "Email", field: "email" },
                  { title: "Title", field: "title" },
                  { title: "Shop", field: "shoplink" },
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
                    tooltip: "Fetch",
                    onClick: (event, rowData) =>
                      alert("You saved " + rowData.catagory_id),
                  },
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
                  pageSize: 10, // make initial page size
                  emptyRowsWhenPaging: false, // To avoid of having empty rows
                  pageSizeOptions: [10, 15, 25, 40, 50],
                  searchFieldAlignment: "right",
                  cellStyle: {
                    padding: "5px",
                    textAlign: "left",
                  },
                  headerStyle: {
                    backgroundColor: "#01579b",
                    color: "#FFF",
                    textAlign: "left",
                  },
                }}
                localization={{
                  pagination: {
                    labelRowsPerPage: "",
                  },
                  header: {
                    actions: "",
                  },
                }}
              />
            </ThemeProvider>
          )}

          <span>Analyst Email List: </span>
          <br />
          <ol className="mail-list">
            <li>sample@email.com</li>
            <li>sample@email.com</li>
            <li>sample@email.com</li>
            <li>sample@email.com</li>
            <li>sample@email.com</li>
            <li>sample@email.com</li>
            <li>sample@email.com</li>
            <li>sample@email.com</li>
          </ol>
        </div>
      </Grid>
    </Grid>
  );
}

export default Team;
