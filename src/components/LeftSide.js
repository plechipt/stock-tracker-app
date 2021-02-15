import React from "react";

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
    marginRight: theme.spacing(1),
  },
  muted: {
    opacity: "50%",
  },
}));

const LeftSide = () => {
  const classes = useStyles();

  return (
    <Grid className={classes.root} item xs={12} md={4}>
      <div>
        <Typography className={classes.muted} variant="h6">
          Netflix
        </Typography>
        <div>
          <Typography
            className={`${classes.withoutBreak} ${classes.marginRight}`}
            variant="h3"
          >
            600,00
          </Typography>
          <Typography
            className={`${classes.withoutBreak} ${classes.muted}`}
            variant="h6"
          >
            USD
          </Typography>
        </div>
      </div>
    </Grid>
  );
};

export default LeftSide;
