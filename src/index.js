import React from "react";
import { render } from "react-dom";
import { Home } from "./pages";
import withFeedback from "domains/feedback";
import "./index.css";

const DecoratedComponent = withFeedback(Home)

render(
  <React.StrictMode>
    <DecoratedComponent/>
  </React.StrictMode>,
  document.getElementById("root")
);
