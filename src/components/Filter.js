import React, { useState } from "react";

import { makeStyles } from "@material-ui/core/styles";
import Grid from "@material-ui/core/Grid";
import Paper from "@material-ui/core/Paper";
import Tabs from "@material-ui/core/Tabs";
import Tab from "@material-ui/core/Tab";

const useStyles = makeStyles((theme) => ({
  root: {
    marginTop: theme.spacing(5),
  },
}));

const Filter = ({ currentTab, setCurrentTab }) => {
  const classes = useStyles();

  return (
    <Paper className={classes.root} square>
      <Tabs
        value={currentTab}
        indicatorColor="primary"
        textColor="primary"
        onChange={(event, newValue) => setCurrentTab(newValue)}
      >
        <Tab label="Recent" />
        <Tab label="1 month" />
        <Tab label="6 month" />
        <Tab label="1 year" />
      </Tabs>
    </Paper>
  );
};

export default Filter;
