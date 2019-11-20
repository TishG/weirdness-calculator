import React from "react";
import "./App.css";

//Redux
import { Provider } from "react-redux";
import { store } from "./redux/store";

//Components
import Navbar from "./components/Navbar/Navbar";

const App = () => {
  return (
    <Provider store={store}>
      <div className="App">
        <Navbar />
      </div>
    </Provider>
  );
};

export default App;
