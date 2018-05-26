import React from 'react';
import logo from '../../logo.svg';
import styles from './styles.css';
import Currency from '../Currency/Currency'

const CoinCard = ({coinName, coin}) => {

  let coinArr = Object.keys(coin);

  return (
    <div class="coin-card">
      <p className="coin-name">{coinName}</p>
      {
        coinArr.map((currency, i) => {
          return(
            <p className="coin-usd" key={i}>
              {currency}
              {coin[currency]}
            </p>
          )
        })
      }
    </div>
  )
}

export default CoinCard;
