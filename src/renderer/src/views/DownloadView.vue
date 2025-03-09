<script setup lang="ts">
import { Icon } from '@iconify/vue'
import router from '@renderer/router'
import { ref } from 'vue'
import { Tabs } from 'mdui'

const tabs = ref<Tabs>()

function onClick(href: string, id: string): void {
  router.push(href)
  if (tabs.value) {
    tabs.value.value = id
  }
}

if (tabs.value) {
  tabs.value.value = 'tab-2'
}

router.push('/download/mod')
</script>

<template>
  <mdui-card class="main">
    <div class="sidebar">
      <mdui-tabs ref="tabs" value="tab-2" variant="secondary" placement="top-start">
        <mdui-tab value="tab-1">游戏</mdui-tab>
        <mdui-tab value="tab-2">附加项</mdui-tab>

        <!-- eslint-disable vue/no-deprecated-slot-attribute -->
        <mdui-tab-panel slot="panel" value="tab-1">
          <mdui-list>
            <mdui-list-item>
              <Icon
                slot="icon"
                icon="mdi:minecraft"
                style="color: rgba(var(--mdui-color-on-surface-variant)); font-size: 1.5rem"
              />
              Minecraft
            </mdui-list-item>
            <mdui-list-item @click="onClick('/download/modpack', 'tab-1')">
              <Icon
                slot="icon"
                icon="mdi:cube"
                style="color: rgba(var(--mdui-color-on-surface-variant)); font-size: 1.5rem"
              />
              整合包
            </mdui-list-item>
          </mdui-list>
        </mdui-tab-panel>
        <mdui-tab-panel slot="panel" value="tab-2">
          <mdui-list>
            <mdui-list-item @click="onClick('/download/mod', 'tab-2')">
              <Icon
                slot="icon"
                icon="mdi:package-variant"
                style="color: rgba(var(--mdui-color-on-surface-variant)); font-size: 1.5rem"
              />
              模组
            </mdui-list-item>
            <mdui-list-item @click="onClick('/download/shader', 'tab-2')">
              <Icon
                slot="icon"
                icon="mdi:box-shadow"
                style="color: rgba(var(--mdui-color-on-surface-variant)); font-size: 1.5rem"
              />
              光影
            </mdui-list-item>
            <mdui-list-item @click="onClick('/download/resourcepack', 'tab-2')">
              <Icon
                slot="icon"
                icon="mdi:lotion-plus"
                style="color: rgba(var(--mdui-color-on-surface-variant)); font-size: 1.5rem"
              />
              资源包
            </mdui-list-item>
            <mdui-list-item @click="onClick('/download/datapack', 'tab-2')">
              <Icon
                slot="icon"
                icon="mdi:database-cog"
                style="color: rgba(var(--mdui-color-on-surface-variant)); font-size: 1.5rem"
              />
              数据包
            </mdui-list-item>
          </mdui-list>
        </mdui-tab-panel>
      </mdui-tabs>
    </div>
    <div class="list">
      <router-view />
    </div>
  </mdui-card>
</template>

<style scoped>
.main {
  animation: up var(--mdui-motion-duration-long1) var(--mdui-motion-easing-emphasized) 0s 1 normal;
  width: calc(100% - 0.5rem);
  height: 100%;
  padding: 1rem;
  background-color: rgba(var(--mdui-color-surface), 0.5);
  backdrop-filter: blur(10px);
}
.sidebar {
  width: calc(30% - 0.5rem);
  height: 100%;
  display: inline-block;
  vertical-align: top;

  mdui-tabs {
    --mdui-color-surface: 0, 0, 0, 0;
    height: 100%;
  }
}
.list {
  width: calc(70% - 0.5rem);
  height: calc(100% - 1rem);
  display: inline-block;
  vertical-align: top;
}
</style>
