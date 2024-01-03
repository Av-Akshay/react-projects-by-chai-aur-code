import React, { useCallback, useEffect, useState, useRef } from "react";

const usePasswordGenerator = () => {
  const [passwordLength, setPasswordLength] = useState(6);
  const [character, setCharacter] = useState(false);
  const [number, setNumber] = useState(false);
  const [password, setPassword] = useState("");

  const myRef = useRef();

  const copyPasswordHandler = () => {
    myRef.current.select();
    window.navigator.clipboard.writeText(password);
  };

  const passwordGenerator = useCallback(() => {
    let pass = "";
    let str = "ABCDEFGHIJKLMNOPQURSTUVWXYZabcdefghijklmnopqrstuvwxyz";
    if (number) str += "123456789";
    if (character) str += "!@#$%^&*+=><?<";
    for (let i = 1; i <= passwordLength; i++) {
      let num = Math.floor(Math.random() * str.length + 1);
      pass += str.charAt(num);
    }
    setPassword(pass);
  }, [passwordLength, number, character, setPassword]);

  useEffect(() => {
    passwordGenerator();
  }, [passwordLength, character, number, setPassword]);

  return {
    passwordLength,
    character,
    number,
    password,
    setPassword,
    setPasswordLength,
    setNumber,
    setCharacter,
    myRef,
    copyPasswordHandler,
  };
};

export default usePasswordGenerator;
