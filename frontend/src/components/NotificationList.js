import React, { useEffect, useState } from "react";
import { fetchNotifications } from "../services/api";

function NotificationList() {
    const [notifications, setNotifications] = useState([]);

    useEffect(() => {
        async function loadData() {
            const data = await fetchNotifications();

            console.log(data);

            setNotifications(data);
        }

        loadData();
    }, []);

    return (
        <div>
            <h2>Priority Notifications</h2>

            {notifications.length === 0 ? (
                <p>No notifications available</p>
            ) : (
                notifications.map((item) => (
                    <div
                        key={item.id}
                        style={{
                            border: "1px solid black",
                            padding: "10px",
                            marginBottom: "10px"
                        }}
                    >
                        <h3>{item.title}</h3>
                        <p>{item.type}</p>
                        <p>{item.timestamp}</p>
                    </div>
                ))
            )}
        </div>
    );
}

export default NotificationList;