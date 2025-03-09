<script setup lang="ts"></script>

<template>
  <mdui-card class="main home_base_card">
    <div class="player">
      <mdui-avatar style="border-radius: var(--mdui-shape-corner-medium)"></mdui-avatar>
      <h1>XiaosuLikeJvav</h1>
      <div class="action">
        <mdui-button-icon icon="supervised_user_circle"></mdui-button-icon>
        <mdui-button-icon icon="more_horiz"></mdui-button-icon>
      </div>
    </div>
  </mdui-card>
</template>

<style scoped>
.main {
  padding: 1rem;
  background-color: rgba(var(--mdui-color-surface), 0.5);
  backdrop-filter: blur(8px);
  width: calc(100% - 0.5rem);

  .player {
    text-align: center;
    margin: 1rem;

    mdui-avatar {
      width: 5rem;
      height: 5rem;
    }

    .action {
      display: inline;
    }
  }
}
.home_base_card {
  animation: start var(--mdui-motion-duration-extra-long4) var(--mdui-motion-easing-emphasized) 0s 1
    normal;
}
</style>
