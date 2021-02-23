import React, { useState, useEffect } from "react";
import { fetchStockInfo, fetchStockDescription } from "./api";
import { calculatePercent, fetchData } from "./components/functions";
import "./App.css";

import { makeStyles } from "@material-ui/core/styles";
import Grid from "@material-ui/core/Grid";

import Navbar from "./components/Navbar";
import LeftSide from "./components/LeftSide/LeftSide";
import MiddleSide from "./components/MiddleSide";
import RightSide from "./components/RightSide";
import FindInput from "./components/FindInput";
import Filter from "./components/Filter";
import StockChart from "./components/Chart/StockChart";

const useStyles = makeStyles(() => ({
  container: {
    display: "flex",
    justifyContent: "center",
  },
  chartTableContainer: {
    maxWidth: "50%",
    margin: "auto",
  },
}));

function App() {
  const classes = useStyles();
  const [currentTab, setCurrentTab] = useState(0);
  const [price, setPrice] = useState(0);
  const [ticker, setTicker] = useState("VOO"); // default VOO
  const [chartData, setChartData] = useState(null);
  const [isNewStock, setIsNewStock] = useState(true);
  const [stockChange, setStockChange] = useState({
    changeInNumber: "",
    changeInPercent: "",
  });
  const [stockInfo, setStockInfo] = useState({
    symbol: "VOO",
    name: "VANGUARD 500 INDEX FUND ETF SHARES",
    stock_exchange: { acronym: "NYSEARCA" },
  });

  useEffect(() => {
    const handleData = async () => {
      const data = await fetchData(ticker, currentTab);
      const [stockInfoResult] = await fetchStockInfo(ticker);
      const [{ close: closeToday }, { close: closeYesterday }] = data;

      // Calculate stock change in number
      const stockChangeInNumber = closeToday - closeYesterday;

      // Calculate stock change in percent
      const stockChangeInPercent = calculatePercent(
        stockChangeInNumber,
        closeYesterday
      );

      setChartData(data);
      setIsNewStock(true);
      setPrice(closeToday);
      setStockInfo(stockInfoResult);
      setStockChange({
        changeInNumber: String(stockChangeInNumber),
        changeInPercent: String(stockChangeInPercent),
      });
    };
    handleData();
  }, [ticker, currentTab]);

  return (
    <div className="App">
      <header>
        <Navbar />
      </header>
      <main>
        <Grid className={classes.container} container>
          <LeftSide
            price={price}
            stockInfo={stockInfo}
            stockChange={stockChange}
          />
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
        <div className={classes.chartTableContainer}>
          <Grid container>
            <Filter currentTab={currentTab} setCurrentTab={setCurrentTab} />
          </Grid>
          <Grid container>
            {chartData ? (
              <StockChart ticker={ticker} chartData={chartData} />
            ) : null}
          </Grid>
        </div>
      </main>
    </div>
  );
}

export default App;
