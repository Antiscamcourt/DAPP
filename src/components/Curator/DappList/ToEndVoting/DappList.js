
import React from 'react';
import { CuratorItem } from './DappItem';
import './list.css';
import {Grid} from '@material-ui/core';
import TabSection from '../../Selectors/CuratorOption2'
// import ListSelector from '../Selectors/ListSelector';
// import { useStore } from '../../../context/GlobalState';
// import { upVote, downVote } from '../../../store/asyncActions';

import {useStore } from '../../../../context/GlobalState';




export const DappTime = () => {
  // const [{accounts ,contract,dappsList}, dispatch] = useStore();
 
  const [{dappsList}] = useStore();

  const lcs = dappsList;
  // let isActive = dappsList;

    return (
      <>

       <TabSection/>

<br/><br/><br/>

<Grid container spacing={3} > 
            {lcs.map((lc)=>(
                <CuratorItem key={lc.id} key={lc.id} contractAddress={lc.contractAddress} 
                name={lc.name} url={lc.uri} id={lc.id} isActive={lc.isActive}  />
            ))}
        </Grid>
      </>
    ) }