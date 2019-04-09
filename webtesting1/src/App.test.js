import React from "react";
import ReactDOM from "react-dom";
import App from "./App";
import { render } from "react-testing-library";

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
    const { getByText, queryByText } = render(<App/>);


    //getByText(/Hello World/)
    expect(queryByText(/hello world/i)).not.toBeNull();
  });
});
