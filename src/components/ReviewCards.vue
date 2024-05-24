<template>
  <div id="cards-container">
    <div class="cards-items-container">
      <div class="cards-item" v-for="review in reviews" :key="review">
        <h2>{{ review.header }}</h2>
        <p>
          {{ review.testimony }}
        </p>
        <!-- <div class="space-filler" /> -->
        <div class="signature">
          <img src="/assets/grid-card-1.png" alt="" />
          <div class="personal-info">
            <p>{{ review.name }}</p>
            <p>{{ review.date }}</p>
          </div>
        </div>
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
    color: var(--color-primary);
    margin-top: 1rem;
    margin-bottom: 1rem;
    text-align: center;
    .cards-items-container {
      display: grid;
      grid-template-columns: 1fr;
      column-gap: 1rem;
      row-gap: 1rem;
      margin: 0 2rem 1rem 2rem;
      .cards-item {
        display: flex;
        flex-direction: column;
        justify-self: center;
        // display: block;
        background-color: var(--color-white);
        margin: 0;
        padding: 0.5rem 0 0;
        max-width: 350px;
        max-height: 100%;
        border-radius: 0.5rem;
        box-shadow: 0 3px 4px 1px rgba(0, 0, 0, 0.25);
        overflow: hidden;
        h2 {
          margin-bottom: 0.5rem;
          padding: 0 1rem;
        }
        > p {
          margin-bottom: 24px;
          padding: 0 1rem;
          flex: 1;
        }
        .space-filler {
          align-self: baseline;
          height: 80px;
        }
        .signature {
          display: flex;
          align-items: center;
          justify-content: center;
          font-size: 1rem;
          padding: 0.5rem;
          border-top: 3px solid var(--color-secondary);
          background-color: var(--color-primary);
          color: var(--color-white);
          .personal-info {
            margin-left: 1.2rem;
            p {
              text-align: left;
            }
          }
          img {
            width: 60px;
            height: 60px;
            border-radius: 0.5rem;
            box-shadow: 2px 2px 3px 1px rgba(0, 0, 0, 0.5);
          }
        }
      }
    }
  }

  @media screen and (min-width: 768px) {
    #cards-container {
      margin-top: 1.5rem;
      .cards-items-container {
        margin: 0 4rem 1rem 4rem;
        row-gap: 2rem;
        .cards-item {
          max-width: 650px;
        }
      }
    }
  }

  @media screen and (min-width: 1024px) {
    #cards-container {
      margin-top: 2rem;
      .cards-items-container {
        grid-template-columns: 1fr 1fr;
        row-gap: 1rem;
        max-width: var(--max-width-container);
      }
    }
  }

  @media screen and (min-width: 1400px) {
    #cards-container {
      .cards-items-container {
        margin-left: auto;
        margin-right: auto;
        .cards-item {
          // min-height: 300px;
          h2 {
            margin-top: 1rem;
          }
          p {
            margin-left: 3rem;
            margin-right: 3rem;
          }
        }
      }
    }
  }

  @media screen and (min-width: 1920px) {
    #cards-container {
      .cards-items-container {
        grid-template-columns: 1fr 1fr 1fr;
      }
    }
  }
</style>
