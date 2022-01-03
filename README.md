# React and etherjs to interact with smart contract

This project demonstrates a basic Hardhat use case. The newly created token - 'Toto' is available at address @0x2ae5724cB25ffC7Dd3b57E25daCba2328bfE644d - Ropsten Testnet

The project also  contains a Javascript app to interact with this token. The server is created by using ReactJs in conjunction with etherjs - a Javascript library specialized in interacting with smart contracts. 



Workflow is presented as follows

- Write a smart contract for Toto Token in contracts/Token.sol, then compile using

  ```
  npm compile
  ```

- Sign up on infura.io for free projects credentials, and using this credentials to edit network in scripts/deploy-token.js and scripts/deploy.js. The Ropsten network credentials should be looking similar to this https://ropsten.infura.io/v3/934d1f7aec5a46e99ab3223c0a2bc5e4

  Note: In this step, make sure you have set up an Metamask account for deploying contracts in Projects/Security 

- Deploy the token by following commands 

  ```
  npx hardhat run scripts\deploy-token.js --network ropsten
  npx hardhat run scripts\deploy.js --network ropsten
  ```

- Run the local server by 

  ```
  npm start
  ```

  

Besides deploying on global testnet, you can also spin up a hardhat node and using the same Javascript App.js to interact with local testnet. Make sure you have properly config hardhat.config.js file so it contains information about local testnet 



```
module.exports = {
  solidity: "0.8.4",
  paths: {                         // add this
    artifacts: './src/artifacts',  // this is where our compiled contracts will go
  },
  networks: {                      // and this ...
    hardhat: {
      chainId: 1337                // this is needed for MetaMask
    },
    ropsten: {
  url: "https://ropsten.infura.io/v3/934d1f7aec5a46e99ab3223c0a2bc5e4",  // Ropsten endpoint
  accounts: [
    "f167ad65cf38d6b64c61686d5a5515ae1167bf988076a36df213d6034b0d5030" // private key with ETH
  ]
    }
  }
  }
;

```



- Spin up a hardhat node

  ```
  npx hardhat node
  ```

- Run the local server by npm start

