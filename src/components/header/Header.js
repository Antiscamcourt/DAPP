import React from "react";
import './Header.css'
import AppBar from "@material-ui/core/AppBar";
import Toolbar from "@material-ui/core/Toolbar";
import { makeStyles } from "@material-ui/core/styles";
import Hidden from "@material-ui/core/Hidden";
import IconButton from "@material-ui/core/IconButton";
import MenuIcon from "@material-ui/icons/Menu";
import { Button } from "@material-ui/core";
import {Link} from 'react-router-dom';



const useStyles = makeStyles((theme) => ({
  container: {
    display: "flex",
    justifyContent: "space-between",
  },
  appBar: {
    zIndex: theme.zIndex.drawer + 1,

    backgroundColor: 'black'
  },

  navButton : {
    color : 'white',
    fontSize: '16px',
    fontWeight: 'bold',
    transition: 'color 0.4s linear',

  '&:hover' :{
      color : 'red'
  },
  
  },

  links: {
    display: "flex",
  },
  menuButton: {
    color: theme.palette.primary.contrastText,
  },
  rightContainer: {
    [theme.breakpoints.up("md")]: {
      marginLeft: 80,
    },
  }
}
));
const Header = ({ onMenuClickHandler }) => {
  const classes = useStyles();

  return (
    <div>
      <AppBar position="sticky" className={classes.appBar}  >
        <Toolbar className={classes.container }>
          {/* <Link to="/">
          </Link> */}
                    <a href="https://antiscamtoken.cyou/">  <img className={classes.logo} src="https://i.ibb.co/zZZnrbt/dapp-logo.png?fbclid=IwAR2qfV88m0fqRDrF_25-_X5jMMFpiJosaRPYKei1v70yuVaiO_Q2_PLXujg" alt="logo" width="80px" height='80px'/> </a>

          <Hidden xsDown>
            <div className={classes.links}>
            {/* LINKS WILL BE PUT HERE */}
            <Link to="Curator">   <Button className={classes.navButton}>CURATOR  </Button> </Link>
            <Link to="ListedDapps">    <Button className={classes.navButton}> LISTED PROJECTS </Button> </Link>
            <Button className={classes.navButton} href="https://t.me/AntiScamTofficial" target="_blank"> TG </Button>
              
            <Button className={classes.navButton} href="https://antiscamtoken.cyou/AST.pdf"> WHITE PAPER </Button>

            </div>
          </Hidden>

          <div className={classes.rightContainer}>

            <Hidden smUp>
              <IconButton
                className={classes.menuButton}
                edge="end"
                aria-label="menu"
                onClick={onMenuClickHandler}
              >
                <MenuIcon />
              </IconButton>
            </Hidden>
          </div>
        </Toolbar>
      </AppBar>
    </div>
  );
};

export default Header;
