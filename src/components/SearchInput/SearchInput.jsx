import React from 'react';
import { useDispatch, useSelector } from 'react-redux';

import IconButton from '@material-ui/core/IconButton';
import SearchIcon from '@material-ui/icons/Search';

import InputBase from '@material-ui/core/InputBase';
import Paper from '@material-ui/core/Paper';

import { useHistory } from 'react-router-dom';

import searchActions from '../../actions/searchActions';

import useStyles from './style';

export default function SearchBar() {
  const currentSearchTerm = useSelector((state) => state.search.searchTerm);

  const [searchTerm, setSearchTerm] = React.useState(currentSearchTerm);
  const dispatch = useDispatch();
  const history = useHistory();
  const classes = useStyles();

  function onSearch() {
    if (searchTerm === '') return;
    dispatch(searchActions.updateSearchTerm(searchTerm));
    history.push('/search');
  }

  function handleSearchTermChange(event) {
    setSearchTerm(event.target.value);
  }

  function handleKeyPress(event) {
    if (event.key === 'Enter') onSearch(searchTerm);
  }

  return (
    <Paper className={classes.wrapper} component="div">
      <InputBase
        placeholder="Buscar por.."
        onChange={handleSearchTermChange}
        onKeyPress={handleKeyPress}
        className={classes.inputBase}
        defaultValue={currentSearchTerm}
        color="secondary"
      />
      <IconButton aria-label="search" onClick={onSearch}>
        <SearchIcon />
      </IconButton>
    </Paper>
  );
}
