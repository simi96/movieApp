import React from 'react'

import { MovieList } from '../components/movieList'
import { getMovie } from '../services/searchService'

export default class SearchComponent extends React.Component
{
    constructor(props)
    {
        super(props)
        this.state = {
            searchText: "",
            movieData : [],
            errorMsg: ""
        }
    }

    // using debounce for making api call when user enters search
    debounce = (fn, delay = 1000) => {
        let timer;
        return (...args) => {
            clearTimeout(timer)
            timer = setTimeout(() => fn(...args), delay)
        }
    }

    debouncedFnc = this.debounce((title) => getMovie(title).then((data, err) => {
        if(data.Response === "True")  
        {
            this.setState({
                movieData: data.Search,
                errorMsg: ""
            })
        }
        else
        {
            this.setState({
                errorMsg: data.Error,
                movieData: []
            })

        }
    }))
    
    // call GET movie API on search
    handleSearchTextChange = (e) => {
        this.setState({
            searchText: e.target.value  
        })
        this.debouncedFnc(e.target.value)
    }

    // clears the search text
    clearSearchText = () => {
        this.setState({
            searchText: "",
            errorMsg: "",
            movieData:[]
        })
    }

    render()
    {
        return (
            <>
            <div>
            <img className = 'search-icon' src="https://icon-library.com/images/search-icon-images/search-icon-images-10.jpg"></img>
            <input className = 'search-box' type = 'text' placeholder = 'Search ...'
            value = {this.state.searchText} onChange = {(e) => this.handleSearchTextChange(e)}/>
            {this.state.searchText && <img className = "cross-icon" src=" https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSNvLBUfSlyWMT2XpoSsL6wcXqgVWf_-CS5qA&usqp=CAU" onClick = {this.clearSearchText}></img>}
            </div>
            
            {this.state.movieData && <MovieList data = {this.state.movieData}/>}
            {this.state.errorMsg && <h1 className = 'error-info'>{this.state.errorMsg}</h1>}
            </>
        )
    }

}