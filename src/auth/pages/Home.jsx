import React from "react";
import Navbar from "../components/Navbar";
import Bodyy from "../components/Bodyy";
import MovieList from "../components/movieList";

const Home = () => {
  return (
    <div>
      <Navbar />
      <Bodyy />
      <MovieList />
    </div>
  );
};

export default Home;
