import React from "react";
import { Route, Link, BrowserRouter as Router, Switch } from "react-router-dom";

//Redux
import { Provider } from "react-redux";
import { store } from "./redux/store";

//Components
import Navbar from "./components/Navbar/Navbar";
import HomeView from "./components/views/HomeView/HomeView";
import ScoreView from "./components/views/ScoreView/ScoreView";
import Alert from "./components/Alert/Alert";

const App = () => {
  return (
    <Provider store={store}>
      <div className="app">
        <Alert />
        <Navbar />
        <Router>
          <Switch>
            <Route path="/" component={HomeView} exact />
            <Route path="/score" component={ScoreView} />
            <Route render={() => <p>Page not found</p>} />
          </Switch>
        </Router>
      </div>
    </Provider>
  );
};

export default App;
