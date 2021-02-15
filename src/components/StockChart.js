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

const Chart = () => {
  const classes = useStyles();
  const [stockData, setStockData] = useState({});

  useEffect(() => {
    setStockData({
      labels: [1, 2, 3],
      datasets: [
        {
          label: "price",
          data: [1, 2, 3],
          borderColor: "#34A853",
          fill: false,
          borderWidth: 2,
        },
      ],
    });
  }, []);

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
