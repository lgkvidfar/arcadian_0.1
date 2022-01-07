import React, { Fragment } from 'react';
import {
  BrowserRouter as Router,
  Routes,
  Route,
  Link
} from 'react-router-dom';

import Home from './pages/main/home';
import About from './pages/main/about';
import Dashboard from './pages/main/dashboard';

const App = () => {
  return (
    <Router>
      <Fragment>
        <div>
          <Link to="/home">Home</Link> <br/>
          <Link to="/about">About</Link><br/>
          <Link to="/dashboard">Dashboard</Link><br/>
          <hr />
          <Routes>
            <Route path="/home" element={<Home />} />
            <Route path="/about" element={<About />} />
            <Route path="/dashboard" element={<Dashboard />}/>
          </Routes>
        </div>
      </Fragment>
    </Router>
  );
};

export default App;