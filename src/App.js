import React from 'react';
import './App.css';
import { BrowserRouter as Router, Route } from "react-router-dom";
import Page from './components/Page';

class App extends React.Component {
  render() {
    return (
      <Router>
        <Route path='/comix/:item' component={Page} />
      </Router>
    );
  }
}

export default App;
