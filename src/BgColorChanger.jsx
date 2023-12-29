import React, { useState } from "react";

const BgColorChanger = () => {
  const [bgColor, setBgColor] = useState("black");

  return (
    <div className="w-full h-screen" style={{ background: `${bgColor}` }}>
      <div className="w-4/5 m-auto">
        <div className=" w-full flex justify-between bottom-0 absolute pb-2">
          <button
            style={{ backgroundColor: "blue" }}
            className="text-white border-2 w-20 p-2 rounded-md  border-rose-600 "
            onClick={() => {
              setBgColor("blue");
            }}
          >
            blue
          </button>
          <button
            style={{ backgroundColor: "black" }}
            className="text-white border-2 w-20 p-2 rounded-md  border-rose-600 "
            onClick={() => {
              setBgColor("black");
            }}
          >
            black
          </button>
          <button
            style={{ backgroundColor: "red" }}
            className="text-white border-2 w-20 p-2 rounded-md  border-rose-600 "
            onClick={() => {
              setBgColor("red");
            }}
          >
            red
          </button>
          <button
            style={{ backgroundColor: "yellow" }}
            className="text-white border-2 w-20 p-2 rounded-md  border-rose-600 "
            onClick={() => {
              setBgColor("yellow");
            }}
          >
            yellow
          </button>
          <button
            style={{ backgroundColor: "green" }}
            className="text-white border-2 w-20 p-2 rounded-md  border-rose-600 "
            onClick={() => {
              setBgColor("green");
            }}
          >
            green
          </button>
          <button
            style={{ backgroundColor: "orange" }}
            className="text-white border-2 w-20 p-2 rounded-md  border-rose-600 "
            onClick={() => {
              setBgColor("orange");
            }}
          >
            orange
          </button>
        </div>
      </div>
    </div>
  );
};

export default BgColorChanger;
