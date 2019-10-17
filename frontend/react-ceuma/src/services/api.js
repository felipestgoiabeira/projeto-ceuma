import axios from 'axios';

const api = axios.create({
    baseURL: 'http://localhost:3285',
})
export default api;