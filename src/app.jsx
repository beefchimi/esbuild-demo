import React from "react";
import ReactDOM from "react-dom";

const APP_ROOT_ID = "AppRoot";

const Greet = () => <h1>Hello, world!</h1>;
// console.log(ReactDOM.Server.renderToString(<Greet />));

function App({ children }) {
  return <div className="App">{children}</div>;
}

ReactDOM.render(
  <App>
    <Greet />
  </App>,
  document.getElementById(APP_ROOT_ID)
);
