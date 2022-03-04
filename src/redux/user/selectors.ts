import { createSelector } from "reselect";
import type { RootState } from "../store";

export const userSelector = (state: RootState) => state.user;

export const userProfileIDSelector = createSelector(
  [userSelector],
  (state) => state.user.id
);

export const userProfileSelector = createSelector(
  [userSelector],
  (state) => state.user
);

export const userPostsCountSelector = createSelector(
  [userSelector],
  (state) => state.posts.count
);

export const userProfilePreviewSelector = createSelector(
  [userSelector],
  (state): Instalike.UserPreview => ({
    resourceType: state.user.resourceType,
    id: state.user.id,
    avatar: state.user.avatar,
    userName: state.user.userName,
    isViewer: state.user.isViewer,
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

export const userViewSelector = createSelector([userSelector], (state) => ({
  isFollowedByViewer: state.user.isFollowedByViewer,
  isViewer: state.user.isViewer,
}));
