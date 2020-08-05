import React from "react";
import Drawer from "@material-ui/core/Drawer";
import List from "@material-ui/core/List";
import Divider from "@material-ui/core/Divider";
import HomeIcon from "@material-ui/icons/Home";
import ListItem from "@material-ui/core/ListItem";
import ListItemIcon from "@material-ui/core/ListItemIcon";
import ListItemText from "@material-ui/core/ListItemText";
import { makeStyles } from "@material-ui/core/styles";
import { Button } from "@material-ui/core";
import {Link} from 'react-router-dom';



const useStyles = makeStyles((theme) => ({
  drawerPaper: {
    width: 240,
  },
}));

const Item = ({ name, icon, onClickHandler }) => (
  <ListItem button onClick={onClickHandler}>
    <ListItemIcon>{icon}</ListItemIcon>
    <ListItemText primary={name} />
  </ListItem>
);

const RightDrawer = ({ open, onClickHandler }) => {
  const classes = useStyles();
//   const navigate = useNavigate();

  const iconSize = 24;

  return (
    <Drawer
      variant="temporary"
      anchor="right"
      open={open}
      classes={{
        paper: classes.drawerPaper,
      }}
      onClick={onClickHandler}
    >
      <List>
      <Link to="Curator">    <Button>CURATOR</Button> </Link>
             <br/>
             <Link to="ListedDapps">     <Button>LISTED PROJECTS</Button> </Link>
           
            <br/>
            <Button  href="https://t.me/AntiScamTofficial" target="_blank">TG</Button>
            <br/>
            <Button  href="https://antiscamtoken.cyou/AST.pdf">WHITE PAPER</Button>
      </List>
    </Drawer>
  );
};

export default RightDrawer;
