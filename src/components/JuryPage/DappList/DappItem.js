import React from 'react'
 import { useStore } from '../../../context/GlobalState';
import { upVote, downVote } from '../../../store/asyncActions';
import { makeStyles } from "@material-ui/core/styles";
import {CardActionArea,CardContent,CardActions,Button,Typography,Card,Grid,} from "@material-ui/core";

import './list.css'
// ICONS
import ThumbDownAltOutlinedIcon from '@material-ui/icons/ThumbDownAltOutlined';
import ThumbUpAltOutlinedIcon from '@material-ui/icons/ThumbUpAltOutlined';


const useStyles = makeStyles(  ({
  root: {
    padding: 0,
    cursor : 'copy'
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
  remarksHeading:{
    color: '#ba1e1e'
  },
  remarks:{
    fontWeight: 'bold'
    
  }
}));



export const DappItem = ({id , isActive , contractAddress , name , url ,remarks })=>{
  const [{accounts ,contract}, dispatch] = useStore();

  const styles = useStyles();

  function handleUpvote(){
     //alert("upvote"+name);
    upVote(contract,accounts,id,dispatch);
  }

  function handleDownVote(){
    // alert("upvote"+name);
    downVote(contract,accounts,id,dispatch);
  }

  if(isActive == true ) {

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
         
              <br/>
            <div className={styles.action}>
            <Typography className={styles.address} variant={"h6"} align="center">
           <Typography className={styles.addressHeading}>Contract Address </Typography>  <Typography className={styles.contractAddress}>{contractAddress}</Typography>
              </Typography>
              <Typography variant="h5" className={styles.remarksHeading}>Remarks :</Typography>
           <Typography variant="p" className={styles.remarks}> {remarks} </Typography>
              <br/> <br/>

              <Typography align="center"><Button href={'https://'+url} target="_blank"> {url}</Button>  </Typography>
              <br/> <br/>

            <button className="dapp-upvote" onClick={() => handleUpvote()} >Legit <br/><ThumbUpAltOutlinedIcon/> </button>
         

            <button className="dapp-downvote" onClick={() => handleDownVote()}>Scam<br/><ThumbDownAltOutlinedIcon/> </button>
       
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
