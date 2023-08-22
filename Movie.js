import React from 'react';
import classes from './Movie.module.css';

const Movie = (props) => {

  //let k = props.id;
  // console.log(k);
  
    async function delMovieHandler()
  {
      const response = await fetch("https://react-api-cdb29-default-rtdb.firebaseio.com/movies.json",{ 
      method: 'DELETE',
      body: JSON.stringify(),
      headers: {
        'Content-Type': 'application/json'
      }
    })
  }


  return (
    <li className={classes.movie}>
      <h2>{props.title}</h2>
      <h3>{props.releaseDate}</h3>
      <p>{props.openingText}</p>
      <p>{props.id}</p>
      <button onClick={delMovieHandler}>Delete</button>
    </li>
  );
};

export default Movie;
