import React from "react";
import "./Search.css";

const Search = () => {
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
      <form>
        <label htmlFor="search">Search term</label>
        <div className="my-flex-row">
          <input type="text" name="search" id="search" />
          <button>search</button>
        </div>
      </form>
    </div>
  );
};

export default Search;
