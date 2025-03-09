<script setup lang="ts">
import NavigationBar from './components/NavigationBar.vue'
import 'mdui/components/layout-main.js'
import 'mdui/components/layout'
</script>

<template>
  <div ref="background" class="background"></div>
  <mdui-layout>
    <NavigationBar />
    <mdui-layout-main style="margin: 0.5rem">
      <router-view />
    </mdui-layout-main>
  </mdui-layout>
</template>

<style>
mdui-layout {
  height: 100vh;
}
.background {
  background-image: url('assets/background/arisu.png');
  background-size: cover;
  background-position: center;
  background-repeat: no-repeat;
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  z-index: -1;
}
@media (prefers-color-scheme: dark) {
  .background {
    filter: brightness(0.3);
  }
}
@media (prefers-color-scheme: light) {
  .background {
    filter: brightness(1);
  }
}
</style>
