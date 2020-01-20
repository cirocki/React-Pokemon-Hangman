import React, { useState } from "react";
import "./App.css";
import Intro from "./views/Intro";
import Game from "./views/Game";

function App() {
  // START GAME/HIDE INTRO
  const [start, setStart] = useState(false);
  const handleStart = e => {
    setStart(true);
    console.log("game started");
  };

  return (
    <div className="App">
      {start ? <Game /> : <Intro startFunction={handleStart} />}
    </div>
  );
}

export default App;
