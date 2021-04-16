import { Component } from 'react';
import { withRouter } from 'react-router-dom';

class SearchForm extends Component {
  state = {
    query: '',
  };

  handleChange = event => {
    this.setState({ query: event.currentTarget.value });
  };

  handleSubmit = event => {
    event.preventDefault();

    if (this.state.query) {
      this.props.onSubmit(this.state.query);
    } else if (!this.state.query) {
      alert('Write something to start search');
    }

    this.props.history.push({
      search: `query=${this.state.query}`,
    });

    this.setState({ query: '' });
  };

  render() {
    return (
      <form onSubmit={this.handleSubmit}>
        <input
          value={this.state.query}
          onChange={this.handleChange}
          type="text"
          autoComplete="off"
          autoFocus
          placeholder="Search movies"
        />

        <button type="submit">
          <span>Search</span>
        </button>
      </form>
    );
  }
}

export default withRouter(SearchForm);
