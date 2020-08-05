import React from 'react';
import './App.css';
import Navigation from './components/header/Navigation';
import Landing from './components/LandingPage/Landing';
import DappForm from './components/DappPage/DappForm';
import JuryForm from './components/JuryPage/JuryForm';
import {DappList} from './components/JuryPage/DappList/DappList'
// import {DappCards} from './components/JuryPage/DappCards/DappCards'
import Curator from './components/Curator/Admin';
import {DappTime} from './components/Curator/DappList/ToEndVoting/DappList'
import { GlobalProvider } from './context/GlobalState';
import { BrowserRouter as Router, Route , Routes} from 'react-router-dom';
import {ListedDapps} from './components/ListedDapps/DappList'
function App() {
  return (
    <GlobalProvider>
      
      <Router >
    <Navigation/>
   <Routes>
        <Route exact path='/' element={<Landing/>} />
        {/* <Route path='DappCards' element={<DappCards/>}  /> */}
      <Route path='DappForm' element={<DappForm/>} /> 
      <Route path='JuryForm' element={<JuryForm/>} /> 
      <Route path='DappList' element={<DappList/>} />
      <Route path='Curator' element={<Curator/>} />
      <Route path='DappTime' element={<DappTime/>} />
      <Route path='ListedDapps' element={<ListedDapps/>} />



            </Routes>
        </Router >
    
    </GlobalProvider>




  );
}

export default App;
