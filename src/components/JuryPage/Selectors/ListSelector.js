import React from 'react'

import Button from '@material-ui/core/Button';
import NavigateBeforeIcon from '@material-ui/icons/NavigateBefore';

import { makeStyles } from '@material-ui/core/styles';

import {Link} from 'react-router-dom';

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
        marginTop: '100px',
        marginLeft: '45px',
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


const ListSelector = () => {
    const classes = useStyles();

    return (
        <div className={classes.buttonSection}>
        <Link to="/" ><Button variant="contained" className={classes.buttons} > <NavigateBeforeIcon/> BACK TO HOME</Button> </Link>
        {/* <Link to="/LcList"> <Button variant="contained" className={classes.buttons}>  VIEW LISTED DAPP'S</Button></Link> */}
               </div>
    )
}

export default ListSelector;
