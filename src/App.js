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
            <h1 className="App-title">Welcome to React</h1>
          </header>
          <p className="App-intro">
            To get started, edit <code>src/App.js</code> and save to reload.
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
