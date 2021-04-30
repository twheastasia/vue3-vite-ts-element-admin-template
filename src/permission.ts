import router from './router';
import store from './store';
import { ElMessage } from 'element-plus';
import NProgress from 'nprogress'; // progress bar
import 'nprogress/nprogress.css'; // progress bar style
import { getToken } from '@/utils/auth'; // get token from cookie
import getPageTitle from '@/utils/get-page-title';
import { encode } from 'url-encode-decode';

NProgress.configure({ showSpinner: false }); // NProgress Configuration

const whiteList = ['/login']; // no redirect whitelist

router.beforeEach(async (to, from, next) => {
  // start progress bar
  NProgress.start();

  // set page title
  document.title = getPageTitle(to.meta.title);

  // determine whether the user has logged in
  const hasToken = getToken();

  if (hasToken) {
    if (to.path === '/login') {
      // if is logged in, redirect to the home page
      next({ path: '/' });
      NProgress.done();
    } else {
      const hasGetUserInfo = store.getters.name;
      if (hasGetUserInfo) {
        next();
      } else {
        try {
          // get user info
          await store.dispatch('user/getInfo');
          next();
        } catch (error) {
          // remove token and go to login page to re-login
          await store.dispatch('user/resetToken');
          ElMessage.error(error || 'Has Error');
          next(`/login?redirect=${to.path}`);
          NProgress.done();
        }
      }
    }
  } else {
    /* has no token*/
    if (whiteList.indexOf(to.path) !== -1) {
      // in the free login whitelist, go directly
      next();
    } else {
      // 先把path后面的query参数编码一下，再当作参数传过去
      let queryStr = '';
      if (to.fullPath.indexOf('?') !== -1) {
        queryStr = encode(to.fullPath.split('?')[1]);
      }
      // 否则全部重定向到登录页
      const nextPath = queryStr === '' ? `/login?redirect=${to.path}` : `/login?redirect=${to.path}?${queryStr}`;
      next(nextPath);
      NProgress.done();
    }
  }
})

router.afterEach(() => {
  // finish progress bar
  NProgress.done();
})
