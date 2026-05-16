const API_URL = "http://localhost:5000/api";

export const fetchNotifications = async () => {
    try {
        const response = await fetch(`${API_URL}/notifications`);

        const data = await response.json();

        return data;
    } catch (error) {
        console.error(error);
        return [];
    }
};