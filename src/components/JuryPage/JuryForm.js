import React from 'react';
// import { createStyles, makeStyles, Theme } from '@material-ui/core/styles';
import TextField from '@material-ui/core/TextField';
import './JuryForm.css';
// import {LcList} from './DappList/LcList';
import Selector from './Selectors/JurySelector'
// css

import './JuryForm.css'

const JuryForm = () => {
    // const [_seller, setSeller] = useState('');
 
    // const [_originAgent, setOriginAgent] = useState('');
    // const [_destinationAgent, setDestinationAgent] = useState('');
    // const [_amount, setAmount] = useState(0);
    // const [{contract, accounts}, dispatch] = useStore();
  
    // const [isTransactionInProcess, setTransactionInprocess] = useState(false);
    // const [isTransactionSuccessful , setTransactionSuccessful] = useState(true);
    // const [transactionError , setTransactionError] = useState("");
  
    // const onSubmit = async(e) => {
    //   e.preventDefault();
    //   setTransactionSuccessful(true);
    //   setTransactionError("");
    //   try {
    //       setTransactionInprocess(true)
    //       //create a Lc oobject to pass on to  registerLc
    //       const newLc = {
    //       seller: _seller,
    //       amount: _amount,
    //       originAgent :_originAgent,
    //       destinationAgent: _destinationAgent
           
    //       }
    //       await registerLc(contract, accounts,newLc, dispatch);
    //       setTransactionInprocess(false);
    //       setTransactionSuccessful(true);
    //   }catch (error){
    //       console.log("error trax = ",error);
    //       setTransactionInprocess(false);
    //       setTransactionSuccessful(false);
    //       setTransactionError(error.message);
    //   }
    // }
  
    return (
      <div className="jury-form-body">
    <div>
      <Selector/>
      <form className='Jury-Form'> 


      {/* Wallet Address */}
      <div className="Jury-TextContainer form-style">
        <TextField
          id="outlined-textarea"
          className='Jury-TextField'
          label="Wallet Address"
          placeholder="Wallet Address"
          multiline
          variant="outlined"
        //   value={_seller}
        //   onChange={(e) => setSeller(e.target.value)}
          />
        </div>




        {/* Tokens */}
        <div className="Jury-TextContainer">
        <TextField
          id="outlined-textarea"
          className='Jury-TextField'
          label="Tokens"
          placeholder="Tokens"
          multiline
          variant="outlined"
        //   value={_amount}
        //   onChange={(e) => setAmount(e.target.value)}
          />
        </div>

  
      


     

{/*   
        {
            isTransactionInProcess ?
            <div className="btn">Transaction in Process..p...</div> :
            <button className="btn">   Issue Smart Letter of Credit<br/>
            <DoubleArrowIcon className='iconBtn'/></button>
        } */}
        
      </form>
      </div>
      </div>
    )
}

export default JuryForm;
