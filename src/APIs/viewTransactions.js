//import React, { useState } from 'react'
//import { useStore } from '../context/GlobalState';
//import { yenixBalance } from '../store/asyncActions';
import { setASTBalance,setSTTBalance,  setDappList } from "../store/actions";






export const  viewDAppById = async(contract,account,id,dispatch)=>{
  console.log("View dapps by Id start",contract,account,id);
  const response= await contract.methods.viewDAppById(id).call({from:account});
  console.log("View dapps by Id",response);
return response;
}
export const  viewAllDapps = async(contract,account,dispatch)=>{
  console.log("In viewallDapps function start")
  var dappslist=[];
  const totalDapps= await contract.methods.dappCounter().call({from:account});

  console.log("Dap Counter",totalDapps);
  let currentime=(new Date).getTime();
console.log("Current Time",currentime);
  for(var i=0;i<totalDapps;i++){//TODO, replace totalDapps
const response= await viewDAppById(contract,account,i,dispatch);
console.log("RESPONSE",response);
var timestamp=parseInt(response[10]);
let dappObj={
  id:response[0], 
 name:response[1],
 contractAddress:response[2],
 uri: response[3],
 status: response[4],
 isActive:response[5],
 upVotes: response[6],
 downVotes:response[7],
 isLegit:response[8],
 remarks:response[9],
 time:parseInt(response[10])
 
}

console.log("DAPP OBJ",dappObj);
var currentTime= Date.now();
var tenDays=24*60*60*1000;
var duration=0;// currentTime- timestamp;
console.log("duration",currentTime,tenDays,timestamp,duration);

if(duration<tenDays){
dappslist.push(dappObj);
}
}
 console.log("in viewAll Dapps", dappslist);
dispatch(setDappList(dappslist));
return dappslist;
  }

  export const netBalanceSTT = async(contract, account,dispatch)=>{
    try{
        console.log("before STP  Token Balance transaction");
    
        const response =  await contract.methods.netBalanceSTT(account).call();
       console.log("after STT view transaction ",account, response);
       let decimal =18;
       let divisor = 10**decimal
       dispatch(setSTTBalance(response/divisor));
     //  dispatch(setSTTBalance(response));
        return response;
    }catch(error){
        console.log("Error in balance checking = ",error);
    }
    }


    export const balanceAST = async(tokenContractAST, account,dispatch)=>{
      try{
          console.log("before Token Balance transaction",tokenContractAST,account);
      
          const response =await tokenContractAST.methods.balanceOf(account).call({from:account});
         console.log("after  transaction ",account, response);
         let decimal =18;
         let divisor = 10**decimal
         dispatch(setASTBalance(response/divisor));
          return response;
      }catch(error){
          console.log("Error in balance checking = ",error);
      }
      }

      // export const tokenBalance = async(tokencontract, account,dispatch)=>{
      //   try{
      //       console.log("before Token AST  Balance transaction");
        
      //       const response = 10;// await tokencontract.methods.balanceOf(account).call();
      //      console.log("after  transaction ",account, response);
      //      dispatch(setTokenBalance(response));
      //       return response;
      //   }catch(error){
      //       console.log("Error in balance checking = ",error);
      //   }
     //  }