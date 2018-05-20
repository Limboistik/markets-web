import React from 'react';
import styles from './styles.css';
import CoinCard from '../CoinCard/CoinCard';

const CoinList = ({coins}) => {
  // const { btc, usd, eur } = coins;
  console.log(coins);
  return (
    <div className="coin-list">
      <div className="coin-list-header">
        <p className="coin-list-header-coin-name">Coin</p>
        <p className="coin-list-header-coin-price">Price</p>
      </div>
      <div>
        <CoinCard

        />
        <p>{coins}</p>
      </div>
    </div>
  )
}

export default CoinList;