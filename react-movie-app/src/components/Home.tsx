import Movie from "../types/Movie";
import MovieCard from "./MovieCard";

function Home() {
  const movies = [
    new Movie(1, "John Wick 1", "Poster URL", new Date()),
    new Movie(2, "John Wick 2", "Poster URL", new Date()),
    new Movie(3, "John Wick 3", "Poster URL", new Date()),
  ];

  return (
    <div className="home">
      <div className="movies-grid">
        {movies.map((movie) => (
          <MovieCard movie={movie} key={movie.id}></MovieCard>
        ))}
      </div>
    </div>
  );
}

export default Home;
