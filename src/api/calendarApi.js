import axios from "axios";
import { getEnv } from "../helpers";

const {VITE_API_URL} = getEnv();

const calenadrApi = axios.create({
    baseURL: VITE_API_URL
})

calenadrApi.interceptors.request.use( config => {
    config.headers = {
        ...config.headers,
        'x-token': localStorage.getItem('token')
    }
    return config
})

export default calenadrApi;