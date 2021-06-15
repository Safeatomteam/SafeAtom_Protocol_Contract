const path = require('path');
const fs = require('fs');
const solc = require('solc');
//setting the path of the .sol and reading data from it
const safeatomPath = path.resolve(__dirname, 'contracts', 'safeatom.sol');
const source = fs.readFileSync(safeatomPath, 'UTF-8');
var input = {
    language: 'Solidity',
    sources: {
        'safeatom.sol' : {
            content: source
        }
    },
    settings: {
        outputSelection: {
            '*': {
                '*': [ '*' ]
            },
        }
    }

};
//compiling the contract
const contractSafeatom=(JSON.parse(solc.compile(JSON.stringify(input))));
//exporting the compiled contract
module.exports=contractSafeatom.contracts['safeatom.sol'];
