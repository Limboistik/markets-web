import React from 'react';
import logo from '../../logo.svg';
import styles from './styles.css';
import Currency from '../Currency/Currency'

const CoinCard = ({coinName, coin}) => {

  let coinArr = Object.keys(coin);

  return (
    <div>
      <h1>{coinName}</h1>
      {
        coinArr.map((currency,i) => {
          return(
            <Currency
               key={i}
               currencyName={currency}
               currency={coin[currency]}
            />
          )
        })
      }
    </div>
  )
}

export default CoinCard;
