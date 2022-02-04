const { assert } = require('chai')

const PacCatToken = artifacts.require('.contracts/MemoryToken.sol')

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
    })
})