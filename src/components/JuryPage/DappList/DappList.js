
import React from 'react';
import { DappItem } from './DappItem';
import './list.css';
import ListSelector from '../Selectors/ListSelector';
import { useStore } from '../../../context/GlobalState';
import { upVote, downVote } from '../../../store/asyncActions';
import {Grid} from '@material-ui/core';




export const DappList = () => {
  const [{accounts ,contract,dappsList}, dispatch] = useStore();

  const lcs=dappsList;

  const message = <h1>go there</h1>;

  let isActive = dappsList;

    return (
      <>
<ListSelector/>
    

<br/><br/><br/>

<Grid container spacing={3} > 
            { lcs.map((lc)=>(
                <DappItem key={lc.id} key={lc.id} 
                contractAddress={lc.contractAddress} name={lc.name} 
                url={lc.uri} id={lc.id}  
                isActive={lc.isActive} remarks={lc.remarks}/>
            ))}
        </Grid>

      </>
    ) }