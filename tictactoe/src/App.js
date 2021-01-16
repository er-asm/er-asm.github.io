import React from "react";
import Board from './components/Board';
import './styles/Square.style.css'
const App = () => {
  return(
    <div className='app'>
      <h1>TIC TAC TOE</h1>
      <Board/>
    </div>
  );
  };

  export default App;
