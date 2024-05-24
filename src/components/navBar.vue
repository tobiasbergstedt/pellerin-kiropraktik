<template>
  <nav>
    <ul ref="nav">
      <figure class="image-logo">
        <img
          id="hamburger"
          src="../../assets/hamburger.png"
          alt="logo"
          @click="toggleNav"
        />
        <img id="logo" src="../../assets/logo.png" alt="logo" @click="goHome" />
        <p id="company-name" @click="goHome">Pellerin Kiropraktik</p>
      </figure>
      <router-link
        :to="link.path"
        v-for="(link, index) in navLinks"
        :key="index"
      >
        <li v-if="!link.subLinks">
          {{ link.text }}
          <i :class="link.icon" />
        </li>
        <li v-else class="hasDropdown">
          {{ link.text }}
          <i :class="link.icon" />
          <ul class="dropdown">
            <router-link
              :to="subLink.path"
              v-for="(subLink, subIndex) in link.subLinks"
              :key="subIndex"
            >
              <li>
                {{ subLink.text }}
              </li>
            </router-link>
          </ul>
        </li>
      </router-link>
      <a href="https://pellerin.bokadirekt.se" target="_blank">
        <li>
          Booking
          <i class="ion-md-clock" />
        </li>
      </a>
    </ul>
  </nav>
</template>

<script>
  export default {
    created() {
      this.$router.beforeEach(() => {
        // Close the navbar when the route changes
        const nav = this.$refs.nav.classList
        nav.contains('active') ? nav.remove('active') : null
        // this.toggleNav()
      })
    },
    data() {
      return {
        navLinks: [
          {
            text: 'Home',
            path: '/',
            icon: 'ion-md-home'
          },
          {
            text: 'Care',
            path: '/care',
            icon: 'ion-md-heart',
            subLinks: [
              { text: 'Adults', path: '/care/adults' },
              { text: 'Elderly', path: '/care/elders' },
              { text: 'Children and teens', path: '/care/children' },
              { text: 'Pregnancy', path: '/care/pregnant' },
              { text: 'Horses', path: '/care/horses' }
            ]
          },
          {
            text: 'About us',
            path: '/about',
            icon: 'ion-md-people'
          },
          {
            text: 'Reviews',
            path: '/reviews',
            icon: 'ion-md-happy'
          },
          {
            text: 'Contact',
            path: '/contact',
            icon: 'ion-md-call'
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
      },
      goHome() {
        this.$router.push({ path: '/' })
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
    background-color: var(--color-primary);
    color: var(--color-white);
    border-bottom: 3px solid var(--color-secondary);
    .image-logo {
      flex-grow: 1;
      padding: 0.5rem 0 10px 1.5rem;
    }
    ul {
      background-color: var(--color-primary);
      display: flex;
      height: 100%;
      width: 100%;
      max-width: 1920px;
      margin-left: auto;
      margin-right: auto;
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
        color: var(--color-white);
      }

      i {
        margin-right: 1rem;
        font-size: 28px;
      }

      li {
        position: relative;
        display: flex;
        flex-direction: row-reverse;
        align-items: center;
        list-style-type: none;
        padding: 15px 6px;
        margin-left: 8px;
        background-color: var(--color-primary);
        border-radius: 1rem;
        transition: background-color 0.2s;
      }
      li:hover,
      li:focus,
      li:active {
        background-color: var(--color-primary-dark);
      }
    }
    .dropdown {
      display: none;
      position: absolute;
      top: 64px;
      left: 0;
      z-index: 1;
      height: auto;
      border-radius: 0 0 1rem 1rem;
      overflow: hidden;
      background-color: var(--color-primary-dark);
      a {
        height: fit-content;
        width: 100%;
        li {
          margin: 0;
          justify-content: center;
          align-items: center;
          text-align: center;
          border-radius: 0;
          background-color: transparent;
          transition: background-color 0.2s;
          &:hover {
            background-color: var(--color-primary);
            // box-shadow: inset 0 -3px 5px -3px rgba(0, 0, 0, 0.5),
            //   inset 0 3px 5px -3px rgba(0, 0, 0, 0.5);
          }
        }
      }
    }
    .hasDropdown {
      border-radius: 1rem 1rem 0 0;
    }
    li:hover .dropdown {
      display: block;
    }

    .hasDropdown:hover,
    .hasDropdown .dropdown {
      box-shadow: 4px 4px 4px rgba($color: #000000, $alpha: 0.2);
    }
  }

  @media screen and (min-width: 1200px) {
    nav {
      ul {
        li {
          padding: 15px 20px;
        }
      }
    }
  }

  @media screen and (min-width: 1400px) {
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
        // height: 100%;
        height: calc(100% - 80px);
        overflow: scroll;
        flex-direction: column;
        left: -255px;
        transition: 300ms ease all;
        top: 80px;
        background-color: var(--color-white);
        outline: 3px solid var(--color-primary);

        &.active {
          left: 0px;
        }

        figure {
          position: fixed;
          top: -13px;
          left: 0px;
          background-color: var(--color-primary);
          padding: 26px 40px 10px 2px;
          width: 100%;
          outline: 3px solid var(--color-secondary);

          #company-name {
            margin-left: 1rem;
          }
        }

        li {
          flex-direction: row;
          justify-content: space-between;
          background-color: var(--color-white);
          margin-left: 0;
          padding: 1rem;
          border-radius: 0;
        }

        i {
          margin-right: 0;
        }

        a {
          width: 100%;
          color: var(--color-primary);
          transition: color 0.2s;
        }

        a:hover,
        a:active {
          color: var(--color-white);
        }
      }
      li:hover .dropdown {
        display: none;
      }
      .hasDropdown {
        border-radius: 0;
      }
      .dropdown {
        display: none;
      }
    }
  }
</style>
