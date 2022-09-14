import React, { useState } from "react";
import Button from "../components/Button";
function CalcComponent() {
  const [left, setLeft] = useState(" ");
  const [right, setRight] = useState(" ");
  const [symbol, setSymbol] = useState(" ");

  function pushButton(num) {
    if (symbol === " ") {
      setLeft(left + String(num));
    } else {
      setRight(right + String(num));
    }
  }
  function pushSymbol(sym) {
    setSymbol(sym);
  }

  function pushClear() {
    setLeft(" ");
    setSymbol(" ");
    setRight(" ");
  }

  function pushEqual() {
    const leftNum = Number(left);
    const rightNum = Number(right);
    let Result = 0;

    if (symbol === "+") {
      Result = leftNum + rightNum;
      setLeft(Result);
    } else if (symbol === "-") {
      Result = leftNum + rightNum;
      setLeft(Result);
    } else if (symbol === "×") {
      Result = leftNum * rightNum;
      setLeft(Result);
    } else {
      Result = leftNum / rightNum;
      setLeft(Result);
    }
    setSymbol(" ");
    setRight(" ");
  }
  return (
    <div>
      <div className="input">
        <input type="text" value={`${left} ${symbol} ${right}`}></input>
      </div>
      <div className="AllButton">
        <div>
          <Button buttonParam={7} buttonFunc={pushButton} />
          <Button buttonParam={8} buttonFunc={pushButton} />
          <Button buttonParam={9} buttonFunc={pushButton} />
          <Button buttonParam={"-"} buttonFunc={pushSymbol} />
          <Button buttonParam={"C"} buttonFunc={pushClear} />
        </div>
        <div>
          <Button buttonParam={4} buttonFunc={pushButton} />
          <Button buttonParam={5} buttonFunc={pushButton} />
          <Button buttonParam={6} buttonFunc={pushButton} />
          <Button buttonParam={"+"} buttonFunc={pushSymbol} />
        </div>
        <div>
          <Button buttonParam={1} buttonFunc={pushButton} />
          <Button buttonParam={2} buttonFunc={pushButton} />
          <Button buttonParam={3} buttonFunc={pushButton} />
          <Button buttonParam={"×"} buttonFunc={pushSymbol} />
        </div>
        <div>
          <Button buttonParam={"00"} buttonFunc={pushButton} />
          <Button buttonParam={0} buttonFunc={pushButton} />
          <Button buttonParam={"/"} buttonFunc={pushSymbol} />
          <Button buttonParam={"="} buttonFunc={pushEqual} />
        </div>
      </div>
    </div>
  );
}

export default CalcComponent;
