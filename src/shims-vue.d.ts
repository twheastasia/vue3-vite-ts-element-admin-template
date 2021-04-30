/*
 * @Descripttion: 
 * @version: 
 * @Author: weihai.tang
 * @Date: 2021-04-28 16:07:30
 * @LastEditTime: 2021-04-30 14:25:57
 */
declare module '*.vue' {
  import { defineComponent } from 'vue';
  const Component: ReturnType<typeof defineComponent>;
  export default Component;
}

declare module 'nprogress';
declare module 'url-encode-decode';
declare module 'js-cookie';
