import Constants from '../helpers/Constants';

const updateSearchTerm = (searchTerm) => (dispatch) => {
  dispatch({
    type: Constants.HEADER.UPDATE_SEARCH_TERM,
    payload: searchTerm,
  });
};

const updateSearchAPI = (apiName) => (dispatch) => {
  dispatch({
    type: Constants.HEADER.UPDATE_SEARCH_API,
    payload: apiName,
  });
};

export default {
  updateSearchTerm,
  updateSearchAPI,
};
