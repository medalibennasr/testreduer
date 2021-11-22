import './App.css';
import React from 'react';
import TodoInpunt from './components/TodoInpunt';
import TodoList from './components/TodoList';
//import 'bootstrap/dist/css/bootstrap.css' ; 

function App() {
  return (
    <div className="container">
      <h1>ToDo List</h1>
      <TodoInpunt/>
      <TodoList/>
    </div>
  );
}

export default App;
