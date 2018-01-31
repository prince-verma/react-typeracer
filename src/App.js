import React, {Component} from 'react';
import {Route, Switch} from "react-router-dom";

import TypeRacer from "./components/typeracer";

class App extends Component {
  render() {
    return (
      <Switch>
        <Route exact path="/" component={TypeRacer}/>
        <Route component={NoMatch}/>
      </Switch>
    );
  }
}


class NoMatch extends Component {
  render() {
    return (
      <div style={{textAlign: "center"}}>
        <h3>404 Page not found.</h3>
      </div>
    );
  }
}


export default App;
