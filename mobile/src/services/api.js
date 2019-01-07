import axios from 'axios';

//Endereço localhost do emulador no android studio: 10.0.2.2
//Endereço localhost do emulador do genymotion: 10.0.3.2

const api = axios.create({
    baseURL: "http://localhost:3000"
});

export default api;