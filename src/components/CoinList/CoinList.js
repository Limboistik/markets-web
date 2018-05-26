import React from 'react';
import styles from './styles.css';
import CoinCard from '../CoinCard/CoinCard';

const CoinList = ({coins}) => {
  let coinsKeys = Object.keys(coins);
  return (
    <div class="coin-list">
      <div className="coinlist-header">
        <p className="coinlist-header-label">Coin</p>
        <p className="coinlist-header-label">Market Cap</p>
        <p className="coinlist-header-label">Price</p>
      </div>
      {
        coinsKeys.map((coin,i) =>{
          return (
            <CoinCard
              key={i}
              coinName={coin}
              coin={coins[coin]}
            />
          )
        })
      }
    </div>
  );
}

export default CoinList;
