import React from "react";
import { FireIcon } from "@heroicons/react/24/outline";

function Header() {
  return (
    <nav className="navbarContainer">
      <div className="logoContainer">
        <FireIcon height={30} width={30} />
        <h1 className="navLogo">Quiz.</h1>
      </div>
      <a
        style={{ color: "inherit" }}
        target="__blank"
        href="https://linkedin.com/in/jithin-p-8396501b7/"
      >
        About
      </a>
    </nav>
  );
}

export default Header;
