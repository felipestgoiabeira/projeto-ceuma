import axios from 'axios';

const api = axios.create({
    baseURL: 'http://localhost:3345',
})
export default api;