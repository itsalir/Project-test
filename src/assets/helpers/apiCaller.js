import Axios from "axios";

const ApiCaller = apiCallerConfig => {
  Axios.interceptors.request.use(
    async config => {
      return config;
    },
    error => {
      return Promise.reject(error);
    }
  );
  Axios.interceptors.response.use(
    response => {
      return response;

    },
    error => {
      if (!error.response) {

        // this.$vToastify.error("Internet access error");
        return error;
      }
      if (error.response.status >= 500) {
        // this.$vToastify.error("Server internal error");
        return error;
      }
      if (error.response.status === 401) {
      //  this.$vToastify.error("Access denied");
        return 401;
      }

      if (error.response.status === 406) {
      //  this.$vToastify.error("Not Acceptabl");
        return 406;
      }
      if (error.response.status === 404) {
       // this.$vToastify.error("Not Found");
        return 404;
      }
      return error.response;
    }
  );
  return Axios.request(apiCallerConfig);
};

export default ApiCaller;
