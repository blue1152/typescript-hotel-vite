import axios, { AxiosError } from 'axios';
import { BASE_URL, URL_PATH } from './constants'
import { ApiResponse, GetData, PageType, DisplayData} from './apiSchema';

const getFetcher = (url: string) => axios.get<ApiResponse<DisplayData>>(url);
const getWithTokenFetcher = (url: string, token: string) => axios.get<ApiResponse<DisplayData>>(url, {
    headers: {
        Authorization: `Bearer ${token}`,
    }
});
const postFetcher = (url: string, body: { [key: string]: any }) => axios.post<ApiResponse<DisplayData>>(url, body);

export async function getData(PageType: PageType): Promise<GetData<DisplayData>> {
    try {
        const { data } = await getFetcher(`${BASE_URL}${URL_PATH[PageType]}`);
        return { success: true, data: data, err: null };
    } catch (err) {
        const error = err as AxiosError;
        console.error('[fetch Failed]:', error.message);
        return { success: false, data: null, err: error.response?.data };
    }
}

export async function getDataWithToken(PageType: PageType, token: string): Promise<GetData<DisplayData>> {
    try {
        const { data } = await getWithTokenFetcher(`${BASE_URL}${URL_PATH[PageType]}`, token);
        return { success: true, data: data, err: null };
    } catch (err) {
        const error = err as AxiosError;
        console.error('[fetch Failed]:', error.message);
        return { success: false, data: null, err: error.response?.data };
    }
}

export async function postData (PageType: PageType, body: {[key: string]: any}): Promise<GetData<DisplayData>> {
    try {
        const { data } = await postFetcher(`${BASE_URL}${URL_PATH[PageType]}`, body);
        return { success: true, data: data, err: null };
    } catch (err) {
        const error = err as AxiosError;
        console.error('[fetch Failed]:', error.message);
        return { success: false, data: null, err: error.response?.data };
    }
}