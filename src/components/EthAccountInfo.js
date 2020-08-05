import React, { useEffect, useState } from 'react'
import { useStore } from '../context/GlobalState';
import { viewAllDapps,viewDAppById } from '../APIs/viewTransactions';


export const EthAccountInfo = () => {
    const [{web3,accounts,web3LoadingErrorMessage,web3Loadded,tokenContractAST,contract,ast,dappsList}, dispatch] = useStore();
    const [accountBalance, setAccountBalance] = useState(0);
    const [yenixBalance, setYenixBalance] = useState(0);
   // console.log("In eth account = ",web3);

    useEffect(()=>{
        (async ()=>{
            if(web3 && accounts[0]){
                const balance = await web3.eth.getBalance(accounts[0]);
                setAccountBalance(web3.utils.fromWei(balance,"ether"));
            }
            
            if(contract && accounts[0]){
                const list = await viewAllDapps(contract,accounts[0],dispatch);// get all dapps
               
            }
          console.log("DAPPS in State",dappsList);

          if(tokenContractAST && accounts[0]){
            const list = await viewAllDapps(contract,accounts[0],dispatch);// get all dapps
           
        }
        })();
        
    },[web3,accounts,tokenContractAST,ast,,contract,yenixBalance,dappsList,dispatch])

    function accountDisplay(){
        if(accounts && accounts[0]){
            return (
                <div style={{textAlign: 'center'}}>
                    <span style={{color: "white" , textAlign: 'center'}}>Address: </span><span style={{color: "white" , textAlign: 'center'}}>{accounts[0]}</span>
                    <br/>
                    <span style={{color: "white" , textAlign: 'center'}}>Ether Balance: </span><span style={{color: "white" , textAlign: 'center'}}> {accountBalance} Ether</span>
                    <br/>
                    <span style={{color: "white" , textAlign: 'center'}}>STT  Balance: </span><span style={{color: "white" , textAlign: 'center'}}>{ast} STT</span>
                </div>);
        }
        else if(!web3 && web3LoadingErrorMessage && !web3Loadded) {
            return <div style={{color: "white" , textAlign: 'center'}}>{web3LoadingErrorMessage}</div>
        }
        else {
            return <div style={{color: "white" , textAlign: 'center'}}>Loading Web3 and Account Details</div>
        }
    }

    return (
        <div className="eth-account-info-container">
            {/* <div>Your Ethereum Account Details</div> */}
            <br/> <br/> <br/>
            <hr/>
            {
                accountDisplay()
            }
        </div>
    )
}