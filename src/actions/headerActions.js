import Constants from '../helpers/Constants';

const updateSearchTerm = (searchTerm) => (dispatch) => {
  dispatch({
    type: Constants.HEADER.UPDATE_SEARCH_TERM,
    payload: searchTerm,
  });
};

export default {
  updateSearchTerm,
};
