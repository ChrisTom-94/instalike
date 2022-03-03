import React from "react";
import { ReactComponent as Bell } from "assets/images/bell.svg";
import { ReactComponent as BellFilled } from "assets/images/bell-filled.svg";

const NotificationsButton = ({notificationsToReadCount, onClick} : {notificationsToReadCount: number,
  onClick: () => void
}) => (
  <button onClick={onClick} type="button">
    {notificationsToReadCount > 0 ? <BellFilled /> : <Bell />}
    {notificationsToReadCount > 0 && (
      <span className="flex-center absolute -top-2 -right-2 bg-acquamarine rounded-full font-bold text-white p-1 aspect-square text-xs animate-pulse">
        {notificationsToReadCount}
      </span>
    )}
  </button>
);

export default NotificationsButton;
