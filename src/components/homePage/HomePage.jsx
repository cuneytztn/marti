import React from "react";
import MovieDetail from "../movieDetail/MovieDetail";
import "../../styles/homePage.css";
import MovieList from "../movieList/MovieList";

const HomePage = () => {
  return (
    <>
      <div className="row">
        <div className="col-3">
          <MovieList />
        </div>
        <div className="col-9">
          <MovieDetail />
        </div>
      </div>
    </>
  );
};

export default HomePage;
