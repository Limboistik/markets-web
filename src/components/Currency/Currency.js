import React from 'react';
import styles from './style.css';

const Currency = ({currencyName, currency}) => {
  return (<p>{currencyName} : {currency}</p>)
}

export default Currency;
