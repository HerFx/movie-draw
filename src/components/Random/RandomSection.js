import React from 'react'
import Card from '../Card'
import { useState, useEffect } from 'react';
import movies from '../../data';
import ReactConfetti from 'react-confetti';

export default function Random() {

    
  const [movie, setMovie] = useState('');
  const [movieType, SetMovieType] = useState('');

  const [confetti, setConfetti] = useState(false);

  
  const handleChange = (e) => {
    if(e.target.value === 'All'){
      SetMovieType('');
    } else {
    SetMovieType(e.target.value);
    }
  }



  const handleFilter = (e) => {
    if(movieType === ''){
      const random = movies[Math.floor(Math.random() * movies.length)];
      setMovie(random);
    } else {
    const filter = movies.filter(movie => movie.type === movieType);
    const random = filter[Math.floor(Math.random() * filter.length)];
    console.log(setMovie(random));
    }
    e.preventDefault();
  }

  useEffect(() => {
    if(movie !== ''){
      setConfetti(true);
    }
  }, [movie])


  return (
    <div className='random'>
      <h1 className='moviesTitle'><i class="fa-solid fa-circle-question"></i>Random Movie</h1>
      <form onSubmit={handleFilter}>
        <select onChange={handleChange}>
          <option value="All">All</option>
          <option value="Serial">Serial</option>
          <option value="Film">Film</option>
          <option value="Animation">Animation</option>
        </select>
        <button type="submit" onClick={() => setConfetti(true)}>Random</button>
        {confetti && <ReactConfetti width={window.innerWidth} height={window.innerHeight}/>}
      </form>
      {movie && <Card title={movie.title} where={movie.where} type={movie.type}/>}
    </div>
  )
}