import React from "react";
import css from '../styles/layout.module.css'
const Button = ({ buttonParam, buttonFunc }) => (
  <button className= {css.b_calc}onClick={() => buttonFunc(buttonParam)}>{buttonParam}</button>
);

export default Button;
