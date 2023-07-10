<template>
  <div class="grid" v-if="!isLoading">
    <!-- <div
      v-for="post in customerTypeLinks"
      :key="post.id"
      class="list-complete-item"
      :style="getItemBackground(post)"
    >
      <div class="before-text">{{ post.title.rendered }}</div>
      <div class="overlay">
        <div class="text" v-html="post.content.rendered" />
        <div class="after-text">{{ post.title.rendered }}</div>
      </div>
    </div> -->

    <div class="list-complete-item card-1">
      <div class="before-text">Vuxna</div>
      <div class="overlay">
        <div class="text">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Veniam et
          optio architecto! Quia blanditiis vero magnam, esse reiciendis
          accusantium, natus asperiores magni voluptas impedit in enim ut sed,
          aliquid vel.
        </div>
        <div class="after-text">Vuxna</div>
      </div>
    </div>
    <div class="list-complete-item card-2">
      <div class="before-text">Kiropraktik för äldre</div>
      <div class="overlay">
        <div class="text">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Veniam et
          optio architecto! Quia blanditiis vero magnam, esse reiciendis
          accusantium, natus asperiores magni voluptas impedit in enim ut sed,
          aliquid vel.
        </div>
        <div class="after-text">Kiropraktik för äldre</div>
      </div>
    </div>
    <div class="list-complete-item card-3">
      <div class="before-text">Barn & Tonåringar</div>
      <div class="overlay">
        <div class="text">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Veniam et
          optio architecto! Quia blanditiis vero magnam, esse reiciendis
          accusantium, natus asperiores magni voluptas impedit in enim ut sed,
          aliquid vel.
        </div>
        <div class="after-text">Barn & Tonåringar</div>
      </div>
    </div>
    <div class="list-complete-item card-4">
      <div class="before-text">Småbarn</div>
      <div class="overlay">
        <div class="text">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Veniam et
          optio architecto! Quia blanditiis vero magnam, esse reiciendis
          accusantium, natus asperiores magni voluptas impedit in enim ut sed,
          aliquid vel.
        </div>
        <div class="after-text">Småbarn</div>
      </div>
    </div>
    <div class="list-complete-item card-5">
      <div class="before-text">Gravida</div>
      <div class="overlay">
        <div class="text">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Veniam et
          optio architecto! Quia blanditiis vero magnam, esse reiciendis
          accusantium, natus asperiores magni voluptas impedit in enim ut sed,
          aliquid vel.
        </div>
        <div class="after-text">Gravida</div>
      </div>
    </div>
    <div class="list-complete-item card-6">
      <div class="before-text">Recensioner</div>
      <div class="review-text">
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptates
        nobis velit ducimus incidunt animi reiciendis praesentium molestiae a
        culpa recusandae earum laudantium placeat saepe, eveniet repellendus aut
        molestias! Cumque, quisquam!
      </div>
      <div class="overlay2">
        <div class="text">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Veniam et
          optio architecto! Quia blanditiis vero magnam, esse reiciendis
          accusantium, natus asperiores magni voluptas impedit in enim ut sed,
          aliquid vel.
        </div>
        <div class="after-text">Recensioner</div>
      </div>
    </div>
  </div>
</template>

<script>
  export default {
    data() {
      return {
        isLoading: true,
        customerTypeLinks: []
      }
    },
    methods: {
      async getData() {
        try {
          let response = await fetch(
            'http://localhost/index.php/wp-json/wp/v2/customer-type-link'
          )
          this.customerTypeLinks = await response.json()
          // console.log(
          //   'http://localhost/wp-json/wp/v2/media/' +
          //     this.customerTypeLinks[0].featured_media
          // )
          for (const item of this.customerTypeLinks) {
            if (item.featured_media) {
              try {
                let response = await fetch(
                  'http://localhost/wp-json/wp/v2/media/' + item.featured_media
                )
                item.media = await response.json()
                // console.log(item.media.source_url)
              } catch (error) {
                console.error(error)
              }
            }
          }
        } catch (error) {
          console.log(error)
        }
        this.isLoading = false
      },
      getItemBackground(item) {
        if (item.media && item.media.source_url) {
          return {
            backgroundImage: `url(${item.media.source_url})`
          }
        } else {
          return {
            backgroundColor: '#4f7d84'
          }
        }
      }
    },
    created() {
      this.getData()
    }
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
    }
    .card-1 {
      background-image: url(assets/grid-card-1.png);
    }
    .card-2 {
      background-image: url(assets/grid-card-2.png);
    }
    .card-3 {
      background-image: url(assets/grid-card-3.png);
    }
    .card-4 {
      background-image: url(assets/grid-card-4.png);
    }
    .card-5 {
      background-image: url(assets/grid-card-5.png);
    }
    .card-6 {
      background-color: #4f7d84;
    }
    .overlay {
      position: absolute;
      top: 0;
      bottom: 0;
      left: 0;
      right: 0;
      height: 100%;
      width: 100%;
      opacity: 0;
      transition: 0.5s ease;
      background-color: #4f7e84;
      border-radius: 0.5rem;
    }
    .list-complete-item:hover .overlay {
      opacity: 0.9;
    }
    .overlay2 {
      position: absolute;
      top: 0;
      bottom: 0;
      left: 0;
      right: 0;
      height: 100%;
      width: 100%;
      opacity: 0;
      transition: 0.5s ease;
      background-color: white;
      border-radius: 0.5rem;
      .after-text {
        color: #4f7e84;
      }
      .text {
        color: #4f7e84;
      }
    }
    .review-text {
      position: absolute;
      top: 0;
      bottom: 0;
      left: 0;
      right: 0;
      font-size: 18px;
      color: white;
      text-align: center;
      margin: 2rem 1rem;
    }
    .list-complete-item:hover .overlay2 {
      opacity: 1;
    }
    .before-text,
    .after-text {
      color: white;
      margin: 1rem;
      font-size: 1.2rem;
      font-weight: 600;
      position: absolute;
      bottom: 0;
      left: 0;
    }
    .text {
      position: relative;
      font-size: 18px;
      color: white;
      text-align: center;
      margin: 2rem 1rem;
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
