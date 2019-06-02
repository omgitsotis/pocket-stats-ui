import axios from 'axios';

const instance = axios.create({
    baseURL: 'https://pocket-stats-server.herokuapp.com/api/pocket',
    headers: {
        'Authorization': 'Basic b3Rpczo0dTNzYlFhUXhhQTVKSlBsakRMZVRLbk03'
    }
});

export default instance;
