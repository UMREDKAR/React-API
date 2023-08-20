import React, { useState , useCallback } from 'react';
import { useEffect } from 'react';
import MoviesList from './components/MoviesList';
import './App.css';

function App() {

  const[movies,setMovies] = useState([]);
  const[isLoading,setIsLoading] = useState(false);
  const[error,setError] = useState(null);
  const[times,setTimes] = useState(true); 
  
  

  // async function fetchMoviesHandler()
  const fetchMoviesHandler = useCallback(async () =>
  {
    
    setIsLoading(true);
    setError(null);
    try{
      const response = await fetch("https://swapi.dev/api/films/");

      if(!response.ok)
      {
        throw new Error("Something Went Wrong !!!   ....Retrying");
      }


      const data = await response.json();
      const transformMovies = data.results.map(movieData =>{
               return {
                        id: movieData.episode_id,
                        title: movieData.title,
                        openingText: movieData.opening_crawl,
                        releaseDate: movieData.release_date
                };
             });
      setMovies(transformMovies);
    }
    catch(error){
                  setError(error.message);
                 // console.log("hellos");
                 
                }
      setIsLoading(false);
  },[])

  useEffect(()=>{
    fetchMoviesHandler();
  },[fetchMoviesHandler]);
 
 
 if(error && times)
 {
  setTimeout(()=>{
    fetchMoviesHandler();
  },5000);
 }
  

  function stopHandler()
    { 
      setTimes(false);
      setIsLoading(false);
      setError(null);
    }

    

  return (
    <React.Fragment>
      <section>
        <button onClick= {fetchMoviesHandler}>Fetch Movies</button>
      </section>
      <section>
        {!isLoading && <MoviesList movies={movies} />}
        {isLoading && times && <h3 style={{color:'green'}}>Loading...</h3>}
        {!isLoading && error && times && <h3 style={{color:'red'}}>{error}</h3>}
        {error &&  times && <button onClick={stopHandler}>Stop Retrying</button>}
      </section>
    </React.Fragment>
  );
}

export default App;
