import http from "./httpsService";

export const loginUser = (data) => {
    return http.post('/user/login', data);
}