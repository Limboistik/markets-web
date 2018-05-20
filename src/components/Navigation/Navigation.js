import React from 'react';
import logo from '../../logo.svg';
import styles from './styles.css';

const Navigation = () => {
  return (
    <div className="navigation">
      <img src={logo} className="App-logo" alt="logo" />
      <ul className="links-list">
        <li><a href="#">Portfolio</a></li>
        <li><a href="#">Markets</a></li>
        <li><a href="#">News</a></li>
      </ul>
    </div>
  )
}

export default Navigation;