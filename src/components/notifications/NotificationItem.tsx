import ButtonOutlined from "components/buttons/ButtonOutlined";
import UserPreview from "components/user/UserPreview";
import React, { useEffect } from "react";
import { useDispatch } from "react-redux";
import { markNotificationAsReadRequest, markNotificationAsUnreadRequest } from "redux/user/thunks";
import { dateDiff, extractNotificationType } from "utils/helpers";

type NotificationItemType = Omit<Instalike.Notification, 'resourceType'>

const NotificationItem = ({createdAt, type, isRead, data:{user: {userName, avatar}}, id}: NotificationItemType) => {
    const dispatch = useDispatch();

    useEffect(() => {
        if (isRead) return;
        dispatch(markNotificationAsReadRequest(id));
    })

    const onClick = (e: any) => {
        e.preventDefault()
        dispatch(markNotificationAsUnreadRequest(id))
    }
    
    return (<div className="flex items-center justify-between gap-3">
        <UserPreview avatar={avatar} userName={userName} />
        <div className="relative">
            <p>{extractNotificationType(type)}</p>
            <small className="absolute top-100 right-0 text-gray-500">{dateDiff(createdAt)} days</small>
        </div>
        <ButtonOutlined disabled={false} onClick={onClick} type="button">
            {isRead ? <span className="text-xs">Unread</span> : <span>Read</span>}
        </ButtonOutlined>
    </div>)
}

export default NotificationItem;