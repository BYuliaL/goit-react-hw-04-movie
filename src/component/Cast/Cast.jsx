import React, { Component } from 'react';
import Axios from 'axios';

class Cast extends Component {
  state = {
    cast: [],
  };

  async componentDidMount() {
    const { movieId } = this.props.match.params;
    const response = await Axios.get(
      `https://api.themoviedb.org/3/movie/${movieId}/credits?api_key=bfc0b177c45bde411d6d53ddc48eee25&language=en-US`,
    );
    console.log(response.data.cast);
    this.setState({ cast: response.data.cast });
  }

  render() {
    const { cast } = this.state;

    return (
      <>
        <ul>
          {cast.map(({ name, profile_path, character }) => (
            <li key={name}>
              <h3>{name}</h3>
              <p>{character}</p>
              {profile_path && (
                <img
                  src={`https://image.tmdb.org/t/p/w300/${profile_path}`}
                  alt={name}
                />
              )}
            </li>
          ))}
        </ul>
      </>
    );
  }
}

export default Cast;
