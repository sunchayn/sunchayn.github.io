<template>
  <nav class="navbar">
    <div class="container max-w-5xl">
      <button
        class="md:hidden button button--icon"
        @click="$emit('toggleSidebar')"
      >
        <i class="icon text-current mr-0">
          <MenuIcon />
        </i>
      </button>

      <div class="ml-auto md:ml-0 page-name">
        ~/<span class="page-name__label">{{ currentSlide }}</span>$
      </div>

      <div class="hidden md:block ml-auto space-x-4">
        <span>[&nbsp;<a
          href="https://github.com/sunchayn"
          target="_blank"
        >github</a>&nbsp;]</span>
        <span>[&nbsp;<a
          href="https://dev.to/mazentouati"
          target="_blank"
        >blog</a>&nbsp;]</span>
      </div>
    </div>
  </nav>
</template>

<script>
import { MenuIcon } from '@heroicons/vue/outline'

export default {
  components: {
    MenuIcon,
  },

  emits: ['toggleSidebar'],

  data() {
    return {
      currentSlide: 'hello-world',
    }
  },

  methods: {
    activateSlide(slide) {
      if (slide.$attrs['data-title']) {
        this.currentSlide = slide.$attrs['data-title']
      } else {
        this.currentSlide = 'hello-world'
      }
    },
  },
}
</script>

<style lang="scss" scoped>
@import "src/design/css/utils/all";

.navbar {
  @apply
    fixed top-0
    z-20
    bg-black

    w-full
    text-sm
  ;

  backdrop-filter: blur(2px);
  --tw-bg-opacity: .6;

  @include medium {
    width: calc(100% - 13rem - 1px);
  }

  @include large {
    width: calc(100% - 16rem - 1px);
  }

  & > .container {
    @apply
      flex
      w-full
      items-center
      min-h-[3rem]
    ;
  }
}

.page-name {
  @apply text-pink;
}

.page-name__label {
  @apply text-white;
}
</style>
