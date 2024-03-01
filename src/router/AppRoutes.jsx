import React from 'react'
import { Route, Routes } from 'react-router-dom';
import Dashboard from '../components/containers/Dashboard/Dashboard';
import News from '../components/containers/News/News';
import Analytics from '../components/containers/Analytics/Analytics';
import Customization from '../components/containers/Customization/Customization';
import SingleCoin from '../components/containers/SingleCoin/SingleCoin';


function AppRoutes() {
  return (
  <Routes>
    <Route exact path='/' element={<Dashboard/>}/>
    <Route exact path='/analytics' element={<Analytics/>}/>
    <Route exact path='/news' element={<News/>}/>
    <Route exact path='/Customization' element={<Customization />}/>
    <Route exact path='/Coins/:id' element={<SingleCoin /> }/>
   </Routes>
   );
}

export default AppRoutes