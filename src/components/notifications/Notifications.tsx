import useToggler from "hooks/useToggler";
import React, { useCallback, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { countNotificationsSelector, countNotificationsToReadSelector, notificationsSelector } from "redux/user/selectors";
import { getNotificationsRequest } from "redux/user/thunks";
import NotificationItem from "./NotificationItem";

const Notifications = () => {

    const notificationsCount = useSelector(countNotificationsSelector)
    const notificationsToReadCount = useSelector(countNotificationsToReadSelector)
    const notifications = useSelector(notificationsSelector)
    const dispatch = useDispatch();
    const [isOpen, setIsOpen] = useToggler(false)

    const onClick = useCallback(() => setIsOpen(), [setIsOpen])

    useEffect(() => {
        if( notificationsCount !== 0 || isOpen) return;
        dispatch(getNotificationsRequest());
    })

    return (
        <div>
            <button onClick={onClick} type="button"><span>{notificationsToReadCount}</span></button>
           { isOpen && <div>
                {notifications.map(({isRead, data, id}) => 
                    <NotificationItem key={id} isRead={isRead} data={data} id={id} />
                )}
            </div>}
        </div>
    )

}

export default Notifications;