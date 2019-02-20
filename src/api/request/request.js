/*
 * @Author: COCO 
 * @Date: 2018-05-07 13:11:41 
 * @Last Modified by: COCO
 * @Last Modified time: 2018-05-16 15:04:29
 * http请求封装
 */
import axios from "axios";
const instanceAxios = axios.create({
  timeout: 10000
});

//请求拦截器，根据后端返回的数据做统一处理
instanceAxios.interceptors.request.use(
  req => {

    return req;
  },
  error => {
    return Promise.reject(error);
  }
);

//响应拦截器，根据后端返回的数据做统一处理
instanceAxios.interceptors.response.use(
  res => {
    //TODO:根据数据做处理
    return res;
  },
  error => {
    return Promise.reject(error);
  }
);
export default instanceAxios;
