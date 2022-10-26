import userServices from "../services/user.services";
import { LOGIN_FAIL, LOGIN_SUCCESS, LOGOUT, SET_MESSAGE } from "./type";

export const login = (username, password) => (dispatch) => {
    return userServices.login(username, password).then(
      (data) => {
        dispatch({
          type: LOGIN_SUCCESS,
          payload: { user: data },
        });
        return Promise.resolve();
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
  