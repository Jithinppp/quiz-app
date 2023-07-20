import "./App.css";
import { useEffect, useReducer } from "react";
import Header from "./components/Header";
import Main from "./components/Main.js";
import Question from "./components/Question";
import Loading from "./components/Loading";
import Error from "./components/Error";
import StartScreen from "./components/StartScreen";
import FinishedScreen from "./components/FinishedScreen";

const initialState = {
  questionsArray: [],
  // loading ,error ,ready ,active ,finished
  status: "loading",
  steps: 0,
  userSelectedAnswer: null,
  correctAnswer: null,
  points: 0,
  progressBarWidth: 0,
  timeRemaining: 10,
};

function questionsReducer(state, action) {
  switch (action.type) {
    case "nextStep":
      return {
        ...state,
        steps: state.steps + 1,
        correctAnswer: null,
        userSelectedAnswer: null,
        progressBarWidth:
          state.progressBarWidth + 100 / state.questionsArray.length,
      };
    case "setQuestions":
      return { ...state, questionsArray: action.payload };
    case "setLoading":
      return { ...state, status: "loading" };
    case "setError":
      return { ...state, status: "error" };
    case "setReady":
      return {
        ...state,
        status: "ready",
        progressBarWidth: 100 / state.questionsArray.length,
      };
    case "setActive":
      return {
        ...state,
        status: "active",
        timeRemaining: state.questionsArray.length * 20,
      };
    case "setFinished":
      return { ...state, status: "finished" };
    case "setCorrectAnswer":
      return { ...state, correctAnswer: action.payload };
    case "setAnswer":
      return {
        ...state,
        userSelectedAnswer: action.payload,
      };
    case "setAnswerNull":
      return { ...state, userSelectedAnswer: null };
    case "addPoint":
      return { ...state, points: state.points + 1 };
    case "resetQuiz":
      return {
        ...initialState,
        questionsArray: state.questionsArray,
        status: "ready",
      };
    case "setTimeRemaining":
      return {
        ...state,
        timeRemaining: state.timeRemaining - 1,
        status: state.timeRemaining === 0 ? "finished" : state.status,
      };

    default:
      throw Error("unhandled reducer dispatch");
  }
}

const URL = process.env.REACT_APP_DB_URL;
console.log(URL);

function App() {
  const [
    {
      questionsArray,
      status,
      userSelectedAnswer,
      steps,
      points,
      timeRemaining,
      progressBarWidth,
    },
    dispatch,
  ] = useReducer(questionsReducer, initialState);

  let arrLength = questionsArray.length;

  useEffect(() => {
    const fetchQuestions = async () => {
      try {
        dispatch({ type: "setLoading" });
        const res = await fetch(`${URL}questions`);
        const data = await res.json();
        dispatch({ type: "setQuestions", payload: data.questions });
        dispatch({ type: "setReady" });
      } catch (error) {
        dispatch({ type: "setError" });
      }
    };
    fetchQuestions();
  }, []);

  const handleNextQuestion = () => {
    if (steps >= 0 && steps < questionsArray.length - 1) {
      dispatch({ type: "nextStep" });
    }
  };

  return (
    <div className="App">
      <Header />
      <Main>
        {status === "loading" && <Loading />}
        {status === "error" && <Error />}
        {status === "ready" && (
          <StartScreen dispatch={dispatch} length={questionsArray.length} />
        )}
        {status === "active" && (
          <Question
            questions={questionsArray}
            userSelectedAnswer={userSelectedAnswer}
            dispatch={dispatch}
            handleNextQuestion={handleNextQuestion}
            steps={steps}
            progressBarWidth={progressBarWidth}
            points={points}
            arrLength={arrLength}
            timeRemaining={timeRemaining}
          />
        )}
        {status === "finished" && (
          <FinishedScreen points={points} dispatch={dispatch} />
        )}
      </Main>
    </div>
  );
}

export default App;
