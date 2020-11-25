import { SEARCH } from '../helpers/constants';

const updateSearchTerm = (searchTerm) => (dispatch) => {
  dispatch({
    type: SEARCH.UPDATE_SEARCH_TERM,
    payload: searchTerm,
  });
};

export default {
  updateSearchTerm,
};
