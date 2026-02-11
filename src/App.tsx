import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import HomeContainer from './containers/HomeContainer';
import LoginContainer from './containers/LoginContainer';

function App() {
  return (
    <Router>
      <div className="app">
        <Routes>
          <Route path="/" element={<LoginContainer />} />
          <Route path="/home" element={<HomeContainer />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;