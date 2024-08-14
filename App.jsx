import React from "react";
import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import AppName from "./Components/AppName";
import Todolist from "./Components/Todolist";
import Todoitem1 from "./Components/Todoitem1";
import Todoitem2 from "./Components/Todoitem2";

function App() {
  return (
    <div className="todo-container">
      <AppName />
      <Todolist />
      <div className="items-container">
        <Todoitem1 />
        <Todoitem2 />
      </div>
    </div>
  );
}

export default App;
