import React from 'react';
import './Nav.css';
class Nav extends React.Component {
    render() {
      return (
        <nav>
          <ul>
            <li><a href="#">Home</a></li>
            <li><a href="#">About</a></li>
            <li><a href="#">Contact</a></li>
          </ul>
        </nav>
      );
    }
  }
export default Nav;  