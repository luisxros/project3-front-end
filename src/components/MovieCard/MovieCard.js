import React from 'react';
import './MovieCard.css'

function MovieCard(props) {
    return(
        
        <div className="MovieCard">
            
            <img src={`https://image.tmdb.org/t/p/w200${props.result.poster_path}`} alt= "" />
            <h5>{props.result.title}</h5>

        </div>
    )
}

export default MovieCard;