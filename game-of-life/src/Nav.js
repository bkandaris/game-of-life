import React from 'react';
import { Link } from 'react-router-dom';

const Nav = () => {
  return (
    <nav>
      <Link className='links' to='/game-of-life'>
        Conway's Game of Life
      </Link>
      <ul>
        <Link className='links' to='/rules'>
          Rules
        </Link>
        <Link className='links' to='/automata'>
          More Info
        </Link>
      </ul>
    </nav>
  );
};

export default Nav;
