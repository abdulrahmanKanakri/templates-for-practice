import {
  BrowserRouter as Router,
  Switch,
  Route
} from "react-router-dom";

import BaseHeader from "./layouts/header/BaseHeader";
import Home from "./pages/home/Home";
import About from "./pages/about/About";
import Contact from "./pages/contact/Contact";

import "../assets/css/main.css";

export default function App() {
  return (
    <>
      <Router>
        <BaseHeader />
        <Switch>
          <Route exact path="/" children={ <Home /> } />
          <Route path="/about" children={ <About /> } />
          <Route path="/contact" children={ <Contact /> } />
        </Switch>
      </Router>
    </>
  );
}
