import React from "react";

import { makeStyles } from "@material-ui/core/styles";
import Grid from "@material-ui/core/Grid";
import Typography from "@material-ui/core/Typography";

const useStyles = makeStyles(() => ({
  root: {
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
  },
}));

const RightSide = () => {
  const classes = useStyles();

  return (
    <Grid className={classes.root} item xs={4}>
      <Typography>NASDAQ: NFLX</Typography>
    </Grid>
  );
};

export default RightSide;
