import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { countNotificationsSelector, notificationsSelector } from "redux/user/selectors";
import { getNotificationsRequest } from "redux/user/thunks";
import NotificationItem from "./NotificationItem";

const Notifications = () => {

    const notificationsCount = useSelector(countNotificationsSelector)
    const notifications = useSelector(notificationsSelector)
    const dispatch = useDispatch();

    useEffect(() => {
        if(notificationsCount === 0) return;
        dispatch(getNotificationsRequest());
    })

    const notificationsList = notifications.map(({isRead, data, id}) => 
        <NotificationItem isRead={isRead} data={data} id={id} />
    )

    return (
        <div>
            <button type="button"><span>{notificationsCount}</span></button>
            <div>
                {notificationsList}
            </div>
        </div>
    )

}

export default Notifications;