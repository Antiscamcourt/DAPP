
import React from 'react';
import { DappItem } from './DappItem';
import './list.css';
import {Grid} from '@material-ui/core';
import TabSection from './Selectors/forHome';
import {useStore } from '../../context/GlobalState';





export const ListedDapps = () => {
  // const [{accounts ,contract,dappsList}, dispatch] = useStore();

  const [{dappsList}] = useStore();

  const lcs =  dappsList;
 
  
    return (
      <>
        <TabSection/>
       

<br/><br/><br/>

<Grid container spacing={3} > 
            {lcs.map((lc)=>(
                <DappItem key={lc.id} key={lc.id} contractAddress={lc.contractAddress}
                 name={lc.name} url={lc.uri} id={lc.id} isActive={lc.isActive} 
                legit={lc.isLegit} remarks={lc.remarks} upVotes={lc.upVotes}
                 downVotes={lc.downVotes} status={lc.status}  />
            ))}
        </Grid>
      </>
    ) }