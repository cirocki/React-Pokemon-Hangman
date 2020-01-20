import React from "react";

export default function Intro({ startFunction }) {
  return (
    <div>
      <h1>Pokemon Hangman</h1>
      <h2>Play with me</h2>
      <button onClick={startFunction}>Start game</button>
    </div>
  );
}
