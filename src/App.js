import React from 'react';
import Navbar from '../src/components/Navbar';
import {BrowserRouter as Router, Switch, Route} from 'react-router-dom';
import Home from './components/pages/Home';
import './App.css';
import contactMe from './components/pages/contactMe';
import aboutMe from './components/pages/aboutMe';

function App() {
  return (
    <>
      <Router>
        <Navbar/>
          <Switch>
            <Route path='/' exact component=
            {Home} />
            <Route path='/contact-me' component=
            {contactMe} />
            <Route path='/about-me' component=
            {aboutMe} />
          </Switch>
      </Router>
    </>
    );
  }

export default App;

