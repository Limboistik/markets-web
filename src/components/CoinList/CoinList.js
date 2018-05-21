import React from 'react';
import styles from './styles.css';
import CoinCard from '../CoinCard/CoinCard';

const CoinList = ({coins}) => {
  let coinsKeys = Object.keys(coins);
  return (
    <div>
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
