import logo from "./logo.svg";
import "./App.css";
import PDfReader from "./components/PDfReader";
import Dictaphone from "./components/Speech";
import Header from "./components/Header";
import { BrowserRouter as Router, Route, Switch, Link } from "react-router-dom";
import Listings from "./screens/Listings";
import Home from "./screens/Home";

function App() {
  return (
    <div className="App">
      <Router>
        <Header />
        <Switch>
          <Route path="/" exact component={Home} />
          <Route path="/listings" exact component={Listings} />
        </Switch>
      </Router>

      {/* <PDfReader /> */}
      {/* <Dictaphone /> */}
    </div>
  );
}

export default App;
