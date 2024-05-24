<template>
  <div class="video-wrapper">
    <h1>What our clients think about us</h1>
    <video playsinline autoplay muted loop poster="/assets/video.png">
      <source src="/assets/bg-video.mp4" type="video/mp4" />
      Your browser does not support the video tag.
    </video>
  </div>
</template>

<script></script>

<style lang="scss" scoped>
  h1 {
    z-index: 1;
    color: var(--color-white);
    text-shadow: 3px 3px 2px rgba(0, 0, 0, 0.5);
  }
  video {
    object-fit: cover;
    display: block;
    height: 100%;
    width: 100%;
    position: absolute;
    top: 0;
    left: 0;
    opacity: 40%;
  }
  .video-wrapper {
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
  }

  @media screen and (min-width: 768px) {
    .video-wrapper {
      height: 400px;
    }
  }

  @media screen and (min-width: 1024px) {
    .video-wrapper {
      height: 600px;
    }
  }
</style>
