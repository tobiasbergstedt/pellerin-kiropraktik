<template>
  <div :class="[wrapperClass, 'overlay']" :style="backgroundStyle">
    <h1>{{ title }}</h1>
  </div>
</template>

<script>
  export default {
    props: {
      isSmall: {
        type: Boolean,
        default: false
      },
      source: {
        type: String,
        default: 'assets/top-image.png'
      },
      title: {
        type: String,
        default: 'Page Title'
      }
    },
    computed: {
      wrapperClass() {
        return this.isSmall ? 'small-container' : 'image-wrapper'
      },
      backgroundStyle() {
        return {
          backgroundImage: `url(${this.source})`
        }
      }
    }
  }
</script>

<style scoped>
  h1 {
    color: var(--color-white);
    text-shadow: 3px 3px 2px rgba(0, 0, 0, 0.5);
    position: relative;
    z-index: 1;
  }

  .overlay {
    display: flex;
    justify-content: center;
    align-items: center;
    text-align: center;
    background-size: cover;
    background-repeat: no-repeat;
    position: relative;
    overflow: hidden;
  }

  .overlay::before {
    content: '';
    position: absolute;
    top: 0;
    right: 0;
    bottom: 0;
    left: 0;
    background-image: linear-gradient(rgba(0, 0, 0, 0.6), rgba(0, 0, 0, 0.6));
    z-index: 0;
    border-radius: inherit;
  }

  .image-wrapper,
  .small-container {
    position: relative;
    max-width: 100%;
    display: flex;
    align-items: center;
    justify-content: center;
    border-bottom-left-radius: 50% 15%;
    border-bottom-right-radius: 50% 15%;
    margin-bottom: 1.5rem;
    overflow: hidden;
    background-size: cover;
    background-position: center center;
  }

  .image-wrapper {
    height: 200px;
  }

  .small-container {
    height: 110px;
  }

  @media screen and (min-width: 768px) {
    .image-wrapper {
      height: 400px;
    }
    .small-container {
      height: 225px;
    }
  }

  @media screen and (min-width: 1024px) {
    .image-wrapper {
      height: 600px;
    }
    .small-container {
      height: 300px;
    }
  }
</style>
