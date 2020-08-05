import React from 'react'
import Button from '@material-ui/core/Button';
import { makeStyles } from '@material-ui/core/styles';
import GavelTwoToneIcon from '@material-ui/icons/GavelTwoTone';
import AddTwoToneIcon from '@material-ui/icons/AddTwoTone';
import DappPage from '../../DappPage/DappForm';
import {Link} from 'react-router-dom';
// import styles from './Dapp&Tokens.module.css';
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
        marginBottom : '350px',
       },

    buttons : {
        backgroundColor: 'white',
        width: '290px',
        height: '42x',
        fontSize: '18px',
        // marginRight: '50px',
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
 <Link to="DappForm"> <Button variant="contained" className={classes.buttons}> LIST PROJECTS... <AddTwoToneIcon/></Button></Link>

  <Link to="DappList" ><Button variant="contained" className={classes.buttons} > JURY VOTING... <GavelTwoToneIcon  /></Button> </Link>
        </div>
    )
}

export default TabSection;
