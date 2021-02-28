import React, { useState } from "react";

import { makeStyles } from "@material-ui/core/styles";
import Grid from "@material-ui/core/Grid";
import Paper from "@material-ui/core/Paper";
import Tabs from "@material-ui/core/Tabs";
import Tab from "@material-ui/core/Tab";

const useStyles = makeStyles((theme) => ({
  mainContainer: {
    maxWidth: "150%",
  },
  root: {
    marginTop: theme.spacing(5),
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
  },
  firstTab: {
    width: "100%",
  },
}));

const Filter = ({ currentTab, setCurrentTab }) => {
  const classes = useStyles();

  return (
    <Grid className={classes.mainContainer} item xs={12} xl={9}>
      <Paper className={classes.root} square>
        <Tabs
          value={currentTab}
          scrollButtons="on"
          variant="scrollable"
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
    </Grid>
  );
};

export default Filter;
