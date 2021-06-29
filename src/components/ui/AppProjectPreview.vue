<template>
  <div
    class="project-preview"
    :class="getBgColor"
  >
    <div class="project-preview__cover-container">
      <div
        class="project-preview__cover"
        v-lazy:background-image="require('@/assets/projects/' + data.thumbnail)"
      />
    </div>
    <div class="project-preview__content">
      <div class="mb-4">
        <h2 class="leading-none mb-2">
          {{ data.title }}
          <span
            v-if="data.title_note"
            class="text-sm"
          >
            {{ data.title_note }}<span class="text-pink">*</span>
          </span>
        </h2>
        <small
          v-if="data.company || data.role"
          class="flex items-center"
        >
          <span
            v-if="data.role"
            class="capitalize"
          >{{ data.role }}</span>
          <template v-if="data.company">
            &nbsp;at&nbsp;
            <span class="text-green capitalize">{{ data.company }}</span>
          </template>
        </small>
      </div>

      <p class="mb-4">
        {{ data.description }}
      </p>

      <p
        v-if="data.title_note && data.title_note_desc"
        class="text-pink"
      >
        *{{ data.title_note_desc }}
      </p>

      <div class="mb-2 space-y-1 text-sm text-on-surface-subdued">
        <div
          v-for="(skills, index) in chunkedSkills"
          :key="index"
          class="flex items-center space-x-2"
        >
          <span
            v-for="skill in skills"
            :key="skill"
          >{{ skill }}</span>
        </div>
      </div>

      <div v-if="data.links">
        <a
          v-if="data.links.github"
          :href="data.links.github"
          class="text-sm"
          target="_blank"
        >+ Github</a>
      </div>
    </div>
  </div>
</template>

<script>
import { chunk } from 'lodash'

export default {
  props: {
    data: {
      type: Object,
      required: true,
    },

    index: {
      type: Number,
      required: true,
    },
  },

  data() {
    return {
      bgColors: [
        'red',
        'green',
        'blue',
        'white',
      ],
    }
  },

  computed: {
    chunkedSkills() {
      return chunk(this.data.skills, 6)
    },

    getBgColor() {
      const index = this.index % this.bgColors.length
      return `is-${this.bgColors[index]}`
    },
  },
}
</script>

<style lang="scss" scoped>
.project-preview {
  @apply flex items-center space-x-12;

  &.is-blue .project-preview__cover{
    @apply bg-blue;
  }

  &.is-green .project-preview__cover{
    @apply bg-green;
  }

  &.is-red .project-preview__cover{
    @apply bg-red;
  }
}

.project-preview__cover-container {
  @apply w-2/5;
}

.project-preview__cover {
  @apply aspect-w-1 aspect-h-1 bg-white bg-center;
  background-size: 70%;
}

.project-preview__content {
  @apply flex-1;
}
</style>
