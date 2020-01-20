// import React, { useState, useEffect } from "react";
// import WordsArray from "../components/WordsArray";
import { randomNumber } from "../utils";

let wordsArray = ["JEDEN", "DWA", "TRZY"];

const randomWord = () => {
  return wordsArray[randomNumber(0, wordsArray.length - 1)];
};

export { randomWord };
