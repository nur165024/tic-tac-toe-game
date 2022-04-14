import React from "react";
import Square from "../Square/Square";

const style = {
  border: "4px solid darkblue",
  borderRadius: "10px",
  width: "250px",
  height: "250px",
  margin: "0 auto",
  display: "grid",
  gridTemplate: "repeat(3, 1fr) / repeat(3, 1fr)",
};

const winnerStyle = {
  display: "flex",
  justifyContent: "space-between",
  width: "250px",
  margin: "0 auto",
};

const Board = ({ squares, winnerPoint, onClick }) => {
  return (
    <>
      <div style={winnerStyle}>
        <h4>X: {winnerPoint.x}</h4>
        <h4>O: {winnerPoint.o}</h4>
      </div>

      <div style={style}>
        {squares.map((square, i) => (
          <Square key={i} value={square} onClick={() => onClick(i)} />
        ))}
      </div>
    </>
  );
};

export default Board;
