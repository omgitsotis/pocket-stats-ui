import axios from 'axios';

const instance = axios.create({
    baseURL: 'https://pocket-stats-server.herokuapp.com/api/pocket',
    headers: {
        'Authorization': `Basic ${process.env.auth}`
    }
});

export default instance;
