import { useState } from 'react';
import './App.css';
import Vertical from './components/Vertical';
import Horizontal from "./components/Horizontal";
import Table from './components/Table';

function App() {
  const [isDisabled, setIsDisabled] = useState(false);
  const [openTable, setOpenTab] = useState(false)

   const disableBoard = () => {
     setIsDisabled(true);
   };
  
  const clickPlay = () => { 
    const playBtn = document.querySelector(`.play-btn`) as HTMLButtonElement;
    playBtn.style.display = 'none';
    setOpenTab(true)
  }

  return (
    <div className="App">
      <div className="container">
        <h1 className="header">Tic Tac Toe</h1>
        <div className={`board ${isDisabled ? "disabled" : ""}`}>
          <Table disableBoard={disableBoard} />
          <Vertical id={1} side="left" open={openTable} />
          <Vertical id={2} side="right" open={openTable} />
          <Horizontal id={3} side="top" open={openTable} />
          <Horizontal id={4} side="bottom" open={openTable} />
        </div>
        <button className="play-btn" onClick={() => clickPlay()}>
          Let's Play
        </button>
      </div>
    </div>
  );
}

export default App;
