import { FAVORITES } from 'helpers/constants';

const INITIAL_STATE = {
  favorites: [],
};

export default function reducer(state = INITIAL_STATE, action = null) {
  switch (action.type) {
    case FAVORITES.ADD_FAVORITE:
      return { ...state, favorites: [...state.favorites, action.payload] };
    case FAVORITES.REMOVE_FAVORITE:
      return {
        ...state,
        favorites: state.favorites.filter((e) => e.id !== action.payload.id),
      };
    default:
      return state;
  }
}
