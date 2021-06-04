import React, { useEffect, useState } from "react";
import { Typography, Button, Container, Grid } from "@material-ui/core";
import { useHistory } from "react-router-dom";

import OrderItem from "./OrderItem/OrderItem";
import useStyle from "./styles";

const Orders = () => {
  const classes = useStyle();
  const history = useHistory();

  const [transaction, setTransaction] = useState();

  const button = ["Semua", "Berlangsung", "Berhasil", "Tidak Berhasil"];

  const query = () => new URLSearchParams(history.location.search);
  const q = query();
  const id = q.get("order_id");

  console.log(transaction);

  useEffect(() => {
    console.log("2");
    fetch("http://localhost:9000/testApi/" + id)
      .then((response) => response.json())
      .then((response) => setTransaction(response))
      .catch((err) => console.log(err));
  }, [id]);

  return (
    <Container maxWidth="lg">
      <div className={classes.toolbar}>
        <Typography variant="h5">Daftar Transaksi</Typography>
        <div className={classes.order}>
          <Grid
            item
            sm={12}
            style={{ display: "flex" }}
            alignItems="center"
            justify="flex-start"
          >
            <Typography variant="h6" style={{ display: "inline-block" }}>
              Status
            </Typography>
            {button.map((btn) => {
              return (
                <Button
                  key={btn}
                  className={classes.button}
                  variant="outlined"
                  color="primary"
                  size="medium"
                >
                  <span className={classes.buttonText}>{btn}</span>
                </Button>
              );
            })}
          </Grid>
          <OrderItem />
          <OrderItem />
          <OrderItem />
        </div>
      </div>
    </Container>
  );
};

export default Orders;
