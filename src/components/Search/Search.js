import React, { useState } from "react";
import { connect } from "react-redux";
import { fetchGIF } from "../../redux/actions";
import "./Search.css";

const Search = ({ fetchGIF, result }) => {
  const [value, setValue] = useState("");
  const [weirdness, setWeirdness] = useState(10);
  console.log(value);
  const handleSubmit = e => {
    e.preventDefault();
    fetchGIF(value, weirdness);
  };

  console.log("RESULT", result);
  return (
    <div className="search container">
      <p>
        Find out how weird you are by selecting the GIFs that make you laugh.
        We'll show you the least weird ones to start, but you can move the
        slider to make them weirder.
      </p>
      <p>
        When you find a GIF you like, press the <em>Like</em> button. Once you
        like 5 GIFs, we'll show you how wierd you are.
      </p>
      <form onSubmit={handleSubmit}>
        <label htmlFor="search">Search term</label>
        <div className="my-flex-row">
          <input
            type="text"
            name="search"
            id="search"
            onChange={e => setValue(e.target.value)}
            required
          />
          <button className="btn btn-primary text-white">search</button>
        </div>
      </form>
    </div>
  );
};

const mapStateToProps = state => {
  return {
    result: state.result
  };
};

const mapDispatchToProps = {
  fetchGIF
};

export default connect(mapStateToProps, mapDispatchToProps)(Search);
