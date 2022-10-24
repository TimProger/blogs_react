import axios from "axios";

export const API_BASE_URL = "https://ithub-blog.herokuapp.com";

export const $api = axios.create({
  baseURL: API_BASE_URL
});

const authInterceptor = (config) => {
  config.headers.Authorization = localStorage.getItem("accessToken");
  return config;
};

$api.interceptors.request.use(authInterceptor)

$api.interceptors.response.use((config) => {
    return config;
},async (error) => {
    const originalRequest = error.config;
    if (error.response.status === 401 && error.config && !error.config._isRetry) {
        originalRequest._isRetry = true;
        try {
            let refresh = localStorage.getItem('refreshToken').split(' ').pop()
            const response = await axios.post(`${API_BASE_URL}/api/jwt/refresh`, {refresh}, {withCredentials: true})
            localStorage.setItem('accessToken', 'Bearer ' + response.data.access);
            originalRequest.headers.Authorization = 'Bearer ' + response.data.access
            return $api.request(originalRequest);
        } catch (e) {
            alert('Ошибка авторизации')
            localStorage.clear()
            window.location.replace('/')
        }
    }
    throw error;
})