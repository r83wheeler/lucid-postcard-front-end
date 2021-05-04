import React from "react";
import {
  BrowserRouter as Router,
  Switch,
  Route,
} from "react-router-dom";
import Home from "./Home";
import Nav from './Nav';
import Footer from "./Footer";
import "./App.css";
import "./Nav.css";
import Buildpage from "./Buildpage";


function App() {
  return (

    <Router>

      <Nav />



      {/* A <Switch> looks through its children <Route>s and
            renders the first one that matches the current URL. */}
      <Switch>

        <Route exact path="/">

          <Home />
        </Route>
        <Route exact path="/create">

          <Buildpage />
        </Route>
      </Switch>

      <Footer />
    </Router>


  );
}

export default App;
