import React from "react";

import { makeStyles } from "@material-ui/core/styles";
import Grid from "@material-ui/core/Grid";
import Typography from "@material-ui/core/Typography";

const useStyles = makeStyles(() => ({
  root: {
    display: "flex",
    justifyContent: "center",
  },
  withoutBreak: {
    display: "inline-block",
  },
}));

const LeftSide = () => {
  const classes = useStyles();

  return (
    <Grid className={classes.root} item xs={4}>
      <div>
        <Typography variant="h6">Netflix</Typography>
        <div>
          <Typography className={classes.withoutBreak} variant="h3">
            600
          </Typography>
          <Typography className={classes.withoutBreak} variant="h5">
            USD
          </Typography>
        </div>
      </div>
    </Grid>
  );
};

export default LeftSide;
