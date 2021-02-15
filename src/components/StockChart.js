import React, { useState, useEffect } from "react";
import { Line } from "react-chartjs-2";

import { makeStyles } from "@material-ui/core/styles";
import Grid from "@material-ui/core/Grid";

const useStyles = makeStyles(() => ({
  root: {
    display: "flex",
    justifyContent: "center",
    width: "50rem",
  },
}));

const Chart = () => {
  const [stockData, setStockData] = useState({});
  const options = {
    scales: {
      yAxes: [
        {
          gridLines: {
            display: false,
          },
        },
      ],
    },
  };

  useEffect(() => {
    setStockData({
      labels: [1],
      datasets: [
        {
          label: "confirmed",
          data: [1],
          borderColor: "rgba(233, 0, 59, 1)",
          borderWidth: 3,
        },
        {
          label: "deaths",
          data: [1],
          backgroundColor: "rgba(0, 0, 0, 0.5)",
          borderColor: "black",
          borderWidth: 2,
        },
      ],
    });
  }, []);

  const classes = useStyles();
  return (
    <div>
      <Grid className={classes.root} item xs={12}>
        <Line data={stockData} options={options} />
      </Grid>
    </div>
  );
};

export default Chart;
