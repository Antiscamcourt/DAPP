import React from 'react'
import Button from '@material-ui/core/Button';
import { makeStyles } from '@material-ui/core/styles';
import {Link} from 'react-router-dom';
import NavigateBeforeIcon from '@material-ui/icons/NavigateBefore';
import HowToVoteOutlinedIcon from '@material-ui/icons/HowToVoteOutlined';

const useStyles = makeStyles((theme) => ({
    root: {
      display: 'flex',
      flexDirection: 'column',
      alignItems: 'center',
      
      '& > *': {
        margin: theme.spacing(1),
      },
    },
    buttonSection: {
        textAlign : 'center',
        marginTop : '50px',
       },

    buttons : {
        backgroundColor: 'white',
        width: '290px',
        height: '42x',
        fontSize: '18px',
        transition: 'color 0.4s linear',
        cursor: 'pointer',
        fontFamily: '"montserrat",sans-serif',
        borderRadius: '40px',
        marginBottom: '15px',
        marginLeft: '4px',
        '&:hover': {
            backgroundColor: 'red',
            color: 'white',
           
        },
   
        ['@media(maxWidth: 480px)'] : {
          width: '10px',
          paddingBottom: '15px'
        
        }
    }
  }));

const TabSection = () => {
    const classes = useStyles();

    return (
        <div className={classes.buttonSection}>
 <Link to="/"> <Button variant="contained" className={classes.buttons}> <NavigateBeforeIcon/>BACK TO HOME </Button></Link>

  <Link to="/DappTime" ><Button variant="contained" className={classes.buttons} >In Voting <HowToVoteOutlinedIcon  /></Button> </Link>
        </div>
    )
}

export default TabSection;
