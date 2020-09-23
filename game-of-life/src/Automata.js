import React from 'react';

const Automata = () => {
  return (
    <div>
      <h1>Cellular Automata</h1>
      <h3 className='automataHeaders'>How did it originate?</h3>
      <p className='automataPars'>
        In the 1940's Stanislaw Ulam and John Von Neumann were contemporaries at
        the Los Alamos National Labratory when this concept was discovered. This
        concept was studied throughout the 1950s and 1960s. In the 1970s
        Conway's game of life was created (two dimensional cellular automation)
        and the interest expanded.
      </p>
      <h3 className='automataHeaders'>What is cellular automata?</h3>
      <p className='automataPars'>
        Typically a grid of cells that hold their own individual state. These
        cells can hold any number of dimensions. Whether the state changes
        depends completely on the state of their neighbors. The simplest
        possible states for the cells are 0 or 1 (true or false) and the
        simplest neighborhood would be a cell with just two neighbours (left and
        right). Each generation will cause the cells state to change
        accordingly.
      </p>
      <h3 className='automataHeaders'>How are rules determined?</h3>
      <p className='automataPars'>
        We have to determine the rules for our particular cellular automata.
        This highly computational system can produce results similar to what we
        would find in nature. The state of the cells depends on the state of
        it's neighbors. The next generation of the grid will be determined by
        what rules we decide to implement. All of the possible outcomes are
        classified into four classifications (uniformity, repetition, random,
        and complexity) and will be determined by the rules put in place. We can
        implement any rules we want to which will be based on the living or dead
        amount of neighbors.
      </p>
      <h3 className='automataHeaders'>What is Turing Completeness?</h3>
      <p className='automataPars'>
        A programming language is or is not Turing complete. All of the ones we
        know of are all Turing complete. This means it needs to do everything
        that a Turing machine can do. A Turing machine is though of as an
        endless infinite piece of tape. it is easiest to visualize this as
        simple as zeros and ones, but powerful enough to computate anything we
        can think of. Conway's Game of Life is Turing complete. It is based on
        the state of one cell changing depending on the state of other cells.
        The conditional branching is based on the rules of the game.
      </p>
    </div>
  );
};

export default Automata;
