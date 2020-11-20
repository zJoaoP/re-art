import React from 'react';
import { useDispatch } from 'react-redux';

import IconButton from '@material-ui/core/IconButton';

import SearchIcon from '@material-ui/icons/Search';

import { StyledPaper, StyledInputBase } from './style';

import headerActions from '../../actions/headerActions';

export default function SearchBar() {
  const [searchTerm, setSearchTerm] = React.useState('');
  const dispatch = useDispatch();

  function onSearch() {
    dispatch(headerActions.updateSearchTerm(searchTerm));
  }

  function handleSearchTermChange(event) {
    setSearchTerm(event.target.value);
  }

  function handleKeyPress(event) {
    if (event.key === 'Enter') onSearch(searchTerm);
  }

  return (
    <StyledPaper component="div">
      <StyledInputBase
        placeholder="Search"
        onChange={handleSearchTermChange}
        onKeyPress={handleKeyPress}
        style={{ flex: '1' }}
      />
      <IconButton aria-label="search" onClick={onSearch}>
        <SearchIcon />
      </IconButton>
    </StyledPaper>
  );
}
