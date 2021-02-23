import {
  fetchRecentData,
  fetchMonthData,
  fetchSixMonthData,
  fetchYearData,
} from "../api";

export const fetchData = async (ticker, currentTab) => {
  let data;

  switch (currentTab) {
    // MonthData
    case 1:
      data = await fetchMonthData(ticker);
      break;
    // MonthData
    case 2:
      data = await fetchSixMonthData(ticker);
      break;
    case 3:
      data = await fetchYearData(ticker);
      break;
    // Recent
    default: {
      data = await fetchRecentData(ticker);
    }
  }

  return data;
};

export const calculatePercent = (stockChangeInNumber, closeYesterday) => {
  const stockChangeInPercent = (stockChangeInNumber / closeYesterday) * 100;
  const rounded = stockChangeInPercent.toFixed(2);

  return rounded;
};
