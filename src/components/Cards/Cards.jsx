import React from "react";
import Countup from "react-countup";
import cx from "classnames";
import { Card, CardContent, Typography, Grid } from "@material-ui/core";
import styles from "./Cards.module.css";

// const Cards = ({ data: { confirmed, recovered, deaths, lastUpdate } }) => {
const Cards = ({ data }) => {
  let keys;
  if (!Object.keys(data).length) {
    return "Loading...";
  } else {
    keys = Object.keys(data).filter((item) => item !== "lastUpdate");
  }

  return (
    <div className={styles.container}>
      <Grid container spacing={3} justify="center">
        {keys.map((item, i) => {
          return (
            <Grid
              item
              component={Card}
              xs={12}
              md={3}
              className={cx(styles.card, styles[item])}
              key={i}
            >
              <CardContent>
                <Typography color="textSecondary" gutterBottom>
                  {item.toUpperCase()}
                </Typography>
                <Typography variant="h5">
                  <Countup
                    start={0}
                    end={data[item].value}
                    duration={2.5}
                    separator=","
                  />
                </Typography>
                <Typography color="textSecondary">
                  {new Date(data.lastUpdate).toDateString()}
                </Typography>
                <Typography variant="body2">
                  Number of {item} cases for COVID-19
                </Typography>
              </CardContent>
            </Grid>
          );
        })}
      </Grid>
    </div>
  );
};

export default Cards;
