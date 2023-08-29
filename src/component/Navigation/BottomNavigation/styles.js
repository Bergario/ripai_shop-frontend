import { makeStyles } from "@material-ui/core/styles";

export default makeStyles((theme) => ({
  navWrapper: {
    display: "flex",
    flexDirection: "column",
  },
  footer: {
    display: "flex",
    height: "250px",
    width: "100%",
    backgroundColor: "#7575755c",
    marginTop: "30px",
    borderTop: "1px solid #d5dbdf",
  },
  leftSide: {
    display: "flex",
    flexDirection: "column",
    backgroundColor: "#ebebeb",
    height: "100%",
    width: "100%",
  },
  rightSide: {
    "& div": {
      display: "flex",
      justifyContent: "flex-end",
    },
    display: "flex",
    justifyContent: "end",
    flexDirection: "column",
    height: "100%",
    width: "100%",
    boxSizing: "border-box",
    paddingRight: "150px",
    backgroundColor: "#ebebeb",
  },
  footerLeftMenuWrapper: {
    display: "flex",
    justifyContent: "start",
    paddingLeft: "150px",
    backgroundColor: "#ebebeb",
    height: "100%",
    width: "100%",
    boxSizing: "border-box",
  },
  copyright: {
    "& p": {
      fontSize: "10px",
      fontWeight: "300",
      margin: 0,
    },
    height: "50px",
    width: "100%",
    display: "flex",
    flexDirection: "column",
    justifyContent: "center",
    fontWeight: "700",
    fontSize: "12px",
    color: "#70665c",
    fontFamily: "emoji",
    marginLeft: "150px",
  },
  footerMenu: {
    "& a": {
      fontSize: "10px",
      marginBottom: "5px",
      fontWeight: "bold",
      color: "#726f6b",
      textDecoration: "none",
    },
    "& h6": {
      fontSize: "12px",
      fontWeight: "800",
      fontFamily: "sans-serif",
      color: "#605d5a",
      margin: "5px 0",
    },
    display: "flex",
    flexDirection: "column",
    fontFamily: "monospace",
    marginTop: "50px",
    flexGrow: "1",
  },

  rightFooterMenu1: {
    "& a": {
      fontSize: "10px",
      marginBottom: "5px",
      fontWeight: "bold",
      color: "#726f6b",
    },
    height: "100%",
    width: "100%",
    // backgroundColor: "red",
    display: "flex",
    justifyContent: "flex-end",
    alignItems: "flex-end",
  },
  rightFooterMenu2: {
    "& button": {
      borderRadius: "20px",
      width: "100px",
      backgroundColor: "#ff9800",
      color: "white",
      border: 0,
      letterSpacing: "1px",
      height: "34px",
    },
    "& input": {
      borderRadius: "20px",
      border: 0,
      padding: "10px",
      marginRight: "10px",
      width: "300px",
      height: "25%",
    },
    height: "100%",
    width: "100%",
  },
  rightFooterMenu3: {
    "& svg": {
      marginLeft: "30px",
      cursor: "pointer",
    },
    height: "100%",
    width: "100%",
    alignItems: "center",
  },
  rightFooterMenu4: {
    "& a": {
      fontSize: "10px",
      marginBottom: "5px",
      fontWeight: "bold",
      color: "#726f6b",
      paddingLeft: "50px",
      textDecoration: "none",
    },
    height: "100%",
    width: "100%",
    alignItems: "center",
  },
}));