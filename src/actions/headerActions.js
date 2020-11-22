import { HEADER } from '../helpers/Constants';

// TODO: Rename this to "searchData", because its not header-exclusive
const updateSearchTerm = (searchTerm) => (dispatch) => {
  dispatch({
    type: HEADER.UPDATE_SEARCH_TERM,
    payload: searchTerm,
  });
};

export default {
  updateSearchTerm,
};
