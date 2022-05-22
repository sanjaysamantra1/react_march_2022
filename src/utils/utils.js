export function add(a, b) {
  return a + b;
}
export function sub(a, b) {
  return a - b;
}
export function isEven(n) {
  return n % 2 == 0;
}

export const cars = ["tata", "honda", "maruti"];
export const cars2 = [...cars];

export let A = 0;
export function f1(flag) {
  if (flag) {
    console.log("something");
  }
  A = 5;
}

