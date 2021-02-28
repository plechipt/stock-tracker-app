import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowUp, faArrowDown } from "@fortawesome/free-solid-svg-icons";

import ChangeCountUp from "./ChangeCountUp";

import { makeStyles } from "@material-ui/core/styles";
import Typography from "@material-ui/core/Typography";

const useStyles = makeStyles((theme) => ({
  stockChangeContainer: {
    display: "flex",
    marginTop: theme.spacing(0.5),
  },
  marginRightBigger: {
    marginRight: theme.spacing(0.75),
  },

  greenColor: {
    color: "#34A853",
  },
  redColor: {
    color: "#EA4335",
  },
}));

const CustomChangeInStock = ({ stockChange }) => {
  const classes = useStyles();
  const { changeInNumber, changeInPercent } = stockChange;
  const number = changeInNumber.replace("-", "");
  const percent = changeInPercent.replace("-", "");

  return (
    <div className={classes.stockChangeContainer}>
      {changeInNumber !== "" && changeInPercent !== "" ? (
        <>
          {/*If is negative*/}
          {changeInNumber.includes("-") ? (
            <Typography className={classes.redColor}>
              <FontAwesomeIcon
                className={classes.marginRightBigger}
                icon={faArrowDown}
              ></FontAwesomeIcon>
              <ChangeCountUp number={number} percent={percent} />
            </Typography>
          ) : (
            <Typography className={classes.greenColor}>
              <FontAwesomeIcon
                className={classes.marginRightBigger}
                icon={faArrowUp}
              ></FontAwesomeIcon>
              <ChangeCountUp number={number} percent={percent} />
            </Typography>
          )}
        </>
      ) : null}
    </div>
  );
};

export default CustomChangeInStock;
