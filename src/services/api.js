import axios from "axios";

const api = axios.create({
    baseURL: 'https://localhost:7168/api/v1',
    headers: { 'Cache-Control': 'no-cache' },
});

// api.defaults.headers = {
//     'Cache-Control': 'no-cache',
//     'Pragma': 'no-cache',
//     'Expires': '0',
//   };

export default api;