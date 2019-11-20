import React from "react";
import "./GIFCollection.css";

const GIFCollection = () => {
  return (
    <div className="gif-collection container">
      <h1 className="title">Your Liked Gifs</h1>
      <div className="gifs">
        <div className="my-card">
          <h1>Hamburger Many</h1>
          <div className="img-here"></div>
        </div>
        <div className="my-card">
          <h1>Hamburger Many</h1>
          <div className="img-here"></div>
        </div>
        <div className="my-card">
          <h1>Hamburger Many</h1>
          <div className="img-here"></div>
        </div>
        <div className="my-card">
          <h1>Hamburger Many</h1>
          <div className="img-here"></div>
        </div>
        <div className="my-card">
          <h1>Hamburger Many</h1>
          <div className="img-here"></div>
        </div>
      </div>
      <button>Calculate My Weirdness Score</button>
      <p>
        You must <em>Like</em> 1 more <span>gif</span> to calculate your score
      </p>
    </div>
  );
};

export default GIFCollection;
