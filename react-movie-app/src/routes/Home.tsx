import { useState } from "react";
import Movie from "../types/Movie";
import MovieCard from "../components/MovieCard";
import MovieSearchForm from "../components/MovieSearchForm";
import { createFileRoute } from "@tanstack/react-router";

export const Route = createFileRoute("/Home")({
  component: Home,
});

function Home() {
  const allMovies = [
    new Movie(1, "John Wick 1", "Poster URL", new Date()),
    new Movie(2, "Terminator", "Poster URL", new Date()),
    new Movie(3, "Alice in wonderland", "Poster URL", new Date()),
  ];

  const [searchString, setSearchString] = useState("");

  const filteredMovies = allMovies.filter((movie) =>
    movie.name.toLowerCase().includes(searchString.toLowerCase())
  );

  return (
    <div className="home">
      <MovieSearchForm onSearch={setSearchString}></MovieSearchForm>
      <div className="movies-grid">
        {filteredMovies.map((movie) => (
          <MovieCard movie={movie} key={movie.id}></MovieCard>
        ))}
      </div>
    </div>
  );
}

export default Home;
