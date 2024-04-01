import { useEffect, useState } from 'react';
import './App.css';
import MovieCard from './components/MovieCard';



function App() {
  const [movies, setMovies] = useState([]);
  const [userinput, setInput] = useState('');
  var settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 4,
    slidesToScroll: 1
  };
  function fetchMovies(name) {
    fetch(`http://www.omdbapi.com/?apikey=11147324&s=${name}`)
      .then((response) => response.json())
      .then((data) => setMovies(data.Search))
      .catch((err) => console.log(err.message));
  }

  useEffect(() => {
    fetchMovies('Kung Fu Panda');
  }, []);

  return (
    <div>
      <div className="navbar">
        <input
          value={userinput}
          onChange={(e) => {
            setInput(e.currentTarget.value);
          }}
          placeholder="Enter your movie name"
        />
        <button onClick={() => fetchMovies(userinput)}>Click to Search!</button>
      </div>
      <div className="Flex">
        {movies.map((items, index) => (
          <MovieCard title={items.Title} image={items.Poster} key={index} />
        ))}
      </div>
    </div>
  );
}

export default App;
