import "../App.css";
import { useState } from "react";
import MovieList from "./MovieList";
import MovieForm from "./MovieForm";
import MovieCard from "./MovieCard";

function App() {
  const movieData = [
    {
      movie: "Bohemian Rhapsody",
      year: 2018,
      desc: "The story of the legendary British rock band Queen and lead singer Freddie Mercury, leading up to their famous performance at Live Aid (1985).",
    },
    {
      movie: "Rocket Man",
      year: 2019,
      desc: "A musical fantasy about the fantastical human story of Elton John's breakthrough years.",
    },
    {
      movie: "Clueless",
      year: 1995,
      desc: "Shallow, rich and socially successful Cher is at the top of her Beverly Hills high school's pecking scale. Seeing herself as a matchmaker, Cher first coaxes two teachers into dating each other.",
    },
    {
      movie: "Fire Walk With Me",
      year: 1992,
      desc: "Laura Palmer's harrowing final days are chronicled one year after the murder of Teresa Banks, a resident of Twin Peaks' neighboring town.",
    },
  ];

  const [movies, setMovies] = useState(movieData);

  return (
    <div className="App">
      <h1>Marvelous Movies</h1>
      <MovieList movies={movies} />
    </div>
  );
}

export default App;
