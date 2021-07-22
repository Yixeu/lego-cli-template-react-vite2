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
