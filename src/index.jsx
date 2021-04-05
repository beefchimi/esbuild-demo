import React from "react";
import ReactDOM from "react-dom";

import { App } from "./App";

const APP_ROOT_ID = "AppRoot";

// console.log(ReactDOM.Server.renderToString(<Greet />));

ReactDOM.render(<App />, document.getElementById(APP_ROOT_ID));
