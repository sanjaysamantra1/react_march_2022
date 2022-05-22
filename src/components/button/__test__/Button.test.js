import { render, screen } from "@testing-library/react";
import renderer from 'react-test-renderer';
import Button from "../Button";
import React from 'react'

//test suite
describe("I am Testing util file", () => {
  it("i am testing f1 function", () => {
    const tree = renderer
      .create(<Button text={'mybtn'}></Button>)
      .toJSON();
    expect(tree).toMatchSnapshot();
  });
});
