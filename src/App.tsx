import React, { Suspense } from 'react';
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import MainPage from './page/MainPage';
import CommunityPage from './page/CommunityPage';

function App() {
  return (
    <div>
      <Router>
        <Suspense fallback={<div>Loading..</div>} />
        <Routes>
          <Route path='/' element={MainPage} />
          <Route path='/community' element={CommunityPage} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
