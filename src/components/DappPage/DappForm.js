import React, { useState } from 'react'
import { useStore } from '../../context/GlobalState';
import {  registerDapp } from '../../store/asyncActions';

import Button from '@material-ui/core/Button';
import TextField from '@material-ui/core/TextField';
import './DappForm.css';
import DappSelector from './Selectors/DappSelector'
import { makeStyles } from '@material-ui/core/styles';


const useStyles = makeStyles((theme) => ({
  buttons : {
      backgroundColor: 'white',
      width: '400px',
      height: '30x',
      fontSize: '18px',
      transition: 'backgroundColor 0.2s linear',
      cursor: 'pointer',
      fontFamily: '"montserrat",sans-serif',
      borderRadius: '13px',
      backgroundColor: '#00000000',
      color: 'white',
      borderStyle : 'none',
      '&:hover': {
          backgroundColor: 'black',
          color: 'white',
          borderStyle : 'solid',
      },
      
      
  }
}));



const DappForm = () => {
  const classes = useStyles();
  const [{accounts,contract}, dispatch] = useStore();

  const[ name,setName]= useState('');
  const[ address,setAddress]= useState('');
  const[ uri,setUri]= useState('');

  const handleRegister=(e)=>{
    let dapp={
      name:name,
      contractAddress:address,
      uri:uri
    
    }
    console.log("On button click",dapp);
    registerDapp(contract,accounts,dapp,dispatch);
    }
    return (
        <div>
          <DappSelector/>
        
        <form className='Dapp-Form'> 
  
  
        {/* DAPP ADDRESS */}
        <div className="Dapp-TextContainer form-style">
          <TextField
            id="outlined-textarea"
            className='Dapp-TextField'
            label="Contract Address"
            placeholder='Contract Address...'
            multiline
            variant="outlined"
            value={address}
            onChange={(e) => setAddress(e.target.value)}
            />
          </div>
  
  
  
  
          {/* Name */}
          <div className="Dapp-TextContainer">
          <TextField
            id="outlined-textarea"
            className='Dapp-TextField'
            label="Name Of Project"
            placeholder="Name Of Project...  "
            multiline
            variant="outlined"
            value={name}
            onChange={(e) => setName(e.target.value)}
            />
          </div>
  
          
           
  
  
          {/* URDL */}
          <div className="TextContainer">
          <TextField
            id="outlined-textarea"
            className='Dapp-TextField'
            label="Website URL"
            placeholder="Website URL..."
            multiline
            variant="outlined"
             value={uri}
             onChange={(e) => setUri(e.target.value)}
            />
          </div> 
  
  
          <div >
            <br/>
        <Button className={classes.buttons} onClick={()=>{handleRegister()}}  > SUBMIT</Button> 

               </div>     

  
            
          
        </form>
        </div>
    )
}

export default DappForm;
