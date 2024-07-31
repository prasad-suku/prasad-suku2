import React, { useRef, useState } from "react";
import "./style.css";
import circle from "../Assets/circle.png";
import cross from "../Assets/cross.png";

let data = ["", "", "", "", "", "", "", "", ""];

function TicTakToe() {
  const [count, setcount] = useState(0);
  const [lock, setlock] = useState(false);

  let refresult = useRef(null);
  let box1 = useRef(null);
  let box2 = useRef(null);
  let box3 = useRef(null);
  let box4 = useRef(null);
  let box5 = useRef(null);
  let box6 = useRef(null);
  let box7 = useRef(null);
  let box8 = useRef(null);
  let box9 = useRef(null);
  let boxesarr = [box1, box2, box3, box4, box5, box6, box7, box8, box9];
  //  togle function to apply x after o functionaly
  const toggle = (e, num) => {
    // if lock value is true then we cant apply x o  value
    if (lock) {
      console.log("setlocked");
      return 0;
    }

    if (count % 2 == 0) {
      data[num] = "x";
      e.target.innerHTML = `<img src =${cross}>`;
      setcount(count + 1);
      checkresult();
      if (data[num] === "x") {
        return null;
      }
    } else {
      data[num] = "o";
      e.target.innerHTML = `<img src =${circle}>`;
      setcount(count + 1);
      checkresult();
      if (data[num] === "o") {
        return null;
      }
    }
  };

  // checking the winner based on linear and cros index  value match

  let checkresult = () => {
    if (data[0] === data[1] && data[1] === data[2] && data[2] !== "") {
      won(data[2]);
    } else if (data[3] === data[4] && data[4] === data[5] && data[5] !== "") {
      won(data[5]);
    } else if (data[6] === data[7] && data[7] === data[8] && data[8] !== "") {
      won(data[8]);
    } else if (data[0] === data[3] && data[3] === data[6] && data[6] !== "") {
      won(data[6]);
    } else if (data[1] === data[4] && data[4] === data[7] && data[7] !== "") {
      won(data[7]);
    } else if (data[2] === data[5] && data[5] === data[8] && data[8] !== "") {
      won(data[8]);
    } else if (data[0] === data[4] && data[4] === data[8] && data[8] !== "") {
      won(data[8]);
    } else if (data[2] === data[4] && data[4] === data[6] && data[6] !== "") {
      won(data[6]);
    }
  };

  const won = (winner) => {
    setlock(true);
    if (winner === "x") {
      refresult.current.innerHTML = `Congrats <img src=${cross}> is Win!!`;
    } else {
      refresult.current.innerHTML = `Congrats <img src=${circle}> is Win!!`;
    }
  };
  let reset = () => {
    data = ["", "", "", "", "", "", "", "", ""];
    setlock(false);
    refresult.current.innerHTML = "Play Now - Tik Tak Toe";
    boxesarr.map((e) => (e.current.innerHTML = ""));
  };

  return (
    <>
      <div className="container">
        <h2 ref={refresult} className="title">
          Play Now - Tik Tak Toe{" "}
        </h2>
        <div className="board">
          <div className="row1">
            <div
              ref={box1}
              className="box"
              onClick={(e) => {
                toggle(e, 0);
              }}
            ></div>
            <div
              ref={box2}
              className="box"
              onClick={(e) => {
                toggle(e, 1);
              }}
            ></div>
            <div
              ref={box3}
              className="box"
              onClick={(e) => {
                toggle(e, 2);
              }}
            ></div>
          </div>

          <div className="row2">
            <div
              ref={box4}
              className="box"
              onClick={(e) => {
                toggle(e, 3);
              }}
            ></div>
            <div
              ref={box5}
              className="box"
              onClick={(e) => {
                toggle(e, 4);
              }}
            ></div>
            <div
              ref={box6}
              className="box"
              onClick={(e) => {
                toggle(e, 5);
              }}
            ></div>
          </div>

          <div className="row3">
            <div
              ref={box7}
              className="box"
              onClick={(e) => {
                toggle(e, 6);
              }}
            ></div>
            <div
              ref={box8}
              className="box"
              onClick={(e) => {
                toggle(e, 7);
              }}
            ></div>
            <div
              ref={box9}
              className="box"
              onClick={(e) => {
                toggle(e, 8);
              }}
            ></div>
          </div>
        </div>

        {/* reset game btn */}
        <button className="reset" onClick={reset}>
          Play Again
        </button>
      </div>
    </>
  );
}

export default TicTakToe;
