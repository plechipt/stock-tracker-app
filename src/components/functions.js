import { fetchTimeData } from "../api";

const API_KEY = process.env.REACT_APP_API_KEY;
const BASE_URL = "http://api.marketstack.com/v1";
const EOD_URL = `${BASE_URL}/eod?access_key=${API_KEY}`;

export const fetchData = async (ticker, currentTab) => {
  let data;
  let API_URL;
  const TICKER_URL = `${EOD_URL}&symbols=${ticker}`;

  switch (currentTab) {
    // Month data
    case 1:
      API_URL = `${TICKER_URL}&limit=30`;
      break;
    // Six months data
    case 2:
      API_URL = `${TICKER_URL}&limit=180`;
      break;
    // Year data
    case 3:
      API_URL = `${TICKER_URL}&limit=365`;
      break;
    // Recent data
    default: {
      API_URL = `${TICKER_URL}&limit=7`;
    }
  }

  try {
    data = await fetchTimeData(API_URL);
  } catch {
    data = null;
  }

  return data;
};

export const calculatePercent = (stockChangeInNumber, closeYesterday) => {
  const stockChangeInPercent = (stockChangeInNumber / closeYesterday) * 100;
  const rounded = stockChangeInPercent.toFixed(2);

  return rounded;
};
