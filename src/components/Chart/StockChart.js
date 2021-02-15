import React, { useState, useEffect } from "react";
import { Line } from "react-chartjs-2";
import { options } from "./chartOptions";

import { makeStyles } from "@material-ui/core/styles";
import Grid from "@material-ui/core/Grid";

const useStyles = makeStyles(() => ({
  root: {
    display: "flex",
    justifyContent: "center",
    margin: "auto",
    marginTop: "5rem",
    width: "60rem",
  },
}));

const Chart = ({ dailyData }) => {
  const classes = useStyles();
  const [stockData, setStockData] = useState({});
  const [dateKeys, setDateKeys] = useState([]);
  const [prices, setPrices] = useState([]);

  // Get the objects keys
  useEffect(() => {
    if (dailyData) {
      dailyData.forEach((date) => {
        setDateKeys(Object.keys(date));
      });
    }
  }, [dailyData]);

  // Get the prices with object keys
  useEffect(() => {
    dateKeys.reverse().forEach((key) => {
      const price = dailyData[0][key];
      setPrices((prevPrices) => [...prevPrices, price]);
    });
  }, [dateKeys]);

  useEffect(() => {
    if (prices) {
      setStockData({
        labels: dateKeys.map((key) => key),
        datasets: [
          {
            label: "price",
            data: prices.map((price) => price["1. open"]),
            borderColor: "#34A853",
            fill: false,
            borderWidth: 2,
          },
        ],
      });
    }
  }, [prices]);

  return (
    <div>
      <Grid
        className={`${classes.root} ${classes.chartContainer}`}
        item
        xs={12}
      >
        <Line data={stockData} options={options} />
      </Grid>
    </div>
  );
};

export default Chart;
