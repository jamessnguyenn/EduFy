import "./App.css";
import ProductivePage from "./components/productivePage/productivePage";
import LandingPage from "./components/landing/landing";
<<<<<<< HEAD
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
=======
import SignUpPage from "./components/signup/signUp";
import LoginPage from "./components/login/login";
import {BrowserRouter as Router, Switch, Route} from "react-router-dom";
>>>>>>> 62fe1e76f040a2e4daf488174a123d0bfedc65c0

function App() {
  return (
    <Router>
      <Switch>
        <Route exact path="/">
          <LandingPage />
        </Route>
        <Route path="/profile">
          <ProductivePage />
        </Route>
        <Route path="/signup">
          <SignUpPage/>
        </Route>
        <Route path="/login">
          <LoginPage/>
        </Route>
      </Switch>
    </Router>
  );
}

export default App;
