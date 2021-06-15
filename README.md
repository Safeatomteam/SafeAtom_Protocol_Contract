# SafeAtom Smart Contract BEP20 Token with RFI and Liquidity fee with a lot of extra functions
1. Fixed issue BNB or ETH stuck in contract.
2. Deleted unused function Deliver.
3. Added some new features like adding rights to a vote contract to change liquidity fee, RFI fee and SwapAndLiquify trigger value
4. Added SetRouter function to change v2 Router for future projects.
5. Added a Burn function.(TotalSupply now is corrected to show this value)
6. Darkhole(address(0)) is not growing anymore(removed from RFI reward)

#Installation guide
You can deploy the safeatom.sol from "contracts" folder on Remix or if you want to use the contract for Mocha tests, you should install Node.js on your system.
Version of Node.js 14.17.1.
You will need to configure your provider for Web3 in "deploy.js" and in "test" folder. https://web3js.readthedocs.io/en/v1.2.11/web3.html more info
Don't forget to run "npm install" to get all the packages before "node deploy" or "npm test".
Before deploying check the constructor of SafeAtom token and change the address of Router v2 to your Testnet Uniswap v2 router or fork. For ETH Testnetworks and Mainnet it is the same 0x7a250d5630B4cF539739dF2C5dAcb4c659F2488D. For BSC Mainnet 0x10ED43C718714eb63d5aA57B78B54704E256024E.
We recomend testing it on Ropsten or Rinkeby testnetworks with Uniswap.
Our Smart Contract address is 0xe57c68F74d7a0d44ab438f0BC2475d012f0718b1 on BSC Mainnet.
