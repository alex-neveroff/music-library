import React, { useState } from 'react';
import PropTypes from 'prop-types';
import { Notify } from 'notiflix';

const SearchForm = ({ onSubmit }) => {
  const [searchQuery, setSearchQuery] = useState('');

  const handleChange = event => {
    setSearchQuery(event.currentTarget.value);
  };

  const handleSubmit = event => {
    event.preventDefault();
    if (searchQuery === '') {
      Notify.warning(`Enter artist name`);
      return;
    }
    onSubmit(searchQuery);
  };

  return (
    <form onSubmit={handleSubmit}>
      <label>
        <input
          className="form-input"
          type="text"
          name="search"
          onChange={handleChange}
          value={searchQuery}
          required
        />
      </label>
      <button type="submit">Search</button>
    </form>
  );
};

SearchForm.propTypes = {
  onSubmit: PropTypes.func.isRequired,
};

export default SearchForm;
