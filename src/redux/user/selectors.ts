import { createSelector } from "reselect";
import type { RootState } from "../store";

export const userSelector = (state: RootState) => state.user;

export const userProfileIDSelector = createSelector(
  [userSelector],
  (state) => state.profile.id
);

export const userProfileSelector = createSelector(
  [userSelector],
  (state) => state.profile
);

export const userProfilePreviewSelector = createSelector(
  [userSelector],
  (state): Instalike.UserPreview => ({
    resourceType: state.profile.resourceType,
    id: state.profile.id,
    avatar: state.profile.avatar,
    userName: state.profile.userName,
    isViewer: state.profile.isViewer,
  })
);

export const countNotificationsSelector = createSelector(
  [userSelector],
  (state) => state.notifications.length
);

export const notificationsSelector = createSelector(
  [userSelector],
  (state) => state.notifications
);

export const countNotificationsToReadSelector = createSelector(
  [userSelector],
  (state) => state.notifications.filter((notif) => !notif.isRead).length
);

export const followingSelector = createSelector(
  [userSelector],
  (state) => state.following
);

export const followersSelector = createSelector(
  [userSelector],
  (state) => state.followers
);

export const userViewSelector = createSelector([userSelector], (state) => ({
  isFollowedByViewer: state.profile.isFollowedByViewer,
  isViewer: state.profile.isViewer,
}));
