import axios from "axios";

const apiPublic = axios.create({
  baseURL: process.env.THEME_API,
});

const usePublicApi = () => {
  apiPublic.interceptors.response.use(
    (res) => {
      //   console.log('Interceptor result: ', res);
      return res;
    },
    async (error) => {
      console.log("Axios Interceptor error:  ", error);
      if (
        error.response &&
        (error.response.status === 401 || error.response.status === 403)
      ) {
        // Uncomment and define these functions if necessary
        // logOutAcc();
        // navigate("/login");
      }
      return Promise.reject(error);
    }
  );
  return apiPublic;
};

export default usePublicApi;
