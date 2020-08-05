
import React from 'react';
import { DappItem } from './DappItem';
import './list.css';
import {Grid} from '@material-ui/core';
import {useStore } from '../../../../context/GlobalState';





export const CuratorApprove = () => {
  // const [{accounts ,contract,dappsList}, dispatch] = useStore();
  const [{dappsList}] = useStore();

  const lcs=dappsList;



  
    return (
      <>


<br/><br/><br/>

<Grid container spacing={3} > 
            {
              lcs.map((lc)=>(
                <DappItem key={lc.id} key={lc.id} isActive={lc.isActive} status={lc.status}
                contractAddress={lc.contractAddress} name={lc.name} url={lc.uri} 
                timestamp={lc.timestamp} id={lc.id}  />
            ))}
        </Grid>
      </>
    ) }