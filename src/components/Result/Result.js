import React, { useState } from "react";
import { connect } from "react-redux";
import { store } from "../../redux/store";
import {
  addGIF,
  setUserMessage,
  fetchGIF,
  fetchGIFRequest
} from "../../redux/actions";
import "./Result.css";

const Result = ({ result, loading, addGIF, gifList, setUserMessage }) => {
  const [weirdness, setWeirdness] = useState(0);
  const handleClick = () => {
    if (gifList.length === 5) {
      return setUserMessage("You have reached the maximum limit of GIFs");
    }
    let resultID = result[0].data[0].id;
    let gifIDArray = store.getState().gifList.map(gif => gif.id);
    if (gifIDArray.includes(resultID)) {
      return setUserMessage(
        "Duplicate GIFs are not allowed in collection. Please like a different GIF."
      );
    }
    addGIF();
  };
  const handleChange = e => {
    setWeirdness(e.target.value);
  };
  // const renderResult = () => {
    if (result.length && result !== undefined) {
      const title = result[0].data[0].title;
      const image = result[0].data[0].images.downsized_medium.url;
      const id = result[0].data[0].id;
      return (
        <div className="result container">
          <h1 className="title">Your Result</h1>
          <div className="gif-result">
            <h1>
              {title} - {id}
            </h1>
            <img src={image} alt={title} />
            <button className="btn btn-dark" onClick={handleClick}>
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
      return (
        <div className="result container">
          <p>Please search for a GIF</p>
        </div>
      );
    }
    if (loading) {
      return (
        <div className="result container">
          <p>Loading...</p>
        </div>
      );
    }
  // };
  // return renderResult();
};

const mapStateToProps = state => {
  return {
    result: state.result,
    loading: state.loading,
    gifList: state.gifList,
    userMessage: state.userMessage,
    search: state.search
  };
};

const mapDispatchToProps = {
  addGIF,
  setUserMessage,
  fetchGIF,
  fetchGIFRequest
};

export default connect(mapStateToProps, mapDispatchToProps)(Result);
