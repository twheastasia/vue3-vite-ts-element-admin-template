/*
 * @Descripttion: 
 * @version: 
 * @Author: weihai.tang
 * @Date: 2021-04-28 16:07:30
 * @LastEditTime: 2021-05-06 10:02:48
 */

import Cookies from 'js-cookie';

const TokenKey = 'vue_admin_template_token'

export function getToken() {
  return Cookies.get(TokenKey)
}

export function setToken(token: string) {
  return Cookies.set(TokenKey, token)
}

export function removeToken() {
  return Cookies.remove(TokenKey)
}

export const ADMIN_PERMISSIONS = {
  ADMIN: { en: 'ADMIN', cn: '管理员' }
}
