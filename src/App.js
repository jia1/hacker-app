import React, { Component } from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import { FacebookGroupPage, HomePage } from './containers';
import routes from './constants/routes.json';
import logo from './logo.svg';
import './App.css';
import 'bootstrap/dist/css/bootstrap.css';

// Ref for react-router-dom:
// https://dev.to/nodefiend/quick-start-guide-for-react-router-v4-using-create-react-app-4h7j
class App extends Component {
  render() {
    return (
      <Router>
        <div className="App">
          <header className="App-header">
            <img src={logo} className="App-logo" alt="logo" />
            <h1 className="App-title"><s>Your</s> Our one-stop PR and publicity assistant: hacker-app</h1>
          </header>
          <p className="App-intro">
            Click on any of the tabs below to begin emailing / posting with pre-written templates.
          </p>
          <div>
            <Route exact path={routes.HOME} component={HomePage} />
            <Route exact path={routes.FACEBOOKGROUP} component={FacebookGroupPage} />
          </div>
        </div>
      </Router>
    );
  }
}

export default App;
