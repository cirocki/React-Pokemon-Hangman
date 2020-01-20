import React from "react";

export default function Result({ maxWrong, wrongAnswers }) {
  return (
    <div>
      <h2>
        Attempts {wrongAnswers.length}/{maxWrong}
      </h2>
    </div>
  );
}
