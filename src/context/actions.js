import * as types from './actionTypes';
import { logInUser, registerUser, signOutUser } from '../firebase';

export const register = (dispatch) => async (email, password, displayName) => {
  dispatch({ type: types.REGISTER_START });
  try {
    const user = await registerUser(email, password, displayName);
    dispatch({ type: types.REGISTER_SUCCESS, payload: user });
  } catch (error) {
    dispatch({ type: types.REGISTER_FAIL, payload: error.message });
  }
};

export const login = (dispatch) => async (email, password) => {
  dispatch({ type: types.LOGIN_START });
  try {
    const user = await logInUser(email, password);
    dispatch({ type: types.LOGIN_SUCCESS, payload: user });
  } catch (error) {
    dispatch({ type: types.LOGIN_FAIL, payload: error.message });
  }
};

export const logout = (dispatch) => async () => {
  dispatch({ type: types.LOGOUT_START });
  try {
    await signOutUser();
    dispatch({ type: types.LOGOUT_SUCCESS });
  } catch (error) {
    dispatch({ type: types.LOGOUT_FAIL, payload: error.message });
  }
};
