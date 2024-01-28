import { PageType } from './apiSchema';

export const BASE_URL = 'https://freyja-5uc9.onrender.com/api/v1/';

export const URL_PATH = {
    [PageType.USER_LOGIN]: 'user/login',
    [PageType.USER_SIGNUP]: 'user/signup',
    [PageType.USER_FORGOT]: 'user/forgot',
    [PageType.USER_CHECK]: 'user/check',
    [PageType.USER]: 'user',
    [PageType.VERIFY_EMAIL]: 'verify/email',
    [PageType.VERIFY_GENERATE_EMAL_CODE]: 'verify/generateEmailCode',
    [PageType.HOME_NEWS]: 'home/news',
    [PageType.HOME_CULINARY]: 'home/culinary',
    [PageType.ROOMS]: 'rooms',
}