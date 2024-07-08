import axios from "axios";
const apiSecure = axios.create({
  baseURL: process.env.THEME_API,
});

const useSecureApi = () => {
  return apiSecure;
};

export default useSecureApi;
