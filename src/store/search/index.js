import { SEARCH } from '../../helpers/constants';

const INITIAL_STATE = {
  searchTerm: '',
  page: 1,
};

export default function reducer(state = INITIAL_STATE, action = null) {
  switch (action.type) {
    case SEARCH.UPDATE_SEARCH_TERM:
      return { ...state, searchTerm: action.payload };
    case SEARCH.NEXT_PAGE:
      return { ...state, page: state.page + 1 };
    case SEARCH.RESET_PAGE:
      return { ...state, page: INITIAL_STATE.page };
    default:
      return state;
  }
}
