import React from 'react';
import logo from '../../logo.svg';
import styles from './styles.css';

const CoinCard = ({ key, ticker, btc, usd, eur }) => {
  return (
    <div className="coin-card">
      <p className="coin-name">{key}</p>
      <p className="coin-ticker">{ticker}</p>
      <p className="coin-current-price-btc">{btc}</p>
      <p className="coin-current-price-usd">{usd}</p>
      <p className="coin-current-price-eur">{eur}</p>
      {/* <p className="coin-change">5.33%</p> */}
    </div>
  )
}

export default CoinCard;