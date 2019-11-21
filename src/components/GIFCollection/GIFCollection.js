import React from "react";
import { connect } from "react-redux";
import { removeGIF } from "../../redux/actions";
import "./GIFCollection.css";

const GIFCollection = ({ gifList }) => {
  if (gifList) {
    console.log("GIFLIST length", gifList.length);
    console.log("GIFLIST", gifList.map(gif => gif.id));
  }

  const renderGIFCollection = () => {
    if (gifList.length) {
      return (
        <div className="gif-collection container">
          <h1 className="title">Your Liked Gifs</h1>
          <div className="gifs">
            {gifList.map(gif => (
              <div className="my-card" key={gif.id}>
                <h1>{gif.title}</h1>
                <img
                  className="img-here"
                  src={gif.images.downsized_medium.url}
                  alt={gif.title}
                />
                <button className="remove" onClick={e => removeGIF(gif.id)}>
                  <ion-icon name="close-circle"></ion-icon>
                </button>
              </div>
            ))}
            {/* <div className="my-card">
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
        </div> */}
          </div>
          <button className="calculate">Calculate My Weirdness Score</button>
          <p>
            You must <em>Like</em> {5 - gifList.length} more <span>gif</span>s
            to calculate your score
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
  return renderGIFCollection();
};

const mapStateToProps = state => {
  return {
    gifList: state.gifList
  };
};

const mapDispacthToProps = {
  removeGIF
};

export default connect(mapStateToProps)(GIFCollection);
