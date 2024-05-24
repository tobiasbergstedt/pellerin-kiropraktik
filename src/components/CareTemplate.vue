<template>
  <div id="motivational-img-quote" :style="setBackgroundImage()">
    <div id="overlay">
      <h1>{{ title }}</h1>
    </div>
  </div>
  <HeroSection source="{{ this.topImage }}" title="Who are we?" />
  <div class="content-wrapper">
    <!-- <div v-for="paragraph in paragraphs" :key="paragraph.title">
      <h2 v-html="paragraph.title" />
      <p v-html="paragraph.text" />
    </div> -->
    <div
      v-if="paragraphs[0].title1 && paragraphs[0].text1"
      class="text-wrapper"
    >
      <h2 v-html="paragraphs[0].title1" />
      <p v-html="paragraphs[0].text1" />
    </div>
    <div
      v-if="paragraphs[0].title2 && paragraphs[0].text2"
      class="text-wrapper"
    >
      <h2 v-html="paragraphs[0].title2" />
      <p v-html="paragraphs[0].text2" />
    </div>
    <div v-if="dividers[0]" v-html="dividers[0]" class="divider" />
    <div
      v-if="paragraphs[0].title3 && paragraphs[0].text3"
      class="text-wrapper"
    >
      <h2 v-html="paragraphs[0].title3" />
      <p v-html="paragraphs[0].text3" />
    </div>
    <div
      v-if="paragraphs[0].title4 && paragraphs[0].text4"
      class="text-wrapper"
    >
      <h2 v-html="paragraphs[0].title4" />
      <p v-html="paragraphs[0].text4" />
    </div>
    <div v-if="dividers[1]" v-html="dividers[1]" class="divider" />
    <div
      v-if="paragraphs[0].pricingTitle && paragraphs[0].pricingText"
      class="text-wrapper"
    >
      <h2 v-html="paragraphs[0].pricingTitle" />
      <p v-html="paragraphs[0].pricingText" />
    </div>
    <div v-if="dividers[2]" v-html="dividers[2]" class="divider" />
  </div>
</template>

<script>
  import HeroSection from '../components/HeroSection.vue'

  export default {
    props: {
      paragraphs: {
        type: Array,
        default: () => []
      },
      topImage: {
        type: String,
        default: ''
      },
      title: {
        type: String,
        default: ''
      },
      dividers: {
        type: Array,
        default: () => []
      }
    },
    components: {
      HeroSection
    },
    methods: {
      setBackgroundImage() {
        console.log(this.paragraphs)
        return {
          backgroundImage: `url(${this.topImage})`
        }
      }
    }
  }
</script>

<style lang="scss" scoped>
  h1 {
    color: var(--color-white);
    text-shadow: 3px 3px 2px rgba(0, 0, 0, 0.5);
  }
  #motivational-img-quote {
    height: 140px;
    background-repeat: no-repeat;
    background-position: center center;
    -webkit-background-size: cover;
    -o-background-size: cover;
    background-size: cover;
    margin: 0 0 1.5rem 0;
    border-bottom-left-radius: 50% 20%;
    border-bottom-right-radius: 50% 20%;
    overflow: hidden;
    #overlay {
      background-color: rgba(0, 0, 0, 0.6);
      height: 100%;
      width: 100%;
      display: flex;
      justify-content: center;
      align-items: center;
    }
  }
  .content-wrapper {
    display: flex;
    flex-direction: column;
    row-gap: 1rem;
    width: 100%;
    padding: 0 0 1rem 0;
  }

  @media screen and (min-width: 768px) {
    #motivational-img-quote {
      height: 300px;
      margin-bottom: 3rem;
    }
    .content-wrapper {
      padding: 0 0 2rem 0;
    }
  }

  @media screen and (min-width: 1024px) {
    #motivational-img-quote {
      height: 500px;
    }
    .content-wrapper {
      padding: 0 0 3rem 0;
      row-gap: 1.5rem;
    }
  }
</style>
