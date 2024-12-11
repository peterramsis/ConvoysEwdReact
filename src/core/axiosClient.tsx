import axios from "axios";

const axiosClient  = axios.create({
    baseURL: 'https://adminconvoys.ewdclinic.com/api'
});

axiosClient.interceptors.request.use((config) => {
    const token = localStorage.getItem("token");
    config.headers.Authorization = `Bearer ${token}`;
    config.headers.lan = "ar";
    return config;
});

axiosClient.interceptors.response.use(
    (response) => {
        console.log(response);
        return response;
    },
    (error) => {
        
        try {
            const { response } = error;
            console.log(response);
            if (response.status === 401) {
                localStorage.removeItem("token");
            }
        } catch (err) {
            console.error(err);
        }
        throw error;
    }
);

export default axiosClient;