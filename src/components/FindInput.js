import React from "react";

import { makeStyles } from "@material-ui/core/styles";
import Grid from "@material-ui/core/Grid";
import TextField from "@material-ui/core/TextField";

const useStyles = makeStyles((theme) => ({
  root: {
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
  },
}));

const FindInput = () => {
  const classes = useStyles();
  return (
    <Grid className={classes.root} item xs={4} md={2}>
      <TextField fullWidth label="Find Stock..." />
    </Grid>
  );
};

export default FindInput;
