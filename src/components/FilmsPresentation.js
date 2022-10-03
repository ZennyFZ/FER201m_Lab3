import React from "react";
import { useState } from "react";
import { Link } from "react-router-dom";
export default function Film({Films}) {
  const [film, setFilm] = useState([]);
  return (
    <div className="container">
      {Films.map((film) => (
        <div className="column">
          <div className="movie">
            <div>
            <img src={film.img} />
            </div>
            <h3>{film.title}</h3>
            <p>Year: {film.year}</p>
            <p>Nation: {film.nation}</p>
            <Link to={`Detail/${film.id}`}> 
            <p><button>Detail</button></p>
            </Link>
          </div>
        </div>
      ))}
      <div id='popup1' className='overlay'>
        <div className='popup'>
          <img src={film.img}/>
          <h2>{film.title}</h2>
          <a className='close' href='#/'>&times;</a>
          <div className='content'>
            {film.info}
          </div>
        </div>
      </div>
    </div>
  )
}