import React from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

import Header from "./components/Header/Header";
import Home from "./components/Home/Home"
import About from "./components/About/About"
import Works from "./components/Projects/Projects"
import Contact from "./components/Contact/Contact"
import './app.css'


const App = () => {
  return (
    <Router>
      <Header />
      <div className="app">
        <Switch>
          <Route exact path="/" component={Home} />
          <Route exact path="/about" component={About} />
          <Route exact path="/works" component={Works} />
          <Route exact path="/contact" component={Contact} />
        </Switch>
      </div>
    </Router>
  );
}

export default App;
