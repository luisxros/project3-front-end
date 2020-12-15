import React from 'react';
import './MovieCard.css'


function MovieCard(props) {
    return(
        
        <div className="MovieCard">
              <a className="Link" href={`https://www.youtube.com/results?search_query=${props.result.title}+trailer`}target="_blank" rel="noreferrer">


            <img src={`https://image.tmdb.org/t/p/w200${props.result.poster_path}`} alt= "" />
              </a>
            
            <h2>Rating:</h2>
            <h4>{props.result.vote_average}</h4>

        </div>
    )
}

export default MovieCard;