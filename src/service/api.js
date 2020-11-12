import axios from 'axios';

let api = axios.create({
    baseURL: 'https://gateway.marvel.com:443/v1',
});

export default api;
