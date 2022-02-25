import UserPreview from "components/user/UserPreview";
import React, { useEffect } from "react";
import { useDispatch } from "react-redux";
import { markNotificationAsReadRequest, markNotificationAsUnreadRequest } from "redux/user/thunks";

type NotificationItemType = Omit<Instalike.Notification, 'resourceType' | 'createdAt' | 'type'>

const NotificationItem = ({isRead, data:{user: {userName, avatar}}, id}: NotificationItemType) => {
    const dispatch = useDispatch();

    useEffect(() => {
        if (isRead) return;
        dispatch(markNotificationAsReadRequest(id));
    })

    const onClick = (e: any) => {
        e.preventDefault()
        dispatch(markNotificationAsUnreadRequest(id))
    }
    
    return (<div>
        <UserPreview avatar={avatar} userName={userName} />
        <button onClick={onClick} type="button">{isRead ? "readed" : "unreaded"}</button>
    </div>)
}

export default NotificationItem;