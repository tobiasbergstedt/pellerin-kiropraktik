<template>
  <h1>Recensioner</h1>
  <ReviewCards />
</template>

<script>
  import ReviewCards from '../components/ReviewCards.vue'

  export default {
    components: {
      ReviewCards
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
