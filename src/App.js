import "./App.css";
import { makeStyles } from "@material-ui/core/styles";
import Grid from "@material-ui/core/Grid";

import Navbar from "./components/Navbar";
import LeftSide from "./components/LeftSide";
import RightSide from "./components/RightSide";
import StockChart from "./components/StockChart";

const useStyles = makeStyles(() => ({
  container: {
    display: "flex",
    justifyContent: "center",
  },
}));

function App() {
  const classes = useStyles();

  return (
    <div className="App">
      <header>
        <Navbar />
      </header>
      <main>
        <Grid className={classes.container} container spacing={3}>
          <LeftSide />
          <RightSide />
        </Grid>
        <Grid className={classes.container} container spacing={3}>
          <StockChart />
        </Grid>
      </main>
    </div>
  );
}

export default App;
