import React from 'react'

import './styles.css'
import { MovieCard } from '../components/movieCard'
import { Modal } from '../components/modal'

export class MovieList extends React.Component {

    constructor(props)
    {
        super(props)
        this.state = {
            showModal: false,
            selectedMovie: {}
        }
    }

    handleImageOnClick = (e, item) =>
    {
        this.setState({
            showModal : true,
            selectedMovie: item
        })
    }

    hideModal = () => {
        this.setState({
            showModal : false
        })
    }

    render()
    {
        const moviesList = this.props.data
        return (
            <>
        <div className = {!this.state.showModal ? 'grid-container': 'background-grid'}>
        {moviesList.map(item => {
            return (
                <div className = 'grid-item' key = {item.imdbID}>
                    <MovieCard movie = {item} handleImageClick = {(e,item) => this.handleImageOnClick(e, item)}/>
                </div>
            )
        })}
        </div>

        {this.state.showModal && 
            <Modal movieDetails = {this.state.selectedMovie} closeModal = {this.hideModal}/>}
        )
        </>
        )

    }
}