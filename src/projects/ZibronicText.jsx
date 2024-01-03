import React, { useRef } from "react";
import usePasswordGenerator from "../hooks/usePasswordGenerator";

const ZibronicText = () => {
  const {
    passwordLength,
    character,
    number,
    password,
    setPasswordLength,
    setNumber,
    setCharacter,
    copyPasswordHandler,
    myRef,
  } = usePasswordGenerator();

  return (
    <div className="w-full h-screen bg-slate-950 pt-4 text-orange-600">
      <div className=" flex flex-col items-center w-1/2 m-auto py-8 bg-slate-800">
        <h1 className="text-white my-4 text-5xl">Password Generator</h1>
        <div>
          <input
            className="p-1 rounded-sm"
            type="text"
            defaultValue={password}
            readOnly
            ref={myRef}
          />
          <button
            className="py-1 px-2 rounded-sm bg-blue-500 text-white "
            onClick={copyPasswordHandler}
          >
            Copy
          </button>
        </div>
        <div className="flex gap-2 my-4">
          <input
            type="range"
            min={6}
            max={20}
            value={passwordLength}
            onChange={(e) => {
              setPasswordLength(e.target.value);
            }}
          />
          <label>{` Password Length is ${passwordLength}`}</label>
          <input
            defaultChecked={number}
            type="checkbox"
            onClick={() => {
              setNumber((pre) => !pre);
            }}
          />
          <label className="text-white">number</label>
          <input
            defaultChecked={character}
            type="checkbox"
            onClick={() => {
              setCharacter((pre) => !pre);
            }}
          />
          <label className="text-white"> Character</label>
        </div>
      </div>
    </div>
  );
};

export default ZibronicText;
