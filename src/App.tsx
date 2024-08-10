
import './App.css'
import Card from './components/Card'
import { useState, useEffect } from 'react';
import { fetchMovieGenres, Genre, fetchMovieTopRated, TopRated } from './utils/api'; // Adjust the import path based on your project structure


function App() {
  const [genres, setGenres] = useState<Genre[]>([]);
  const [topRated, setTopRated] = useState<TopRated[]>([]);

  useEffect(() =>{
    const getTopRated = async () => {
      try {
        const data = await fetchMovieTopRated();
        setTopRated(data.TopRateds);
      } catch (error){
        console.error(error);
      }
    };
    getTopRated();
  },[]);

  useEffect(() => {
    const getGenres = async () => {
      try {
        const data = await fetchMovieGenres();
        setGenres(data.genres);
      } catch (error){
        console.error(error);
      }
    };
    getGenres();
  }, []);

  
  return (
    <>
      <h1 className='text-xl'>Movie Genres</h1>
      <ul>
        {genres.map(genre => (
          <li key={genre.id}>{genre.name}</li>
        ))}
      </ul>

      <h1 className='text-3xl'>TopRatedMovies</h1>
      <ul>
        {topRated.map(TR => (
          <li key={TR.id}>
            <div>'ADULT: '{TR.adult}</div>
            <div>'backdrop_path: '{TR.backdrop_path}</div>
            
            <div>'id: '{TR.id}</div>
            <div>'original_language: ' {TR.original_language}</div>
            <div>'title: ' {TR.title}</div>
          </li>
        ))}
      </ul>

    </>
  );
}

export default App
