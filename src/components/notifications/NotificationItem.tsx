import UserPreview from "components/user/UserPreview";
import React, { useEffect } from "react";
import { useDispatch } from "react-redux";
import { markNotificationAsReadAsync } from "redux/user/thunks";
import { dateDiff, extractNotificationType } from "utils/helpers";

type NotificationItemType = Omit<Instalike.Notification, "resourceType">;

const NotificationItem = ({
  createdAt,
  type,
  isRead,
  data: {
    user: { userName, avatar, id: userId },
  },
  id,
}: NotificationItemType) => {
  const dispatch = useDispatch();

  useEffect(() => {
    if (isRead) return;
    dispatch(markNotificationAsReadAsync(id));
  }, [isRead, id, dispatch]);

  return (
    <div className="flex items-center justify-between">
      <UserPreview id={userId} avatar={avatar} userName={userName} />
      <p className="font-bold text-sm text-paradise-pink">
        {extractNotificationType(type)}
        <small className="block text-acquamarine text-xs">
          {dateDiff(createdAt)} ago
        </small>
      </p>
    </div>
  );
};

export default NotificationItem;
