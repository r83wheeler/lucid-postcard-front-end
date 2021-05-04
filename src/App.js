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
import Tutorial from "./Tutorial";
import AboutUs from "./AboutUs";


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
        <Route  path="/create">
          <Buildpage />
        </Route>
        <Route  path="/aboutUs">
          <AboutUs />
        </Route>
        <Route path="/tutorial">
          <Tutorial />
        </Route>
      </Switch>
      <Footer />
    </Router >


  );
}

export default App;
