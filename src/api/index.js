import axios from "axios";

const API_KEY = process.env.REACT_APP_API_KEY;
const API_KEY2 = process.env.REACT_APP_API_KEY2;

const BASE_URL = "http://api.marketstack.com/v1";
const EOD_URL = `${BASE_URL}/eod?access_key=${API_KEY}`;
const INTRADAY_URL = `${BASE_URL}/intraday?access_key=${API_KEY}`;
const STOCK_URL = `${BASE_URL}/tickers?access_key=${API_KEY}`;

//https://financialmodelingprep.com/
export const fetchStockDescription = async (ticker) => {
  const API_URL = `https://financialmodelingprep.com/api/v3/profile/${ticker}?apikey=${API_KEY2}`;
  const { data } = await axios.request(API_URL);

  return data;
};

export const fetchStockInfo = async (ticker) => {
  const API_URL = `${STOCK_URL}&symbols=${ticker}`;
  const {
    data: { data },
  } = await axios.request(API_URL);

  return data;
};

export const fetchRecentData = async (ticker) => {
  const API_URL = `${EOD_URL}&symbols=${ticker}&limit=7`;
  const {
    data: { data },
  } = await axios.request(API_URL);

  return data;
};

export const fetchMonthData = async (ticker) => {
  const API_URL = `${EOD_URL}&symbols=${ticker}&limit=30`;
  const {
    data: { data },
  } = await axios.request(API_URL);

  return data;
};

export const fetchSixMonthData = async (ticker) => {
  const API_URL = `${EOD_URL}&symbols=${ticker}&limit=180`;
  const {
    data: { data },
  } = await axios.request(API_URL);

  return data;
};

export const fetchYearData = async (ticker) => {
  const API_URL = `${EOD_URL}&symbols=${ticker}&limit=365`;
  const {
    data: { data },
  } = await axios.request(API_URL);

  return data;
};
