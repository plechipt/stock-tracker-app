import axios from "axios";

const API_KEY = process.env.REACT_APP_API_KEY;
const INTRADAY_URL = `http://api.marketstack.com/v1/intraday?access_key=${API_KEY}`;
const EOD_URL = `http://api.marketstack.com/v1/eod?access_key=${API_KEY}`;

export const fetchRecentData = async (ticker) => {
  const API_URL = `${INTRADAY_URL}&symbols=${ticker}&interval=15min&limit=100`;

  try {
    let {
      data: { data },
    } = await axios.request(API_URL);
    return data;
  } catch {
    console.log("test");
  }
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
