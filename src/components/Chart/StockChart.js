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
  const [stockData, setStockData] = useState({});

  useEffect(() => {
    setReversedDailyData([...dailyData].reverse());
  }, [dailyData]);

  useEffect(() => {
    setStockData({
      labels: reversedDailyData.map(({ date }) => date),
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
  }, [reversedDailyData]);

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
