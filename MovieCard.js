import '../App.css';


import React from 'react';
const MovieCard = ({ movie: { imdbID, Year, Title, Type, Poster } }) => {
    return (
        <div className='master' key={imdbID}>
            <div className='first'>
            <div className='year'>
                <p>{Year}</p>
            </div>
            <div className='image'>
                <img className='poster' src={Poster !=="N/A" ? Poster:"https://via.placeholder.com/404"} alt={Title}/>
            </div>
            <div className='details'>
                <span>{Type}</span>
                <h3>{Title}</h3>
            </div>
         </div>
        </div>
    )
}
export default MovieCard;
