import React, { useEffect } from "react";
import { useSelector } from "react-redux";
import "../../styles/movieDetail.css";

const MovieDetail = () => {
  const movieDetail = useSelector((state) => state.movieDetail);
  useEffect(() => {
    console.log(movieDetail);
  }, [movieDetail]);

  return (
    <div className="movie-detail">
      {movieDetail.data && (
        <div>
          <span>Film Adı: </span>
          {movieDetail.data.Title}
        </div>
      )}
      {movieDetail.data && (
        <div>
          <span>Oyuncular: </span>
          {movieDetail.data.Actors}
        </div>
      )}
      {movieDetail.data && (
        <div>
          <span>Ülke: </span>
          {movieDetail.data.Country}
        </div>
      )}
      {movieDetail.data && (
        <div>
          <span>Yönetmen: </span>
          {movieDetail.data.Director}
        </div>
      )}
      {movieDetail.data && (
        <div>
          <span>Tür: </span>
          {movieDetail.data.Genre}
        </div>
      )}
      {movieDetail.data && (
        <div>
          <span>Çıkış Tarihi: </span>
          {movieDetail.data.Released}
        </div>
      )}
      {movieDetail.data && (
        <div>
          <span>Süre: </span>
          {movieDetail.data.Runtime}
        </div>
      )}
      {movieDetail.data && (
        <div>
          <span>IMDB Puanı: </span>
          {movieDetail.data.imdbRating}
        </div>
      )}
    </div>
  );
};
export default MovieDetail;
