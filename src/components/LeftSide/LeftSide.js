import React from "react";
import CountUp from "react-countup";
import CustomChangeInStock from "./ChangeInStock";

import { makeStyles } from "@material-ui/core/styles";
import Grid from "@material-ui/core/Grid";
import Typography from "@material-ui/core/Typography";

const useStyles = makeStyles((theme) => ({
  root: {
    display: "flex",
    justifyContent: "center",
  },

  withoutBreak: {
    display: "inline-block",
  },
  marginRight: {
    marginRight: theme.spacing(0.5),
  },
  marginRightBigger: {
    marginRight: theme.spacing(1),
  },
  muted: {
    opacity: "50%",
  },
}));

const LeftSide = ({ price, stockInfo, stockChange }) => {
  const classes = useStyles();

  return (
    <Grid className={classes.root} item xs={12} md={4}>
      <div>
        <Typography
          className={`${classes.nameContainer} ${classes.muted}`}
          variant="h6"
        >
          {stockInfo.name}
        </Typography>
        <div className="price-container">
          <Typography
            className={`${classes.withoutBreak} ${classes.marginRightBigger}`}
            variant="h3"
          >
            <CountUp start={0} end={price} duration={1.25} decimals={2} />
          </Typography>
          <Typography
            className={`${classes.withoutBreak} ${classes.muted}`}
            variant="h6"
          >
            USD
          </Typography>
        </div>
        <CustomChangeInStock stockChange={stockChange} />
      </div>
    </Grid>
  );
};

export default LeftSide;
