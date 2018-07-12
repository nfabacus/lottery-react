import Web3 from 'web3';

const web3 = new Web3(window.web3.currentProvider); //take the provider from the existing MetaMask on the browser.

export default web3;