import React from 'react';
import './TvCard.css'

function TvCard(props) {
    return(
        
        <div className="TvCard">
             <img src={`https://image.tmdb.org/t/p/w200${props.result.poster_path}`} alt= "" />
            <h5>{props.result.name}</h5>

        </div>
    )
}

export default TvCard;