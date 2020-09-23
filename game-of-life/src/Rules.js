import React from 'react';

const Rules = () => {
  return (
    <div>
      <h1>Rules of the game</h1>
      <p className='rules'>
        Each cell on a two-dimensional grid has up to eight neighbors. Whether
        the cell lives or dies, depends on how many of it's neighbors are
        living. For each new generation, the state of each cell may change.
      </p>
      <li className='rules rulesLi'>
        If the cell is alive and has two or three neighbours, then the cell will
        remain alive. If the cell does not have two or three neighbours, it
        dies.
      </li>
      <li className='rules rulesLi'>
        The cell can come back to life only if the cell is already dead and has
        exactly three neighbors. The cell will remain dead if this isn't true.
      </li>
      <p className='rules'>
        These rules are implemented into Conway's Game of life, but cellular
        automata can have any rules that you wish to implement.
      </p>
    </div>
  );
};

export default Rules;
