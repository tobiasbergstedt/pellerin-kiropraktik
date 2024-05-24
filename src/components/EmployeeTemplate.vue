<template>
  <div class="employees-container">
    <div class="employees-content">
      <div class="top">
        <div id="left">
          <h2>{{ name }}</h2>
          <h3 class="light">{{ title }}</h3>
        </div>
        <div id="right">
          <img :src="image" :alt="`Photo of ${name}`" />
        </div>
      </div>
      <h4 id="last-paragraph">About {{ name.split(' ')[0] }}</h4>
      <div class="about-text" v-html="renderParagraphs(about)" />
      <div class="degrees-and-seminars-container">
        <div id="left">
          <h4 id="last-paragraph">Degrees and education</h4>

          <div
            class="degrees-and-seminars"
            v-html="renderParagraphs(educations)"
          />
        </div>
        <div id="right">
          <h4 id="last-paragraph">Seminars</h4>
          <div
            class="degrees-and-seminars"
            v-html="renderParagraphs(seminars)"
          />
        </div>
      </div>
    </div>
  </div>
</template>

<script>
  export default {
    props: {
      name: {
        type: String,
        default: ''
      },
      title: {
        type: String,
        default: ''
      },
      about: {
        type: String,
        default: ''
      },
      educations: {
        type: String,
        default: ''
      },
      seminars: {
        type: String,
        default: ''
      },
      image: {
        type: String,
        default: ''
      }
    },
    methods: {
      logImageUrl() {
        console.log('Image url: ', this.about)
      },
      renderParagraphs(text) {
        // Split the text by line breaks (\n) to get an array of paragraphs
        const paragraphs = text.split('\n')
        // Filter out empty paragraphs
        const nonEmptyParagraphs = paragraphs.filter(
          (paragraph) => paragraph.trim() !== ''
        )
        // Render each non-empty paragraph as a separate <p> element
        return nonEmptyParagraphs
          .map(
            (paragraph) => `<p style="margin-bottom: 0.5rem;">${paragraph}</p>`
          )
          .join('')
      }
    },
    created() {
      this.logImageUrl()
    }
  }
</script>

<style lang="scss" scoped>
  .employees-container {
    width: 100%;
    color: var(--color-white);
  }

  .employees-content {
    display: flex;
    flex-direction: column;
    background-color: var(--color-primary);
    box-shadow: 0px 3px 4px 1px rgba(0, 0, 0, 0.25);
    border-radius: 1rem;
    padding: 1rem;
    max-width: 100%;
    text-align: center;
    margin: 1rem;
    white-space: pre-wrap;
  }

  .top {
    display: flex;
    flex-direction: column;
    width: 100%;
    // background-color: var(--color-secondary);
    // color: var(--color-primary-darkest);
    border-radius: 16px;
    margin-bottom: 1rem;
  }

  #left {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    h2 {
      padding-top: 1rem;
      font-size: 2rem;
    }
    .light {
      font-weight: 300;
      font-size: 1.5rem;
    }
    p {
      margin-top: 0.5rem;
      margin-bottom: 0.5rem;
    }
  }

  .about-text {
  }

  .degrees-and-seminars-container {
    display: flex;
    flex-direction: column;
    gap: 3rem;
    margin-top: 2rem;

    #left,
    #right {
      justify-content: flex-start;
      background-color: var(--color-primary-darkest);
      border-radius: 16px;
      padding: 1rem 1.5rem;
      height: fit-content;
    }
  }

  .degrees-and-seminars {
    // text-align: left;
  }

  #last-paragraph {
    margin-top: 2rem;
    font-size: 1.5rem;

    &:first-of-type {
      margin-top: 0;
    }
  }

  #right {
    img {
      display: block;
      width: 100%;
      border-radius: 1rem;
      box-shadow: 2px 4px 5px 1px rgba(0, 0, 0, 0.25);
      // margin:1rem;
    }
  }

  @media screen and (min-width: 768px) {
    .employees-content {
      width: 90%;
      margin-left: auto;
      margin-right: auto;
      text-align: center;
      padding: 1rem 2rem;
      // display: flex;
      // justify-content: center;
      // align-items: center;
    }

    .top {
      flex-direction: row;
      margin-bottom: 2rem;

      #left {
        width: 60%;
      }
      #right {
        width: 40%;
      }
    }

    #left {
      width: 50%;
      margin-bottom: 0rem;
      h2 {
        padding-top: 0;
      }
    }

    #right {
      width: 50%;
    }

    .degrees-and-seminars-container {
      flex-direction: row;
      margin-top: 4rem;
    }
  }

  @media screen and (min-width: 1024px) {
    .employees-content {
      max-width: 55%;
      max-width: var(--max-width-container);
      padding: 2rem 4rem;
    }
  }
</style>
