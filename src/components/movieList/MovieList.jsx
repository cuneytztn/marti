import React, { useEffect, useState } from "react";
import "../../styles/movieList.css";
import { useDispatch, useSelector } from "react-redux";
import { fetchMovies } from "../../stores/moviesSlice";
import { fetchMovieDetail } from "../../stores/movieDetailSlice";

const MovieList = () => {
  const dispatch = useDispatch();
  const { data } = useSelector((state) => state.movies);
  const { movieDetail } = useSelector((state) => state.movieDetail);
  const [sortCriteria, setSortCriteria] = useState("name");

  useEffect(() => {
    console.log(data);
  }, [data]);

  const sortMovies = () => {
    let sortedData = [...data];
    if (sortCriteria === "name") {
      sortedData.sort((a, b) => a.Title.localeCompare(b.Title));
    } else if (sortCriteria === "year") {
      sortedData.sort((a, b) => a.Year - b.Year);
    }
    return sortedData;
  };

  return (
    <div className="container">
      <div className="input-container">
        <label htmlFor="search">Film İsmi Giriniz</label>
        <input
          type="search"
          id="search"
          className="form-control"
          placeholder="Film İsmi Giriniz"
          onChange={(e) => dispatch(fetchMovies(e.target.value))}
        />
      </div>
      <div className="sort-container">
        <label htmlFor="sort">Sıralama Kriteri</label>
        <select id="sort" onChange={(e) => setSortCriteria(e.target.value)}>
          <option value="name">İsme Göre</option>
          <option value="year">Yıla Göre</option>
        </select>
      </div>
      <div className="movie-list">
        {Array.isArray(data) &&
          sortMovies().map((movie) => (
            <div
              onClick={() => {
                dispatch(fetchMovieDetail(movie.imdbID));
                console.log("test")
              }}
              className="movie-box"
              key={movie.imdbID}
            >
              <img src={movie.Poster} alt={movie.Title} />
              <h2>{movie.Title}</h2>
              <p>{movie.Year}</p>
            </div>
          ))}
      </div>
    </div>
  );
};

export default MovieList;
