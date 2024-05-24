<template>
  <div class="grid">
    <router-link
      :to="item.path"
      v-for="item in gridItems"
      :key="item.heading"
      class="list-complete-item"
      :style="itemStyle(item)"
    >
      <div v-if="item.reviewText" class="review-text">
        {{ item.reviewText }}
      </div>
      <div
        :class="{
          'overlay-text': item.isRegular,
          'overlay-text2': !item.isRegular
        }"
      >
        {{ item.text }}
      </div>
      <div
        :class="{
          heading: item.isRegular,
          heading2: !item.isRegular
        }"
      >
        {{ item.heading }}
      </div>
    </router-link>
  </div>
</template>

<script>
  export default {
    data() {
      return {
        isLoading: true,
        // customerTypeLinks: [],
        gridItems: [
          {
            heading: 'Adults',
            text: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Veniam et optio architecto! Quia blanditiis vero magnam, esse reiciendis accusantium, natus asperiores magni voluptas impedit in enim ut sed, aliquid vel.',
            background: 'assets/grid-card-1.png',
            isRegular: true,
            path: '/adults'
          },
          {
            heading: 'Chiropractic for the elderly',
            text: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Veniam et optio architecto! Quia blanditiis vero magnam, esse reiciendis accusantium, natus asperiores magni voluptas impedit in enim ut sed, aliquid vel.',
            background: 'assets/grid-card-2.png',
            isRegular: true,
            path: '/elders'
          },
          {
            heading: 'Children and teens',
            text: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Veniam et optio architecto! Quia blanditiis vero magnam, esse reiciendis accusantium, natus asperiores magni voluptas impedit in enim ut sed, aliquid vel.',
            background: 'assets/grid-card-3.png',
            isRegular: true,
            path: '/children'
          },
          {
            heading: 'Horses',
            text: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Veniam et optio architecto! Quia blanditiis vero magnam, esse reiciendis accusantium, natus asperiores magni voluptas impedit in enim ut sed, aliquid vel.',
            background: 'assets/grid-card-4.png',
            isRegular: true,
            path: '/care/horses'
          },
          {
            heading: 'Chiropractic and pregnancy',
            text: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Veniam et optio architecto! Quia blanditiis vero magnam, esse reiciendis accusantium, natus asperiores magni voluptas impedit in enim ut sed, aliquid vel.',
            background: 'assets/grid-card-5.png',
            isRegular: true,
            path: '/pregnant'
          },
          {
            heading: 'Recensioner',
            text: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Veniam et optio architecto! Quia blanditiis vero magnam, esse reiciendis accusantium, natus asperiores magni voluptas impedit in enim ut sed, aliquid vel.',
            reviewText:
              'Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptates nobis velit ducimus incidunt animi reiciendis praesentium molestiae a culpa recusandae earum laudantium placeat saepe, eveniet repellendus aut molestias! Cumque, quisquam!',
            background: 'var(--color-primary)',
            isRegular: false,
            path: '/reviews'
          }
        ]
      }
    },
    methods: {
      // async getData() {
      //   try {
      //     let response = await fetch(
      //       'http://localhost/index.php/wp-json/wp/v2/customer-type-link'
      //     )
      //     this.customerTypeLinks = await response.json()
      //     // console.log(
      //     //   'http://localhost/wp-json/wp/v2/media/' +
      //     //     this.customerTypeLinks[0].featured_media
      //     // )
      //     for (const item of this.customerTypeLinks) {
      //       if (item.featured_media) {
      //         try {
      //           let response = await fetch(
      //             'http://localhost/wp-json/wp/v2/media/' + item.featured_media
      //           )
      //           item.media = await response.json()
      //           // console.log(item.media.source_url)
      //         } catch (error) {
      //           console.error(error)
      //         }
      //       }
      //     }
      //   } catch (error) {
      //     console.log(error)
      //   }
      //   this.isLoading = false
      // },
      // getItemBackground(item) {
      //   if (item.media && item.media.source_url) {
      //     return {
      //       backgroundImage: `url(${item.media.source_url})`
      //     }
      //   } else {
      //     return {
      //       backgroundColor: 'var(--color-primary)'
      //     }
      //   }
      // },
      itemStyle(item) {
        if (item.isRegular) {
          return { backgroundImage: `url(${item.background})` }
        } else {
          return { backgroundColor: item.background }
        }
      }
    }
    // created() {
    //   this.getData()
    // }
  }
</script>

<style lang="scss" scoped>
  .grid {
    width: 325px;
    margin: 0 auto 3rem auto;
    display: grid;
    grid-template-columns: 1fr;
    grid-auto-rows: 250px;
    grid-row-gap: 0.75em;
    grid-column-gap: 0.75em;
    .list-complete-item {
      padding: 0;
      display: inline-block;
      position: relative;
      box-shadow: 0 3px 4px 1px rgba(0, 0, 0, 0.25);
      border-radius: 0.5rem;
      overflow: hidden;
      display: flex;
      align-items: flex-end;
      background-position: center center;
      background-repeat: no-repeat;
      -webkit-background-size: cover;
      -o-background-size: cover;
      background-size: cover;
      transition: opacity 0.3s;
    }
    .overlay-text {
      position: absolute;
      inset: 0;
      height: 100%;
      width: 100%;
      opacity: 0;
      transition: 0.5s ease;
      background-color: var(--color-primary);
      border-radius: 0.5rem;
      color: var(--color-white);
      font-size: 18px;
      text-align: center;
      padding: 2rem 1rem;
      transition: opacity 0.3s;
    }
    .list-complete-item:hover .overlay-text {
      opacity: 0.9;
    }
    .overlay-text2 {
      position: absolute;
      inset: 0;
      height: 100%;
      width: 100%;
      opacity: 0;
      transition: 0.5s ease;
      background-color: var(--color-white);
      border-radius: 0.5rem;
      color: var(--color-primary);
      font-size: 18px;
      text-align: center;
      padding: 2rem 1rem;
      .heading {
        color: var(--color-primary);
      }
    }
    .review-text {
      position: absolute;
      top: 0;
      bottom: 0;
      left: 0;
      right: 0;
      font-size: 18px;
      color: var(--color-white);
      text-align: center;
      margin: 2rem 1rem;
    }
    .list-complete-item:hover .overlay-text2 {
      opacity: 1;
    }
    .list-complete-item:hover .heading2,
    .list-complete-item .overlay-text2 {
      color: var(--color-primary);
    }
    .list-complete-item:hover .heading {
      background-color: transparent;
    }
    .heading {
      background-color: var(--color-primary-darkest);
      opacity: 0.9;
      transition: background-color 0.3s;
    }
    .heading,
    .heading2 {
      color: var(--color-white);
      padding: 0.5rem 1rem;
      font-size: 1.2rem;
      font-weight: 600;
      position: absolute;
      bottom: 0;
      left: 0;
      width: 100%;
    }
  }

  @media screen and (min-width: 768px) {
    .grid {
      width: 660px;
      grid-template-columns: repeat(2, 1fr);
    }
  }

  @media screen and (min-width: 1024px) {
    .grid {
      width: 1000px;
      grid-template-columns: repeat(3, 1fr);
    }
  }
</style>
