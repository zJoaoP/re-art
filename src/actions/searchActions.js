import { SEARCH } from '../helpers/constants';

const updateSearchTerm = (searchTerm) => (dispatch) => {
  dispatch({
    type: SEARCH.UPDATE_SEARCH_TERM,
    payload: searchTerm,
  });
};

const resetPage = () => (dispatch) => {
  dispatch({
    type: SEARCH.RESET_PAGE,
    payload: 0,
  });
};

const nextPage = () => (dispatch) => {
  dispatch({
    type: SEARCH.NEXT_PAGE,
    payload: 1,
  });
};

export default {
  updateSearchTerm,
  resetPage,
  nextPage,
};
