import React from 'react'
import TopSection from './Heading/TopSection';
import TabSection from './Selectors/Dapp&Jury';
// import SimpleCard from './Card/Card';
// import {Link} from 'react-router-dom';
import StackModel from './Selectors/StakePopup'
import './Landing.css';
import { EthAccountInfo } from '../EthAccountInfo';


const Landing = () => {
    return (
        <div>

             <TopSection/>
            <br/><br/>
            <TabSection/>
            <br/><br/>
            <div className="stackModel-container"> <StackModel/> </div>
            
            {/* <SimpleCard/> */}
            <EthAccountInfo/>
            {/* <Link to="/components/DappPage/DappPage"> Click here</Link> */}
        </div>
    )
}

export default Landing;
