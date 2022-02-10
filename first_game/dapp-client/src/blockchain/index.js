import React from 'react'
import React, { useState, useContext } from 'react'
import Web3 from 'web3'

const BlockchainContext = React.createContext();

export default BlockchainContext;

export const BlockchainProvider = ({children}) => {

    const [account, setAccount] = useState()

    const loadWeb3 = async () => {

        try{
            if (window.ethereum) {
                window.web3 = new Web3(window.ethereum)
                await window.ethereum.enable()
                return true;
            } else if (window.web3) {
                window.web3 = new Web3(window.web3.currentProvider)
                return true
            } else {
                window.alert('Non-Ethereum browser detected. You should consider trying MetaMask!')
                return false
            }
        } catch (err) {
            window.alert('Error on login into your Wallet', err);
            return false
        }
    }

    const loadBlockchainData = async () => {

        const web3 = window.web3const 
        const accounts = await web3.eth.getAccounts()

        setAccount(accounts[0]);

        // Load smart contract
        const networkId = await web3.eth.net.getId()
        const networkData = MemoryToken.networks[networkId]

    }

    return (
        <BlockchainContext.Provider
            value={{
                isLoged: isAuthenticated,
                account,
                balance,
                myTokens,
                getMyTokensFromBlockchain,
                doLogin,
                doMint
            }}
        >
        {children}
        </BlockchainContext.Provider>
    );

}

export function useBlockchain() {
    return useContext(BlockchainContext)
}