import React, { FunctionComponent } from "react";
import { render } from "react-dom";

const Root: FunctionComponent = () => {
  return <div>Working</div>;
};

render(<Root />, document.getElementById("root"));
