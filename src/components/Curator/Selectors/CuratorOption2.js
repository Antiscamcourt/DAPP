import React from 'react'
import Button from '@material-ui/core/Button';
import { makeStyles } from '@material-ui/core/styles';
import {Link} from 'react-router-dom';
import NavigateBeforeIcon from '@material-ui/icons/NavigateBefore';

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
        marginRight: '50px',
        transition: 'color 0.4s linear',
        cursor: 'pointer',
        fontFamily: '"montserrat",sans-serif',
        borderRadius: '40px',
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

  <Link to="/Curator" ><Button variant="contained" className={classes.buttons} > <NavigateBeforeIcon  />BACK TO DAPP LIST</Button> </Link>
        </div>
    )
}

export default TabSection;
