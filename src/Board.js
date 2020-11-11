import Details from './Details';
import React, { useEffect, useState } from 'react';
import Square from './Square';

const Board = () => {
  const emptyGame = {
    0: null, 1: null, 2: null, 
    3: null, 4: null, 5: null, 
    6: null, 7: null, 8: null
  }
  const [values, setValues] = useState(emptyGame);
  const [xIsNext, setXisNext] = useState(true);
  const [winner, setWinner] = useState(false);
  const [winnerName, setWinnerName] = useState('');

  useEffect(() => {
    const lines = [
      [0, 1, 2],
      [3, 4, 5],
      [6, 7, 8],
      [0, 3, 6],
      [1, 4, 7],
      [2, 5, 8],
      [0, 4, 8],
      [2, 4, 6]
    ];
    for (let i = 0; i < lines.length; i++) {
      const [a, b, c] = lines[i];
      if (values[a] && values[a] === values[b] && values[a] === values[c]) {
        setWinner(true);
        setWinnerName(values[a])
      }
    }
  });

  const handleClick = (number) => {
    const letter = xIsNext ? 'X' : 'O';
    if(values[number] === null && !winner) {
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
        <Square value={values[number]}/>
      </div>
    );
  }

  return (
    <>
    <button onClick={() => newGame()}>New Game</button>
    <div>
    {winner && <div className='win'><strong>{winnerName} Wins!</strong></div>}
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