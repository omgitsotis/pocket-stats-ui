import axios from 'axios';

// baseURL: 'https://pocket-stats-server.herokuapp.com/api/pocket'

const instance = axios.create({
    baseURL: 'http://localhost:8080/api/pocket'
});

export default instance;
