import React, { useState, useEffect } from "react";
import {
  fetchDailyData,
  fetchMonthData,
  fetchSixMonthData,
  fetchYearData,
} from "./api";
import "./App.css";

import { makeStyles } from "@material-ui/core/styles";
import Grid from "@material-ui/core/Grid";

import Navbar from "./components/Navbar";
import LeftSide from "./components/LeftSide";
import RightSide from "./components/RightSide";
import FindInput from "./components/FindInput";
import StockChart from "./components/Chart/StockChart";

const useStyles = makeStyles(() => ({
  container: {
    display: "flex",
    justifyContent: "center",
  },
}));

function App() {
  const [companyOverview, setCompanyOverview] = useState(null);
  const [dailyData, setDailyData] = useState(null);
  const classes = useStyles();

  useEffect(() => {
    const fetchData = async () => {
      //const dailyDataResult = await fetchDailyData("NFLX");
      const data = await fetchYearData("GME");
      setDailyData(data);
    };
    fetchData();
  }, []);

  return (
    <div className="App">
      <header>
        <Navbar />
      </header>
      <main>
        <Grid className={classes.container} container>
          <LeftSide />
          <RightSide />
        </Grid>
        <Grid className={classes.container} container>
          <FindInput />
        </Grid>
        <Grid className={classes.container} container>
          {dailyData ? <StockChart dailyData={dailyData} /> : null}
        </Grid>
      </main>
    </div>
  );
}

export default App;
