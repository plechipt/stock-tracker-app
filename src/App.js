import React, { useState, useEffect } from "react";
import {
  fetchRecentData,
  fetchMonthData,
  fetchSixMonthData,
  fetchYearData,
  fetchCompanyInfo,
  fetchCompanyDescription,
} from "./api";
import "./App.css";

import { makeStyles } from "@material-ui/core/styles";
import Grid from "@material-ui/core/Grid";

import Navbar from "./components/Navbar";
import LeftSide from "./components/LeftSide";
import MiddleSide from "./components/MiddleSide";
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
  const [companyDescription, setCompanyDescription] = useState({
    description: "",
    website: "",
  });
  const [companyInfo, setCompanyInfo] = useState({
    symbol: "VOO",
    name: "VANGUARD 500 INDEX FUND ETF SHARES",
    stock_exchange: { acronym: "NYSEARCA" },
  });
  const [chartData, setChartData] = useState(null);

  useEffect(() => {
    const fetchData = async () => {
      //const data = await fetchYearData(ticker);
      //const [latestData] = data;
      //const [companyInfoResult] = await fetchCompanyInfo(ticker);
      const [companyDescriptionResult] = await fetchCompanyDescription(ticker);
      //setChartData(data);
      //setPrice(latestData.close);
      //setCompanyInfo(companyInfoResult);
      setCompanyDescription(companyDescriptionResult);
    };
    fetchData();
  }, [ticker]);

  return (
    <div className="App">
      <header>
        <Navbar />
      </header>
      <main>
        <Grid className={classes.container} container>
          <LeftSide price={price} companyInfo={companyInfo} />
          <MiddleSide companyDescription={companyDescription} />
          <RightSide companyInfo={companyInfo} />
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
