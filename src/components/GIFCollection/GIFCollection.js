import React from "react";
import { connect } from "react-redux";
import { useHistory } from "react-router-dom";
import { removeGIF, setUserMessage } from "../../redux/actionCreators";
import "./GIFCollection.css";

const GIFCollection = ({ gifList, setUserMessage, removeGIF }) => {
  const history = useHistory();
  const handleClick = () => {
    setUserMessage("");
    history.push("/score");
  };
  if (gifList.length && gifList !== undefined) {
    return (
      <div className="gif-collection container">
        <h1 className="title">Your Liked Gifs</h1>
        <div className="gifs">
          {gifList.map(gif => (
            <div className="my-card" key={gif.id}>
              <h1>{gif.title}</h1>
              <img
                className="img-url"
                src={gif.images.downsized_medium.url}
                alt={gif.title}
              />
              <button className="remove" onClick={e => removeGIF(gif.id)}>
                <ion-icon name="close-circle"></ion-icon>
              </button>
            </div>
          ))}
        </div>
        <button
          style={gifList.length < 5 ? { backgroundColor: "#eee" } : null}
          className="calculate btn btn-success"
          onClick={handleClick}
          disabled={gifList.length < 5 ? true : false}
        >
          Calculate My Weirdness Score
        </button>
        <p>
          You must <em>Like</em> {5 - gifList.length} more <span>gif</span>s to
          calculate your score
        </p>
      </div>
    );
  }
  if (gifList.length < 1) {
    return (
      <p className="gif-collection container">No GIFs added to collection</p>
    );
  }
};

const mapStateToProps = state => {
  return {
    gifList: state.gifList
  };
};

const mapDispacthToProps = {
  removeGIF,
  setUserMessage
};

export default connect(mapStateToProps, mapDispacthToProps)(GIFCollection);
