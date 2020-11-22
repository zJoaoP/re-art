import { SEARCH } from '../../helpers/constants';

const INITIAL_STATE = {
  searchTerm: '',
};

export default function reducer(state = INITIAL_STATE, action = null) {
  switch (action.type) {
    case SEARCH.UPDATE_SEARCH_TERM:
      return { ...state, searchTerm: action.payload };
    default:
      return state;
  }
}
