import React, {useState} from "react";
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
import Auth from './Auth';
import SignIn from "./SignIn";



function App() {

  const [token, setToken] = useState("");
  return (

    <Router>

      <Nav token={token} />



      {/* A <Switch> looks through its children <Route>s and
            renders the first one that matches the current URL. */}
      <Switch>

        <Route path='/register'>
          <Auth  setTkn={setToken}
            register
          />
        </Route>
        <Route path='/signin'>
          <SignIn  setTkn={setToken}
            register
          />
        </Route>

        <Route path="/create">
          <Buildpage token={token} />
        </Route>
        <Route path="/aboutUs">
          <AboutUs />
        </Route>
        <Route path="/tutorial">
          <Tutorial />
        </Route>
        <Route exact path={['*', '/home', '/']}>
          <Home />
        </Route>
      </Switch>
      <Footer />

    </Router >


  );
}

export default App;
