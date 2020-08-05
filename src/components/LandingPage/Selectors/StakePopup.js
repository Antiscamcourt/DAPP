import React,{useState,useEffect} from 'react'
import { makeStyles } from '@material-ui/core/styles';
import {useStore } from '../../../context/GlobalState';
import './Selector.css'
import { swapAndstakeSPT,approveAST,redeemSTT  } from '../../../store/asyncActions';
import { netBalanceSTT,balanceAST } from '../../../APIs/viewTransactions';
import {ANTI_SPAM_DAPP_ADDRESS } from '../../../ABI/antispam';




const useStyles = makeStyles((theme) => ({
    root: {
      // display: 'flex',
      flexDirection: 'column',
      alignItems: 'center',
      
      '& > *': {
        margin: theme.spacing(1),
      },
    },
    buttonSection: {
        textAlign : 'center'
       },

    buttons : {
        backgroundColor: 'white',
        width: '290px',
        height: '42x',
        fontSize: '18px',
        marginRight: '50px',
        transition: 'color 0.4s linear',
        cursor: 'pointer',
        fontFamily: '"montserrat",sans-serif',
        borderRadius: '40px',
        '&:hover': {
            backgroundColor: 'red',
            color: 'white'
        },
        
        
    }
  }));
  

const StackModel = () => {
  const [{web3,accounts,tokenContractAST,contract,ast_Balance,stt_Balance}, dispatch] = useStore();
    
  const [astBalance, setastBalance] = useState(0);
    const [sttBalance, setsttBalance] = useState(0);
 const [swap,setSwap]=useState(0);
 const [redeem,setredeem]=useState(0);
    useEffect(()=>{
      (async ()=>{
        
              
          
          if(contract && accounts[0]){
              const tokens_stt = await netBalanceSTT(contract,accounts[0],dispatch);// get all dapps
              setsttBalance(tokens_stt);
          }
        console.log("net STT",stt_Balance);

        if(tokenContractAST && accounts[0]){
          const astTokens = await balanceAST(tokenContractAST,accounts[0],dispatch);// get AST Balance
         
      //   const setastBalance(astTokens);
      }

    })();
  },[web3,accounts,tokenContractAST,ast_Balance,swap,contract,dispatch])

    const classes = useStyles();

    const handleApprove= async()=>{
      console.log("seeking approval fpr AST",swap);
      approveAST(tokenContractAST,ANTI_SPAM_DAPP_ADDRESS,swap,accounts,dispatch)
     }
     const handleSwap= async()=>{
      console.log("Swapping the AST for STT",swap);
      swapAndstakeSPT(contract,accounts,swap,dispatch);
     }
    
     const handleRedeem= async()=>{
      // alert("Redeem"+redeem);
       redeemSTT(contract,accounts,redeem,dispatch);
      console.log("Swapping the AST for STT",redeem);

     }
    return (
      <section>
        <div className={classes.buttonSection}>
                  {/* <br className="stake-hr"/> */}


          <div className="stack-Heading">
            <h2>
              Stake And Get STT
            </h2>
          </div>
          {/* MAIN CONTAINER */}
            <div className="row">

              {/* EXCHANGE RATE CONTAINER */}
  
            <div className="stakeExchange-container column">
              <h4>Exchange Rate</h4>
              <h2>TOKENS NUMBER</h2>
              <p> AST Balance  ={ast_Balance}</p>
            </div>  
            {/* AMOUNT CONTAINER */}

            <div className="stakeAmount-container column">
            <h4 className="stakeHeading">Amount of AST</h4>
              <p className="stakeAmontShow-text ">$TOKENS</p>
            <input className="stakeAmpount-input" onChange={(e) => setSwap(e.target.value)}/>
            <h4 className="stakeSub-Heading">AMOUNT OF AST</h4>

            </div>

            <div className=" column">
            <h4 className="stakeHeading-confirmation">Confirmation</h4>
            <button className="stakeButtons "onClick={handleApprove}>Approve</button>
            <br/>
            <button className="stakeButtons "onClick={handleSwap}> Swap and Stake</button>

            </div>


            </div>
           
            
        

        </div>
      
          {/* SWAP */}
        <div className={classes.buttonSection}>


          <div className="stack-Heading">
            <h2>
              Swap And Redeem
            </h2>
          </div>
          {/* MAIN CONTAINER */}
            <div className="row">

              {/* EXCHANGE RATE CONTAINER */}
  
            <div className="stakeExchange-container column">
              <h4>Exchange Rate</h4>
              <h2>TOKENS NUMBER</h2>
              <p>STT Balance={stt_Balance}</p>
            </div>  
            {/* AMOUNT CONTAINER */}

            <div className="stakeAmount-container column">
            <h4 className="stakeHeading">Amount of STT</h4>
              <p className="stakeAmontShow-text ">$TOKENS</p>
            <input className="stakeAmpount-input" onChange={(e) => setredeem(e.target.value)}/>
            <h4 className="stakeSub-Heading">AMOUNT OF STT</h4>

            </div>

            <div className=" column">
            <h4 className="stakeHeading-confirmation">Confirmation</h4>

            <button className="stakeButtons "onClick={handleRedeem}>SWAP</button>
            <br/>

            </div>


            </div>
           
            
        

        </div>
      
        </section>
    )
}

export default StackModel;
