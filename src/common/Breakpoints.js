const size = {
  sm: "576px",
  md: "768px",
  lg: "1050px",
  xlg: "3000px",
};

const device = {
  sm: `(min-width: ${size.sm})`,
  md: `(min-width: ${size.md})`,
  lg: `(min-width: ${size.lg})`,
  xlg: `(min-width: ${size.xlg})`,
};

export default { size, device };
