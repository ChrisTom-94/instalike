import type { RootState } from "redux/store";
import type { Middleware } from "redux";
import { logout } from "redux/api/actions";
import { deleteToken } from "utils/helpers";

const apiMiddleware: Middleware<{}, RootState> =
  ({ dispatch }) =>
  (next) =>
  async (action) => {
    if (
      action.payload?.message !== "Unathenticated" &&
      action.payload?.status !== "error"
    ) {
      next(action);
      return;
    }
    dispatch(logout());
    deleteToken();
  };

export default apiMiddleware;
