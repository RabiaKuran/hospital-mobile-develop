import { Config } from "./Config";
import axios from "axios";
import TokenHelper from "../helper/TokenHelper";

interface ICallConfig {
  disabledIncerceptors: boolean;
}
interface IApiClient {
  get: (relativePath: string, data?: any) => Promise<any>;
  post: (relativePath: string, data?: any) => Promise<any>;
  put: (relativePath: string, data?: any) => Promise<any>;
  delete: (relativePath: string, data?: any) => Promise<any>;
}
axios.interceptors.request.use(
  function (config: any) {
    /* if (!TokenHelper.isValid()) {
       RedirectHelper.redirect("/");
     }*/
    config.headers.common["Authorization"] = `Bearer ${TokenHelper.getToken()}`;
    return config;
  },
  function (error) {
    return Promise.reject(error);
  }
);

const ApiClient: IApiClient = {
  get: async (relativePath: string, data?: any) => {
    const url = `${Config?.API_ENDPOINT_URL}${relativePath}`;
    let config;
    config = {
      params: { ...data },
    };
    return axios.get(url, config);
  },
  post: function (relativePath: string, data: any): Promise<any> {
    const url = `${Config?.API_ENDPOINT_URL}${relativePath}`;
    return axios.post(url, data);
  },
  put: function (relativePath: string, data: any): Promise<any> {
    const url = `${Config?.API_ENDPOINT_URL}${relativePath}`;
    return axios.put(url, data);
  },
  delete: function (relativePath: string, data: any): Promise<any> {
    const url = `${Config?.API_ENDPOINT_URL}${relativePath}`;
    let config;
    config = {
      params: { ...data },
    };
    return axios.delete(url, config);
  }
};

export default ApiClient;