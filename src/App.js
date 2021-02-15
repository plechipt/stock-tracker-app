import "./App.css";
import { fetchDailyData } from "./api";

import { makeStyles } from "@material-ui/core/styles";
import Grid from "@material-ui/core/Grid";

import Navbar from "./components/Navbar";
import LeftSide from "./components/LeftSide";
import RightSide from "./components/RightSide";
import FindInput from "./components/FindInput";
import StockChart from "./components/StockChart";

const useStyles = makeStyles(() => ({
  container: {
    display: "flex",
    justifyContent: "center",
  },
}));

function App() {
  fetchDailyData("NFLX");
  const classes = useStyles();

  return (
    <div className="App">
      <header>
        <Navbar />
      </header>
      <main>
        <Grid className={classes.container} container>
          <LeftSide />
          <RightSide />
        </Grid>
        <Grid className={classes.container} container>
          <FindInput />
        </Grid>
        <Grid className={classes.container} container>
          <StockChart />
        </Grid>
      </main>
    </div>
  );
}

export default App;
