<template>
  <div :class="wrapperClass">
    <div class="overlay">
      <h1>{{ title }}</h1>
    </div>
    <template v-if="isVideo">
      <video playsinline autoplay muted loop :poster="poster">
        <source :src="source" type="video/mp4" />
        Your browser does not support the video tag.
      </video>
    </template>
    <template v-else>
      <div class="image" :style="{ backgroundImage: 'url(' + source + ')' }" />
    </template>
  </div>
</template>

<script>
  export default {
    props: {
      isVideo: {
        type: Boolean,
        default: false
      },
      isSmall: {
        type: Boolean,
        default: false
      },
      source: {
        type: String,
        default: '/assets/top-image.png'
      },
      poster: {
        type: String,
        default: '/assets/video.png'
      },
      title: {
        type: String,
        default: 'Page Title'
      }
    },
    computed: {
      wrapperClass() {
        return {
          'small-container': this.isSmall,
          'video-wrapper': this.isVideo,
          'image-wrapper': !this.isVideo
        }
      }
    }
  }
</script>

<style scoped>
  h1 {
    color: var(--color-white);
    text-shadow: 3px 3px 2px rgba(0, 0, 0, 0.5);
  }
  .overlay {
    background-color: rgba(0, 0, 0, 0.6);
    height: 100%;
    width: 100%;
    display: flex;
    justify-content: center;
    align-items: center;
  }
  .video-wrapper,
  .image-wrapper {
    background-color: black;
    position: relative;
    max-width: 100%;
    height: 200px;
    overflow: hidden;
    text-align: center;
    display: flex;
    align-items: center;
    justify-content: center;
    border-bottom-left-radius: 50% 15%;
    border-bottom-right-radius: 50% 15%;
    margin-bottom: 1.5rem;
  }
  .video-wrapper video {
    width: 100%;
    height: 100%;
    object-fit: cover;
  }
  .video-wrapper .image {
    display: none;
  }
  .video-wrapper .overlay,
  .image-wrapper .overlay {
    position: absolute;
  }
  .image {
    background-size: cover;
    background-position: center center;
    width: 100%;
    height: 100%;
  }
  .small-container {
    height: 110px;
  }
  @media screen and (min-width: 768px) {
    .video-wrapper,
    .image-wrapper {
      height: 400px;
    }
    .small-container {
      height: 225px;
    }
  }
  @media screen and (min-width: 1024px) {
    .video-wrapper,
    .image-wrapper {
      height: 600px;
    }
    .small-container {
      height: 300px;
    }
  }
</style>
