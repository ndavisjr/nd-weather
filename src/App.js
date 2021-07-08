import React from 'react';
import './App.css';
import Header from './components/Header';
import Home from './components/Home';
import About from './components/About';
import Login from './components/Login';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";

function App() {
  return (
    <div className="App">
      <Router>
        <Header />

        <Switch>
          <Route path="/login">
            <Login />
          </Route>
          <Route path="/about">
            <About />
          </Route>
          <Route path='/'>
            <Home />
          </Route>
        </Switch>

      </Router>
    </div>
  );
}

export default App;
