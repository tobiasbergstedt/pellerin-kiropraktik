<template>
  <nav>
    <ul ref="nav">
      <figure class="image-logo" @click="toggleNav">
        <img id="hamburger" src="../../assets/hamburger.png" alt="logo" />
        <img id="logo" src="../../assets/logo.png" alt="logo" />
        <p id="company-name">Pellerin Kiropraktik</p>
      </figure>
      <router-link
        :to="link.path"
        v-for="(link, index) in navLinks"
        :key="index"
      >
        <li>
          {{ link.text }}
          <i :class="link.icon" />
        </li>
      </router-link>
    </ul>
  </nav>
</template>

<script>
  export default {
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
    },
    props: {
      background: {
        default: '',
        type: String
      },
      hoverBackground: {
        default: '',
        type: String
      },
      imagePath: {
        default: '',
        type: String
      }
    },
    methods: {
      toggleNav() {
        const nav = this.$refs.nav.classList
        nav.contains('active') ? nav.remove('active') : nav.add('active')
      }
    }
  }
</script>

<style scoped lang="scss">
  #logo {
    width: 60px;
    height: 60px;
  }
  #hamburger {
    width: 50px;
    height: 50px;
    display: none;
  }
  nav {
    height: 80px;
    width: 100%;
    background-color: #4f7d84;
    color: white;
    border-bottom: 3px solid #e3d0b9;
    .image-logo {
      flex-grow: 1;
      padding: 0.5rem 0 10px 1.5rem;
    }
    ul {
      background-color: #4f7d84;
      display: flex;
      height: 100%;
      width: 100%;
      align-items: center;
      margin-block-start: 0;
      margin-block-end: 0;
      padding-inline-start: 0;
      padding-right: 0;

      figure {
        cursor: pointer;
        margin-right: 10px;
        display: flex;
        align-items: center;
        #company-name {
          margin-left: 2rem;
          font-size: 1.25rem;
        }
      }

      a {
        text-decoration: none;
        color: white;
      }

      i {
        margin-right: 1rem;
        font-size: 28px;
      }

      li {
        display: flex;
        flex-direction: row-reverse;
        align-items: center;
        list-style-type: none;
        padding: 15px 20px;
        margin-left: 8px;
        background-color: #4f7d84;
        border-radius: 1rem;
      }
      li:hover,
      li:focus,
      li:active {
        background-color: #3b6369;
      }
    }
  }

  @media screen and (min-width: 1200px) {
    nav {
      ul {
        li {
          padding: 15px 35px;
        }
      }
    }
  }

  @media screen and (max-width: 1023px) {
    #logo {
      margin-left: 1.2rem;
    }
    #hamburger {
      display: block;
    }
    nav {
      box-shadow: none;
      .image-logo {
        padding-left: 1.5rem;
        margin-top: 0.8rem;
        padding-bottom: 10px;
        margin-right: 0;
      }
      ul {
        z-index: 10;
        position: fixed;
        width: 250px;
        height: 100%;
        flex-direction: column;
        left: -255px;
        transition: 300ms ease all;
        top: 80px;
        background-color: white;
        outline: 3px solid #4f7d84;

        &.active {
          left: 0px;
        }

        figure {
          position: fixed;
          top: -13px;
          left: 0px;
          background-color: #4f7d84;
          padding: 26px 40px 10px 2px;
          width: 100%;
          outline: 3px solid #e3d0b9;

          #company-name {
            margin-left: 1rem;
          }
        }

        li {
          flex-direction: row;
          justify-content: space-between;
          background-color: white;
          margin-left: 0;
          padding: 1rem;
          border-radius: 0;
        }

        i {
          margin-right: 0;
        }

        a {
          width: 100%;
          color: #4f7d84;
        }

        a:hover,
        a:active {
          color: white;
        }
      }
    }
  }
</style>
