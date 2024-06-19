import axios, { AxiosInstance, AxiosResponse } from "axios";

const instance: AxiosInstance = axios.create({
  baseURL: `https://api.learncloud.click/`,
  //   withCredentials: true,
  headers: {
    Accept: "application/json",
    "Content-Type": "application/json",
  },
});

instance.interceptors.request.use(
  async (config: any) => {
    // const token = localStorage.getItem("token");
    // if (token) {
    //   const accessToken = JSON.parse(token)?.accessToken;
    //   if (accessToken) {
    //     config.headers.Authorization = `Bearer ${accessToken}`;
    //   }
    // }
    return config;
  },
  (err) => {
    return Promise.reject(err);
  }
);

instance.interceptors.response.use(
  async (response: AxiosResponse): Promise<any> => {
    const { data } = response;
    const errorType = data?.errorType;
    if (errorType || response.status < 200 || response.status >= 300) {
      if (
        errorType === "ACCESS_TOKEN_EXPIRED" ||
        errorType === "UNAUTHORIZED"
      ) {
        // store.dispatch(logout());
      }
      return Promise.reject(data);
    }

    return Promise.resolve(data);
  },
  (err) => {
    return Promise.reject(err);
  }
);

export const get = async (url: string, params: any = {}): Promise<any> => {
  return await instance.get(url, { params });
};
