import useSWR from 'swr';
import axios from 'axios';
import { BASE_URL, URL_PATH } from './constants'
import { ApiResponse, PageType, DisplayData} from './apiSchema';

const getFetcher = (url: string) => axios.get(url).then(res => res.data);
const postFetcher = (url: string, body: {[key: string]: any}) => axios.post(url, body).then(res => res.data);

export function getData (PageType: PageType) {
  const { data, error, isLoading } = useSWR<ApiResponse<DisplayData>, Error>(`${BASE_URL}${URL_PATH[PageType]}`, getFetcher)
 
  return {
    data: data,
    isLoading,
    isError: error
  }
}

export function postData (PageType: PageType, body: {[key: string]: any}) {
  const { data, error, isLoading } = useSWR<ApiResponse<DisplayData>, Error>([`${BASE_URL}${URL_PATH[PageType]}`, body], ([url, body]) => postFetcher(url as string, body as {[key: string]: any}))
 
  return {
    data: data,
    isLoading,
    isError: error
  }
}