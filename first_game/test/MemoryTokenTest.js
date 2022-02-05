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

    describe('token distribution', async () => {
        let result

        it('mints tokens', async () => {

            await token.mint(accounts[0], 'https://www.token-uri.com/nft')

            // It should increase the total supply
    
            result = await token.totalSupply()
            assert.equal(result.toString(), '1', 'total supply is correct')

        // it increments owner balance
        result = await token.balanceOf(accounts[0])
        assert.equal(result.toString(), '1', 'balanceOf is correct')


        // Token should belong to owner
        result = await token.ownerOf('1')
        assert.equal(result.toString(), accounts[0].toString(), 'ownerOf is correct')
        result - await token.tokenOfOwnerByIndex(accounts[0], 0)

        })

    })

})