import * as types from '../constants/actionTypes';
import axios from 'axios';

export const getResults = (location, radius, categories) => (dispatch) => {

  axios({
    method: 'POST',
    url: `/api/search`,
    headers: { 'Content-Type': 'application/JSON' },
    data: {
      location: location,
      radius: radius,
      categories: categories,
    }
  })
    .then((response) => {
      dispatch({
        type: types.GET_RESULTS,
        payload: response.data,
      });
    });
};


export const getLogin = (username, password) => (dispatch) => {

  axios({
    method: 'POST',
    url: `/api/login`,
    headers: { 'Content-Type': 'application/JSON' },
    data: {
      username: username,
      password: password
    }
  })
    .then((res) => {
      if (res.locals.info.validLogin === true) {
        dispatch({
          type: types.USER_LOGIN,
          payload: username, login
        });

      }

    });
};

export const addFav = (favorite) => ({
  type: types.ADD_FAV,
  payload: favorite,
});

export const toggleFavsPage = () => ({
  type: types.TOGGLE_FAVS_PAGE,
});

export const addComment = (number, comment) => ({
  type: types.ADD_COMMENT,
  payload: { number, comment }
});

export const toggleComments = () => ({
  type: types.TOGGLE_COMMENTS,
});