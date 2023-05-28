import React, { useState } from 'react';
import PropTypes from 'prop-types';
import { Notify } from 'notiflix';
import { FormStyled } from './SearchForm.styled';
import { ReactComponent as SearchIcon } from '../../icons/search.svg';

const SearchForm = ({ onSubmit }) => {
  const [searchQuery, setSearchQuery] = useState('');

  const handleSearch = event => {
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
    <FormStyled onSubmit={handleSubmit}>
      <button type="submit" className="searchbar-button">
        <SearchIcon width="35" height="35" />
      </button>
      <input
        className="searchbar-input"
        type="text"
        autoComplete="off"
        autoFocus
        placeholder="Search band by name"
        value={searchQuery}
        onChange={handleSearch}
      />
    </FormStyled>
  );
};

SearchForm.propTypes = {
  onSubmit: PropTypes.func.isRequired,
};

export default SearchForm;
