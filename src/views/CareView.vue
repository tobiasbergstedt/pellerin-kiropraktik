<template>
  <HeroSection source="assets/top-image.png" title="About chiropractic" />
  <h2 class="about-heading" v-html="pageContent.title" />
  <div v-if="!isLoading" class="about-content" v-html="pageContent.content" />
  <div
    v-else
    style="
      width: 100%;
      height: calc(100vh - 130px);
      display: flex;
      justify-content: center;
      align-items: center;
    "
  />
</template>

<script>
  import { getPageContent } from '../wpApiService.js'
  import HeroSection from '../components/HeroSection.vue'

  export default {
    data() {
      return {
        isLoading: true,
        pageContent: []
      }
    },
    components: {
      HeroSection
    },
    computed: {
      firstTwoParagraphs() {
        return this.pageContent.slice(0, 2)
      },
      thirdParagraph() {
        return this.pageContent.slice(2, 3)
      },
      remainingParagraphs() {
        return this.pageContent.slice(3)
      }
    },
    methods: {
      async fetchData() {
        try {
          this.isLoading = true
          this.pageContent = await getPageContent(65)
          this.isLoading = false
        } catch (error) {
          console.error('Error fetching data:', error)
          this.isLoading = false
        }
      }
    },
    created() {
      this.fetchData()
    }
  }
</script>

<style lang="scss">
  .about-chiropractic-wrapper {
    max-width: var(--max-width-container);
    padding-left: 2rem;
    padding-right: 2rem;
    margin: 0 auto 16px;

    p {
      margin-bottom: 16px;
    }
  }

  .about-chiropractic-divider {
    padding: 1.5rem 2rem;
    background-color: var(--color-primary);
    color: var(--color-white);
    margin-bottom: 16px;
    .inner {
      max-width: var(--max-width-container);
      margin-left: auto;
      margin-right: auto;
    }
  }

  @media screen and (min-width: 1260px) {
    .about-chiropractic-wrapper {
      max-width: var(--max-width-container);
      padding-left: 0;
      padding-right: 0;
    }
    .about-chiropractic-divider {
      padding: 1.5rem 0;
    }
  }
</style>
