import { FAVORITES } from '../helpers/constants';

const addFavorite = (data) => (dispatch) => {
  dispatch({
    type: FAVORITES.ADD_FAVORITE,
    payload: data,
  });
};

const removeFavorite = (id) => (dispatch) => {
  dispatch({
    type: FAVORITES.REMOVE_FAVORITE,
    payload: id,
  });
};

export default {
  addFavorite,
  removeFavorite,
};
