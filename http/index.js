import axios from "axios";

export const API_URL = `https://project-test-production.up.railway.app`;

// export const API_URL = `http://localhost:5000`;

const $host = axios.create({
    baseURL: API_URL
});

$host.interceptors.request.use((config) => {
    const token = localStorage.getItem("accessToken");
    if(!token) return config;
    config.headers.Authorization = `Bearer ${token}`;
    return config;
});

export default $host;