import axios from "axios";

const API_KEY = process.env.REACT_APP_API_KEY;
const API_KEY2 = process.env.REACT_APP_API_KEY2;

const BASE_URL = "//api.marketstack.com/v1";
const STOCK_URL = `${BASE_URL}/tickers?access_key=${API_KEY}`;
const DESCRIPTION_URL = "https://financialmodelingprep.com/api/v3/profile/";

export const fetchStockDescription = async (ticker) => {
  const API_URL = `${DESCRIPTION_URL}/${ticker}?apikey=${API_KEY2}`;
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

export const fetchTimeData = async (API_URL) => {
  const {
    data: { data },
  } = await axios.request(API_URL);

  return data;
};
