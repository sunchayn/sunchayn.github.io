<template>
  <div class="app__slide">
    <div class="app__slide__content">
      <h1 class="leading-none mb-2">
        Hi, I'm Mazen
      </h1>
      <h2
        class="text-green mb-2 leading-none job-title"
      >
        <span ref="jobTitle" />
      </h2>
      <p class="leading-snug text-base max-w-xl mb-4 sr-hook">
        An honest, innovative and minimalistic individual who enjoys talking to both computers and humans.
      </p>
      <a
        href="https://sunchayn.github.io/resume---mazen-touati-june-2021.pdf"
        class="button sr-hook"
        rel="noopener"
      ><small class="text-xs lowercase"><i>pdf&nbsp;&mdash;&nbsp;</i></small>Resumé</a>
    </div>
  </div>
</template>

<script>
import Typed from 'typed.js'

export default {
  mounted() {
    this.typed = new Typed(this.$refs.jobTitle, {
      strings: ['Full-stack web dev'],
      typeSpeed: 40,
      cursorChar: '_',
      autoInsertCss: false,
    })
  },

  beforeUnmount() {
    this.typed.destroy()
  },
}
</script>

<style lang="scss" scoped>
.job-title {
  @apply text-green font-body;
  text-shadow: 0 0 5px rgba(0, 255, 0, 50%);
}

.keyboard-anchor {
  @apply opacity-0;

  &.is-visible {
    @apply opacity-100;
  }
}
</style>
