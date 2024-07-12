/* eslint-disable no-unused-vars */
import React from 'react';
import { HashRouter as Router, Route, Routes, Outlet } from 'react-router-dom';
import Navbar from '../src/components/Navbar';
import Dashboard from '../src/components/Dashboard';
import Listing from './components/Listing';
import Thankyou from './components/Thankyou';
import PreviewPage from './components/PreviewPage';
import PropertyOverview from './components/PropertyOverview';

const App = () => {
  return (
    <>
    {/* // <Router>
    //   <Navbar />
    //   <Routes>
    //     <Route exact path="/" element={<Dashboard />} />
    //     <Route exact path="/a" element={<PropertyOverview />} />
    //     <Route exact path="/list" element={<Listing />} />
    //     <Route exact path="/thankyou" element={<Thankyou />} />
    //     <Route exact path="/preview" element={<PreviewPage />} />
    //   </Routes>
    // </Router> */}
      <Navbar />
      <Outlet />
      </>
  );
}

export default App;
