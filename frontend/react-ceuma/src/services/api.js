import axios from 'axios';

const api = axios.create({
    baseURL: 'http://localhost:3346',
})
export default api;