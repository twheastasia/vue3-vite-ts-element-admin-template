<!--
 * @Descripttion: 
 * @version: 
 * @Author: weihai.tang
 * @Date: 2021-04-28 16:07:30
 * @LastEditTime: 2021-04-30 15:26:09
-->
<template>
  <section class="app-main">
    <router-view :key="key" v-slot="{ Component }">
      <transition appear name="fade-transform" mode="out-in">
        <keep-alive>
          <component :is="Component" />
        </keep-alive>
      </transition>
    </router-view>
  </section>
</template>

<script>
import { computed, defineComponent } from "vue";
import { useRoute } from "vue-router";

export default defineComponent({
  name: 'AppMain',
  setup(_, ctx) {
    const route = useRoute()
    const key = computed(() => route.path)

    return { key }
  }
})
</script>

<style scoped>
.app-main {
  /*50 = navbar  */
  min-height: calc(100vh - 50px);
  width: 100%;
  position: relative;
  overflow: hidden;
}
.fixed-header + .app-main {
  padding-top: 50px;
}
</style>

<style lang="scss">
// fix css style bug in open el-dialog
.el-popup-parent--hidden {
  .fixed-header {
    padding-right: 15px;
  }
}
</style>
