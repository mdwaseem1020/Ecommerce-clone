import React from 'react';
 // Make sure to use the updated CSS file

const NavBar = () => {
  return (
    <nav className="navbar">
      <div className="navbar-brand">MyStore</div>
      <ul className="navbar-links">
        <li><a href="#products">Products</a></li>
        <li><a href="#about">About</a></li>
        <li><a href="#contact">Contact</a></li>
      </ul>
    </nav>
  );
};

export default NavBar;
