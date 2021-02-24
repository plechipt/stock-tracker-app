import React, { useState } from "react";

import { makeStyles } from "@material-ui/core/styles";
import Grid from "@material-ui/core/Grid";
import TextField from "@material-ui/core/TextField";

const useStyles = makeStyles((theme) => ({
  root: {
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    marginTop: theme.spacing(4),
  },
}));

const FindInput = ({ setTicker }) => {
  const classes = useStyles();
  const [tickerInput, setTickerInput] = useState("");

  const handleTicker = (e) => {
    if (e.key === "Enter") {
      setTicker(e.target.value);
      setTickerInput("");
    }
  };

  return (
    <Grid className={classes.root} item xs={4} md={2}>
      <TextField
        value={tickerInput}
        onChange={(e) => setTickerInput(e.target.value)}
        onKeyPress={handleTicker}
        fullWidth
        label="Enter a ticker..."
      />
    </Grid>
  );
};

export default FindInput;
