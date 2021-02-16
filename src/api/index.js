import axios from "axios";

const API_KEY = process.env.REACT_APP_API_KEY;

export const fetchDailyData = async (ticker) => {
  const API_URL = `http://api.marketstack.com/v1/intraday?access_key=${API_KEY}&symbols=${ticker}`;

  const {
    data: { data },
  } = await axios.request(API_URL);

  return data;
};
