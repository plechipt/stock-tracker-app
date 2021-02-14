import React from "react";

import { makeStyles } from "@material-ui/core/styles";
import Grid from "@material-ui/core/Grid";
import Typography from "@material-ui/core/Typography";

const useStyles = makeStyles(() => ({
  root: {
    display: "flex",
    justifyContent: "center",
  },
}));

const Chart = () => {
  const classes = useStyles();
  return (
    <div>
      <Grid className={classes.root} item xs={12}>
        <Typography>stock goes brrrrrrrrrrrrrr</Typography>
      </Grid>
    </div>
  );
};

export default Chart;
