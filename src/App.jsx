import React from "react";

import pngImage from "./assets/image.png";
import svgLogo from "./assets/logo.svg";

import { Greet } from "./components";

export function App({ children }) {
  return (
    <div className="App">
      {svgLogo}
      <Greet greeting="Salut" />
      <img src={pngImage} alt="Image" />
      {children}
    </div>
  );
}
