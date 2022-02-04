const { assert } = require('chai')

const MemoryToken = artifacts.require('.contracts/MemoryToken.sol')

require('chai')
    .use(require('chai-as-promised'))
    .should()

    contract('Memory Token', (accounts) => {

        let Token

        describe('deployment', async () =>{
            it('deploys successfully', async () => {


                token = await MemoryToken.deployed()
                const address = token.address

                assert.notEqual(address, 0x0)
                assert.notEqual(address, '')
                assert.notEqual(address, null)
                assert.notEqual(address, undefined)
            })

            it('has a name', async ()=> {
                const name = await token.name()
                assert.equal(name, 'Memory Token')
            })
            
            it('has a symbol', async () => {
                const symbol = await token.symbol()
                assert.equal(symbol, 'MTT')
            })
    })
})