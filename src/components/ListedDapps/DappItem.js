import React, {useState} from 'react'
import {useStore } from '../../context/GlobalState';

import { requestRevote } from '../../store/asyncActions';
import { makeStyles } from "@material-ui/core/styles";
import {CardActionArea,CardContent,CardActions,Button,CardMedia,Typography,Card,Grid,} from "@material-ui/core";

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




export const DappItem = ({id , contractAddress , name ,status ,isActive ,legit ,downVotes  ,remarks , upVotes ,url})=>{
  const [{accounts ,contract}, dispatch] = useStore();
  const styles = useStyles();

   const[ review,setReview]= useState('');

 
  function handleReview(e) {
var remarks=prompt('Why you think its not a Scam');

requestRevote(contract,accounts,id,remarks,dispatch);

  }
const sstatusValues=["Inconclusive ⚖️","Scam 🚫","Legit 👍"];

    if(isActive == false && status != 0 ) {
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
           <Typography className={styles.addressHeading}>Contract Address : </Typography>  <Typography className={styles.contractAddress}>{contractAddress}</Typography>
            <Typography className={styles.addressHeading}>Status: </Typography>  <Typography className={styles.contractAddress}>{isActive}</Typography>
            <Typography className={styles.addressHeading}>{sstatusValues[status]} </Typography>  <Typography variant="h6">{legit}</Typography>
           </Typography>
            <Typography variant="h5" className={styles.remarksHeading}>Remarks :</Typography>
           <Typography variant="p" className={styles.remarks}> {remarks} </Typography>
           <br/>
         {/* REVIEW */}
           <div className="review-container">
         

<button className="dapp-review-btn" onClick={()=>{handleReview()}}> Defend </button>

        </div>
        <br/>
        <Typography align="center"><Button href={'https://'+url} target="_blank"> {url}</Button>  </Typography>
        <br/> 
            <button className="dapp-upvote-listeDapps" > {upVotes} <br/><ThumbUpAltOutlinedIcon/> </button>
         

            <button className="dapp-downvote-listeDapps" >{downVotes}<br/><ThumbDownAltOutlinedIcon/> </button>
       
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
