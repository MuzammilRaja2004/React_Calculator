import React from "react";

function Button(props) {
  return (
    <div>
      <div>
        <div className="main-calc">
          <div className="shape" />
          <div className="shape" />
        </div>
        <div className="wrapper">
          <div>
            <input
              type="text"
              value={props.sendStateValue}
              onChange={()=>props.SendCleanFunction()}
              name="value"
              id="uservalue"
              placeholder="0"
            />
          </div>
          <div>
            <button className="button-clear" onClick={()=>props.SendCleanFunction()}>
              c
            </button>
            <button
              className="button-divid operator"
              onClick={() => props.SendFunction("/")}
            >
              /
            </button>
          </div>
          <div>
            <button onClick={() => props.SendFunction("7")}>7</button>
            <button onClick={() => props.SendFunction("8")}>8</button>
            <button onClick={() => props.SendFunction("9")}>9</button>
            <button
              className="operator"
              onClick={() => props.SendFunction("*")}
            >
              *
            </button>
          </div>
          <div>
            <button onClick={() => props.SendFunction("4")}>4</button>
            <button onClick={() => props.SendFunction("5")}>5</button>
            <button onClick={() => props.SendFunction("6")}>6</button>
            <button
              className="operator"
              onClick={() => props.SendFunction("-")}
            >
              -
            </button>
          </div>
          <div>
            <button onClick={() => props.SendFunction("1")}>1</button>
            <button onClick={() => props.SendFunction("2")}>2</button>
            <button onClick={() => props.SendFunction("3")}>3</button>
            <button
              className="operator"
              onClick={() => props.SendFunction("+")}
            >
              +
            </button>
          </div>
          <div>
            <button onClick={() => props.SendFunction("0")}>0</button>
            <button onClick={() => props.SendFunction("00")}>00</button>
            <button onClick={() => props.SendFunction(".")}>.</button>
            <button className="operator" onClick={() => props.SendFunction2()}>
              =
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Button;
