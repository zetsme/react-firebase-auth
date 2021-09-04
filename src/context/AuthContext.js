import { createContext, useContext, useEffect, useReducer } from 'react';
import * as types from './actionTypes';
import * as actions from './actions';
import reducer from './reducer';
import { onAuthChange } from '../firebase';

const AuthContext = createContext();

const initialState = {
  loading: false,
  currentUser: null,
  error: null,
};

export const AuthContextProvider = ({ children }) => {
  const [state, _dispatch] = useReducer(reducer, initialState);
  const setUser = (user) => _dispatch({ type: types.SET_USER, payload: user });

  useEffect(() => {
    const listener = onAuthChange(setUser);
    return () => listener();
  }, []);

  const dispatch = (action) => action(_dispatch);
  const register = dispatch(actions.register);
  const login = dispatch(actions.login);
  const logout = dispatch(actions.logout);

  return (
    <AuthContext.Provider value={{ ...state, register, login, logout }}>
      {children}
    </AuthContext.Provider>
  );
};

export const useAuthContext = () => useContext(AuthContext);
