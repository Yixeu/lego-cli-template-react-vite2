/*
 * @Author: adam.cong
 * @Date: 2020-08-11 16:50:28
 * @Description:
 * @LastUpdate:
 * @LastEditTime: 2020-08-13 14:19:52
 */
declare module '*.less';

declare module '*.scss';

declare module '*.svg';

declare module '*.png';

declare module '*.jpg';

declare module '*.jpeg';

declare module '*.gif';

declare module '*.md' {
  const content: string;
  export default content;
}

declare module 'rc-form' {
  export const createForm: any;
  export const createFormField: any;
  export const formShape: any;
}
