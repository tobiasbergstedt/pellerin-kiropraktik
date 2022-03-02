<template>
  <div id="cards-container">
    <div class="cards-items-container">
      <div class="cards-item" v-for="review in reviews" :key="review">
        <img src="assets/logo.png" alt="" />
        <h2>{{ review.header }}</h2>
        <p>
          {{ review.testimony }}
        </p>
        <div class="space-filler" />
        <p class="signature">{{ review.name }}</p>
      </div>
      <div class="cards-item" id="leave-a-review">
        <img src="assets/logo.png" alt="" />
        <h2>Vill du lämna ett ömdöme?</h2>
        <p>Skriv på vår facebooksida eller skicka oss ett mail.</p>
        <div class="space-filler" />
        <p class="signature">info@kfa.nu</p>
      </div>
    </div>
  </div>
</template>

<script>
  import reviewData from '/public/reviews.json'

  export default {
    data() {
      return {
        reviews: reviewData
      }
    }
  }
</script>

<style lang="scss" scoped>
  #cards-container {
    color: #4f7d84;
    margin-bottom: 1rem;
    text-align: center;
    .cards-items-container {
      display: grid;
      grid-template-columns: 1fr;
      column-gap: 1rem;
      row-gap: 1rem;
      margin: 0 2rem 1rem 2rem;
      #leave-a-review {
        background-color: #4f7d84;
        color: white;
      }
      .cards-item {
        position: relative;
        display: block;
        background-color: white;
        margin: 0;
        padding: 0.5rem;
        max-width: 100%;
        max-height: 100%;
        border-radius: 0.5rem;
        box-shadow: 0 3px 4px 1px rgba(0, 0, 0, 0.25);
        h2 {
          margin-bottom: 0.5rem;
        }
        .space-filler {
          height: 40px;
        }
        .signature {
          font-size: 1.4rem;
          margin: 0.5rem;
          position: absolute;
          bottom: 0;
          right: 0;
        }
      }
    }
    .cards-item:nth-child(2n) {
      background-color: #d1e6eb;
      color: #3d6870;
    }
  }

  @media screen and (min-width: 768px) {
    #cards-container {
      .cards-items-container {
        grid-template-columns: 1fr 1fr;
        padding-bottom: 1rem;
      }
    }
  }

  @media screen and (min-width: 1024px) {
    #cards-container {
      .cards-items-container {
        grid-template-columns: 1fr 1fr 1fr;
        margin-left: 150px;
        margin-right: 150px;
      }
    }
  }
</style>
