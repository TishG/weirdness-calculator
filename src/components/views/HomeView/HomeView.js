import React from "react";
import "./HomeView.css";

//components
import Search from "../../Search/Search";
import Result from "../../Result/Result";
import GIFCollection from "../../GIFCollection/GIFCollection";

const HomeView = () => {
  return (
    <div className="home-view">
      <section className="col-6 section-left">
        <Search />
        <Result />
      </section>
      <GIFCollection />
    </div>
  );
};

export default HomeView;
