import userServices from "../services/user.services";
import {
  CLEAR_MESSAGE,
  LOGIN_FAIL,
  LOGIN_SUCCESS,
  LOGOUT,
  SET_MESSAGE,
} from "./type";

export const login = (username, password) => (dispatch) => {
  return userServices.login(username, password).then(
    (data) => {
      dispatch({
        type: LOGIN_SUCCESS,
        payload: { user: data },
      });
      return data;
    },
    (error) => {
      const message =
        (error.response &&
          error.response.data &&
          error.response.data.message) ||
        error.message ||
        error.toString();

      dispatch({
        type: LOGIN_FAIL,
      });

      dispatch({
        type: SET_MESSAGE,
        payload: message,
      });

      return Promise.reject();
    }
  );
};

export const logout = () => (dispatch) => {
  userServices.logout();

  dispatch({
    type: LOGOUT,
  });
};

export const register = (user) => (dispatch) => {
  return userServices.findByUser(user.User).then(
    (data) => {
      dispatch({
        type: CLEAR_MESSAGE,
      });
      return userServices
        .create(user)
        .then((data) => {
          console.log(data);
        })
        .catch((err) => {
          throw err;
        });
    },
    (error) => {
      const message =
        (error.response &&
          error.response.data &&
          error.response.data.message) ||
        error.message ||
        error.toString();
      dispatch({
        type: SET_MESSAGE,
        payload: message,
      });

      return Promise.reject();
    }
  );
};
