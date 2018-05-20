import React, { Component } from 'react';
import Navigation from './components/Navigation/Navigation';
import CoinList from './components/CoinList/CoinList';
import './App.css';

class App extends Component {

  constructor(props){
    super(props);
    this.state = { 
      isLoading: true,
      coinList: [],
      error: null
    }
  }
  
  componentDidMount() {
    fetch('https://min-api.cryptocompare.com/data/pricemulti?fsyms=ETH,DASH&tsyms=BTC,USD,EUR')
    .then(response => response.json())
    .then(coins => this.setState({ 
        isLoading: false, 
        coinList: [coins]
      }))
    .catch(error => this.setState({ error: true }));
  }

  render() {
    const { error, isLoading, coinList }  = this.state;
    return (
      <div className="App">
        <Navigation />
        <header className="App-header">
          <h1 className="App-title">Markets</h1>
        </header>
        { error ? <h1>Error fetching coins</h1> :
          isLoading ? <h1>Fetching coins</h1> : 
          <CoinList coins={coinList} />
        }
      </div>
    );
  }
}

export default App;
