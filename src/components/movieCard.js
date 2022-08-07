import React from 'react'

export const MovieCard = (props) => {
    return (
        <>
        <img className ='movie-card' src = {props.movie.Poster} alt = {props.movie.Title} onClick = {(e) => props.handleImageClick(e, props.movie)}/>
        <div className = 'movie-info'>
            <h3>{props.movie.Title}</h3>
            <h3>Release: {props.movie.Year}</h3>
        </div>
        </>
    )
}