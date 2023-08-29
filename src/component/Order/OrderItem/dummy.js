import React from "react";
import { Grid, Typography, CardMedia, Button } from "@material-ui/core";
import { LocalMall } from "@material-ui/icons/";
import { Link } from "react-router-dom";

import useStyle from "../styles";

const DummyOrderItem = (props) => {
  const classes = useStyle();
  console.log("prop", props);

  return (
    <Grid className={classes.orderItemBox}>
      <Grid align-items="center" style={{ display: "flex" }}>
        <LocalMall fontSize="small" style={{ marginRight: "5px" }} />
        <Typography variant="subtitle2" style={{ display: "inline-block" }}>
          Belanja 14 April 2023
        </Typography>
        <span className={classes.labelStatus}>Completed</span>
      </Grid>
      <div className={classes.orderItemDetail}>
        <div className={classes.itemContentCol}>
          <div style={{ display: "flex" }}>
            <div>
              <CardMedia
                className={classes.imgOrder}
                image="http://localhost:9000/images/1657002959426-blob"
              />
            </div>
            <div style={{ width: "100%", padding: "10px" }}>
              <Grid>
                <h4 style={{ marginBottom: "5px" }}>Converse X MCM hight</h4>
              </Grid>
              <Grid>
                <Typography variant="caption">
                  Lorem ipsum, dolor sit amet consectetur adipisicing elit.
                  Asperiores ea eligendi cumque illo atque nesciunt deserunt
                  sequi eveniet earum similique itaque repellendus consectetur
                </Typography>
              </Grid>
            </div>
          </div>
        </div>
        <Grid className={classes.priceDetail}>
          <Grid>
            <Typography variant="body2">Total Belanja</Typography>
          </Grid>
          <Grid>
            <Typography variant="body2">Rp 1.671.000</Typography>
          </Grid>
        </Grid>
      </div>
      <Button
        className={classes.buttonDetailTransaksi}
        // to={"/status?order_id=" + props.orderId}
        component={Link}
      >
        Lihat Detail Transaksi
      </Button>
    </Grid>
  );
};

export default DummyOrderItem;
