import Details from './Details';
import React, { useState } from 'react';
import Square from './Square';

const Board = () => {
  const emptyGame = {
    0: null, 1: null, 2: null, 
    3: null, 4: null, 5: null, 
    6: null, 7: null, 8: null
  }
  const [values, setValues] = useState(emptyGame);

  const [xIsNext, setXisNext] = useState(true);

  const handleClick = (number) => {
    const letter = xIsNext ? 'X' : 'O';
    if(values[number] === null) {
      setValues({...values, [number]: letter});
      setXisNext(!xIsNext);
    }
  }

  const newGame = () => {
    setValues(emptyGame);
    setXisNext(true);
  }

  const renderSquare = (number) => {
    return (
      <div className='square' onClick={() => handleClick(number)}>
      <Square value={values[number]} number={number}/>
      </div>
    );
  }

  return (
    <>
    <button onClick={() => newGame()}>New Game</button>
    <div>
      <div className='row'>
        {renderSquare(0)}
        {renderSquare(1)}
        {renderSquare(2)}
      </div>
      <div className='row'>
        {renderSquare(3)}
        {renderSquare(4)}
        {renderSquare(5)}
      </div>
      <div className='row'>
        {renderSquare(6)}
        {renderSquare(7)}
        {renderSquare(8)}
      </div>
    </div>
    <Details values={values}/>
    </>
  )
}

export default Board;