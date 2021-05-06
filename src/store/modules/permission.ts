/*
 * @Descripttion: 
 * @version: 
 * @Author: weihai.tang
 * @Date: 2021-04-30 18:06:08
 * @LastEditTime: 2021-05-06 10:05:33
 */
import { asyncRouterMap, constantRoutes } from '@/router'
import { ADMIN_PERMISSIONS } from '@/utils/auth'

/**
 * 通过meta.role判断是否与当前用户权限匹配
 * @param roles
 * @param route
 */
function hasPermission(roles: string[], route: any) {
  if (route.meta && route.meta.roles) {
    return roles.some(role => route.meta.roles.includes(role))
  } else {
    return true
  }
}

/**
 * 递归过滤异步路由表，返回符合用户角色权限的路由表
 * @param routes asyncRouterMap
 * @param roles
 */
function filterAsyncRouter(routes: any, roles: string[]) {
  const res: object[] = []
  routes.forEach((route: any) => {
    const tmp = { ...route }
    if (hasPermission(roles, tmp)) {
      if (tmp.children) {
        tmp.children = filterAsyncRouter(tmp.children, roles)
      }
      res.push(tmp)
    }
  })
  return res
}

const permission = {
  state: {
    routers: [],
    addRouters: []
  },
  mutations: {
    SET_ROUTERS: (state: any, routers: any) => {
      state.addRouters = routers
      state.routers = constantRoutes.concat(routers)
    }
  },
  actions: {
    GenerateRoutes({ commit }: any, data: any) {
      return new Promise(resolve => {
        const { roles } = data
        let accessedRouters
        if (roles.includes(ADMIN_PERMISSIONS.ADMIN.en)) {
          accessedRouters = asyncRouterMap
        } else {
          accessedRouters = filterAsyncRouter(asyncRouterMap, roles)
        }
        commit('SET_ROUTERS', accessedRouters)
        resolve(data)
      })
    }
  }
}

export default permission
