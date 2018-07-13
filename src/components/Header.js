import React from 'react';
import { Link } from 'react-router-dom';


const Header = () => (
  <header class="header">
    <nav>
      <ul>
        <li><Link to='/'>خانه</Link></li>
        <li><Link to='/starterkit'>راهنمای کلاس اولی ها</Link></li>
        <li><Link to='/ostadyab'>استاد یاب</Link></li>
        <li><Link to='/classyab'>ابزار انتخاب واحد</Link></li>
        <li><Link to='/emptyclass'>کلاسای خالی</Link></li>
        <li><Link to='/about'>درباره</Link></li>
      </ul>
    </nav>
  </header>
)

export default Header;
