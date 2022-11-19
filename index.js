import { Command } from "commander"
//import deploy from './deploy.js'

const program = new Command()

program
 .name('filecoin db')
 .description('A command line interface to query data stored on ipfs/filecoin/web3.storage')
 .version('0.0.1')

//deploy contract
program
 .command('deploy')
 .description('Deploy the smart contract and the subgraph that will query our app')
 .action(() => {
    console.log('hi')
 })

program.parse()
