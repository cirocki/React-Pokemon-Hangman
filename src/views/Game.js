import React, { useState, useEffect } from "react";
import axios from "axios";
import { randomWord } from "../components/Words";
import Result from "../components/Result";
import { Keyboard } from "../components/Keyboard";
import DisplayWord from "../components/DisplayWord";

export default function Game() {
  const pokemonLimit = 151;
  const pokeApiUrl = `https://pokeapi.co/api/v2/pokemon/?limit=${pokemonLimit}`;

  // const [wordsArray, setWordsArray] = useState([]);
  // useEffect(() => {
  //   axios
  //     .get(pokeApiUrl)
  //     .then(function(response) {
  //       const data = response.data.results;
  //       setWordsArray(data);
  //       // data.map(item => wordsArray.push(item.name));
  //     })
  //     .catch(function(error) {
  //       console.log(error);
  //     });
  // }, [pokeApiUrl]);

  // RESULTS
  const maxWrong = 7;
  const [goodAnswers, setGoodAnswers] = useState([]);
  const [wrongAnswers, setWrongAnswers] = useState([]);

  // WORD
  const [word, setWord] = useState(randomWord());
  const guessedWord = () => {
    return word
      .split("")
      .map(letter => (goodAnswers.includes(letter) ? letter : " _ "));
  };

  // KEYBOARD
  const handleButtons = e => {
    let letter = e.target.value;

    if (word.includes(letter)) {
      setGoodAnswers(prev => [...prev, letter]);
      console.log(`dobre: ${goodAnswers}`);
    } else {
      setWrongAnswers(prev => [...prev, letter]);
      console.log(word);
      console.log(`zle: ${wrongAnswers}`);
    }
  };

  // RESET

  const resetGame = () => {
    setWord(randomWord());
    setGoodAnswers([]);
    setWrongAnswers([]);
  };

  const showWinner = () => {
    if (wrongAnswers.length >= maxWrong) {
      return "LOSE";
    }
    if (guessedWord().join("") === word) {
      return "WIN";
    } else {
      return;
    }
  };

  return (
    <div>
      <h1>Game</h1>
      <Result maxWrong={maxWrong} wrongAnswers={wrongAnswers} />
      <DisplayWord guessedWord={guessedWord} />
      <Keyboard
        handleButtons={handleButtons}
        goodAnswers={goodAnswers}
        wrongAnswers={wrongAnswers}
      />
    </div>
  );
}
