import React from "react";

function FinishedScreen({ points, dispatch }) {
  return (
    <div className="finishedScreenContainer">
      <h1>🎉Congratulations</h1>
      <p className="lightText">You scored ❤️{points} points</p>
      <button
        className="resetBtn"
        onClick={() => dispatch({ type: "resetQuiz" })}
      >
        give another try?
      </button>
    </div>
  );
}

export default FinishedScreen;
