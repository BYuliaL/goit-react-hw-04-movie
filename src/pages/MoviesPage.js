import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import SearchForm from '../component/SearchForm';
import Axios from 'axios';

class MoviesPage extends Component {
  state = { movies: [] };

  onChangeQuery = query => {
    const apiKey = 'bfc0b177c45bde411d6d53ddc48eee25';
    Axios.get(
      `https://api.themoviedb.org/3/search/movie?api_key=${apiKey}&query=${query}&language=en-US&page=1&include_adult=false`,
    ).then(response => {
      this.setState({ movies: response.data.results });
    });
  };

  render() {
    const { movies } = this.state;
    return (
      <>
        <h1>Movie</h1>
        <SearchForm onSubmit={this.onChangeQuery} />
        <ul>
          {movies.map(({ title, id }) => (
            <li key={id}>
              <Link to={`/movies/${id}`}>{title}</Link>
            </li>
          ))}
        </ul>
      </>
    );
  }
}
export default MoviesPage;
