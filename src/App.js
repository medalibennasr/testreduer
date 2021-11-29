import "./App.css";
import React, { useState } from "react";
import TodoInpunt from "./components/TodoInpunt";
import TodoList from "./components/TodoList";
import Filtr from "./components/Filtr";
//import 'bootstrap/dist/css/bootstrap.css' ;

function App() {
  const [doneTodos, setDoneTodos] = useState("all");
  return (
    <div className="container">
      <h2>ToDo List</h2>
      <Filtr setDoneTodos={setDoneTodos} />
      <TodoList doneTodos={doneTodos} />
      <TodoInpunt />
    </div>
  );
}

export default App;
