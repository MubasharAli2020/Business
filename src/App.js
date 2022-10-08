import React from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import "./App.css";
import Navbar from "./components/Navbar/Navbar";
import Home from "./components/Home/Home";
import Services from "./components/Services/Services";
import Contact from "./components/Contact/Contact";
import ThankYou from "./components/Contact/ThankYou";
import Footer from './components/Footer/Footer';
import Work from './components/Work/Work';
export default function App() {
  return (
    <Router>
      <div className="App">
        <Navbar />
        <Switch>
          <Route path="/" component={Home} exact />

          <Route path="/services" component={Services} />

          <Route path="/contact" component={Contact} />
          <Route path="/thankyou" component={ThankYou} />
          <Route path="/work" component={Work} />

        </Switch>
        <Footer />

      </div>
    </Router>

    // <div className="App">
    //   <Navbar />
    //   <Home />
    // </div>
  );
}

