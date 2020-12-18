import React from "react";
import parse from "html-react-parser";

interface ShowProps {
  movie: {
    id: number;
    image: { medium: string; original: string };
    language: string;
    name: string;
    summary: string;
    url: string;
  };
}

const Movie: React.FC<ShowProps> = ({ movie }) => (
  <div className="movie-card">
    <div className="movie-poster">
      <img
        src={movie.image && movie.image.medium}
        alt={movie.name}
        className="movie-poster-img"
      />
    </div>
    <div className="movie-content">
      <div>
        <h3>{movie.name}</h3>
        <p>{movie.summary && parse(movie.summary)}</p>
        <button type="button" className="show-episodes-btn">
          Show Episodes
        </button>
      </div>
    </div>
  </div>
);

export default Movie;