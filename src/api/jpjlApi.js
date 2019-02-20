/*
 * @Author: COCO 
 * @Date: 2018-05-07 15:47:13 
 * @Last Modified by: COCO
 * @Last Modified time: 2018-05-08 11:15:03
 * 键盘精灵组件的所有请求
 */
import request from "./request/request";

class JpjlApi {
  getSearchInfo(params) {
    return request.get("http://www.baidu.com", { data: params });
  }
}

export default new JpjlApi();
