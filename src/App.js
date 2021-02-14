import "./App.css";
import Navbar from "./components/Navbar";
import LeftSide from "./components/LeftSide";
import RightSide from "./components/RightSide";
import StockChart from "./components/StockChart";

function App() {
  return (
    <div className="main-container">
      <Navbar />
      <LeftSide />
      <RightSide />
      <StockChart />
    </div>
  );
}

export default App;
