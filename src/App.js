import './App.css';
import React from 'react';
import TodoInpunt from './components/TodoInpunt';
import TodoList from './components/TodoList';
import Filtr from './components/Filtr';
//import 'bootstrap/dist/css/bootstrap.css' ; 

function App() {
  return (
    <div className="container">
      <h2>ToDo List</h2>
      <Filtr/>
      <TodoList/>
      <TodoInpunt/>
      
    </div>
  );
}

export default App;
