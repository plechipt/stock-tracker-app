import React, { useState, useEffect } from "react";
import { Line } from "react-chartjs-2";
import { options } from "./chartOptions";

import { makeStyles } from "@material-ui/core/styles";
import Grid from "@material-ui/core/Grid";

const useStyles = makeStyles((theme) => ({
  root: {
    marginTop: theme.spacing(3),
    width: "60rem",
  },
}));

const Chart = ({ chartData }) => {
  const classes = useStyles();
  const [reversedData, setReversedData] = useState([]);
  const [dates, setDates] = useState([]);
  const [stockData, setStockData] = useState({});

  // Reset data
  useEffect(() => {
    setReversedData([]);
    setDates([]);
  }, [chartData]);

  // Reverse data
  useEffect(() => {
    setReversedData([...chartData].reverse());
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
            borderColor: "#34A853",
            fill: false,
            borderWidth: 2,
          },
        ],
      });
    }
  }, [reversedData, dates]);

  return (
    <Grid className={`${classes.root} ${classes.chartContainer}`} item xs={11}>
      <Line data={stockData} options={options} />
    </Grid>
  );
};

export default Chart;
