<template>
  <HeroSection source="/assets/top-image.png" title="About horses" />
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
  >
    <p>Laddar...</p>
  </div>
</template>

<script>
  import { getPageContent } from '../wpApiService.js'
  import HeroSection from '../components/HeroSection.vue'

  export default {
    data() {
      return {
        pageContent: '',
        isLoading: true
      }
    },
    methods: {
      async fetchData() {
        try {
          this.isLoading = true
          this.pageContent = await getPageContent(68)
          console.log(this.pageContent)
          this.isLoading = false
        } catch (error) {
          console.error('Error fetching data:', error)
          this.isLoading = false
        }
      }
    },
    components: {
      HeroSection
    },
    created() {
      this.fetchData()
    }
  }
</script>

<style lang="scss">
  .about-heading {
    max-width: var(--max-width-container);
    margin: 0 auto;
    padding: 0 16px;
  }

  .about-content {
    p {
      max-width: var(--max-width-container);
      margin-left: auto;
      margin-right: auto;
      padding: 0 16px;
      margin-bottom: 16px;
    }

    .figure-group {
      margin-bottom: 16px;
      background-color: var(--color-primary);

      // &:nth-of-type(2n) {
      //   background-color: var(--color-secondary);
      // }
    }
  }

  .wp-block-gallery {
    display: flex;
    flex-direction: column;
    gap: 16px;
    max-width: var(--max-width-container);
    margin: 0 auto;
    padding: 32px 0;

    > figure {
      margin: 0; /* Remove default margin */
      display: flex;
      justify-content: center;
    }

    figure img {
      display: block;
      max-width: 100%; /* Ensure images don't exceed their container width */
      height: auto; /* Maintain aspect ratio */
      border-radius: 8px;
      max-height: 250px;
      width: auto;
      box-shadow: 2px 4px 5px 1px rgba(0, 0, 0, 0.25);
    }
  }

  @media screen and (min-width: 768px) {
    .about-content {
      p,
      .figure-group {
        margin-bottom: 32px;
      }
    }

    .wp-block-gallery {
      gap: 32px;
      max-height: 500px;
      flex-direction: row;
      flex-wrap: nowrap;

      figure img {
        max-height: 100%;
      }
    }
  }

  @media screen and (min-width: 1024px) {
  }
</style>
