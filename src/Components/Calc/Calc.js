import React, { useState } from "react";
import Buttons from "./Button";
import "./Calc.css";
function Calc() {
  const [handleInpValue, setHandleInpValue] = useState("");
  const handleInputValue = (value) => {
    setHandleInpValue(handleInpValue + value);
    // console.log("Mein Chal Raha Hun");
  };
  const handleCalculation = () => {
    let checkCalculation = eval(handleInpValue);
    setHandleInpValue(checkCalculation);
  };

  const handleCleanValue = () => {
    setHandleInpValue("");
  };

  return (
    <div>
      <Buttons
        SendFunction={handleInputValue}
        SendFunction2={handleCalculation}
        sendStateValue={handleInpValue}
        SendCleanFunction={handleCleanValue}
      />
    </div>
  );
}

export default Calc;
