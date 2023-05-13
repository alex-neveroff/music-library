import React, { Component } from 'react';
import { Notify } from 'notiflix';

export default class SearchForm extends Component {
  state = { query: '' };

  handleChange = event => {
    const { value } = event.currentTarget;
    this.setState({ query: value });
  };

  handleSubmit = event => {
    event.preventDefault();
    const { query } = this.state;
    if (query === '') {
      Notify.warning(`Enter artist name`);
      return;
    }

    this.props.onSubmit(query);
  };

  render() {
    return (
      <form onSubmit={this.handleSubmit}>
        <label>
          <input
            className="form-input"
            type="text"
            name="search"
            onChange={this.handleChange}
            value={this.state.query}
            required
          />
        </label>
        <button type="submit">Search</button>
      </form>
    );
  }
}
