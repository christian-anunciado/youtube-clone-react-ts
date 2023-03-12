const NumberFormatter = (value: number) => {
  const formatter = new Intl.NumberFormat("en-US", {
    notation: "compact",
  });

  return formatter.format(value);
};

export default NumberFormatter;
