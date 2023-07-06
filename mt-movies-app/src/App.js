import React, { Component } from 'react';
import './assets/app.scss';
import {
  HashRouter,
  Switch,
  Route,
  Link
} from "react-router-dom";
import ReactDOM from 'react-dom';
import MovieListing from "./components/movies/MovieListing";

class App extends Component {
  render() {
    return (
      <HashRouter>
        <Switch>
          <Route exact path="/">
             <MovieListing /> 
          </Route>
          <>

          </>
        </Switch>
      </HashRouter>
    );
  }
}

export default App;

ReactDOM.render(<App />, document.getElementById('app'));