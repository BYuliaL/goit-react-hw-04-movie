import React, { Component } from 'react';
import Axios from 'axios';
// import styles from './Reviews.module.css';

class Reviews extends Component {
  state = {
    reviews: [],
  };

  async componentDidMount() {
    const apiKey = 'bfc0b177c45bde411d6d53ddc48eee25';
    const { movieId } = this.props.match.params;
    const response = await Axios.get(
      `https://api.themoviedb.org/3/movie/${movieId}/reviews?api_key=${apiKey}&language=en-US&page=1`,
    );
    console.log(response.data.results);
    this.setState({ reviews: response.data.results });
  }

  render() {
    const { reviews } = this.state;

    return (
      <>
        {reviews.length === 0 ? (
          <p>We don`t have any reviews for this movie =(</p>
        ) : (
          <ul>
            {reviews.map(({ author, content }) => (
              <li key={author}>
                <h3>{author}</h3>
                <p>{content}</p>
              </li>
            ))}
          </ul>
        )}
      </>
    );
  }
}

export default Reviews;
