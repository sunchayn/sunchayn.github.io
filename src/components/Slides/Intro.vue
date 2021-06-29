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
        href="https://github.com/sunchayn/sunchayn.github.io/raw/master/public/static/Mazen%20Touati%20Résumé.pdf"
        class="button sr-hook"
      ><small class="text-xs lowercase"><i>pdf&nbsp;&mdash;&nbsp;</i></small>Resumé</a>
    </div>
  </div>
</template>

<script>
import Typed from 'typed.js'

export default {
  // data() {
  //   return {
  //     visible: false,
  //   }
  // },

  mounted() {
    // this.$timer = setInterval(() => {
    //   this.visible = !this.visible
    // }, 500)

    this.typed = new Typed(this.$refs.jobTitle, {
      strings: ['Full-stack web dev'],
      typeSpeed: 40,
      cursorChar: '_',
    })
  },

  beforeUnmount() {
    this.typed.destroy()
    // clearInterval(this.$timer)
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
