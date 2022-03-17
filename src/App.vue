<template>
  <NavBar
    :nav-links="navLinks"
    background="#fff"
    link-color="#777"
    hover-background="#ddd"
  />
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
    },
    data() {
      return {
        navLinks: [
          {
            text: 'Hem',
            path: '/',
            icon: 'ion-md-home'
          },
          {
            text: 'Om oss',
            path: '/about',
            icon: 'ion-md-people'
          },
          {
            text: 'Recensioner',
            path: '/reviews',
            icon: 'ion-md-happy'
          },
          {
            text: 'Kontakt',
            path: '/contact',
            icon: 'ion-md-call'
          },
          {
            text: 'Boka tid',
            path: '/booking',
            icon: 'ion-md-clock'
          }
        ]
      }
    }
  }
</script>

<style lang="scss">
  @import url('https://fonts.googleapis.com/css2?family=Roboto:wght@300;700&display=swap');
  @import 'https://unpkg.com/ionicons@4.2.2/dist/css/ionicons.min.css';

  html {
    font-family: 'Roboto', sans-serif;
    color: #4f7e84;
  }

  * {
    box-sizing: border-box;
    margin: 0;
    padding: 0;
  }

  body {
    background-color: white;
  }

  main {
    min-height: calc(100vh - 145px);
  }

  .button {
    font-size: 1.5rem;
    font-family: 'Roboto', sans-serif;
    border: none;
    background-color: #4f7d84;
    color: white;
    box-shadow: inset 0 -0.6em 0 -0.35em rgba(0, 0, 0, 0.17);
    padding: 0.7rem 1.4rem;
    border-radius: 4px;
    cursor: pointer;
    margin-top: 1rem;
    margin-bottom: 1rem;
    &:hover,
    &:focus {
      background-color: #3b5f64;
    }
  }

  input:focus,
  textarea:focus {
    outline: 2px solid #e3d0b9;
  }

  @media screen and (min-width: 768px) {
    main {
      min-height: calc(100vh - 130px);
    }
  }
</style>
