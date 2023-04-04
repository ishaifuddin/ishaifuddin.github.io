import { ReactSession } from "react-client-session";
import React, { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { shops_ } from "../../features/profile/Shops";

import MaterialTable from "material-table";
import { ThemeProvider, createTheme } from "@mui/material";

import Search from "@material-ui/icons/Search";
import SaveAlt from "@material-ui/icons/SaveAlt";
import ChevronLeft from "@material-ui/icons/ChevronLeft";
import ChevronRight from "@material-ui/icons/ChevronRight";
import FirstPage from "@material-ui/icons/FirstPage";
import LastPage from "@material-ui/icons/LastPage";
import Check from "@material-ui/icons/Check";
import FilterList from "@material-ui/icons/FilterList";
import { Card } from "react-bootstrap";

function Shops() {
  var dispatch = useDispatch();
  const defaultMaterialTheme = createTheme();

  useEffect(() => {
    var is_dispatched = () => {
      ReactSession.get("get_connected_shops");
      if (ReactSession.get("get_connected_shops")) {
        return true;
      } else {
        ReactSession.set("get_connected_shops", "1");
        return false;
      }
    };

    if (!is_dispatched()) {
      dispatch(shops_({ ajax_call: 2 }));
    }
  }, []);

  var Profile_shops = useSelector((state) => state.Profile_shops.profile_shops);
  console.log(Profile_shops);
  var Profile_shops = structuredClone(Profile_shops);

  return (
    <>
      <div id="shops">
        <div id="shopindiv">
          <Card className="dash-card">
            <ThemeProvider theme={defaultMaterialTheme}>
              <MaterialTable
                columns={[{ title: "Shop", field: "shopurl" }]}
                // onRowClick={(event, rowData) => {
                //     // dispatch(get_products_from_selected_catagory({
                //     //     id:rowData.catagory_id,
                //     //     sales:1,
                //     //     from : format(daterange[0],'yyyy-MM-dd'),
                //     //     to : format(daterange[1],'yyyy-MM-dd'),
                //     //     from1 : format(daterange1[0],'yyyy-MM-dd'),
                //     //     to1 : format(daterange1[1],'yyyy-MM-dd'),
                //     // }))
                // }}

                data={Profile_shops}
                title="Connected shops"
                // actions={[
                // {
                //     icon: ListAltIcon,
                //     tooltip: 'Fetch',
                //     onClick: (event, rowData) => alert("You saved " + rowData.catagory_id)
                // }
                // ]}

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
                  paging: false,
                  pageSize: 10, // make initial page size
                  emptyRowsWhenPaging: false, // To avoid of having empty rows
                  pageSizeOptions: [10, 15, 25, 40, 50],
                  searchFieldAlignment: "right",
                  cellStyle: {
                    padding: "5px",
                    textAlign: "left",
                  },
                }}

                // localization={{
                //     pagination: {
                //         labelRowsPerPage: ''
                //     },
                //     header: {
                //         actions: '',
                //     },
                // }}
              />
            </ThemeProvider>
          </Card>
          <br />

          <a title="my title text" href="insert_shop_url1.php">
            ADD NEW SHOP
          </a>
        </div>
      </div>
    </>
  );
}

export default Shops;
