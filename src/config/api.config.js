/*
*   DEFAULTED ENVIRONMENT IS PRODUCTION
*/
let baseURL = 'https://testmaker.top/api';

/*
*   SETTING ENVIRONMENT IS DEVELOPMENT
*/
if (process.env.NODE_ENV === 'development') {
    baseURL = 'http://localhost:8080/api/v1';
}

export const RootAPI = {
    ADMIN: `${baseURL}/admin`,
    LECTURE: `${baseURL}/lecturer`,
    STUDENT: `${baseURL}/student`
}
