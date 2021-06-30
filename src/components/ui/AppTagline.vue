<template>
  <div
    class="tagline"
    :class="{'is-reversed': reversed}"
  >
    <div class="tagline__line" />
    <strong class="font-body text-current text-xs lg:text-sm uppercase tracking-wide m-0 transform rotate-180">
      {{ content }}
    </strong>
  </div>
</template>

<script>
export default {
  props: {
    reversed: {
      type: Boolean,
      required: false,
      default: false,
    },

    content: {
      type: String,
      required: false,
      default: 'Full Stack web developer',
    },
  },

  data() {
    return {

    }
  },
}
</script>

<style lang="scss" scoped>
.tagline {
  writing-mode: vertical-rl;

  @apply
    absolute
    z-20

    flex
    items-center
    justify-center

    opacity-75
    select-none
    whitespace-nowrap
  ;

  &.is-reversed {
    & .tagline__line {
      @apply mb-0 mt-4;
      @apply flex-row-reverse;
    }
  }
}

.tagline__line {
  @apply
    w-[1px]
    h-24
    bg-white
    mb-4
  ;
}
</style>
