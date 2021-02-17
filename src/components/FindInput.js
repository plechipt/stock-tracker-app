import React from "react";

import { makeStyles } from "@material-ui/core/styles";
import Grid from "@material-ui/core/Grid";
import TextField from "@material-ui/core/TextField";

const useStyles = makeStyles((theme) => ({
  root: {
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    marginTop: "0.5rem",
  },
}));

const FindInput = ({ setTicker }) => {
  const classes = useStyles();

  const handleTicker = (e) => {
    if (e.key === "Enter") {
      setTicker(e.target.value);
    }
  };

  return (
    <Grid className={classes.root} item xs={4} md={2}>
      <TextField
        onKeyPress={handleTicker}
        onChange={handleTicker}
        fullWidth
        label="Enter a ticker..."
      />
    </Grid>
  );
};

export default FindInput;
