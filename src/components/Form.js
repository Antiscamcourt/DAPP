import React, { useState } from 'react'
import { useStore } from '../context/GlobalState';
import { registerLc } from '../store/asyncActions';
import Loader from '../images/loader.gif';

export const AddSmartLc = () => {
  const [_seller, setSeller] = useState('');
 
  const [_originAgent, setOriginAgent] = useState('');
  const [_destinationAgent, setDestinationAgent] = useState('');
  const [_amount, setAmount] = useState(0);
  const [{contract, accounts}, dispatch] = useStore();

  const [isTransactionInProcess, setTransactionInprocess] = useState(false);
  const [isTransactionSuccessful , setTransactionSuccessful] = useState(true);
  const [transactionError , setTransactionError] = useState("");

  const onSubmit = async(e) => {
    e.preventDefault();
    setTransactionSuccessful(true);
    setTransactionError("");
    try {
        setTransactionInprocess(true)
        //create a Lc oobject to pass on to  registerLc
        const newLc = {
        seller: _seller,
        amount: _amount,
        originAgent :_originAgent,
        destinationAgent: _destinationAgent
         
        }
        await registerLc(contract, accounts,newLc, dispatch);
        setTransactionInprocess(false);
        setTransactionSuccessful(true);
    }catch (error){
        console.log("error trax = ",error);
        setTransactionInprocess(false);
        setTransactionSuccessful(false);
        setTransactionError(error.message);
    }
  }

  return (
    <>
      <h3>Issue Smart LC {isTransactionInProcess && <img width="40px" src={Loader} alt="Loading..." />}</h3>
      {!isTransactionSuccessful && <div style={{color:"red"}}>{transactionError}</div>}
      <form onSubmit={onSubmit}>
        <div className="form-control">
          <label htmlFor="seller">Seller</label>
          <input type="text" value={_seller} onChange={(e) => setSeller(e.target.value)} placeholder="please provide sellerAddress." />
        </div>
        <div className="form-control">
          <label htmlFor="amount"
            >Amount</label
          >
          <input type="number" value={_amount} onChange={(e) => setAmount(e.target.value)} placeholder="Enter LC Amount..." />
        </div>
        
        <div className="form-control">
          <label htmlFor="text">Origin Agent</label>
          <input type="text" value={_originAgent} onChange={(e) => setOriginAgent(e.target.value)} placeholder="Enter Destination Agent..." />
        </div>
        
        <div className="form-control">
          <label htmlFor="text">Destination Agent</label>
          <input type="text" value={_destinationAgent} onChange={(e) => setDestinationAgent(e.target.value)} placeholder="Enter Destination Agent..." />
        </div>
        {
            isTransactionInProcess ?
            <div className="btn">Transaction in Process..p...</div> :
            <button className="btn">Issue Smart Letter of Credit </button>
        }
        
      </form>
    </>
  )
}