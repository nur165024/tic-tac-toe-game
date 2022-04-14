/* eslint-disable react-hooks/exhaustive-deps */
import React, { useEffect, useState } from "react";
import { calculateWinner } from "../../utilities/Helpers";
import Board from "../Board/Board";

const styles = {
  width: "200px",
  margin: "0px auto",
};

const Game = () => {
  // react hook
  const [board, setBoard] = useState(Array(9).fill(null));
  const [xIsNext, setXisNext] = useState(true);
  const [clickCount, setClickCount] = useState(0);
  const [winnerPoint, setWinnerPoint] = useState({ x: 0, o: 0 });
  const [winnerCounter, setWinnerCounter] = useState({ x: 0, o: 0 });
  const winner = calculateWinner(board);

  const handleClick = (i) => {
    setClickCount(clickCount + 1);
    const boardCopy = [...board];
    // If user click an occupied square or if game is won, return
    if (winner || boardCopy[i]) return;
    // Put an X or an O in the clicked square
    boardCopy[i] = xIsNext ? "X" : "O";
    setBoard(boardCopy);
    setXisNext(!xIsNext);
  };

  const renderMoves = () => (
    <button type="button" onClick={() => setBoard(Array(9).fill(null))}>
      Start Game
    </button>
  );

  useEffect(() => {
    if (winnerCounter.x === 5) {
      setWinnerPoint({ x: 0, o: 0 });
      setWinnerCounter({ x: 0, o: 0 });
      setTimeout(() => {
        alert(`${winnerCounter.x} time Winner : X`);
        setBoard(Array(9).fill(null));
      }, 500);
      setBoard(Array(9).fill(null));
    } else if (winnerCounter.o === 5) {
      setWinnerPoint({ x: 0, o: 0 });
      setWinnerCounter({ x: 0, o: 0 });
      setTimeout(() => {
        alert(`${winnerCounter.o} times Winner : O`);
        setBoard(Array(9).fill(null));
      }, 500);
      setBoard(Array(9).fill(null));
    }

    if (winner === "X") {
      setWinnerPoint({ x: winnerPoint.x + 2, o: winnerPoint.o + 1 });
      setWinnerCounter({ x: winnerCounter.x + 1, o: winnerCounter.o + 0 });
    } else if (winner === "O") {
      setWinnerPoint({ x: winnerPoint.x + 1, o: winnerPoint.o + 2 });
      setWinnerCounter({ x: winnerCounter.x + 0, o: winnerCounter.o + 1 });
    }
  }, [winner]);

  useEffect(() => {
    if (winner) {
      // click counter
      setClickCount(0);
      // alert message
      setTimeout(() => {
        alert(`Winner : ${winner}`);
        setBoard(Array(9).fill(null));
      }, 500);
    } else if (clickCount === 9) {
      setClickCount(0);
      setTimeout(() => {
        alert("Draw!");
        setBoard(Array(9).fill(null));
      }, 500);
    }
  }, [clickCount, winner]);

  return (
    <>
      <Board squares={board} winnerPoint={winnerPoint} onClick={handleClick} />

      <div style={styles}>
        <p>
          {"Next Player: " + (xIsNext ? "X" : "O")}
          <br />
        </p>
        {renderMoves()}
      </div>
    </>
  );
};

export default Game;
