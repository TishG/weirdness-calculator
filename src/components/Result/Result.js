import React, { useState } from "react";
import { connect } from "react-redux";
import "./Result.css";

const Result = ({ result, loading }) => {
  const [weirdness, setWeirdness] = useState(0);
  if (result.length) {
    console.log(result[0].data[0].images.downsized_medium.url);
  }
  const handleChange = e => {
    setWeirdness(e.target.value);
    console.log("RANGE VALUE", weirdness);
  };
  const renderResult = () => {
    if (result.length) {
      const title = result[0].data[0].title;
      const image = result[0].data[0].images.downsized_medium.url;
      return (
        <div className="result container">
          <h1 className="title">Your Result</h1>
          <div className="gif-result">
            <h1>{title}</h1>
            <img src={image} alt={title} />
            <button>
              <ion-icon name="thumbs-up" className="thumbs-up"></ion-icon>
            </button>
          </div>
          <input
            type="range"
            className="custom-range"
            min="0"
            max="10"
            value={weirdness}
            step="1"
            id="weirdness"
            onChange={e => handleChange(e)}
          ></input>
          <label htmlFor="wierdness">Wierdness: {weirdness}</label>
        </div>
      );
    }
    if (result.length < 1) {
      return <p>Please search for a GIF</p>;
    }
    if (loading) {
      return <p>Loading...</p>;
    }
  };
  return renderResult();
};

const mapStateToProps = state => {
  return {
    result: state.result,
    loading: state.loading
  };
};

export default connect(mapStateToProps)(Result);
