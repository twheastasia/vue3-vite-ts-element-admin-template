/*
 * @Descripttion: 
 * @version: 
 * @Author: weihai.tang
 * @Date: 2021-04-28 16:07:30
 * @LastEditTime: 2021-04-30 18:16:46
 */
const getters = {
  sidebar: (state: any) => state.app.sidebar,
  device: (state: any) => state.app.device,
  token: (state: any) => state.user.token,
  avatar: (state: any) => state.user.avatar,
  name: (state: any) => state.user.name,
  roles: (state: any) => state.user.roles,
  addRouters: (state: any) => state.permission.addRouters,
  permissionRouters: (state: any) => state.permission.routers
}
export default getters
