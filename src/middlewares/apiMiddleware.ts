import { apiError, apiEnd } from "redux/api/actions";
import type { RootState } from "redux/store";
import type { Middleware } from "redux";
import { LoadingStatus } from "redux/api/enum";
import { apiStart } from "../redux/api/actions";

const apiMiddleware: Middleware<{}, RootState> =
  ({ dispatch, getState }) =>
  (next) =>
  async (action) => {
    dispatch(apiStart(LoadingStatus.LOADING_USER));
    try {
      if (typeof action === "function") {
        action(dispatch, getState, next);
      }
    } catch (e: any) {
      const { data: errors } = e.response;
      dispatch(apiError(errors));
    } finally {
      dispatch(apiEnd());
    }
  };

export default apiMiddleware;
