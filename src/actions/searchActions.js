import { SEARCH } from '../helpers/constants';

// TODO: Rename this to "searchData", because its not header-exclusive
const updateSearchTerm = (searchTerm) => (dispatch) => {
  dispatch({
    type: SEARCH.UPDATE_SEARCH_TERM,
    payload: searchTerm,
  });
};

export default {
  updateSearchTerm,
};
