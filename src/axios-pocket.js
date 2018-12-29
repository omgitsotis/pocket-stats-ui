import axios from 'axios';

const instance = axios.create({
    baseURL: 'https://pocket-stats-server.herokuapp.com/api/pocket'
});

export default instance;
