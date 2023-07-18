import React from "react";

function Options({
  optionKey,
  option,
  userSelectedAnswer,
  answer,
  dispatch,
  arrLength,
  steps,
}) {
  const hasAnswered = userSelectedAnswer !== null;

  const answerSubmitHandler = () => {
    dispatch({ type: "setAnswer", payload: optionKey });
    dispatch({ type: "setCorrectAnswer", payload: answer });
    if (optionKey === answer) {
      dispatch({ type: "addPoint" });
    }
    if (steps === arrLength - 1) {
      dispatch({ type: "setFinished" });
    }
  };

  return (
    <button
      disabled={hasAnswered}
      className={`option ${
        hasAnswered ? (optionKey === answer ? "correctAnswerBg" : "wrong") : ""
      } `}
      onClick={answerSubmitHandler}
    >
      {option}
    </button>
  );
}

export default Options;
