import React from "react";

import { makeStyles } from "@material-ui/core/styles";
import Grid from "@material-ui/core/Grid";
import Typography from "@material-ui/core/Typography";

const useStyles = makeStyles((theme) => ({
  root: {
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
  },
  withoutBreak: {
    display: "inline-block",
  },
  marginRight: {
    marginRight: theme.spacing(0.7),
  },
  muted: {
    opacity: "50%",
  },
}));

const RightSide = () => {
  const classes = useStyles();

  return (
    <Grid className={classes.root} item xs={4}>
      <Typography
        className={`${classes.withoutBreak} ${classes.marginRight} ${classes.muted}`}
        variant="h5"
      >
        NASDAQ:
      </Typography>
      <Typography variant="h5">NFLX</Typography>
    </Grid>
  );
};

export default RightSide;
