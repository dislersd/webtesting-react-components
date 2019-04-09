import React from "react";
import Greeting from "./Greeting";
import { render, getByValue } from "react-testing-library";

describe("Greeting", () => {
  it("renders no message if no message provided", () => {
    const { getByText } = render(<Greeting />);
    getByText(/no message/i);
  });
  it("renders the provided message", () => {
    const { getByText } = render(<Greeting msg={"Hello Team"}/>);
    getByText(/hello team/i);
  });
});
