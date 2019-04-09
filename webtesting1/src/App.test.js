import React from "react";
import ReactDOM from "react-dom";
import App from "./App";
import { render, fireEvent, getByValue } from "react-testing-library";

describe("<App/>", () => {
  it("renders without crashing", () => {
    const div = document.createElement("div");
    ReactDOM.render(<App />, div);
    ReactDOM.unmountComponentAtNode(div);
  });

  it("renders successfully", () => {
    render(<App />);
  });

  it('renders hello world', () => {
    const { getByText, queryByText, debug } = render(<App/>);

    debug();

    //getByText(/Hello World/)
    expect(queryByText(/hello world/i)).not.toBeNull();
  });

  it('greet the team', () => {
    const { getByText } = render(<App/>);
    const button = getByText(/greet/i)

    fireEvent.click(button)
    getByText(/hello web17/i)
  });

  it('say goodbye', () => {
    const {getByText} = render(<App/>);
    const button = getByText(/goodbye/i)

    fireEvent.click(button)
    getByText(/later!/i)
  });
});
