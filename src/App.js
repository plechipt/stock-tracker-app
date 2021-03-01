import React, { useState, useEffect } from "react";
import { fetchStockInfo } from "./api";
import { calculatePercent, fetchData } from "./components/functions";
import "./App.css";

import { makeStyles } from "@material-ui/core/styles";
import Grid from "@material-ui/core/Grid";
import Typography from "@material-ui/core/Typography";

import Navbar from "./components/Navbar";
import LeftSide from "./components/LeftSide/LeftSide";
import MiddleSide from "./components/MiddleSide";
import RightSide from "./components/RightSide";
import FindInput from "./components/FindInput";
import Filter from "./components/Filter";
import StockChart from "./components/Chart/StockChart";

const useStyles = makeStyles((theme) => ({
  container: {
    display: "flex",
    justifyContent: "center",
  },
  chartTableContainer: {
    margin: "auto",
    maxWidth: "50%",
  },
  invalidText: {
    margin: "auto",
    marginTop: theme.spacing(4),
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
      const [stockInfoResult] = await fetchStockInfo(ticker);
      setStockInfo(stockInfoResult);
      setIsNewStock(true);
    };
    handleData();
  }, [ticker]);

  useEffect(() => {
    const handleData = async () => {
      const data = await fetchData(ticker, currentTab);

      if (data === null) {
        setChartData(null);
        return null;
      }

      // Calculate stock change in number
      const [{ close: closeToday }, { close: closeYesterday }] = data;
      const stockChangeInNumber = closeToday - closeYesterday;

      // Calculate stock change in percent
      const stockChangeInPercent = calculatePercent(
        stockChangeInNumber,
        closeYesterday
      );

      setChartData(data);
      setPrice(closeToday);
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
        {stockInfo ? (
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
        ) : null}
        <Grid container>
          <FindInput setTicker={setTicker} />
        </Grid>
        <>
          <Grid className={classes.container} container>
            <Filter currentTab={currentTab} setCurrentTab={setCurrentTab} />
          </Grid>
          <>
            {chartData ? (
              <StockChart ticker={ticker} chartData={chartData} />
            ) : (
              <Typography className={classes.invalidText} variant="h3">
                Invalid ticker
              </Typography>
            )}
          </>
        </>
      </main>
    </div>
  );
}

export default App;
