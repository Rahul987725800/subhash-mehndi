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
export const trimmedText = (text, len) => {
  if (text.length < len) {
    return text;
  }
  return text.slice(0, len) + '...';
};
export class Debounce {
  callback;
  delay;
  timeOut;
  constructor(callback, delay) {
    this.callback = callback;
    this.delay = delay;
  }
  call(...args) {
    clearTimeout(this.timeOut);
    this.timeOut = setTimeout(() => this.callback(...args), this.delay);
  }
}
