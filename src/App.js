import React from "react";
import "./App.css";

//Redux
import { Provider } from "react-redux";
import { store } from "./redux/store";

//Components
import Navbar from "./components/Navbar/Navbar";
import Search from "./components/Search/Search";
import Result from "./components/Result/Result";
import GIFCollection from "./components/GIFCollection/GIFCollection";

const App = () => {
  return (
    <Provider store={store}>
      <div className="app">
        <Navbar />
        <section className="col-6 section-left">
          <Search />
          <Result />
        </section>
        <GIFCollection />
      </div>
    </Provider>
  );
};

export default App;
