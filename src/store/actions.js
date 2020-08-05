// Actions to be usedwith Reducers
export const setTBalance = (amount)=> {
    return {
        type: 'SET_TOKEN_BALANCE',
        payload: amount
    };
}

export const issueSmartLc = (transaction)=> {
    return {
        type: 'ISSUE_SMARTLC',
        payload: transaction
    };
}

export const setbuyerLC = (transaction)=> {
    return {
        type: 'SET_Buyer_LC',
        payload: transaction
    };
}
    export const setorginAgentLC = (transaction)=> {
        return {
            type: 'SET_OriginAgent_LC',
            payload: transaction
        };
    }
        export const setDappList = (transaction)=> {
            return {
                type: 'SET_DAPP_LIST',
                payload: transaction
            };
}
export const setupWeb3 = (web3) => {
    return {
        type: 'SETUP_WEB3',
        payload: web3
    };
}

export const setupContract = (contract) => {
    return {
        type: 'SETUP_CONTRACT',
        payload: contract
    };
}

export const setupToken = (tokenContract) => {
    return {
        type: 'SETUP_TOKEN',
        payload: tokenContract
    };
}
export const addEthereumAccounts = (accounts) => {
    return {
        type: 'ADD_ETHEREUM_ACCOUNTS',
        payload: accounts
    };
}

export const web3LoadingError = (errorMessage) => {
    return {
        type: 'WEB3_LOADING_ERROR',
        errorMessage: errorMessage
    };
}
    export const setASTBalance = (amount)=> {
        return {
            type: 'SET_AST_BALANCE',
            payload: amount
        };
    }
        export const setSTTBalance = (amount)=> {
            return {
                type: 'SET_STT_BALANCE',
                payload: amount
            };
}