<template>
  <div class="video-container">
    <video src="/assets/bg-video.mp4" controls poster="/assets/video.png" />
  </div>
</template>

<script></script>

<style lang="scss" scoped>
  .video-container {
    text-align: center;
    margin-bottom: 3rem;
  }
  video {
    border-radius: 1rem;
    box-shadow: 0 3px 4px 1px rgba(0, 0, 0, 0.25);
    width: 343px;
  }

  @media screen and (min-width: 768px) {
    video {
      width: 700px;
    }
  }

  @media screen and (min-width: 1024px) {
    video {
      width: 1000px;
    }
  }
</style>
