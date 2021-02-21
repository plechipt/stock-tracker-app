export const calculatePercent = (stockChangeInNumber, closeYesterday) => {
  const stockChangeInPercent = (stockChangeInNumber / closeYesterday) * 100;
  const rounded = stockChangeInPercent.toFixed(2);

  return rounded;
};
