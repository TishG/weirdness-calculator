import React, { useState } from "react";
import { connect } from "react-redux";
import { fetchGIF, fetchGIFRequest } from "../../redux/actionCreators";
import "./Search.css";

const Search = ({ fetchGIF, fetchGIFRequest, result }) => {
  const [value, setValue] = useState("");
  const [weirdness] = useState(0);
  const handleSubmit = e => {
    e.preventDefault();
    fetchGIFRequest(value);
    fetchGIF(value, weirdness);
    setValue("");
  };
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
            value={value}
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
  fetchGIF,
  fetchGIFRequest
};

export default connect(mapStateToProps, mapDispatchToProps)(Search);
