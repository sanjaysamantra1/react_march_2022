import { render, screen } from "@testing-library/react";
import { A, add, cars, cars2, f1, isEven } from "./utils/utils";

//test suite
describe("I am Testing util file", () => {
  it("i am testing f1 function", () => {
    expect(A).toBe(0);
    f1();
    expect(A).toBe(5);
  });

  it("i am testing add function", () => {
    expect(add(2, 3)).toBe(5);
    expect(add(2, -3)).toBe(-1);
    expect(add(-2, -3)).toBe(-5);
    expect(add(-2, 3)).toBe(1);
    expect(add(2, 3)).not.toBe(undefined);
    expect(add(2, 3)).not.toBe(null);
  });

  it("i am testing isEven function", () => {
    expect(isEven(4)).toBeTruthy();
    expect(isEven(5)).toBeFalsy();
  });

  it("i am testing array", () => {
    expect(cars).toContain("maruti");
    expect(cars).not.toContain("bmw");
    expect(cars.length).toBe(3);
    expect(cars).toEqual(cars2);
  });
});
