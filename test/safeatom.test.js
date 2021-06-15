const assert = require('assert');
const path = require('path');
const HDWalletProvider = require('truffle-hdwallet-provider');
const ganache = require('ganache-cli');
const Web3 = require('web3');
const fs = require('fs');
var request = require("request");
const provider = new HDWalletProvider(
  ///insert your mnemonic for account1,
  //insert your infura link
);
const web3 = new Web3(provider);
const provider2 = new HDWalletProvider(
  ///insert your mnemonic for account1,
  //insert your infura link
);
const web32 = new Web3(provider2);
web3.eth.transactionPollingTimeout = 4000;
const pathAddress = path.resolve(__dirname, '../','tokenaddress.json');
const pathAbi = path.resolve(__dirname,'../','tokenabi.json');
let address = JSON.parse(fs.readFileSync(pathAddress,'UTF-8'));
const Abi = JSON.parse(fs.readFileSync(pathAbi,'UTF-8'));
  //setting account and contract before test
let accounts;
let accounts2;
let TokenContract;
let TokenContract2;
//tests for getting the earn amount
/* before(async ()=>{
  this.timeout=100000;
  accounts=await web3.eth.getAccounts();
  console.log('Your primary account',accounts[0]);
  accounts2=await web32.eth.getAccounts();
  console.log('Your second account',accounts2[0]);
  TokenContract=await new web3.eth.Contract(Abi, address);
  TokenContract2=await new web32.eth.Contract(Abi, address);
  console.log('Your Contract',await TokenContract.methods.name().call());
  console.log('contract address is',TokenContract.options.address);
});


describe('earnage',()=>{
  it('can get earned good',async()=>{
    var url = "https://api-rinkeby.etherscan.io/api?module=account&action=tokentx&"+
    "contractaddress=0x58512B97600c8fFCC5CD96933DA8C132b8f6e937"+
    "&address=0xD229A10C51C180Ae9e250aF1000e08c8184D6668"+
    "&page=1&offset=200&sort=asc&apikey=DTMT8SV7UXAPU2NGC516R74S43VY312PE6";
    let exfee=await TokenContract.methods.isExcludedFromFee("0xD229A10C51C180Ae9e250aF1000e08c8184D6668").call();
    let value = BigInt(0);
    let comission = BigInt(0);
    request({
      url: url,
      json: true
    },async function (error, response, body) {
      if (!error && response.statusCode === 200) {
        console.log(body.result);
        for (i=0;i<body.result.length;i++){
          if (body.result[i].from=="0xD229A10C51C180Ae9e250aF1000e08c8184D6668".toLowerCase()){
            if (!exfee){
              comission=BigInt(body.result[i].value)/9n*10n;
              value-=(BigInt(body.result[i].value)+comission);
            } else value-=BigInt(body.result[i].value);
            if (value<0n) value=0n;
          }
          if(body.result[i].to=="0xD229A10C51C180Ae9e250aF1000e08c8184D6668".toLowerCase()){
            value+=BigInt(body.result[i].value);
          } // Print the json response
        }
        console.log(value);
        let balanceof2=BigInt(await TokenContract.methods.balanceOf('0xD229A10C51C180Ae9e250aF1000e08c8184D6668').call());
        console.log(balanceof2);
        console.log(balanceof2-value);
        assert.ok();
      }
    });
});
});
//simple tests
describe('Contract tests', () => {
  it('Contract was deployed', () => {
    assert.ok(TokenContract.options.address);
  });
  it('owner is caller',async ()=>{
  assert.equal(await TokenContract.methods.owner().call(),accounts[0]);
  });
  it('has taxFee and liquidityFee and both of these values are equal to 5',async()=>{
    assert.equal(await TokenContract.methods._liquidityFee().call(),5);
    assert.equal(await TokenContract.methods._taxFee().call(),5);
  });
  it('has maximum transaction amount of 5000000000000000000000 in wei',async()=>{
    assert.equal(await TokenContract.methods._maxTxAmount().call(),5000000000000000000000);
  });
  it('has TotalSupply value  in wei',async()=>{
    let total = await TokenContract.methods.totalSupply().call()
    assert.ok(total);
    console.log(total);
  });
  it('has a router address set to Uniswap Router v2(0x7a250d5630B4cF539739dF2C5dAcb4c659F2488D)',async()=>{
    assert.equal(await TokenContract.methods.uniswapV2Router().call(),'0x7a250d5630B4cF539739dF2C5dAcb4c659F2488D');
  });
  it('has a uniswap pair Token to Weth created and address set',async()=>{
    let pairaddress;
    assert.ok(pairaddress = await TokenContract.methods.uniswapV2Pair().call());
    console.log('Pair address is ',pairaddress);
  });
  it('owner is excluded from reward',async ()=>{
    assert.equal(await TokenContract.methods.isExcludedFromReward(accounts[0]).call(),true);
  });
  it('owner has balance of tokens equal to TotalSupply',async ()=>{
    assert.equal(await TokenContract.methods.balanceOf(accounts[0]).call(),await TokenContract.methods.totalSupply().call());
  });
  it('owner can burn his tokens. balance of owner and totalSupply is decreased by 10000000000 in wei',async ()=>{
    let amount = 10000000000;
    let currentTotalsupply= parseInt(await TokenContract.methods.totalSupply().call());
    let accountbalance= parseInt(await TokenContract.methods.balanceOf(accounts[0]).call());
    await TokenContract.methods.burn(amount).send({from: accounts[0],gas: '1000000'});
    let currentTotalsupply2= parseInt(await TokenContract.methods.totalSupply().call())+amount;
    let accountbalance2=parseInt(await TokenContract.methods.balanceOf(accounts[0]).call())+amount;
    assert.equal(currentTotalsupply,currentTotalsupply2);
    assert.equal(accountbalance,accountbalance2);
  }).timeout(300000);
  it('transfer from owner account(10000000000000000) to second account',async ()=>{
    balanceof2=await TokenContract2.methods.balanceOf(accounts2[0]).call();
    balanceof2=parseInt(balanceof2);
    console.log(balanceof2);
    await TokenContract.methods.transfer(accounts2[0],10000000000000).send({from: accounts[0],gas: '1000000'});
    assert.equal(parseInt(await TokenContract2.methods.balanceOf(accounts2[0]).call()-10000000000000),parseInt(balanceof2));
  }).timeout(300000);

});
*/
