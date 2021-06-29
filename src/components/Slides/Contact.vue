<template>
  <div class="app__slide">
    <div class="app__slide__content">
      <div class="space-y-12">
        <div>
          <span class="block mb-2">-- [&nbsp;<span class="inline-block w-4 text-center">{{ spinIndicator }}</span>&nbsp;] --</span>
          <h2 class="leading-none mb-1 text-2xl">
            Get in touch
          </h2>
          <p class="text-on-surface-subdued text-base mb-4 sr-hook">
            Currently, I’m looking for a new opportunity abroad. I’m striving to develop my skillset and explore my potentials in a new challenging environment. Despite that, my inbox is always open for any type of inquiries or a friendly greeting.
          </p>
          <a
            href="mailto:mazen_touati@hotmail.com"
            class="button sr-hook"
          >Hello, Mazen!</a>
        </div>

        <nav class="flex items-center space-x-4 sr-hook">
          <a
            href="https://www.linkedin.com/in/mazentouati/"
            target="_blank"
          >Linkedin</a>
          <a
            href="https://github.com/sunchayn"
            target="_blank"
          >Github</a>
          <a
            href="https://twitter.com/mazen_touati"
            target="_blank"
          >Twitter</a>
          <span>/</span>
          <a
            href="https://www.facebook.com/mazyn.touati"
            target="_blank"
          >Facebook</a>
          <a
            href="https://www.instagram.com/zamengram/"
            target="_blank"
          >Instagram</a>
        </nav>

        <div>
          <small class="text-on-surface-subdued sr-hook">Designed and developed by Mazen Touati @2021 – GNU GPLv3 License</small>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      currentSpinIndicatorIndex: 0,
      spinningSequence: ['\\', '/', '–'],
    }
  },

  computed: {
    spinIndicator() {
      return this.spinningSequence[this.currentSpinIndicatorIndex]
    },
  },

  mounted() {
    this.$timer = setInterval(() => {
      const index = this.currentSpinIndicatorIndex + 1
      this.currentSpinIndicatorIndex = index >= this.spinningSequence.length ? 0 : index
    }, 400)
  },

  beforeUnmount() {
    clearInterval(this.$timer)
  },
}
</script>
