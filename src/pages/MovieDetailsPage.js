import { Component } from 'react';
import { NavLink, Route } from 'react-router-dom';
import Axios from 'axios';

import Cast from '../component/Cast';
import Reviews from '../component/Reviews/Reviews';
import MoviesDetails from '../component/MoviesDetails';
import routes from '../routes';

class MovieDetailsPage extends Component {
  state = {
    poster_path: '',
    title: null,
    name: null,
    release_date: null,
    vote_average: null,
    overview: null,
    genres: [],
  };

  async componentDidMount() {
    const { movieId } = this.props.match.params;
    const response = await Axios.get(
      `https://api.themoviedb.org/3/movie/${movieId}?api_key=bfc0b177c45bde411d6d53ddc48eee25&language=en-US`,
    );
    this.setState({ ...response.data });
    this.setState({ release_date: this.state.release_date.slice(0, 4) });
  }

  handleGoBack = () => {
    const { location, history } = this.props;

    if (location.state && location.state.from) {
      return history.push(location.state.from);
    }

    history.push(routes.movies);
  };

  render() {
    const { match, location } = this.props;
    return (
      <>
        <button type="button" onClick={this.handleGoBack}>
          Go back
        </button>

        <MoviesDetails {...this.state} />

        <h2>Additional information</h2>
        <ul>
          <li>
            <NavLink
              to={{
                pathname: `${match.url}/cast`,
                state: { from: location?.state?.from },
              }}
            >
              Cast
            </NavLink>
          </li>
          <li>
            <NavLink
              to={{
                pathname: `${match.url}/reviews`,
                state: { from: location?.state?.from },
              }}
            >
              Reviews
            </NavLink>
          </li>
        </ul>

        <Route path={`${match.path}/cast`} component={Cast} />
        <Route path={`${match.path}/reviews`} component={Reviews} />
      </>
    );
  }
}

export default MovieDetailsPage;
