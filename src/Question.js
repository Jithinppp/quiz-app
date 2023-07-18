import React, { useState } from "react";
import Options from "./Options";

function Question({ questions }) {
  const [step, setStep] = useState(0);

  const handleNextQuestion = () => {
    if (step >= 0 && step < questions.length - 1) {
      setStep((prev) => prev + 1);
    }
  };
  const { question, answer, A, B, C, D } = questions[step];
  console.log(question, answer);

  return (
    <div className="questionContainer">
      <p className="question">{question}</p>
      <div className="optionsContainer">
        <p className="option optA">{A}</p>
        <p className="option optB">{B}</p>
        <p className="option optC">{C}</p>
        <p className="option optD">{D}</p>
      </div>
      <button className="btnPrimary" onClick={handleNextQuestion}>
        Next
      </button>
    </div>
  );
}

export default Question;
