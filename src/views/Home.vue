<template>
  <div class="app flex">
    <div class="w-64">
      <TheSidebar
        ref="sidebar"
        @slideTo="slideTo"
      />
    </div>

    <div class="app__wrapper flex-1">
      <TheNavbar ref="navbar" />

      <div class="container max-w-5xl">
        <div class="app__content">
          <IntroSlide
            :ref="setSlidesRef"
            data-slug="intro"
            data-title="hello-world"
          />
          <AboutSlide
            :ref="setSlidesRef"
            data-slug="about"
            data-title="about-me"
          />
          <ProjectsSlide
            :ref="setSlidesRef"
            data-slug="projects"
            data-title="projects"
          />
          <ContactSlide
            :ref="setSlidesRef"
            data-slug="contact"
            data-title="contact-me"
          />
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import TheNavbar from '@/components/Layout/TheNavbar.vue'
import TheSidebar from '@/components/Layout/TheSidebar.vue'
import IntroSlide from '@/components/Slides/Intro.vue'
import AboutSlide from '@/components/Slides/About.vue'
import ContactSlide from '@/components/Slides/Contact.vue'
import ProjectsSlide from '@/components/Slides/Projects.vue'
import ScrollReveal from 'scrollreveal'

import { throttle } from 'lodash'

import metaInformation from '@/data/metaInformation.json'
import { useHead } from '@vueuse/head'

export default {
  components: {
    TheNavbar,
    TheSidebar,
    IntroSlide,
    AboutSlide,
    ContactSlide,
    ProjectsSlide,
  },

  setup() {
    useHead({
      title: metaInformation.title,

      htmlAttrs: {
        lang: 'en',
      },

      meta: [
        {
          key: 'description',
          name: 'description',
          content: metaInformation.description,
        },

        {
          key: 'image',
          name: 'image',
          content: metaInformation.preview,
        },

        {
          key: 'thumbnail',
          name: 'thumbnail',
          content: metaInformation.preview,
        },

        {
          key: 'author',
          name: 'author',
          content: metaInformation.author,
        },

        {
          key: 'canonical',
          name: 'canonical',
          content: metaInformation.url,
        },

        // Schema.org for Google
        {
          itemprop: 'name',
          content: metaInformation.title,
        },
        {
          itemprop: 'description',
          content: metaInformation.description,
        },
        {
          itemprop: 'image',
          content: metaInformation.preview,
        },

        // Twitter
        {
          name: 'twitter:card',
          content: 'summary',
        },

        {
          name: 'twitter:title',
          content: metaInformation.title,
        },

        {
          name: 'twitter:description',
          content: metaInformation.description,
        },

        {
          name: 'twitter:site',
          content: metaInformation.twitter.handler,
        },

        {
          name: 'twitter:creator',
          content: metaInformation.twitter.handler,
        },

        {
          name: 'twitter:image:src',
          content: metaInformation.preview,
        },

        {
          name: 'twitter:image',
          content: metaInformation.preview,
        },

        // Open Graph general (Facebook, Pinterest & Google+)
        {
          property: 'og:title',
          content: metaInformation.title,
        },

        {
          property: 'og:description',
          content: metaInformation.description,
        },

        {
          property: 'og:image',
          content: metaInformation.preview,
        },

        {
          property: 'og:url',
          content: metaInformation.url,
        },

        {
          property: 'og:site_name',
          content: metaInformation.title,
        },

        {
          property: 'og:locale',
          content: metaInformation.locale,
        },

        {
          property: 'og:type',
          content: "website",
        },
      ],
    })
  },

  data() {
    return {
      currentSlide: null,
      slides: [],
    }
  },

  mounted() {
    const sr = new ScrollReveal()

    sr.reveal('.sr-hook', {
      origin: 'bottom',
      distance: '20px',
      duration: 2000,
    })

    window.addEventListener('scroll', throttle(this.handleActiveSlide, 300, { leading: false }))
  },

  methods: {
    setSlidesRef(slide) {
      if (slide) {
        this.slides.push(slide)
      }
    },

    slideTo(slug) {
      const i = this.slides.findIndex((ele) => ele.$attrs['data-slug'] === slug)
      const slide = i !== -1 ? this.slides[i] : null

      if (slide) {
        // window.scrollTo(0, slide.$el.offsetTop + 5)
        slide.$el.scrollIntoView({
          behavior: 'smooth',
        })
      }
    },

    handleActiveSlide() {
      this.slides.forEach((slide) => {
        const el = slide.$el
        if (this.isInViewport(el, 100)) {
          this.activateSlide(slide)

          // Sometimes, two slides may be visible at the same time
          // we have to select the one with that have more content visible
          if (el.getBoundingClientRect().top <= 200) {
            this.activateSlide(slide)
            return true
          }
        }
      })
    },

    activateSlide(slide) {
      if (this.currentSlide && this.currentSlide.$el) {
        this.currentSlide.$el.classList.remove('is-active')
      }

      this.currentSlide = slide

      if (this.$refs.sidebar) {
        this.$refs.sidebar.activateSlide(slide)
      }

      if (this.$refs.navbar) {
        this.$refs.navbar.activateSlide(slide)
      }
    },

    /**
     * Copyright disclaimer
     * the starting point of this code was taken from this answer
     * https://stackoverflow.com/a/22480938/10600612
     */
    isInViewport(el, offset = 0) {
      const rect = el.getBoundingClientRect()
      const elemTop = rect.top
      const elemBottom = rect.bottom

      // Partially visible elements return true:
      return (elemTop + offset) < window.innerHeight && elemBottom >= 0
    },
  },
}
</script>
