<template>
  <VideoBackground />
  <ReviewCards />
  <LeaveReview />
</template>

<script>
  import ReviewCards from '../components/ReviewCards.vue'
  import VideoBackground from '../components/VideoBackground.vue'
  import LeaveReview from '../components/LeaveReview.vue'

  export default {
    components: {
      ReviewCards,
      VideoBackground,
      LeaveReview
    }
  }
</script>

<style lang="scss" scoped>
  h1 {
    color: #4f7d84;
    text-align: center;
    margin-top: 0.75rem;
  }
</style>
