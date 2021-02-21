import React from "react";
import CountUp from "react-countup";
import { makeStyles } from "@material-ui/core/styles";

const useStyles = makeStyles((theme) => ({
  marginRight: {
    marginRight: theme.spacing(0.5),
  },
}));

const ChangeCountUp = ({ number, percent }) => {
  const classes = useStyles();
  return (
    <>
      <b className={classes.marginRight}>
        <span>$</span>
        <CountUp start={0} end={Number(number)} duration={1.5} decimals={2} />
      </b>
      <b>
        (
        <CountUp start={0} end={Number(percent)} duration={2} decimals={2} />
        %)
      </b>
    </>
  );
};

export default ChangeCountUp;
