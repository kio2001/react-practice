import React from "react";

const Button = ({ buttonParam, buttonFunc }) => (
  <button onClick={() => buttonFunc(buttonParam)}>{buttonParam}</button>
);

export default Button;
