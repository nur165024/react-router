import React from "react";
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";
import About from "./Component/About/About";
import Home from "./Component/Home/Home";
import PostDetails from "./Component/PostDetails/PostDetails";

function App() {
  return (
    <div>
        <Router>
      <div>
        <ul>
          <li>
            <Link to="/">Home</Link>
          </li>
          <li>
            <Link to="/about">About</Link>
          </li>
        </ul>
        <hr />

        <Switch>
          <Route exact path="/">
            <Home></Home>
          </Route>
          <Route path="/about">
            <About></About>
          </Route>
          <Route path="/post/:id">
            <PostDetails></PostDetails>
          </Route>
        </Switch>
      </div>
    </Router>
    </div>
  );
}

export default App;
