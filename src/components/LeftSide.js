import React from "react";
import CountUp from "react-countup";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowUp, faArrowDown } from "@fortawesome/free-solid-svg-icons";

import { makeStyles } from "@material-ui/core/styles";
import Grid from "@material-ui/core/Grid";
import Typography from "@material-ui/core/Typography";

const useStyles = makeStyles((theme) => ({
  root: {
    display: "flex",
    justifyContent: "center",
  },
  nameContainer: {
    marginBottom: theme.spacing(1),
  },
  withoutBreak: {
    display: "inline-block",
  },
  marginRight: {
    marginRight: theme.spacing(0.5),
  },
  muted: {
    opacity: "50%",
  },
  stockChangeText: {
    //color: "#34A853",
    color: "#EA4335",
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
            className={`${classes.withoutBreak} ${classes.marginRight}`}
            variant="h3"
          >
            <CountUp start={0} end={price} duration={1} decimals={2} />
          </Typography>
          <Typography
            className={`${classes.withoutBreak} ${classes.muted}`}
            variant="h6"
          >
            USD
          </Typography>
        </div>
        <div className="stock-change-container">
          <Typography className={classes.stockChangeText}>
            <FontAwesomeIcon
              className={classes.marginRight}
              icon={faArrowDown}
            ></FontAwesomeIcon>
            <b>{stockChange}</b>
          </Typography>
        </div>
      </div>
    </Grid>
  );
};

export default LeftSide;
