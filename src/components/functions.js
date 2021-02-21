export const editNumber = (num) => {
  const isInt = num % 1 === 0;

  // Add two decimals if number is integer
  if (isInt) {
    num = num.toFixed(2);
  }
  // Return number with 2 decimal places
  else {
    num = String(Math.round((num + Number.EPSILON) * 100) / 100);
  }

  return num.replace(".", ",");
};

export const calculatePercent = (stockChangeInNumber, closeYesterday) => {
  const stockChangeInPercent = (stockChangeInNumber / closeYesterday) * 100;
  const rounded = String(
    Math.round((stockChangeInPercent + Number.EPSILON) * 100) / 100
  );

  return rounded.replace(".", ",");
};
