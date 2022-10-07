import React from 'react';
import './App.css';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import Home from './Home';
import Header from './Header';
import Checkout from './Checkout';

function App() {
  return (
    <Router>
      <div className="app">
        <Header />

        <Switch>
          <Route path="/login">
            <h1>Login page</h1>
          </Route>
          <Route path="/checkout">
            <Checkout />
          </Route>
          <Route path="/">
            <Home />
          </Route>
        </Switch>
      </div>
    </Router>
  );
}
export default App;
