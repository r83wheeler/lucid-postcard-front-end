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


function App() {
  return (
    <div className="app">
      <Router>

        <Nav />
        <div className="container">


        {/* A <Switch> looks through its children <Route>s and
            renders the first one that matches the current URL. */}
        <Switch>

          <Route exact path="/">

            <Home />
          </Route>
        </Switch>
        </div>
        <Footer />
      </Router>
    </div>
  );
}

export default App;
