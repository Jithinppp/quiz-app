import React from "react";
import { ChevronDoubleRightIcon } from "@heroicons/react/24/outline";

function StartScreen({ dispatch, length }) {
  return (
    <div className="startScreenContainer">
      <h3 className="lightDarkText">Welcome to react Quiz</h3>
      <p className="lightText" style={{ marginTop: ".2rem" }}>
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
