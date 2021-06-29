<template>
  <nav class="navbar">
    <div class="container max-w-5xl">
      <div class="page-name">
        ~/<span class="page-name__label">{{ currentSlide }}</span>$
      </div>

      <div class="ml-auto space-x-4">
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
export default {
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
.navbar {
  @apply
    fixed
    z-20
    top-0
    bg-black

    text-sm
  ;

  backdrop-filter: blur(2px);
  --tw-bg-opacity: .6;

  width: calc(100% - 16rem - 1px);

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
