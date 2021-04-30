/*
 * @Descripttion: 
 * @version: 
 * @Author: weihai.tang
 * @Date: 2021-04-30 16:01:49
 * @LastEditTime: 2021-04-30 16:20:05
 */
import { computed } from 'vue'
import { isExternal as _isExternal } from '@/utils/validate'

export default function useIcon(props: any) {
  return {
    isExternal: _isExternal(props.iconClass),
    iconName: computed(() => `#icon-${props.iconClass}`),
    svgClass: computed(() => {
      if (props.className) {
        return 'svg-icon ' + props.className
      } else {
        return 'svg-icon'
      }
    }),
    styleExternalIcon: computed(() => {
      return {
        mask: `url(${props.iconClass}) no-repeat 50% 50%`,
        '-webkit-mask': `url(${props.iconClass}) no-repeat 50% 50%`
      }
    })
  }
}