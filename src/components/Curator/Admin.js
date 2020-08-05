import React from 'react'
import {CuratorApprove} from './DappList/ForApproval/DappList';
import TabSection from './Selectors/CuratorOption1';
const Curator = () => {
    return (
        <>
        <div>
            <TabSection/>
            <CuratorApprove/>
        </div>
        </>
    )
}

export default Curator;
