import { render, screen } from "@testing-library/react";
import App from "./App";

//test suite
describe("I am Testing app comp", () => {
  // test case
  test("test case-1", () => {
    console.log("it-1");
    render(<App />);
    const linkElement = screen.getByText(/My Header/i);
    expect(linkElement).toBeInTheDocument();
  });

  it("test case -2", () => {
    console.log("it-2");
    expect(2 + 2).toBe(4);
  });

  beforeAll(() => {
    console.log("before all");
  });
  beforeEach(() => {
    console.log("before each");
  });
  afterEach(() => {
    console.log("after each");
  });
  afterAll(() => {
    console.log("after all");
  });
  
});
