import "./App.css";
import ProductivePage from "./components/productivePage/productivePage";
import LandingPage from "./components/landing/landing";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import SignUpPage from "./components/signup/signUp";
import LoginPage from "./components/login/login";

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
          <SignUpPage />
        </Route>
        <Route path="/login">
          <LoginPage />
        </Route>
      </Switch>
    </Router>
  );
}

export default App;
