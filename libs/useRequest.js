import useSWR from 'swr';
import axios from './axios';

export default function useRequest(request, { initialData, ...config } = {}) {
  return useSWR(
    request && JSON.stringify(request),
    () => axios(request || {}).then(response => response.data),
  )
}
