import React, { useState, useEffect } from "react";
import {
  fetchRecentData,
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
  const classes = useStyles();
  const [price, setPrice] = useState(0);
  const [ticker, setTicker] = useState("VOO"); // default VOO
  const [chartData, setChartData] = useState(null);
  const [companyOverview, setCompanyOverview] = useState(null);

  useEffect(() => {
    const fetchData = async () => {
      const data = await fetchMonthData(ticker);
      const [latestData] = data;

      setChartData(data);
      setPrice(latestData.close);
    };
    fetchData();
  }, [ticker]);

  console.log(price);

  return (
    <div className="App">
      <header>
        <Navbar />
      </header>
      <main>
        <Grid className={classes.container} container>
          <LeftSide price={price} />
          <RightSide />
        </Grid>
        <Grid className={classes.container} container>
          <FindInput setTicker={setTicker} />
        </Grid>
        <Grid className={classes.container} container>
          {chartData ? (
            <StockChart ticker={ticker} chartData={chartData} />
          ) : null}
        </Grid>
      </main>
    </div>
  );
}

export default App;
