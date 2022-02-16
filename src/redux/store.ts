import {
  createStore,
  applyMiddleware,
  combineReducers,
  Middleware,
} from "redux";
import { apiMiddleware } from "middlewares/apiMiddleware";
import { composeWithDevTools } from "redux-devtools-extension";
import userReducer from "./user/reducer";
import authReducer from "./auth/reducer";

export const rootReducer = combineReducers({
  user: userReducer,
  auth: authReducer,
});

export const middlewares: Middleware[] = [];
middlewares.push(apiMiddleware);

const initStore = (preloadedState?: RootState) =>
  createStore(
    rootReducer,
    preloadedState,
    composeWithDevTools(applyMiddleware(...middlewares))
  );

export type RootState = ReturnType<typeof rootReducer>;

export default initStore;
