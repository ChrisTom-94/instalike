import apiClient from "redux/api/api";
import thunk, { ThunkAction, ThunkDispatch } from "redux-thunk";
import {
  createStore,
  applyMiddleware,
  combineReducers,
  Middleware,
  AnyAction,
} from "redux";
import { composeWithDevTools } from "redux-devtools-extension";
import apiMiddleware from "middlewares/apiMiddleware";
import userReducer from "./user/reducer";
import apiReducer from "./api/reducer";
import postsReducer from "./posts/reducer";
import { ApiInstance } from "./api/types";

export const rootReducer = combineReducers({
  api: apiReducer,
  user: userReducer,
  posts: postsReducer,
});

export const middlewares: Middleware[] = [];
middlewares.push(thunk.withExtraArgument(apiClient));
middlewares.push(apiMiddleware);

const initStore = (preloadedState?: RootState) =>
  createStore(
    rootReducer,
    preloadedState,
    composeWithDevTools(applyMiddleware(...middlewares))
  );

export type RootState = ReturnType<typeof rootReducer>;

export type AppThunkAction<R = void> = ThunkAction<
  R,
  RootState,
  ApiInstance,
  AnyAction
>;
export type AppThunkDispatch = ThunkDispatch<RootState, ApiInstance, AnyAction>;

export default initStore;
