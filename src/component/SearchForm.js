import { Component } from 'react';

class SearchForm extends Component {
  state = {
    query: '',
  };

  handleChange = event => {
    this.setState({ query: event.currentTarget.value });
  };

  handleSubmit = event => {
    event.preventDefault();

    console.log(this.state.query);
    this.props.onSubmit(this.state.query);

    this.setState({ query: '' });
  };

  render() {
    return (
      <form onSubmit={this.handleSubmit}>
        <input
          value={this.state.query}
          onChange={this.handleChange}
          type="text"
          // autocomplete="off"
          // autofocus
          placeholder="Search movies"
        />

        <button type="submit">
          <span>Search</span>
        </button>
      </form>
    );
  }
}

export default SearchForm;
