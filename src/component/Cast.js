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
    console.log(this.state.cast);
  }

  render() {
    const { cast } = this.state;
    // console.log(this.props.match.url);

    return (
      <>
        <ul>
          {cast.map(({ name, profile_path }) => (
            <li key={name}>
              <p>{name}</p>
              <img
                src={`https://image.tmdb.org/t/p/w300/${profile_path}`}
                alt={name}
              />
            </li>
          ))}
        </ul>
      </>
    );
  }
}

export default Cast;
