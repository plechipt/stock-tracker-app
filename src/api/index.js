import axios from "axios";

const API_KEY = process.env.REACT_APP_API_KEY;

export const fetchDailyData = async (ticker) => {
  const BASE_URL = `https://www.alphavantage.co/query?function=TIME_SERIES_INTRADAY&symbol=${ticker}&interval=5min&apikey=${API_KEY}`;
  const { data } = await axios.get(BASE_URL);
  const metaData = data["Meta Data"];
  const timeSeries = data["Time Series (5min)"];

  console.log(metaData, timeSeries);
};
