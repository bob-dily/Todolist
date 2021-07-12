import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import App from "./App";
import reportWebVitals from "./reportWebVitals";
import { TodoContext, todoStore } from "./store";

ReactDOM.render(
  <React.StrictMode>
    <TodoContext.Provider value={todoStore}>
      <App />
    </TodoContext.Provider>
  </React.StrictMode>,
  document.getElementById("root")
);

reportWebVitals();
