import React from 'react'
import {useStore } from '../../../../context/GlobalState';

// import { registerLc } from '../store/asyncActions';
import { stopVotingSession, markScam } from '../../../../store/asyncActions';
import { makeStyles } from "@material-ui/core/styles";
import {CardActionArea,CardContent,CardActions,Button,Typography,Card,Grid,} from "@material-ui/core";

import './list.css'
// ICONS
import CloseOutlinedIcon from '@material-ui/icons/CloseOutlined';
import BlockOutlinedIcon from '@material-ui/icons/BlockOutlined';

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




export const CuratorItem = ({id , contractAddress , isActive , name , url})=>{
  const [{accounts ,contract}, dispatch] = useStore();
  const styles = useStyles();

 
  function handleEnd(){
    stopVotingSession(contract,accounts,id,dispatch);
  }

  function handleSpam(){
    markScam(contract,accounts,id,dispatch);
  }


if(isActive = true) {

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
          </Typography>
          <br/> <br/>

          <Typography align="center"><Button href={'https://'+url} target="_blank"> {url}</Button>  </Typography>
          <br/> <br/>
        <button className="dapp-upvote" onClick={() => handleEnd()} > End Voting <br/><CloseOutlinedIcon/> </button>
        <button className="dapp-downvote" onClick={() => handleSpam()} > Scam <br/><BlockOutlinedIcon/> </button>


   
        </div>
      </CardActions>
    </Card>
  </Grid>

  )
}

    return(
      <>

     

      </>
    );

}
