import React,{useState} from 'react'
import Square from './Square';
const Board = () => {

  const [board,setBoard]= useState(Array(9).fill(null));
  console.log(board);
  const [isXNext,setisXNext]= useState(false);

  const handlerSquareClick =(position)=>{

    if(board[position]){
      return;
    }
    setBoard((prev)=>{
      return prev.map((square,pos)=>{
        if(pos===position){
          return isXNext ? 'X':'O';
        }
        return square;
      });
      
    });
    setisXNext(prev => !prev)
  }
  const renderSquare = position =>{

    return (
      <Square value={board[position]} btnClicked={()=>{handlerSquareClick(position)}}/>
    );
  }
  return (
    <div>
      <div className='board'> 
      {renderSquare(0)}
      {renderSquare(1)}
      {renderSquare(2)}
      </div>
      <div className='board'>
      {renderSquare(3)}
      {renderSquare(4)}
      {renderSquare(5)}
      </div>
      <div className='board'>
      {renderSquare(6)}
      {renderSquare(7)}
      {renderSquare(8)}
      </div>
    </div>
  );
};

export default Board;
