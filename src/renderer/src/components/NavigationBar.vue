<script setup lang="ts">
import 'mdui/components/top-app-bar.js'
import 'mdui/components/top-app-bar-title.js'
import 'mdui/components/navigation-rail.js'
import 'mdui/components/navigation-rail-item'
import 'mdui/components/fab.js'
import 'mdui/components/button-icon.js'
import router from '@renderer/router'
import { Ref, ref } from 'vue'
import { NavigationRail } from 'mdui'

const rail: Ref<NavigationRail | undefined> = ref()

const onClick = (href: string, id: string): void => {
  router.push(href)
  if (rail.value) {
    rail.value.value = id
  }
}
</script>

<template>
  <mdui-navigation-rail ref="rail" value="home" class="card rail">
    <!-- eslint-disable vue/no-deprecated-slot-attribute -->
    <mdui-avatar slot="top"></mdui-avatar>
    <mdui-button-icon slot="bottom" icon="settings"></mdui-button-icon>

    <mdui-navigation-rail-item
      v-for="item in items_list"
      :key="item.value"
      :icon="item.icon"
      :value="item.value"
      @click="onClick(item.href, item.value.toString())"
      >{{ item.text }}</mdui-navigation-rail-item
    >
  </mdui-navigation-rail>
  <mdui-top-app-bar class="card appbar">
    <mdui-top-app-bar-title>Easy Lite Minecraft Launcher</mdui-top-app-bar-title>
    <div style="flex-grow: 1"></div>
    <div style="display: block; width: 140px"></div>
  </mdui-top-app-bar>
</template>

<script lang="ts">
export default {
  // eslint-disable-next-line @typescript-eslint/explicit-function-return-type
  data() {
    return {
      items_list: [
        {
          value: 'home',
          icon: 'home--outlined',
          text: '首页',
          href: '/'
        },
        {
          value: 'download',
          icon: 'download--outlined',
          text: '下载',
          href: '/download'
        },
        {
          value: 'chat',
          icon: 'chat--outlined',
          text: '聊天',
          href: '/chart'
        },
        {
          value: 'manager',
          icon: 'people--outlined',
          text: '管理',
          href: '/manager'
        }
      ]
    }
  }
}
</script>

<style scoped>
.card {
  backdrop-filter: blur(5px);
  background-color: rgba(var(--mdui-color-surface), 0.8);
}

.appbar {
  user-select: none;
  -webkit-app-region: drag;
  height: 65px;

  mdui-button-icon {
    -webkit-app-region: no-drag;
  }
}
</style>
