<script lang="ts" setup></script>

<template>
  <mdui-collapse class="home_base_card">
    <mdui-collapse-item class="home_card" value="1">
      <!-- eslint-disable vue/no-deprecated-slot-attribute -->
      <mdui-list-item slot="header" class="home_collapse" end-icon="arrow_drop_down"
        >公告
      </mdui-list-item>
      <mdui-card class="home_item"> </mdui-card>
    </mdui-collapse-item>
  </mdui-collapse>
</template>

<script></script>

<style scoped>
.home_card {
  /* div -> mdui-card */
  background: rgba(var(--mdui-color-surface), 0.5);
  border-radius: var(--mdui-shape-corner-medium);
  box-shadow: var(--mdui-elevation-level1);
  display: block;
  width: 100%;
  height: auto;
  margin-bottom: 1rem;
  backdrop-filter: blur(10px);
}

.home_item {
  display: inline-grid;
  width: calc(100% - 2rem);
  margin: 1rem;
}
.home_base_card {
  animation: start var(--mdui-motion-duration-extra-long4) var(--mdui-motion-easing-emphasized) 0s 1
    normal;
}
</style>
