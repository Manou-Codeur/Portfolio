import { Route, Switch, Redirect } from "react-router-dom";

import NavBar from "./components/navBar/navBar";
import Home from "./components/home/home";
import Blog from "./components/blog/blog";
import NotFound from "./components/notFound/notFound";

const Router = () => (
  <Switch>
    <Route path="/home" exact component={Home} />
    <Route path="/blog" exact component={Blog} />
    <Route path="/notFound" exact component={NotFound} />
    <Redirect from="/" exact to="/home" />
    <Redirect to="/notFound" />
  </Switch>
);

const App = () => {
  return (
    <div className="app">
      <NavBar />
      <Router />
    </div>
  );
};

export default App;
