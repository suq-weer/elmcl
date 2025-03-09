<script setup lang="ts">
import PlayerCard from '@renderer/components/home/sidebar/PlayerCard.vue'
import AccountStatus from '@renderer/components/home/sidebar/AccountStatus.vue'
import FriendList from '@renderer/components/home/sidebar/FriendList.vue'
import CustomHomeCard from '@renderer/components/home/custom_home/CustomHomeCard.vue'
</script>

<template>
  <div class="main">
    <div class="sidebar">
      <PlayerCard />
      <AccountStatus />
      <FriendList />
    </div>
    <div class="custom-home">
      <CustomHomeCard />
    </div>
  </div>
</template>

<style scoped>
@media screen and (max-width: 800px) {
  .sidebar {
    width: 100%;
  }
  .custom-home {
    width: 100%;
  }
}
@media screen and (min-width: 800px) {
  .sidebar {
    width: calc(40% - 0.5rem);
    display: inline-block;
    vertical-align: top;
  }
  .custom-home {
    width: 60%;
    display: inline-block;
    vertical-align: top;
  }
}
.main {
  animation: up var(--mdui-motion-duration-long1) var(--mdui-motion-easing-emphasized) 0s 1 normal;
}
</style>
