<script setup lang="ts">
import FriendOnline from '@renderer/components/home/sidebar/friend/FriendOnline.vue'
</script>

<template>
  <mdui-card class="main home_base_card">
    <h3>好友列表</h3>
    <mdui-list>
      <FriendOnline />
    </mdui-list>
  </mdui-card>
</template>

<style scoped>
.main {
  padding: 1rem;
  background-color: rgba(var(--mdui-color-surface), 0.5);
  backdrop-filter: blur(8px);
  width: calc(100% - 0.5rem);
}
.home_base_card {
  animation: start var(--mdui-motion-duration-extra-long4) var(--mdui-motion-easing-emphasized) 0s 1
    normal;
}
</style>
