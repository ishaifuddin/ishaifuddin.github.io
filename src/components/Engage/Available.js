import { ReactSession } from "react-client-session";
import React, { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import Grid from "@mui/material/Grid";

import Search from "@material-ui/icons/Search";
import SaveAlt from "@material-ui/icons/SaveAlt";
import ChevronLeft from "@material-ui/icons/ChevronLeft";
import ChevronRight from "@material-ui/icons/ChevronRight";
import FirstPage from "@material-ui/icons/FirstPage";
import LastPage from "@material-ui/icons/LastPage";
import Check from "@material-ui/icons/Check";
import FilterList from "@material-ui/icons/FilterList";

import MaterialTable from "material-table";
import { ThemeProvider, createTheme } from "@mui/material";

import { get_all_engage_automation_performance } from "../../features/engage/PerformanceCompare";
import { Card } from "@material-ui/core";
import NavButton from "../../pages/NavButton";

function Available() {
  var dispatch = useDispatch();

  const defaultMaterialTheme = createTheme();

  var autolist = useSelector((state) => state.engage.autoList);

  useEffect(() => {
    var is_dispatched1 = () => {
      ReactSession.get("get_all_engage_automation_performance");
      if (ReactSession.get("get_all_engage_automation_performance")) {
        return true;
      } else {
        ReactSession.set("get_all_engage_automation_performance", "1");
        return false;
      }
    };
    if (!is_dispatched1()) {
      console.log("disptacing");
      dispatch(get_all_engage_automation_performance({ ajax_call: 2 }));
    }
  }, []);

  var auto_table_clone = "";
  if (autolist && autolist.length > 0) {
    auto_table_clone = structuredClone(autolist);
  }

  return (
    <Grid className="campaign" container spacing={3}>
      <Grid item md={12} className="top-wrap">
        <div className="notifications">
          <h6>Engage : automation performance</h6>
          <div className="notify">
            <NavButton />
          </div>
        </div>
      </Grid>
      <Grid item md={12}>
        {auto_table_clone && (
          <Card className="dash-card">
            <ThemeProvider theme={defaultMaterialTheme}>
              <MaterialTable
                columns={[
                  { title: "Name", field: "name" },
                  { title: "MailSend", field: "mailSend" },
                  { title: "Visitor", field: "visitor" },
                  { title: "Order", field: "order" },
                  { title: "Amount", field: "amount" },
                  { title: "Created", field: "auto_created" },
                ]}
                data={auto_table_clone}
                title="Created Automations"
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
                  showFirstLastPageButtons: false,
                  pageSize: 10, // make initial page size
                  emptyRowsWhenPaging: false, // To avoid of having empty rows
                  pageSizeOptions: [10, 15, 25, 40, 50],
                  search: true,
                  searchFieldAlignment: "right",
                  exportButton: true,
                  exportAllData: true,
                  cellStyle: {
                    padding: "4px",
                    lineHeight: 2,
                    fontFamily: "system-ui",
                    textAlign: "center",
                    borderBottom: "2px solid rgb(246, 224, 224)",
                  },
                }}
              />
            </ThemeProvider>
          </Card>
        )}
      </Grid>
    </Grid>
  );
}

export default Available;
