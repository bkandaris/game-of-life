import React, { useState } from 'react';
import { useInterval } from 'react-interval-hook';
import './App.css';
import Grid from './grid';

function Game() {
  const [seedPop, setSeedPop] = useState(4);
  const [generations, setGenerations] = useState(0);
  const [live, setLive] = useState(true);
  const [speed, setSpeed] = useState(1000);
  const [gameRunning, setGameRunning] = useState(false);
  const [rows] = useState(25);
  const [cols] = useState(25);
  const [color, setColor] = useState('green');
  const [grid, setGrid] = useState(
    Array(rows)
      .fill()
      .map(() => Array(cols).fill(false))
  );

  const freshGrid = Array(rows)
    .fill()
    .map(() => Array(cols).fill(false));

  const colors = ['green', 'blue', 'yellow'];
  var count = 0;

  function arrayClone(arr) {
    return JSON.parse(JSON.stringify(arr));
  }

  function clear() {
    setGrid(freshGrid);
    setGenerations(0);
  }

  const selectBox = (row, col) => {
    let gridCopy = arrayClone(grid);
    gridCopy[row][col] = !gridCopy[row][col];
    setGrid(gridCopy);
  };

  const seed = () => {
    let gridCopy = arrayClone(grid);
    for (var R = 0; R < rows; R++) {
      for (var C = 0; C < cols; C++) {
        let num = Math.floor(Math.random() * seedPop);
        if (num === 1) {
          gridCopy[R][C] = true;
        }
      }
    }
    setGrid(gridCopy);
  };

  function counter(arr) {
    arr.map((i) => {
      if (i === true) {
        count++;
      }
    });
  }

  function rules(R, C, arr) {
    if (arr[R][C] === false && count === 3) {
      arr[R][C] = true;
    }
    if (arr[R][C] === true && count < 2) {
      arr[R][C] = false;
    }
    if (arr[R][C] === true && count > 3) {
      arr[R][C] = false;
    }
    if (count > 0) {
      setLive(true);
    }

    count = 0;
  }

  const { start, stop } = useInterval(
    () => {
      runGame();
      setGameRunning(true);
    },
    speed,
    {
      autoStart: false,
      immediate: false,
      onFinish: () => {
        setGameRunning(false);
      },
    }
  );

  function colorPicker() {
    const current = colors.indexOf(color);
    if (current === colors.length - 1) {
      setColor(colors[0]);
    } else {
      setColor(colors[current + 1]);
    }
  }

  function runGame() {
    if (live === false) {
      return { stop };
    } else {
      let gridClone = grid;
      let gridCopy = arrayClone(grid);
      setLive(false);

      for (var R = 0; R < rows; R++) {
        for (var C = 0; C < cols; C++) {
          const above =
            typeof gridClone[R - 1] === 'undefined'
              ? [undefined]
              : [
                  gridClone[R - 1][C - 1],
                  gridClone[R - 1][C],
                  gridClone[R - 1][C + 1],
                ];

          const sides =
            typeof gridClone[R][C] === 'undefined'
              ? `${(R, C)}`
              : [gridClone[R][C - 1], gridClone[R][C + 1]];

          const bottom =
            typeof gridClone[R + 1] === 'undefined'
              ? `${(R, C)}`
              : [
                  gridClone[R + 1][C - 1],
                  gridClone[R + 1][C],
                  gridClone[R + 1][C + 1],
                ];

          const neighbors = above.concat(sides, bottom);

          counter(neighbors);
          rules(R, C, gridCopy);
        }
      }

      setGrid(gridCopy);

      setGenerations(generations + 1);
    }
  }

  return (
    <div className='app'>
      <div className='top'>
        <p className='generations'> Generations: {generations} </p>
        <div className='buttons'>
          <button onClick={start}>Play</button>
          <button onClick={stop}>Stop</button>

          <button
            onClick={() => {
              clear();
            }}>
            Clear
          </button>
        </div>
      </div>
      <Grid
        gameRunning={gameRunning}
        grid={grid}
        rows={rows}
        cols={cols}
        selectBox={selectBox}
        color={color}
        setColor={setColor}
      />
      <div className='bot'>
        <button
          onClick={() => {
            setSeedPop(20);
            seed();
          }}>
          Heavy Seed
        </button>
        <button
          onClick={() => {
            setSeedPop(4);
            seed();
          }}>
          Light Seed
        </button>
        <button
          onClick={() => {
            colorPicker();
          }}>
          Change Color
        </button>
        <button
          onClick={() => {
            setSpeed(200);
          }}>
          Fast
        </button>
        <button
          onClick={() => {
            setSpeed(1200);
          }}>
          Slow
        </button>
      </div>
    </div>
  );
}

export default Game;
