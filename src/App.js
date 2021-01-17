import "./App.css";
import ProductivePage from "./components/productivePage/productivePage";
import LandingPage from "./components/landing/landing";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

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
      </Switch>
    </Router>
  );
}

export default App;
