import React from "react";
import "./Result.css";

const Result = () => {
  const handleChange = e => {
    console.log(e.target.value);
  };
  return (
    <div className="result container">
      <h1 className="title">Your Result</h1>
      <div className="gif-result">
        <h1>Hamburger Many</h1>
        {/* img will go here */}
        <div className="img-will-go-here"></div>
        {/* img will go here */}
        <button>
          <ion-icon name="thumbs-up" className="thumbs-up"></ion-icon>
        </button>
      </div>
      <input
        type="range"
        className="custom-range"
        min="0"
        max="10"
        step="1"
        value="0"
        id="customRange2"
        onChange={e => handleChange(e)}
      ></input>
      <label htmlFor="wierdness">Wierdness: 0</label>
    </div>
  );
};

export default Result;
