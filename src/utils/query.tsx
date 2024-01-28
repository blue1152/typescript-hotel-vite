import useSWR from 'swr';
import axios from 'axios';

const getFetcher = (url: string) => axios.get(url).then(res => res.data);
// const postFetcher = (url: string) => axios.get(url).then(res => res.data);

// export function useUser (id) {
//   const { data, error, isLoading } = useSWR(`/api/user/${id}`, getFetcher)
 
//   return {
//     user: data,
//     isLoading,
//     isError: error
//   }
// }