import React, { useState, useEffect } from "react";
import {
  fetchRecentData,
  fetchMonthData,
  fetchSixMonthData,
  fetchYearData,
  fetchStockInfo,
  fetchStockDescription,
  fetchIntradayData,
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

const editNumber = (num) => {
  const isInt = num % 1 === 0;

  // Add two decimals if number is integer
  if (isInt) {
    return num.toFixed(2);
  }

  // Return number with 2 decimal places
  return Math.round((num + Number.EPSILON) * 100) / 100;
};

function App() {
  const classes = useStyles();
  const [price, setPrice] = useState(0);
  const [ticker, setTicker] = useState("VOO"); // default VOO
  const [chartData, setChartData] = useState(null);
  const [isNewStock, setIsNewStock] = useState(true);
  const [stockInfo, setStockInfo] = useState({
    symbol: "VOO",
    name: "VANGUARD 500 INDEX FUND ETF SHARES",
    stock_exchange: { acronym: "NYSEARCA" },
  });

  useEffect(() => {
    const fetchData = async () => {
      const data = await fetchRecentData(ticker);
      const [{ close: eodClose }] = data;
      const [{ close: intradayClose }] = await fetchIntradayData(ticker);
      const [stockInfoResult] = await fetchStockInfo(ticker);

      const stockChange = eodClose - intradayClose;
      const stockChangeResult = editNumber(stockChange);

      setIsNewStock(true);
      setPrice(eodClose);
      setChartData(data);
      setStockInfo(stockInfoResult);
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
          <LeftSide price={price} stockInfo={stockInfo} />
          <MiddleSide
            ticker={ticker}
            isNewStock={isNewStock}
            setIsNewStock={setIsNewStock}
          />
          <RightSide stockInfo={stockInfo} />
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
