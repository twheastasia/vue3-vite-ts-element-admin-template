/*
 * @Descripttion: 
 * @version: 
 * @Author: weihai.tang
 * @Date: 2021-04-28 16:07:30
 * @LastEditTime: 2021-04-30 14:54:29
 */
import defaultSettings from '@/settings'

const title = defaultSettings.title || 'Vue Admin Template'

export default function getPageTitle(pageTitle: string | unknown) {
  if (pageTitle) {
    return `${pageTitle} - ${title}`
  }
  return `${title}`
}
