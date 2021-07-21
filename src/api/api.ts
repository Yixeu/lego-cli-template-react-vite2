/*
 * @Author: adam.cong
 * @Date: 2019-12-24 18:29:41
 * @Description:
 * @LastUpdate:
 * @LastEditTime: 2021-07-21 14:37:16
 */
import { request } from '@/api/base';

//  post 请求处理方法
const _postUserInfo = (data: {
  account: string;
  pwd: string;
}) => request('/xxx/xxx/xx', {
  method: 'post',
  data,
});

//  get 请求处理方法
const _getUserInfo = (data: {
  account: string, pwd: string
}) => request(
  `/xxx/xxx/xx?account=${data.account}&pwd=${data.pwd}}`,
  {
    method: 'get',
  },
);

export {
  _postUserInfo,
  _getUserInfo,
};
