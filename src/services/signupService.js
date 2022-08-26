import http from "./httpsService.js";

export const signupUser = (data) => {
    return http.post('/user/register', data);
}