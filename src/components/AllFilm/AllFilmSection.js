import React from 'react'
import movie from '../../data'
import Card from '../Card'
import { useState } from 'react';
import useLocalStorage from '../useLocalStorage';
import { motion } from 'framer-motion';

export default function AllFilmSection() {


  const [input, setInput] = useState({
    title: "",
    where: "",
    type: ""
  })

  const [movies, setMovies] = (useLocalStorage('AllMovies', movie))
  const [show, setShow] = useState(false)


  const addTitle = (e) => {
    setInput({
      ...input,
      title: e.target.value
    })
  }

  const addWhere = (e) => {
    setInput({
      ...input,
      where: e.target.value
    })
  }

  const addType = (e) => {
    setInput({
      ...input,
      type: e.target.value
    })
  }

  const addMovie = (e) => {
    e.preventDefault()
    setMovies([
      ...movies,
      input
    ])
    setInput({
      title: "",
      where: "",
      type: ""
    })
  }

  // const addMovie = (e) => {
  //   e.preventDefault()
  //   setNewMovie([
  //     ...newMovie,
  //     input
  //   ])
  //   setInput({
  //     title: "",
  //     where: "",
  //     type: ""
  //   })
  // }

  const deleteMovie = (id) => {
    setMovies(movies.filter((movie) => movie.id !== id))
  }



  const showForm = () => {
    setShow(!show)
  }


  return (
    <div className='movies'>
    <h1 className='moviesTitle'><i class="fa-solid fa-film"></i>Wszystkie Filmy Do Obejrzenia</h1>
    <button  className='showBtn' onClick={showForm}>{show?<i class="fa-solid fa-minus"></i>:<i class="fa-solid fa-plus"></i>}Dodaj Film</button>
    <div className='add'>
       {show && <motion.form className='addform' onSubmit={addMovie}
        initial={{opacity: 0}}
        animate={{opacity: 1}}
        exit={{opacity: 0}}
       >
            <input type="text" placeholder="Title" value={input.title} onChange={addTitle}/>
            <select onChange={addWhere}>
              <option value="Netflix">Netflix</option>
              <option value="Disney+">Disney+</option>
              <option value="No Data">No Data</option>
            </select>
            {/* <input type="text" placeholder="Where" value={input.where} onChange={addWhere}/> */}
            <select onChange={addType}>
              <option value="Serial">Serial</option>
              <option value="Film">Film</option>
              <option value="Animation">Animation</option>
            </select>
            {/* <input type="text" placeholder="Type" value={input.type} onChange={addType}/> */}
            <button>Add</button>
        </motion.form>}
    </div>
    <div className='movieBox'>
        {movies.map((movie, index) => <Card key={index} onClick={deleteMovie}  src={movie.img} title={movie.title} where={movie.where} type={movie.type}/>)}
    </div>
    </div>
  )
}
