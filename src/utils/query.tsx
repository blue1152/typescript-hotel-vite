import useSWR from 'swr';
import axios from 'axios';

const getFetcher = (url: string) => axios.get(url).then(res => res.data);