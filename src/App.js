import React from "react";
import "./App.css";

//Redux
import { Provider } from "react-redux";
import { store } from "./redux/store";

//Components
import Navbar from "./components/Navbar/Navbar";
import Search from "./components/Search/Search";

const App = () => {
  return (
    <Provider store={store}>
      <div className="App">
        <Navbar />
        <main>
          <Search />
        </main>
      </div>
    </Provider>
  );
};

export default App;
