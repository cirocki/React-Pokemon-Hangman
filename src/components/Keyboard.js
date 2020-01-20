import React from "react";
import styled from "styled-components";

export const Keyboard = ({ handleButtons, wrongAnswers, goodAnswers }) => {
  const letters = [
    ["Q", "W", "E", "R", "T", "Y", "U", "I", "O", "P"],
    ["A", "S", "D", "F", "G", "H", "J", "K", "L"],
    ["Z", "X", "C", "V", "B", "N", "M"]
  ];

  const KeyboardWrapper = styled.div`
    background: linear-gradient(135deg, #cdcfd6 0%, #bec0c4 100%);
    padding: 2rem;
  `;

  const StyledButton = styled.button`
    width: 80px;
    height: 80px;
    margin: 6px;
    font-size: 1.5rem;
    font-family: "Arial", sans-serif;
    font-weight: bold;
    color: #757374;
    border-radius: 6px;
    background: #f5f5f5;
    border: none;
    box-shadow: 1px 1px 0px 0px rgba(255, 255, 255, 0.2);
    cursor: pointer;
    &:hover {
      background: #e5e3e4;
      transition: 0.2s ease-out all;
    }
    &:disabled,
    &[disabled] {
      background-color: #cccccc;
      cursor: not-allowed !important;
    }
  `;

  return (
    <KeyboardWrapper>
      {letters.map((item, index) => {
        return (
          <div key={index}>
            {item.map(letter => (
              <StyledButton
                onClick={e => handleButtons(e)}
                key={letter}
                value={letter}
                type="button"
                disabled={
                  goodAnswers.includes(letter) || wrongAnswers.includes(letter)
                }
              >
                {letter}
              </StyledButton>
            ))}
          </div>
        );
      })}
    </KeyboardWrapper>
  );
};
