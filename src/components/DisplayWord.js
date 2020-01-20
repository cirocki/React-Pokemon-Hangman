import React from "react";
import styled from "styled-components";

export default function DisplayWord({ guessedWord }) {
  // STYLING
  const WordWrapper = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    padding: 2rem 1rem;
  `;
  const StyledWord = styled.h2`
    font-size: 4rem;
  `;

  return (
    <WordWrapper>
      <StyledWord>{guessedWord()}</StyledWord>
    </WordWrapper>
  );
}
