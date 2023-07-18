import React from "react";
import Options from "./Options";
import Timer from "./Timer";

function Question({
  questions,
  userSelectedAnswer,
  dispatch,
  handleNextQuestion,
  steps,
  progressBarWidth,
  points,
  arrLength,
  timeRemaining,
}) {
  const { question, answer } = questions[steps];
  const arr = ["A", "B", "C", "D"];
  return (
    <>
      <div
        className="progressBar"
        style={{ width: `${progressBarWidth}%` }}
      ></div>
      <div className="questionContainer">
        <p className="question">{question}</p>
        <div className="optionsContainer">
          {arr.map((optionKey, idx) => (
            <Options
              optionKey={optionKey}
              option={questions[steps][optionKey]}
              key={idx}
              answer={answer}
              userSelectedAnswer={userSelectedAnswer}
              dispatch={dispatch}
              steps={steps}
              arrLength={arrLength}
            />
          ))}
        </div>
        <div className="questionBtnControls">
          <div className="flexedContainer">
            <Timer dispatch={dispatch} timeRemaining={timeRemaining} />
            <div>
              ❤️{points}/{arrLength}
            </div>
          </div>
          {steps < arrLength - 1 && (
            <button
              disabled={!userSelectedAnswer}
              className="btnPrimary"
              onClick={() => handleNextQuestion()}
            >
              Next
            </button>
          )}
        </div>
      </div>
    </>
  );
}

export default Question;
