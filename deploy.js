const HDWalletProvider = require('truffle-hdwallet-provider');
const Web3 =require('web3');
const contracts = require('./compile');
const fs = require('fs');
const path = require('path');


//setup your provider and wallet for contract deployment;
//enter the mnemonic phrase of your wallet and your api for node, or your node address;
//more info: https://web3js.readthedocs.io/en/v1.2.11/web3.html#setprovider
//more info:
const provider = new HDWalletProvider(
  //insert your mnemonic and api for node
);
const web3 = new Web3(provider);
web3.eth.transactionPollingTimeout = 4000;

//seting a contract to be deployed from the compile file
let Safeatom=contracts.SafeAtom;

//deploying contract
const deploy = async() =>{
  console.log("Getting list of accounts:");
  const accounts = await web3.eth.getAccounts(); //getting account list
  console.log(accounts);
  console.log('Attempting to deloy from account',accounts[0]);
  const contractAtom = await new web3.eth.Contract(Safeatom.abi) //the interface of the contract
     .deploy({data: Safeatom.evm.bytecode.object})  //contract bytecode
     //specify the account who is sending the
     .send({ gas: '8000000', from: accounts[0]}); //the gas should be maxed but lower or equal 10000000 = block.gaslimit
  console.log(contractAtom.options.address); //if a contract gets deployed, then we should have it address
  console.log("writting data to files tokenabi and tokenaddress .json");
  await fs.writeFileSync(path.resolve(__dirname, 'tokenabi.json'),JSON.stringify(Safeatom.abi));
  await fs.writeFileSync(path.resolve(__dirname, 'tokenaddress.json'),JSON.stringify(contractAtom.options.address));
  console.log("data files saved successful");//the date needed to interact with your contract is saved in 2 files;
};
deploy();
