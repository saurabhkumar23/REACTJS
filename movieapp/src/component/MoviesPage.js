import React, { Component } from 'react'
import {getMovies} from '../temp/MovieService'

export default class MoviesPage extends Component {

    state = {
        movies : getMovies(),
        movieInput : ''
    }

    deleteMovieHandle = (deletedMovieId) => {
        let filteredList = this.state.movies.filter(({_id}) => {
            return _id != deletedMovieId
        })
        this.setState({
            movies : filteredList
        })
    }

    movieInputHandle = (e) => {
        let filteredList = this.state.movies.filter(({title}) => {
            return title.startsWith(e.target.value)
        })
        console.log(filteredList)
        this.setState({
            movieInput: e.target.value,
            movies : filteredList
        })
    }

    render() {

        return (
            <div>
                <h1>this is movies page component</h1>
                <input type='text' value={this.state.movieInput} onChange={(e) => this.movieInputHandle(e)}/>
                <table>
                    {
                        this.state.movies.map(({_id,title,genre:{name},numberInStock,dailyRentalRate}) => {
                            return (
                                <tr>
                                    <td>{title}</td>
                                    <td>{name}</td>
                                    <td>{numberInStock}</td>
                                    <td>{dailyRentalRate}</td>
                                    <button onClick={() => this.deleteMovieHandle(_id)}>Delete</button>
                                </tr>
                            ) 
                        })
                    }
                </table>
            </div>
        )
    }
}
