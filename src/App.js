import React from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import About from "./pages/About";
import Portfolio from "./pages/Portfolio";
import Contact from "./pages/Contact";
import Container from "./components/Container";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import "./App.css";
import Row from "./components/Row";

function App() {
  return (
    <Router>
        <Container>
          <Row>
            <h1 className="rounded col-sm-12 col-lg-3">Daniel Fellner</h1>
            <Navbar/>
            <Switch>
              <Route exact path="/portfolio" component={Portfolio} />
              <Route exact path="/contact" component={Contact} /> 
              <Route exact path={["/", "/about", "*"]} component={About} />
              </Switch>  
          </Row>
        </Container>
      <Footer />
    </Router>
  );
}

export default App;
