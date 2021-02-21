export const editNumber = (num) => {
  // Round at two decimal places
  const rounded = num.toFixed(2);

  return rounded.replace(".", ",");
};

export const calculatePercent = (stockChangeInNumber, closeYesterday) => {
  const stockChangeInPercent = (stockChangeInNumber / closeYesterday) * 100;
  const rounded = stockChangeInPercent.toFixed(2);

  return rounded.replace(".", ",");
};
