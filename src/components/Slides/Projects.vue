<template>
  <div class="app__slide">
    <div class="app__slide__content">
      <div class="space-y-12 mb-12">
        <div class="mb-4 leading-none">
          <h2>Projects</h2>
          <span class="text-xs">Notable public projects I made at work</span>
        </div>

        <template
          v-for="(project, index) in workProjects"
          :key="project.id"
        >
          <AppProjectPreview
            :index="index"
            :data="project"
            class="sr-hook"
          />

          <div class="text-4xl my-4 sr-hook">
            ***
          </div>
        </template>
      </div>

      <div class="space-y-12">
        <div class="mb-4 leading-none">
          <h2>Side Projects</h2>
          <span class="text-xs">some of the projects that I'm proud of</span>
        </div>

        <template
          v-for="(project, index) in sideProjects"
          :key="project.id"
        >
          <AppProjectPreview
            :index="workProjects.length + index"
            :data="project"
            class="sr-hook"
          />

          <div class="text-4xl my-4 sr-hook">
            ***
          </div>
        </template>
      </div>

    </div>
  </div>
</template>

<script>
import AppProjectPreview from '@/components/ui/AppProjectPreview.vue'
import workProjects from '@/data/projects/work.json'
import sideProjects from '@/data/projects/side.json'

export default {
  components: {
    AppProjectPreview,
  },

  data() {
    return {
      workProjects,
      sideProjects,
    }
  },
}
</script>

<style lang="scss" scoped>
.job-title {
  @apply text-green;
  text-shadow: 0 0 5px rgba(0, 255, 0, 50%);
}

.keyboard-anchor {
  @apply opacity-0;

  &.is-visible {
    @apply opacity-100;
  }
}
</style>
