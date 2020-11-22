import Constants from '../../helpers/Constants';

const INITIAL_STATE = {
  searchTerm: '',
  apiName: Constants.HEADER.API_RIJKS,
};

export default function reducer(state = INITIAL_STATE, action = null) {
  switch (action.type) {
    case Constants.HEADER.UPDATE_SEARCH_TERM:
      return { ...state, searchTerm: action.payload };
    case Constants.HEADER.UPDATE_SEARCH_API:
      return { ...state, apiName: action.payload };
    default:
      return state;
  }
}