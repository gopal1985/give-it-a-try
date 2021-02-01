import React from 'react';
import './index.css';
import Home from './components/pages/home/Home';

import {
  Switch,
  Route
} from "react-router-dom";

class App extends React.Component {
  render(){
    return(
      <Switch>
        <Route path="/" render={() => <Home />} exact /> 
      </Switch>
    )
  }
}

export default App;