import axios from 'axios';

const axiosSecrectUrl = axios.create({
  baseURL: `${import.meta.env.VITE_BASEURL}`,
});

const useAxiosSecretBaseUrl = () => {
  return axiosSecrectUrl;
};

export default useAxiosSecretBaseUrl;
