import { StrictMode } from "react";
import ReactDom from "react-dom";

import Test01 from "./Test01";
import { Test02 } from "./Test01";

ReactDom.render(
  <StrictMode>
    <Test01 />
    <Test02 />
  </StrictMode>,
  document.getElementById("root")
);
