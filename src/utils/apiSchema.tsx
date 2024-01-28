export interface ApiResponse<T> {
    status: boolean;
    token?: string;
    result?: Array<T> | T;
    message?: string;
}

export enum PageType {
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
    // TODO: other pages
    // ORDERS = 'ORDERS',
    // ADMIN_NEWS = 'ADMIN_NEWS',
    // ADMIN_CULINARY = 'ADMIN_CULINARY',
    // ADMIN_ROOMS = 'ADMIN_ROOMS',
    // ADMIN_ORDERS = 'ADMIN_ORDERS',
}

export interface Address {
    zipcode: number;
    detail: string;
}

export interface DetailAddress extends Address {
    city: string;
    county: string;
}

export type UserBasicInfo = {
    [property in 'name' | 'email' | 'phone' | 'birthday']: string;
}

export type UpdateUserInfo = {
    [property in 'userId' | 'name' | 'phone' | 'birthday' | 'oldPassword' | 'newPassword']: string;
}

/**
 * api payload structure
 */
export interface RegisterUserInput extends UserBasicInfo {
    password: string;
    address: Address;
}

export interface UpdateUserInput extends UpdateUserInfo {
    address: Address;
}

export interface EmailInput {
    email: string;
}

export type ForgotInput = {
    [property in 'email' | 'code' | 'newPassword']: string;
}

/**
 * api response structure
 */
export interface GetUserInfo extends UserBasicInfo {
    address: DetailAddress;
    _id: string;
    createdAt: string;
    updatedAt: string;
    id: string;
}

export type GetNews = {
    [property in '_id' | 'title' | 'description' | 'image' | 'createdAt' | 'updatedAt']: string;
}

export type GetCulinary = {
    [property in '_id' | 'title' | 'description' | 'diningTime' | 'image' | 'createdAt' | 'updatedAt']: string;
}

export type DisplayData = GetUserInfo | GetNews | GetCulinary;