import React, { Component } from 'react';
import './App.css';
import lottery from './lottery';
import web3 from './web3';

class App extends Component {
  state = {
    manager: '',
    players: [],
    balance: '',
    value: '',
    message: ''
  };

  async componentDidMount () {
    const manager = await lottery.methods.manager().call(); //You don't need to do .call({ from: accounts[0]}) for example, because MetaMask provider already set your first account as default.
    const players = await lottery.methods.getPlayers().call();
    const balance = await web3.eth.getBalance(lottery.options.address);//web3.eth.getBalance(... contract address ...) will give you the balance of the contract itself.

    this.setState({ manager, players, balance });
  }

  onSubmit = async (e) => {
    e.preventDefault();
    const accounts = await web3.eth.getAccounts();

    this.setState({ message: 'waiting on transaction to complete ...' });

    await lottery.methods.enter().send({
      from: accounts[0],
      value: web3.utils.toWei(this.state.value, 'ether')
    });

    this.setState({ message: 'You have been entered!'});
  }

  onClick= async () => {
    const accounts = await web3.eth.getAccounts();
    this.setState({ message: 'waiting on transaction to complete ...' });
    await lottery.methods.pickWinner().send({
      from: accounts[0]
    });
    this.setState({ message: 'A winner has been picked!' });
  }

  render() {
    return (
      <div>
        <h1>Lottery Contract</h1>
        <p>This contract is managed by { this.state.manager }</p>
        <p>There are currently {this.state.players.length} people entered, competing to win {web3.utils.fromWei(this.state.balance, 'ether')} ether! </p>

        <hr />

        <form onSubmit={this.onSubmit}>
          <h2>Want to try your luck?</h2>
          <div>
            <label>Amount of ether to enter</label>
            <input
              value={this.state.value}
              onChange={e => this.setState({ value: e.target.value })}
            />
          </div>
          <button>Enter</button>
        </form>

        <hr />
        <h2>Ready to pick a winner?</h2>
        <button onClick={this.onClick}>Pick a winner!</button>
        <hr />

        <p><b>{this.state.message}</b></p>
      </div>
    );
  }
}

export default App;
