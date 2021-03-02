import React, { useState, useEffect } from "react";
import { Line } from "react-chartjs-2";
import { options } from "./chartOptions";

import { makeStyles } from "@material-ui/core/styles";
import Grid from "@material-ui/core/Grid";

const useStyles = makeStyles((theme) => ({
  root: {
    marginTop: theme.spacing(4),
    margin: "auto",
    width: "45%",
  },
}));

const GREEN_COLOR = "#34A853";
const RED_COLOR = "#EA4335";

const Chart = ({ chartData }) => {
  const classes = useStyles();
  const [dates, setDates] = useState([]);
  const [stockData, setStockData] = useState({});
  const [reversedData, setReversedData] = useState([]);
  const [colorOfChart, setColorOfChart] = useState(GREEN_COLOR); // Green default

  // Reset data
  useEffect(() => {
    setReversedData([]);
    setDates([]);
  }, [chartData]);

  // Reverse data
  useEffect(() => {
    setReversedData([...chartData].reverse());
  }, [chartData]);

  // Set color of chart
  useEffect(() => {
    if (chartData) {
      const firstIndex = 0;
      const lastIndex = chartData.length - 1;
      const closeFirst = chartData[firstIndex].close;
      const closeLast = chartData[lastIndex].close;

      if (closeFirst > closeLast) {
        setColorOfChart(GREEN_COLOR);
      } else {
        setColorOfChart(RED_COLOR);
      }
    }
  }, [chartData]);

  // Format date
  useEffect(() => {
    if (reversedData) {
      reversedData.forEach(({ date }) => {
        const dateClass = new Date(date);
        const day = dateClass.getDate();
        const month = dateClass.getMonth() + 1;

        setDates((prevDate) => {
          return [...prevDate, `${day}.${month}`];
        });
      });
    }
  }, [reversedData]);

  useEffect(() => {
    if (reversedData && dates) {
      setStockData({
        labels: dates.map((date) => date),
        datasets: [
          {
            label: "price",
            data: reversedData.map(({ close }) => close),
            borderColor: colorOfChart,
            fill: false,
            borderWidth: 2,
          },
        ],
      });
    }
  }, [reversedData, dates, colorOfChart]);

  return (
    <div className={`${classes.root} chart-container`}>
      <Line data={stockData} options={options} />
    </div>
  );
};

export default Chart;
