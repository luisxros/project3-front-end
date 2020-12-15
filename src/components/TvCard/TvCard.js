import React from 'react';
import './TvCard.css'

function TvCard(props) {
    return(
        
        <div className="TvCard">
             <a className="Link" href={`https://www.youtube.com/results?search_query=${props.result.name}+trailer`}target="_blank" rel="noreferrer">
             <img src={`https://image.tmdb.org/t/p/w200${props.result.poster_path}`} alt= "" />

            </a>
            <h2>Rating:</h2>
            <h4>{props.result.vote_average}</h4>
        </div>
    )
}

export default TvCard;