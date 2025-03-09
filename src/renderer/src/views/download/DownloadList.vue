<script setup lang="ts">
import { onMounted, ref, onUnmounted, watch } from 'vue'
import { getModrinthProjects } from '@renderer/display/download/modrinthList'
import { DownloadBaseList } from '@renderer/display/download/baseList'

const props = defineProps({
  category: String
})

const projects = ref<DownloadBaseList['list']>()
const currentCategory = ref('')
let offset = 0 // 添加 offset 变量
let loading = ref(false)

const fetchProjects = async (offset: number): Promise<void> => {
  try {
    let response: DownloadBaseList | { list: [] } = { list: [] }
    if (props.category === 'mod') {
      currentCategory.value = '模组'
      response = await getModrinthProjects(['project_type=mod'], offset, 10)
    }
    if (props.category === 'shader') {
      currentCategory.value = '光影'
      response = await getModrinthProjects(['project_type=shader'], offset, 10)
    }
    if (props.category === 'resourcepack') {
      currentCategory.value = '资源包'
      response = await getModrinthProjects(['project_type=resourcepack'], offset, 10)
    }
    if (props.category === 'datapack') {
      currentCategory.value = '数据包'
      response = await getModrinthProjects(['project_type=datapack'], offset, 10)
    }
    if (props.category === 'modpack') {
      currentCategory.value = '整合包'
      response = await getModrinthProjects(['project_type=datapack'], offset, 10)
    }

    if (response && Array.isArray(response.list)) {
      if (projects.value) {
        projects.value = [...projects.value, ...response.list]
      } // 合并新数据
      loading.value = false
    } else {
      console.error('Invalid or empty response:', response)
    }
  } catch (error) {
    console.error('Failed to fetch Modrinth projects:', error)
  }
}

const handleScroll = (event: Event): void => {
  const scrollContainer = event.target as HTMLElement
  if (
    scrollContainer.scrollTop + scrollContainer.clientHeight + 1 >= scrollContainer.scrollHeight &&
    loading.value === false
  ) {
    console.log('Scroll event triggered')
    loading.value = true
    fetchProjects(offset)
    offset += 10 // 增加 offset
  }
}

const scrollContainer = ref<HTMLElement | null>(null)

onMounted(() => {
  fetchProjects(offset)
  offset += 10 // 增加 offset

  if (scrollContainer.value) {
    scrollContainer.value.addEventListener('scroll', handleScroll)
  }
})

onUnmounted(() => {
  if (scrollContainer.value) {
    scrollContainer.value.removeEventListener('scroll', handleScroll)
  }
})

// 添加 watch 监听 category 变化
watch(
  () => props.category,
  (newCategory) => {
    console.log('Category changed to:', newCategory)
    projects.value = [] // 清空现有项目列表
    offset = 0 // 重置 offset
    fetchProjects(offset) // 重新获取项目数据
    offset += 20 // 增加 offset
  }
)
</script>

<template>
  <h2 class="title">
    {{ currentCategory }}
    <span
      ><mdui-circular-progress
        v-if="loading"
        style="animation: none; width: 1rem"
      ></mdui-circular-progress
    ></span>
  </h2>
  <div id="scrollContainer" ref="scrollContainer" style="overflow-y: auto; height: 90%">
    <mdui-list>
      <mdui-list-item v-for="project in projects" :key="project.project_id" class="list-item">
        <b>{{ project.title }}</b>
        <!-- eslint-disable vue/no-deprecated-slot-attribute -->
        <mdui-avatar
          slot="icon"
          :src="project.icon_url"
          style="border-radius: var(--mdui-shape-corner-small)"
        ></mdui-avatar>
        <span slot="description">{{ project.description }} <br /></span>
        <span slot="description">
          <mdui-icon name="settings" style="font-size: small"></mdui-icon>
          <span>{{ project.versions }}</span> <span> </span>
          <mdui-icon name="downloads" style="font-size: small"></mdui-icon>
          <span>{{ project.downloads }}</span> <span> </span>
          <mdui-icon name="person_add" style="font-size: small"></mdui-icon>
          <span>{{ project.follows }}</span>
          <br />
          <mdui-icon name="archives" style="font-size: medium"></mdui-icon>
          <mdui-chip
            v-for="once in project.display_categories"
            :key="once"
            style="height: 1.5rem; margin: 0.145rem 0.145rem 0"
            elevated
            disabled
            >{{ once }}</mdui-chip
          >
        </span>
      </mdui-list-item>
    </mdui-list>
  </div>
</template>

<style scoped>
* {
  animation: up var(--mdui-motion-duration-extra-long1) var(--mdui-motion-easing-emphasized) 0s 1
    normal;
}
.title {
  margin-left: 1.5rem;
}
.list-item {
  display: flex;
  align-items: center;
}
</style>
