import { createSelector } from "reselect";
import type { RootState } from "../store";

export const userSelector = (state: RootState) => state.user;

export const userProfileIDSelector = createSelector(
  [userSelector],
  (state) => state.data.id
);

export const userProfileSelector = createSelector(
  [userSelector],
  (state) => state.data
);

export const userPostsCountSelector = createSelector(
  [userSelector],
  (state) => state.posts.count
)

export const userProfilePreviewSelector = createSelector(
  [userSelector],
  (state): Instalike.UserPreview => ({
    resourceType: state.data.resourceType,
    id: state.data.id,
    avatar: state.data.avatar,
    userName: state.data.userName,
    isViewer: state.data.isViewer,
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
  (state) => state.notifications.filter(notif => !notif.isRead).length
);

export const userViewSelector = createSelector(
  [userSelector],
  (state) => ({isFollowedByViewer: state.data.isFollowedByViewer, isViewer: state.data.isViewer})
);

