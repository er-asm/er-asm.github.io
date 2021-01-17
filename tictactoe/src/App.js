import React from "react";
import Board from './components/Board';
import './styles/Square.style.css'
const App = () => {
  return(
    <div className='app'>
     <h1 data-text="TIC TAC TOE"><span>TIC TAC TOE</span></h1>
      <Board/>
    </div>
  );
  };

  export default App;
