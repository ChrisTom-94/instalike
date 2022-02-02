import { createSelector } from "reselect";
import type { RootState } from "../store";

type UserPreviewWithourResourceType = Omit<
  Instalike.UserPreview,
  "resourceType"
>;

export const userSelector = (state: RootState) => state.user;

export const userProfileSelector = createSelector(
  [userSelector],
  (state) => state.data
);

export const userProfilePreviewSelector = createSelector(
  [userSelector],
  (state): UserPreviewWithourResourceType => ({
    id: state.data.id,
    avatar: state.data.avatar,
    userName: state.data.userName,
    isViewer: state.data.isViewer,
  })
);
