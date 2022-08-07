import React from 'react'
import './styles.css'

export const Modal = (props) => {

    const handleCancelClick = () => {
        props.closeModal()
    }

    return (
        <div className="modalBackground" id='simrit'>
            <div className = "modalContainer">
                <div className = "modal-title">
                    <p>Movie Details</p>
                </div>
            <div className = "body">
                    <img className = 'modal-img' src = {props.movieDetails.Poster} alt = {props.movieDetails.Title}/>
                    <div className = 'movie-card-info'>
                    <span>Title: {props.movieDetails.Title}</span><br/>
                    <span>Release Year: {props.movieDetails.Year}</span><br/>
                    <span>Type: {props.movieDetails.Type}</span>
                    </div>
            </div>
                <div className = "footer">
                    <button onClick = {handleCancelClick}>Close</button>
                </div>

            </div>
        </div>
    )
}