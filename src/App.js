import React from "react";
import GlobalStyle from "./globalStyles"
// import { Navbar } from "./components/Navbar/Navbar";
import * as c from "./components"
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Home from './pages/HomePage/Home'
import Services from './pages/Services/Services'
import Products from './pages/Products/Products'
import SignUp from './pages/SignUp/Signup'
import ScrollToTop from "./components/ScrollToTop";
function App() {
  return (
    <Router>
        <GlobalStyle />
          <ScrollToTop/>
          <c.Navbar />
          <Switch>
            <Route path='/' exact component={Home}/>
            <Route path='/services' exact component={Services}/>
            <Route path='/products' exact component={Products}/>
            <Route path='/sign-up' exact component={SignUp}/>
          </Switch>
          <c.Footer />
    </Router>
  );
}

export default App;
