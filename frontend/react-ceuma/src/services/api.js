import axios from 'axios';
import { PORT } from './constants/'
import { getToken } from './auth'

const api = axios.create({
    baseURL: `http://localhost:${PORT}`,
})
api.interceptors.request.use(async config => {
    const token = getToken();
    if (token) {
        config.headers.Authorization = `Bearer ${token}`;

    }
    return config;
});
export default api;