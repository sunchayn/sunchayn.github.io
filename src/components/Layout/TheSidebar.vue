<template>
  <aside
    class="sidebar flex flex-col"
    :class="{'is-toggled': toggled}"
  >
    <div class="flex items-center min-h-[3rem] px-8">
      <button
        class="button button--link text-xs text-white md:hidden"
        @click="close"
      >
        <i
          class="icon text-current"
        >
          <ArrowNarrowLeftIcon />
        </i>
        Dismiss
      </button>
    </div>
    <div class="flex-1 flex flex-col p-8">
      <a
        href="https://github.com/sunchayn/sunchayn.github.io"
        target="_blank"
        class="open-source text-sm capitalize cursor-pointer"
      >open source</a>

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


      <div class="md:hidden mb-4 space-x-4">
        <span>[&nbsp;<a
          href="https://github.com/sunchayn"
          target="_blank"
          rel="noopener"
        >github</a>&nbsp;]</span>
        <span>[&nbsp;<a
          href="https://dev.to/mazentouati"
          target="_blank"
          rel="noopener"
        >blog</a>&nbsp;]</span>
      </div>

      <div class="flex flex-col">
        <p class="text-on-surface-dimmed leading-none font-bold text-lg">
          honest<br>innovative &<br>minimalistic
        </p>
        <img
          src="@/assets/logo.svg"
          alt="logo"
          class="w-12"
          width="48"
          height="48"
        >
      </div>
    </div>
  </aside>
</template>

<script>
import {
  ArrowNarrowLeftIcon,
} from '@heroicons/vue/outline'

export default {
  components: {
    ArrowNarrowLeftIcon,
  },

  emits: ['slideTo'],

  data() {
    return {
      currentSlide: '',
      toggled: false,
    }
  },

  methods: {
    activateSlide(slide) {
      if (slide.$attrs['data-slug']) {
        this.currentSlide = slide.$attrs['data-slug']
      }
    },

    close() {
      this.toggled = false
    },

    open() {
      this.toggled = true
    },

    toggle() {
      this.toggled = !this.toggled
    },
  },
}
</script>

<style lang="scss" scoped>
@import "src/design/css/utils/all";

.sidebar {
  @apply
    min-h-full
    max-h-full
    bg-black
    fixed top-0 bottom-0
    z-50
    w-full

    transform
    -translate-x-full

    transition-transform
    duration-300
    ease-in-out
  ;

  will-change: transform;

  @include medium {
    @apply
      w-52
      left-0
      border-r border-white
      translate-x-0;
    ;
  }

  @include large {
    @apply
      w-64
    ;
  }

  &.is-toggled {
    @apply translate-x-0;
  }
}

.open-source {
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
    text-xl
    lg:text-2xl
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
