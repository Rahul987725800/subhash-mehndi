export const mod = (v) => {
  return (x) => {
    return Math.abs(x - v);
  };
};
export const range = (start, end) => {
  const arr = [];
  for (let i = start; i <= end; i++) {
    arr.push(i);
  }
  return arr;
};
