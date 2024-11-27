import React from 'react';
import { Link } from 'react-router-dom';

const Navbar: React.FC = () => (
  <nav>
    <h1>Telegram Mini App</h1>
    <ul>
      <li><Link to="/">Home</Link></li>
    </ul>
  </nav>
);

export default Navbar;
