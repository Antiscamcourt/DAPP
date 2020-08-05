import React from 'react'
import {useStore } from '../../../../context/GlobalState';

import { enlistForVoting ,markScam, } from '../../../../store/asyncActions';
import { makeStyles } from "@material-ui/core/styles";
import {CardActionArea,CardContent,CardActions,Button,Typography,Card,Grid,} from "@material-ui/core";

import './list.css'
// ICONS
import ThumbDownAltOutlinedIcon from '@material-ui/icons/ThumbDownAltOutlined';
import ThumbUpAltOutlinedIcon from '@material-ui/icons/ThumbUpAltOutlined';



const useStyles = makeStyles(  ({
  root: {
    padding: 0,
  },

  img: {
    margin: "0 auto",
  },
  card : {
    borderStyle : 'double',
    borderRadius : '20px',
    borderWidth: '5px',
    borderColor : 'grey',


  },
  btn: {
    backgroundColor: 'white',
    color: "black",
    width: "100%",
    padding: "10px",
  },
  action: {
      // backgroundColor: "#f04040 ",
    textAlign: 'center',
    marginTop: '10px',
    width: "100%",
  },
  hr: {
    marginTop: '10px',
  },
  address: {
    borderStyle : 'dashed',
    borderColor: 'red',
 
    borderRadius : '10px',

  },
  addressHeading:{
fontSize: '20px',
marginBottom: '10px'
  },

  contractAddress : {
    fontSize: '14px'
  },
}));




export const DappItem = ({id , timestamp , contractAddress ,isActive ,status ,name , url})=>{
  const [{accounts ,contract}, dispatch] = useStore();
  const styles = useStyles();
  // let message = <h1>go there</h1>;
  let date = new Date();
  let time = date.getTime();
  let timestampContract = timestamp;
  let value = time - timestampContract;
let demandTime = 10;
  function handleApprove(){
    enlistForVoting(contract,accounts,id,dispatch);
  }

  function handleReject(){
    
    markScam(contract,accounts,id,dispatch);
  }

//-
  if(isActive==false && status==0 || value > demandTime )
   {
    return(
      <Grid xs={12} sm={6} md={4} item>
      <Card className={styles.card}>
        <CardActionArea >
       
          <CardContent>
            <Typography noWrap gutterBottom variant="h5" component="h2">
            {name}
            
              </Typography>
        
          </CardContent>
          <CardContent className={styles.root}>
          
          </CardContent>
        </CardActionArea>
        <CardActions>
          <div className={styles.action}>

          <Typography className={styles.address} variant={"h6"} align="center">
         <Typography className={styles.addressHeading}>Contract Address </Typography>  <Typography className={styles.contractAddress}>{contractAddress}</Typography>
         <Typography className={styles.addressHeading}>Status </Typography>  <Typography className={styles.contractAddress}>{status[0] ? 'true' : 'false'}</Typography>

            </Typography>
            <br/> <br/>

            <Typography align="center"><Button href={'https://'+url} target="_blank"> {url}</Button>  </Typography>
            <br/> <br/>
          <button className="dapp-upvote" onClick={() => handleApprove()} > Approve <br/><ThumbUpAltOutlinedIcon/> </button>
       

          <button className="dapp-downvote" onClick={() => handleReject()} >Discard<br/><ThumbDownAltOutlinedIcon/> </button>
     
          </div>
        </CardActions>
      </Card>
    </Grid>


    )
  }

  else {
    
  }
    return(
      <>

     

      </>
    );

}
