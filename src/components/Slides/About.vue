<template>
  <div class="app__slide">
    <div class="app__slide__content">
      <div class="mb-4 leading-none sr-hook">
        <h2>About Me</h2>
        <span class="text-xs">Me, my mindset and how I approach things</span>
      </div>

      <div class="md:flex">
        <div class="min-w-[40%] mb-4 md:mb-0 mr-4 lg:mr-0">
          <div class="relative">
            <div
              v-lazy:background-image="require('@/assets/headshot.jpg')"
              class="z-10 bg-red aspect-w-4 aspect-h-5 w-full bg-cover bg-center sr-hook"
            />

            <div
              class="about__circle sr-hook"
              :class="circleColorClass"
            />
          </div>
        </div>

        <div class="w-24 hidden lg:flex justify-center items-start sr-hook">
          <AppTagline />
        </div>

        <div class="relative z-10 text-on-surface-subdued">
          <small class="block mb-1 sr-hook">36s Read time<br>&middot;</small>
          <p class="sr-hook">
            Hi! I’m <strong class="text-white">Mazen Touati</strong>. I’m a full-stack web developer from Tunisia. My passion for code started years ago when I wrote my first line of code back in <strong class="text-white">2011</strong>.
          </p>
          <p class="sr-hook">
            I’ve acquired my Master’s degree in <strong class="text-white">Media Engineering</strong> in 2019. Two years earlier, I got my Bachelor’s Degree in <strong class="text-white">Computer Sciences</strong>.
          </p>
          <p class="sr-hook">
            I’m enthusiastic about creating utility libraries for fellow developers. I enjoy creating things with <strong class="text-white">Laravel & VueJS</strong>.
          </p>
          <p class="sr-hook">
            I'm a sharer who is always delighted to exchange information. Recently, I've been more attached to sharing what I know through <strong class="text-white">blogging</strong>.
          </p>
          <p class="sr-hook">
            When it comes to my philosophy, I believe in <strong class="text-white">authenticity</strong> and <strong class="text-white">self-worth</strong>. These views made me more involved in pushing my acquaintances and peers toward <strong class="text-white">growth</strong> through positive and practical <strong class="text-white">encouragement</strong>. Additionally, I'm always open to different <strong class="text-white">ideas</strong> and <strong class="text-white">approaches</strong>.
          </p>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import AppTagline from '@/components/ui/AppTagline.vue'

export default {
  components: {
    AppTagline,
  },

  data() {
    return {
      currentCircleColorIndex: 0,

      circleColors: [
        'red',
        'green',
        'blue',
      ],
    }
  },

  computed: {
    circleColorClass() {
      return `is-${this.circleColors[this.currentCircleColorIndex]}`
    },
  },

  mounted() {
    this.$timer = setInterval(() => {
      const index = this.currentCircleColorIndex + 1
      this.currentCircleColorIndex = index >= this.circleColors.length ? 0 : index
    }, 10000)
  },

  beforeUnmount() {
    clearInterval(this.$timer)
  },
}

</script>

<style lang="scss" scoped>
@import "src/design/css/utils/all";

.about__circle {
  @apply
    absolute top-0 right-0
    transform translate-x-10 -translate-y-10
    bg-white w-20 h-20 rounded-full
  ;

  transition: background-color 3s ease-in-out;

  @include medium {
    @apply bottom-0 left-0 -translate-x-10 translate-y-10;
    right: initial;
    top: initial;
  }

  &.is-blue {
    @apply bg-blue;
  }

  &.is-green {
    @apply bg-green;
  }

  &.is-red {
    @apply bg-red;
  }
}
</style>
