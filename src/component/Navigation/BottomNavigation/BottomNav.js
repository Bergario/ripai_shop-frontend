import React, { useEffect } from "react";

import BottomNavigation from "@material-ui/core/BottomNavigation";
import PagingComponent from "../../../Utils/Pagination";
import { useLocation } from "react-router-dom";
import useStyles from "./styles";
import Footer from "./Footer";

const BottomNav = ({ changePage, onFetchProducts, page }) => {
  const classes = useStyles();
  const location = useLocation();
  console.log("location", location.pathname);
  useEffect(() => {
    console.log("render");
  }, []);

  return (
    // <BottomNavigation>
    <div className={classes.navWrapper}>
      {location.pathname === "/" && (
        <PagingComponent
          page={page}
          changePage={changePage}
          // onFetchProducts={onFetchProducts}
          className={classes.page}
        />
      )}
      <Footer />
    </div>
    // </BottomNavigation>
  );
};

export default React.memo(BottomNav);
