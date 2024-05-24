<template>
  <NavBar background="#fff" link-color="#777" hover-background="#ddd" />
  <main>
    <RouterView />
  </main>
  <Footer />
</template>

<script>
  import NavBar from './components/NavBar.vue'
  import Footer from './components/FooterComponent.vue'

  export default {
    components: {
      NavBar,
      Footer
    }
  }
</script>

<style lang="scss">
  @import url('https://fonts.googleapis.com/css2?family=Nunito:ital,wght@0,200..1000;1,200..1000&family=Sorts+Mill+Goudy:ital@0;1&display=swap');
  @import 'https://unpkg.com/ionicons@4.2.2/dist/css/ionicons.min.css';

  :root {
    // --color-primary: #4f7e84;
    --color-primary: #204756;
    // --color-primary-dark: #3b5f64;
    --color-primary-dark: #2b5869;
    --color-primary-darkest: #0f2a34;
    // --color-secondary: #e3d0b9;
    --color-secondary: #c8b096;
    --color-white: #fff;
    --color-black: #000;
    --max-width-container: 1200px;
  }

  html {
    font-family: 'Nunito', sans-serif;
    color: var(--color-primary);
  }

  h1,
  h2,
  h3,
  h4,
  h5,
  button {
    font-family: 'Sorts Mill Goudy', serif;
  }

  * {
    box-sizing: border-box;
    margin: 0;
    padding: 0;
  }

  body {
    background-color: var(--color-white);
  }

  main {
    min-height: calc(100vh - 145px);
    // max-width: 1600px;
    // margin-left: auto;
    // margin-right: auto;
  }

  .button {
    font-family: 'Sorts Mill Goudy', serif;
    font-size: 1.5rem;
    border: none;
    background-color: var(--color-primary);
    color: var(--color-white);
    box-shadow: inset 0 -0.6em 0 -0.35em rgba(0, 0, 0, 0.17);
    padding: 0.7rem 1.4rem;
    border-radius: 4px;
    min-width: fit-content;
    cursor: pointer;
    transition: background-color 0.2s;
    &:hover,
    &:focus {
      background-color: var(--color-primary-dark);
    }
  }

  input:focus,
  textarea:focus {
    outline: 2px solid var(--color-secondary);
  }

  .text-wrapper {
    display: flex;
    flex-direction: column;
    margin-left: auto;
    margin-right: auto;
    max-width: 100%;
    padding: 0 1rem 0 1rem;
    white-space: pre-wrap;
    h2 {
      margin: 0;
    }
    p {
      span {
        display: block;
        width: 100px;
        height: 0.25em; /* Adjust the value as needed */
      }
    }
  }

  .pdf-link {
    font-weight: 700;
  }

  .divider {
    width: 100%;
    height: fit-content;
    background-color: var(--color-secondary);
    color: var(--color-primary-darkest);
    padding: 1rem 0;
    .text-wrapper {
      gap: 1rem;
    }
    .row-content {
      display: flex;
      justify-content: center;
      align-items: center;
      column-gap: 1rem;
    }
    .column-content {
      display: flex;
      flex-direction: column;
      justify-content: center;
      align-items: center;
      text-align: center;
      row-gap: 1rem;
    }
  }

  @media screen and (min-width: 768px) {
    main {
      min-height: calc(100vh - 130px);
    }
    .text-wrapper {
      width: 90%;
      padding: 0 2rem 0 2rem;
    }
  }

  @media screen and (min-width: 1024px) {
    .divider {
      padding: 2.5rem 0;
    }
    .text-wrapper {
      width: 55%;
      max-width: var(--max-width-container);
      padding: 0;
      // margin-top: 1.5rem;
    }
  }
</style>
