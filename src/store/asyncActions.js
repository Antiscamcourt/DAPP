import { setupWeb3, setupContract, addEthereumAccounts, issueSmartLc, web3LoadingError, setupToken } from "./actions";
import Web3 from "web3";

import { ANTI_SPAM_DAPP_ABI, ANTI_SPAM_DAPP_ADDRESS  } from '../ABI/antispam';

 import { AST_TOKEN_ABI,AST_TOKEN_ADDRESS } from "../ABI/AST_token";

export const loadBlockchain = async(dispatch) =>{
    try {
        console.log("Web3 = ",Web3);
        console.log("Web3.givenProvider = ",Web3.givenProvider);
        if(Web3.givenProvider){
            const web3 = new Web3(Web3.givenProvider);
            await Web3.givenProvider.enable();
            dispatch(setupWeb3(web3));
            const contract = new web3.eth.Contract(ANTI_SPAM_DAPP_ABI, ANTI_SPAM_DAPP_ADDRESS);
            const tokenContract = new web3.eth.Contract(AST_TOKEN_ABI,AST_TOKEN_ADDRESS);// create AST contract instance
            dispatch(setupToken(tokenContract));
            // console.log("TokenContract Loaded",tokenContract);
           
            dispatch(setupContract(contract));
            dispatch(setupContract(contract));
            const accounts = await web3.eth.getAccounts();
            dispatch(addEthereumAccounts(accounts));
            // console.log("contract = ",contract);
            // console.log("contract.methods = ",contract.methods);
           
        }
        else {
            dispatch(web3LoadingError("Please install an Ethereum-compatible browser or extension like MetaMask to use this dApp!"))
        }
    }
    catch(error){
        console.log("Error in loading Web3 = ",error);
        if(error.code===4001){
            
            dispatch(web3LoadingError(error.message));
        }
    }
}



export const registerDapp = async(contract, accounts, dapp, dispatch)=>{
    // console.log("before Dapp Registration",dapp);
    // console.log("Contract",contract,"Account", typeof(accounts[0]));
   const receipt =  await contract.methods.registerDapp(dapp.name,dapp.contractAddress,dapp.uri).send({from : accounts[0]});
//    console.log("after  DApp Registration ", receipt);
}

export const registerJuror = async(contract, accounts, tokens, dispatch)=>{
    // console.log("before Juror Registration");

  const receipt =  await contract.methods.registerDapp(tokens).send({from : accounts[0]});
//  console.log("after  Curator Registration", receipt);
}

export const registerCurator = async(contract, accounts, tokens, dispatch)=>{
    // console.log("before Curator Registration");

  const receipt =  await contract.methods.registerDapp(tokens).send({from : accounts[0]});
//  console.log("after  Juror Registration", receipt);
}

export const upVote = async(contract, accounts,id, dispatch)=>{
    // console.log("before upvoting "+ id);
  
    const receipt =  await contract.methods.upvote(id).send({from : accounts[0]});
    // console.log("after  upvoting ", receipt);
  
}
export const downVote = async(contract, accounts,id,  dispatch)=>{
    // console.log("before downVote "+id);
   
   const receipt =  await contract.methods.downVote(id).send({from : accounts[0]});
//    console.log("after  downvoting ", receipt);
  
}

export const enlistForVoting = async(contract, accounts,id, dispatch)=>{
    // console.log("enlistForVoting "+ id);
   
    const receipt =  await contract.methods.enlistForVoting(id).send({from : accounts[0]});
    // console.log("after  enlistForVoting ", receipt);
  
}
export const markScam = async(contract, accounts,id,  dispatch)=>{
    // console.log("before markScam "+id);
   const receipt =  await contract.methods.markScam(id).send({from : accounts[0]});
//    console.log("after  markScam ", receipt);
  
}//      approveAST(tokenContractAST,ANTI_SPAM_DAPP_ADDRESS,accounts,dispatch)

export const approveAST = async(tokenContractAST,spender,tokens, accounts, dispatch)=>{
  const toapprove = window.web3.utils.toWei(tokens.toString());
      const receipt =  await tokenContractAST.methods.approve(spender,toapprove).send({from : accounts[0]});
//    console.log("after  Approval ", receipt);
}

export const swapAndstakeSPT = async(contract, accounts, tokens, dispatch)=>{
   var decimal =1000000000000000000;
   let swap= tokens*decimal
    // console.log("before swap",swap);
      const receipt =  await contract.methods.swapAndstakeSTT(swap.toString()).send({from : accounts[0]});
//    console.log("after  swapAndstakeSPT ", receipt);
}
//todo redeem
export const redeemSTT = async(contract, accounts, tokens, dispatch)=>{
    var decimal =1000000000000000000;
    let toRedeem= tokens*decimal
    // console.log("before redeem");
      const receipt =  await contract.methods.redeem(toRedeem.toString()).send({from : accounts[0]});
//    console.log("after  redeem ", receipt);
}


export const stopVotingSession = async(contract, accounts, id, dispatch)=>{
    // console.log("before stopVotingSession");
      const receipt =  await contract.methods.stopVotingSession(id).send({from : accounts[0]});
//    console.log("after  stopVotingSession ", receipt);
}
export const requestRevote = async(contract, accounts, id,remarks, dispatch)=>{
    // console.log("before revote",contract, accounts, id,remarks);
      const receipt =  await contract.methods.requestRevote(id,remarks).send({from : accounts[0]});
//    console.log("after  Revote request ", receipt);
}