import { Button } from "@material-ui/core";
import React from "react";
import useStyles from "./styles";
import InstagramIcon from "@material-ui/icons/Instagram";
import TwitterIcon from "@material-ui/icons/Twitter";
import FacebookIcon from "@material-ui/icons/Facebook";
import LinkedInIcon from "@material-ui/icons/LinkedIn";

const Footer = () => {
  const classes = useStyles();
  return (
    <div className={classes.footer}>
      <div className={classes.leftSide}>
        <div className={classes.footerLeftMenuWrapper}>
          <div className={classes.footerMenu}>
            <h6>SHOP</h6>
            <a href="#">Gift Card</a>
            <a href="#">By Category</a>
            <a href="#">Store Location</a>
          </div>
          <div className={classes.footerMenu}>
            <h6>HELP</h6>
            <a href="#">FAQ</a>
            <a href="#">Help Center</a>
            <a href="#">Community Guidelines</a>
          </div>
          <div className={classes.footerMenu}>
            <h6>ABOUT</h6>
            <a href="#">Our Story</a>
            <a href="#">Wholesale</a>
            <a href="#">Sitemap</a>
          </div>
        </div>
        <div className={classes.copyright}>
          <a>&copy; 2023 Ripai Shop. All Rights Reserved</a>
        </div>
      </div>
      <div className={classes.rightSide}>
        <div className={classes.rightFooterMenu1}>
          <a>Sign up to get 10% off your first order</a>
        </div>
        <div className={classes.rightFooterMenu2}>
          <input placeholder="Your email address" />
          <button>Subscribe</button>
        </div>
        <div className={classes.rightFooterMenu3}>
          <InstagramIcon />
          <TwitterIcon />
          <FacebookIcon />
          <LinkedInIcon />
        </div>
        <div className={classes.rightFooterMenu4}>
          <a href="#">Terms of Service</a>
          <a href="#">Privcacy Policy</a>
          <a href="#">Do Not Sell My Information</a>
        </div>
      </div>
    </div>
  );
};

export default Footer;
