import Movie from "../types/Movie";

interface MovieProps {
  movie: Movie;
}

function MovieCard({ movie }: MovieProps) {
  function handleOnfavorite() {
    alert("add to favorite");
  }

  return (
    <div className="movie-card">
      <div className="movie-poster">
        <img src={movie.poster} alt={movie.name}></img>
        <div className="movie-overlay">
          <button className="favorite-btn" onClick={handleOnfavorite}>
            S2
          </button>
        </div>
      </div>
      <div className="movie-info">
        <h3>{movie.name}</h3>
        <p>{movie.realeaseDate.toDateString()}</p>
      </div>
    </div>
  );
}

export default MovieCard;
