#! /bin/node

const solc = require('solc');
const fs = require('fs');
const util = require('util');
const readFile = util.promisify(fs.readFile);
const writeFile = util.promisify(fs.writeFile);
const loadRemoteSolc = util.promisify(solc.loadRemoteVersion);

(async() => {
  console.log('\nSTART Compile!!');

  // await loadRemoteSolc('0.5.12');

  const SOL_NAME = 'Test';

  const sol = await readFile(`${__dirname}/../contracts/${SOL_NAME}.sol`, 'utf8');
  const input = {
    language: 'Solidity',
    sources: {
      'Test.sol': {
        content: sol
      }
    },
    settings: {
      outputSelection: {
        '*': {
          '*': ['*']
        }
      }
    }
  };
  
  const output = JSON.parse(solc.compile(JSON.stringify(input)));
  Object.keys(output.contracts).forEach( async (key) => {
    const abi = JSON.stringify(output.contracts[key][SOL_NAME].abi);
    const bytecode = `0x${JSON.stringify(output.contracts[key][SOL_NAME].evm.bytecode.object)}`.replace(/"/g, '');
    await writeFile(`${__dirname}/outputs/${key}.abi`, abi);
    await writeFile(`${__dirname}/outputs/${key}.bytecode`, bytecode);
  });
  
  console.log('END Compile!!\n')
})()
.catch(err => {
  console.error('compile failed.');
  console.error(err);
}) ;