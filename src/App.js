import "./App.css";
import { useEffect, useReducer, useState } from "react";
import Header from "./Header";
import { ChevronDoubleRightIcon } from "@heroicons/react/24/outline";
import Main from "./Main.js";
import { questions } from "./DATA";
import Question from "./Question";
import Loading from "./Loading";
import Error from "./Error";
import StartScreen from "./StartScreen";

const DATA = questions;

const initialState = {
  questionsArray: [],
  // loading ,error ,ready ,active ,finished
  status: "loading",
  steps: 0,
};

function questionsReducer(state, action) {
  switch (action.type) {
    case "nextStep":
      return { ...state, steps: state.steps + 1 };
    case "setQuestions":
      return { ...state, questionsArray: action.payload };
    case "setLoading":
      return { ...state, status: "loading" };
    case "setError":
      return { ...state, status: "error" };
    case "setReady":
      return { ...state, status: "ready" };
    case "setActive":
      return { ...state, status: "active" };
    case "setFinished":
      return { ...state, status: "finished" };
    default:
      throw Error("unhandled reducer dispatch");
  }
}

function App() {
  const [{ questionsArray, steps, status }, dispatch] = useReducer(
    questionsReducer,
    initialState
  );

  useEffect(() => {
    const fetchQuestions = async () => {
      try {
        dispatch({ type: "setLoading" });
        const res = await fetch("http://localhost:8000/questions");
        const data = await res.json();
        dispatch({ type: "setQuestions", payload: data });
        dispatch({ type: "setReady" });
      } catch (error) {
        dispatch({ type: "setError" });
      }
    };
    fetchQuestions();
  }, []);

  return (
    <div className="App">
      <Header />
      <Main>
        {status === "loading" && <Loading />}
        {status === "error" && <Error />}
        {status === "ready" && (
          <StartScreen dispatch={dispatch} length={questionsArray.length} />
        )}
        {status === "active" && <Question questions={questionsArray} />}
      </Main>
    </div>
  );
}

export default App;

function Qustion({ question }) {
  return (
    <div>
      <p>{question.question}</p>
    </div>
  );
}
