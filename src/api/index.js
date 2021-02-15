import axios from "axios";

const API_KEY = process.env.REACT_APP_API_KEY;

export const fetchCompanyOverview = async (ticker) => {
  const COMPANY_OVERVIEW_URL = `https://www.alphavantage.co/query?function=OVERVIEW&symbol=${ticker}&apikey=${API_KEY}`;
  const { data: companyData } = await axios.get(COMPANY_OVERVIEW_URL);

  return companyData;
};

export const fetchDailyData = async (ticker) => {
  const TIME_SERIES_URL = `https://www.alphavantage.co/query?function=TIME_SERIES_INTRADAY&symbol=${ticker}&interval=5min&apikey=${API_KEY}`;

  const { data: timeSeries } = await axios.get(TIME_SERIES_URL);
  const timeData = timeSeries["Time Series (5min)"];

  return timeData;
};
