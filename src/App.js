import "./App.css";
import Navbar from "./auth/components/Navbar";
import Bodyy from "./auth/components/Bodyy";
import MovieList from "./auth/components/movieList";

function App() {
  return (
    <div className="App">
      <Navbar />
      <Bodyy />
      <MovieList />
    </div>
  );
}

export default App;
