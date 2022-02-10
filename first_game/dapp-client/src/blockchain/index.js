import React, { useState, useContext } from 'react'

const BlockchainContext = React.createContext();

export default BlockchainContext;

export const BlockchainProvider = ({children}) => {

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