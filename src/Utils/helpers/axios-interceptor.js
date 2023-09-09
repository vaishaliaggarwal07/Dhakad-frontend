import axios from "axios";
axios.defaults.withCredentials = true
axios.interceptors.request.use(
    config => {
        const token = localStorage.getItem('token');
        if (token) {
            config.headers['Authorization'] = 'Bearer ' + token
        }
        return config
    },
    error => {
        console.error('index:interceptor error: ', error);
    }
)


