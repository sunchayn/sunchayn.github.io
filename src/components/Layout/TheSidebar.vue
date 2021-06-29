<template>
  <aside class="sidebar flex flex-col">
    <div class="h-12" />
    <div class="flex-1 flex flex-col p-8">
      <small
        class="open-to-work capitalize cursor-pointer"
        @click="$emit('slideTo', 'contact')"
      >open to work</small>
      <nav class="sidebar__menu flex-1 overflow-y-auto">
        <button
          type="button"
          class="sidebar__menu__link"
          :class="{'is-active': currentSlide === 'about'}"
          @click="$emit('slideTo', 'about')"
        >
          <span class="sidebar__menu_link__indicator" />
          About
        </button>
        <button
          type="button"
          class="sidebar__menu__link"
          :class="{'is-active': currentSlide === 'projects'}"
          @click="$emit('slideTo', 'projects')"
        >
          <span class="sidebar__menu_link__indicator" />
          Projects
        </button>
        <button
          type="button"
          class="sidebar__menu__link"
          :class="{'is-active': currentSlide === 'contact'}"
          @click="$emit('slideTo', 'contact')"
        >
          <span class="sidebar__menu_link__indicator" />
          Contact
        </button>
      </nav>

      <div class="flex flex-col">
        <p class="text-on-surface-dimmed leading-none font-bold text-lg">
          honest<br>innovative &<br>minimalistic
        </p>
        <img
          src="@/assets/logo.svg"
          alt="logo"
          class="w-12"
        >
      </div>
    </div>
  </aside>
</template>

<script>
export default {
  emits: ['slideTo'],

  data() {
    return {
      currentSlide: '',
    }
  },

  methods: {
    activateSlide(slide) {
      if (slide.$attrs['data-slug']) {
        this.currentSlide = slide.$attrs['data-slug']
      }
    },
  },
}
</script>

<style lang="scss" scoped>
.sidebar {
  @apply h-screen w-64 fixed top-0 left-0 border-r border-white;
}

.open-to-work {
  @apply relative left-0 transform rotate-180 select-none;
  writing-mode: vertical-rl;
}

.sidebar__menu {
  @apply block flex flex-col justify-center;
}

.sidebar__menu__link {
  @apply
    flex
    items-center
    py-2
    border-0
    outline-none
    bg-transparent

    text-left
    text-2xl
    capitalize
    font-heading
    text-on-surface-subdued

    transition-colors
  ;

  &:hover, &.is-active {
    @apply text-white;

    & .sidebar__menu_link__indicator {
      @apply inline-block;
    }
  }

  &:nth-child(1) .sidebar__menu_link__indicator {
    @apply bg-red;
  }

  &:nth-child(2) .sidebar__menu_link__indicator {
    @apply bg-green;
  }

  &:nth-child(3) .sidebar__menu_link__indicator {
    @apply bg-blue;
  }
}

.sidebar__menu_link__indicator {
  @apply
    hidden
    w-1
    h-1
    bg-white
    mr-2
  ;
}
</style>
