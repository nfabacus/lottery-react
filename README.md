# lottery-react

1. start a project with react-react-app
2. install web3
```
npm install --save web3@1.0.0-beta.26
````
3. Create web3.js file in the src folder.<br>
  Make a use of the existing provider from the MetaMask in the browser, and create an instance of Web3.  Then, export it.

4. Import the web3 instance from web3.js file into your react app.

5. Create deploy.js file and deploy your contract by ```node deploy.js````
   * Make sure to console.log the contract address and abi interface code.

6. Copy the logged out abi interface and the deployed contract address.

7. Create a new file called 'lottery.js' (for example) under the src folder in the react app.
  In 'lottery.js' file, import the web3 instance. and set const for address and api with the copied data.
  
8. Now create a local contract instance in the 'lottery.js' file, and export it.  This will act as a potal to interact with the deployed contract in the blockchain.
```
export default new web3.eth.Contract(abi, address);
```
9. Import lottery from './lottery' in the App.
   Now you can start using the contract instance along with web3 instance!












This project was bootstrapped with [Create React App](https://github.com/facebookincubator/create-react-app).