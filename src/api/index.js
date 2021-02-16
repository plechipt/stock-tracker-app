import axios from "axios";

const API_KEY = process.env.REACT_APP_API_KEY;

export const fetchDailyData = async (ticker) => {
  const API_URL = `http://api.marketstack.com/v1/intraday?access_key=${API_KEY}&symbols=${ticker}&interval=15min`;

  const {
    data: { data },
  } = await axios.request(API_URL);

  return data;
};

export const fetchMonthData = async (ticker) => {
  const API_URL = `http://api.marketstack.com/v1/eod?access_key=${API_KEY}&symbols=${ticker}`;

  const {
    data: { data },
  } = await axios.request(API_URL);

  const monthData = data.slice(0, 30);
  return monthData;
};

export const fetchSixMonthData = async (ticker) => {
  const API_URL = `http://api.marketstack.com/v1/eod?access_key=${API_KEY}&symbols=${ticker}&limit=180`;

  const {
    data: { data },
  } = await axios.request(API_URL);

  return data;
};
