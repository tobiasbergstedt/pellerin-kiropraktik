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

<style>
  @import url('https://fonts.googleapis.com/css2?family=Roboto:wght@300;700&display=swap');
  @import 'https://unpkg.com/ionicons@4.2.2/dist/css/ionicons.min.css';

  html {
    font-family: 'Roboto', sans-serif;
  }

  * {
    box-sizing: border-box;
    margin: 0;
    padding: 0;
  }

  body {
    background-color: white;
  }
</style>
