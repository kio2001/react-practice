import React, { useState } from "react";
import Button from "../components/Button";
function CalcComponent() {
  const [left, setLeft] = useState(0);
  function pushButton(num){
    setLeft(num);
    console.log(num)
  }
  return (
    <div>
      <div className="input">
        <input type="text" value={`${left}`} ></input>
      </div>
      <div className="AllButton">
        <div>
          <Button buttonParam={7} onClick={ ()=> pushButton(7)}/>
          <Button buttonParam={8} />
          <Button buttonParam={9} />
          <Button buttonParam={"-"} />
          <Button buttonParam={"C"} />
        </div>
        <div>
          <Button buttonParam={4} />
          <Button buttonParam={5} />
          <Button buttonParam={6} />
          <Button buttonParam={"+"} />
        </div>
        <div>
          <Button buttonParam={1} />
          <Button buttonParam={2} />
          <Button buttonParam={3} />
          <Button buttonParam={"×"} />
        </div>
        <div>
          <Button buttonParam={"00"} />
          <Button buttonParam={0} />
          <Button buttonParam={"/"} />
          <Button buttonParam={"="} />
        </div>
      </div>
    </div>
  );
}

export default CalcComponent;
