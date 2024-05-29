<template>
  <!-- <VideoBackground /> -->
  <HeroSection
    source="assets/video.png"
    title="What our clients think about us"
  />
  <ReviewCards />
  <LeaveReview />
</template>

<script>
  import ReviewCards from '../components/ReviewCards.vue'
  // import VideoBackground from '../components/VideoBackground.vue'
  import HeroSection from '../components/HeroSection.vue'
  import LeaveReview from '../components/LeaveReview.vue'

  export default {
    components: {
      ReviewCards,
      HeroSection,
      // VideoBackground,
      LeaveReview
    }
  }
</script>

<style lang="scss" scoped>
  h1 {
    color: var(--color-primary);
    text-align: center;
    margin-top: 0.75rem;
  }
</style>
