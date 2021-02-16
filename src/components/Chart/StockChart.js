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
  const [reversedDailyData, setReversedDailyData] = useState([]);
  const [dates, setDates] = useState([]);
  const [stockData, setStockData] = useState({});

  // Reverse data
  useEffect(() => {
    setReversedDailyData([...dailyData].reverse());
  }, [dailyData]);

  // Format date
  useEffect(() => {
    if (reversedDailyData) {
      reversedDailyData.forEach(({ date }) => {
        const dateClass = new Date(date);
        const day = dateClass.getDate();
        const month = dateClass.getMonth() + 1;

        setDates((prevDate) => {
          return [...prevDate, `${day}.${month}`];
        });
      });
    }
  }, [reversedDailyData]);

  useEffect(() => {
    if (reversedDailyData && dates) {
      setStockData({
        labels: dates.map((date) => date),
        datasets: [
          {
            label: "price",
            data: reversedDailyData.map(({ close }) => close),
            borderColor: "#34A853",
            fill: false,
            borderWidth: 2,
          },
        ],
      });
    }
  }, [reversedDailyData, dates]);

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
