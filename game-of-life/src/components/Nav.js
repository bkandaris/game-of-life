import React, { useState } from 'react';

import './nav.css';

const Nav = () => {
const [active, setActive ] = useState({
    clicked: false
})

const handleClick = () => {
    
}
  return (
    <nav className='navbarItems'>
      <h1 className='navbarHeader'><i className="fab fa-react"></i>Conway's Game of Life</h1>
      <div className='navIcon'></div>
      <ul>
        <li className='navLink'>
          <a href='#'>Rules</a>
        </li>
        <li className='navLink'>
          <a href='#'>Automata</a>
        </li>
        <li className='navLink'>
          <a href='#'>More Infor</a>
        </li>
        <li className='navLinkMobile'>
          <a href='#'>X</a>
        </li>
      </ul>
    </nav>
  );
};

export default Nav;
