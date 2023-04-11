import React, { useEffect, useState } from "react";
import Circle from "./Circle"
import Ex from "./Ex";

const emptyBoard: any[] = [
  ["", "", ""],
  ["", "", ""],
  ["", "", ""],
];

interface tableProps {
  disableBoard: () => void;
};

const Table = ({ disableBoard }: tableProps) => {
  const [turn, setTurn] = useState("x");
  const [board, setBoard] = useState(emptyBoard);


  const draw = (row: number, column: number = 0) => {
    let copyBoard = [...board];
    if (copyBoard[row][column] === "") {
      copyBoard[row][column] = turn;
      console.log(copyBoard)
      setTurn(turn === "x" ? "o" : "x");
      setBoard(copyBoard);
    }
  };

  const calculateWinner = () => {
    const lines = [
      [0, 1, 2],
      [3, 4, 5],
      [6, 7, 8],
      [0, 3, 6],
      [1, 4, 7],
      [2, 5, 8],
      [0, 4, 8],
      [2, 4, 6],
    ];
    const flatBoard = board.flat();
    console.log(flatBoard);
    for (let line of lines) {
      const [a, b, c] = line;
      if (
        flatBoard[a] &&
        flatBoard[a] === flatBoard[b] &&
        flatBoard[a] === flatBoard[c]
      ) {
        return flatBoard[a];
      }
    }
    return null;
  };

  const handleClick = (row: number, column: number = 0) => {
    draw(row, column);
    if (!!calculateWinner()) {
        console.log(`The Winner is: ${turn === "x" ? "x" : "o"}`);
        disableBoard()
    }
  };

  const presentShape = (shape: string) => {
    switch (shape) { 
      case 'x':
        return <Ex />;
      case 'o':
        return <Circle />;
      default:
        return "";
    }
  }

  return (
    <div className="table">
      {board.map((row, idx) => {
        return (
          <div key={idx} className="row">
            <div className="cell" onClick={() => handleClick(idx)}>
              {presentShape(row[0])}
            </div>
            <div className="cell" onClick={() => handleClick(idx, 1)}>
              {presentShape(row[1])}
            </div>
            <div className="cell" onClick={() => handleClick(idx, 2)}>
              {presentShape(row[2])}
            </div>
          </div>
        );
      })}
    </div>
  );
};

export default Table;