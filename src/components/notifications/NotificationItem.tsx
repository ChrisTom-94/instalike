import UserPreview from "components/user/UserPreview";
import React, { useEffect } from "react";
import { useDispatch } from "react-redux";
import { markNotificationAsReadRequest } from "redux/user/thunks";
import { dateDiff, extractNotificationType } from "utils/helpers";

type NotificationItemType = Omit<Instalike.Notification, 'resourceType'>

const NotificationItem = ({createdAt, type, isRead, data:{user: {userName, avatar}}, id}: NotificationItemType) => {
    const dispatch = useDispatch();

    useEffect(() => {
        if (isRead) return;
        dispatch(markNotificationAsReadRequest(id));
    }, [isRead, id, dispatch])
    
    return (<div className="flex items-center gap-3">
        <UserPreview avatar={avatar} userName={userName} />
        <p className="font-bold text-paradise-pink">{extractNotificationType(type)}</p>
        <small className="text-acquamarine">{dateDiff(createdAt)} days ago</small>
    </div>)
}

export default NotificationItem;