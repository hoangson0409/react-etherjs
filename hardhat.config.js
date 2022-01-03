require("@nomiclabs/hardhat-waffle");

// This is a sample Hardhat task. To learn how to create your own go to
// https://hardhat.org/guides/create-task.html
task("accounts", "Prints the list of accounts", async (taskArgs, hre) => {
  const accounts = await hre.ethers.getSigners();

  for (const account of accounts) {
    console.log(account.address);
  }
});

// You need to export an object to set up your config
// Go to https://hardhat.org/config/ to learn more

/**
 * @type import('hardhat/config').HardhatUserConfig
 */
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
