import apiClient from 'api/api';
import { createStore, applyMiddleware, combineReducers, AnyAction, Middleware } from "redux";
import thunk, { ThunkAction, ThunkDispatch } from "redux-thunk";
import { ApiClient } from "api/types";
import { apiMiddleware } from "middlewares/apiMiddleware";
import { composeWithDevTools } from 'redux-devtools-extension';
import userReducer from "./user/reducer";
import authReducer from './auth/reducer';

export const rootReducer = combineReducers({ user: userReducer, auth: authReducer });

export const middlewares: Middleware[] = [];
middlewares.push(thunk.withExtraArgument(apiClient));
middlewares.push(apiMiddleware)

const initStore = (preloadedState?: RootState) => createStore(rootReducer, preloadedState, composeWithDevTools(applyMiddleware(...middlewares)))

export type RootState = ReturnType<typeof rootReducer>;

export type AppThunkAction<R = void> = ThunkAction<
  R,
  RootState,
  ApiClient,
  AnyAction
>;

export type AppThunkDispatch = ThunkDispatch<
  RootState,
  ApiClient,
  AnyAction
>;

export default initStore;
