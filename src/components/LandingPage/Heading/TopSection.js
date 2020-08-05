import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import Typical from 'react-typical';

import {
  
  Typography,
  
} from "@material-ui/core";


const useStyles = makeStyles((theme) => ({
  root: {
    maxWidth: 345,
  },
home: {
    marginTop:'17%'
},
welcome:{
marginBottom:'2%',
color: 'white',
fontWeight: 'bold',
fontFamily: '"Lucida Console", Courier, monospace'
}
}));


const TopSection = () => {
  const styles = useStyles();

  return (
    <div>
      <div className={styles.home}>
             <Typography className={styles.welcome} align='center'  variant={"h4"}>
             <Typical steps={['', 1000, 'Anti-scam token court platform...', 500]}
        loop={1}
        wrapper="p"
        
        />

</Typography>
      </div>
      
    </div>
  )
}

export default TopSection

