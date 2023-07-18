import React from "react";
import { ChevronDoubleRightIcon } from "@heroicons/react/24/outline";

function StartScreen({ dispatch, length }) {
  return (
    <div className="startScreenContainer">
      <h1 className="lightDarkText titlePrimary">Welcome to react Quiz</h1>
      <p
        className="lightText"
        style={{ margin: ".2rem 0", letterSpacing: "-1px" }}
      >
        {length} questions to test your ReactJs knowledge
      </p>
      <button
        className="btnPrimary"
        onClick={() => dispatch({ type: "setActive" })}
      >
        Let's start
        <ChevronDoubleRightIcon
          width={15}
          height={15}
          style={{ marginLeft: "5px" }}
        />
      </button>
    </div>
  );
}

export default StartScreen;
