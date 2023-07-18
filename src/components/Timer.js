import { ClockIcon } from "@heroicons/react/24/outline";
import React, { useEffect } from "react";

function Timer({ dispatch, timeRemaining }) {
  const mins = Math.floor(timeRemaining / 60);
  const sec = timeRemaining % 60;
  useEffect(() => {
    const timer = setInterval(() => {
      dispatch({ type: "setTimeRemaining" });
    }, 1000);
    return () => clearInterval(timer);
  }, [dispatch]);
  return (
    <div className="timerContainer">
      <ClockIcon width={20} height={20} />
      <span>
        {mins < 10 && "0"}
        {mins}:{sec < 10 && "0"}
        {sec}
      </span>
    </div>
  );
}

export default Timer;
