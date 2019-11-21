import React from "react";
import { connect } from "react-redux";
import { useHistory } from "react-router-dom";
import "./ScoreView.css";

const ScoreView = ({ gifList }) => {
  console.log("gifList from ScoreView", gifList);
  let history = useHistory();
  const handleClick = () => {
    history.push("/");
  };
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

export default connect(mapStateToProps)(ScoreView);
