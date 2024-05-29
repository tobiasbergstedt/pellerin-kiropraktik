<template>
  <!-- <div id="motivational-img-quote">
    <div id="overlay">
      <h1>Chiropractic for all</h1>
    </div>
  </div> -->
  <HeroSection source="assets/top-image.png" title="Chiropractic for all" />
  <CardsSection />
  <VideoReviews />
  <MiddleSection />
  <HomeGrid />
</template>

<script>
  import HomeGrid from '../components/HomeGrid.vue'
  import CardsSection from '../components/CardsSection.vue'
  import VideoReviews from '../components/VideoReviews.vue'
  import MiddleSection from '../components/MiddleSection.vue'
  import HeroSection from '../components/HeroSection.vue'

  export default {
    components: {
      HomeGrid,
      VideoReviews,
      CardsSection,
      MiddleSection,
      HeroSection
    }
  }
</script>

<style lang="scss" scoped>
  h1 {
    color: var(--color-white);
    text-shadow: 3px 3px 2px rgba(0, 0, 0, 0.5);
  }
  #motivational-img-quote {
    height: 200px;
    background: url(assets/top-image.png) no-repeat center center;
    -webkit-background-size: cover;
    -o-background-size: cover;
    background-size: cover;
    margin: 0 0 1.5rem 0;
    border-bottom-left-radius: 50% 15%;
    border-bottom-right-radius: 50% 15%;
    overflow: hidden;
    #overlay {
      background-color: rgba(0, 0, 0, 0.6);
      height: 100%;
      width: 100%;
      display: flex;
      justify-content: center;
      align-items: center;
    }
  }

  @media screen and (min-width: 768px) {
    #motivational-img-quote {
      height: 400px;
    }
  }

  @media screen and (min-width: 1024px) {
    #motivational-img-quote {
      height: 600px;
    }
  }
</style>
