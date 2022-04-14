import useToggler from "hooks/useToggler";
import React, { useCallback, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import {
  countNotificationsSelector,
  countNotificationsToReadSelector,
  notificationsSelector,
} from "redux/user/selectors";
import { getNotificationsAsync } from "redux/user/thunks";
import BackLink from "components/routes/links/BackLink";
import NotificationItem from "./NotificationItem";
import NotificationsButton from "./NotificationButton";

const Notifications = () => {
  const notificationsCount = useSelector(countNotificationsSelector);
  const notificationsToReadCount = useSelector(
    countNotificationsToReadSelector
  );
  const notifications = useSelector(notificationsSelector);
  const dispatch = useDispatch();
  const [isOpen, toggleIsOpen] = useToggler(false);

  const onClick = useCallback(
    () => toggleIsOpen(!isOpen),
    [toggleIsOpen, isOpen]
  );

  useEffect(() => {
    if (notificationsCount !== 0 || !isOpen) return;
    dispatch(getNotificationsAsync());
  });

  return (
    <div className="relative">
      <NotificationsButton
        notificationsToReadCount={notificationsToReadCount}
        onClick={onClick}
      />
      {isOpen && (
        <div className="fixed inset-0 z-40 bg-white flex flex-col p-4 lg:absolute lg:inset-auto lg:top-0 lg:right-0 lg:w-96 lg:border-2 lg:border-paradise-pink">
          <BackLink onClick={onClick} />
          <h2 className="subtitle mt-4 mb-10">Notifications</h2>
          <div className="flex flex-col gap-3">
            {notifications.map(({ isRead, data, id, type, createdAt }) => (
              <NotificationItem
                type={type}
                createdAt={createdAt}
                key={id}
                isRead={isRead}
                data={data}
                id={id}
              />
            ))}
          </div>
        </div>
      )}
    </div>
  );
};

export default Notifications;
