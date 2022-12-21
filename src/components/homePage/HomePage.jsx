import React from "react";
import MovieDetail from "../movieDetail/MovieDetail";
import "../../styles/homePage.css";
import MovieList from "../movieList/MovieList";

const HomePage = () => {
  return (
    <>
      <div className="homePage">
        <div className="movieList">
          <MovieList/>
        </div>
        <div className="movieDetail">
          <MovieDetail />
        </div>
      </div>
    </>
  );
};

export default HomePage;
