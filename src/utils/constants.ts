export const BASE_URL = 'https://freyja-5uc9.onrender.com/api/v1/';

export enum UrlPath {
    USER_LOGIN = 'USER_LOGIN',
    USER_SIGNUP = 'USER_SIGNUP',
    USER_FORGOT = 'USER_FORGOT',
    USER_CHECK = 'USER_CHECK',
    USER = 'USER',
    VERIFY_EMAIL = 'VERIFY_EMAIL',
    VERIFY_GENERATE_EMAL_CODE = 'VERIFY_GENERATE_EMAL_CODE',
    HOME_NEWS = 'HOME_NEWS',
    HOME_CULINARY = 'HOME_CULINARY',
    ROOMS = 'ROOMS',
    ORDERS = 'ORDERS',
    ADMIN_NEWS = 'ADMIN_NEWS',
    ADMIN_CULINARY = 'ADMIN_CULINARY',
    ADMIN_ROOMS = 'ADMIN_ROOMS',
    ADMIN_ORDERS = 'ADMIN_ORDERS',
}

export const URL_PATH = {
    [UrlPath.USER_LOGIN]: 'user/login',
    [UrlPath.USER_SIGNUP]: 'user/signup',
    [UrlPath.USER_FORGOT]: 'user/forgot',
    [UrlPath.USER_CHECK]: 'user/check',
    [UrlPath.USER]: 'user',
    [UrlPath.VERIFY_EMAIL]: 'verify/email',
    [UrlPath.VERIFY_GENERATE_EMAL_CODE]: 'verify/generateEmailCode',
    [UrlPath.HOME_NEWS]: 'home/news',
    [UrlPath.HOME_CULINARY]: 'home/culinary',
    [UrlPath.ROOMS]: 'rooms',
}