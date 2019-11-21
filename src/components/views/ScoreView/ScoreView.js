import React from "react";
import { connect } from "react-redux";
import { clearGIFListAndResult } from "../../../redux/actionCreators";
import { useHistory } from "react-router-dom";
import "./ScoreView.css";

const ScoreView = ({ gifList, clearGIFListAndResult }) => {
  let history = useHistory();
  const handleClick = () => {
    clearGIFListAndResult();
    history.push("/");
  };
  /*
  Pseudocode for weirdness calculation
  const weirdnessScore = () => {
    const weirdnessScoresArray = gifList.map(gif => gif.weirdness)
    const total = weirdnessScoresArray.reduce((accumulator,currentValue) => accumulator + currentValue);
    return total/5;
  }
  */
  return (
    <div className="score-view container">
      <h1>You scored an 8 out of 10 on the weirdness scale!</h1>
      <h1>The GIFs you liked</h1>
      <div className="gifs-collection">
        {gifList.map(gif => (
          <div className="gifs-collection-card" key={gif.id}>
            <h1>{gif.title}</h1>
            <img
              className="img-here"
              src={gif.images.downsized_medium.url}
              alt={gif.title}
            />
          </div>
        ))}
      </div>
      <button className="btn btn-secondary" onClick={handleClick}>
        Start Over
      </button>
    </div>
  );
};

const mapStateToProps = state => {
  return {
    gifList: state.gifList
  };
};

const mapDispatchToProps = {
  clearGIFListAndResult
};

export default connect(mapStateToProps, mapDispatchToProps)(ScoreView);
