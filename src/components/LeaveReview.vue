<template>
  <div id="middle-container">
    <div id="info-container">
      <div class="left" />
      <div class="right">
        <h2>Vill du lämna ett omdöme?</h2>
        <p>
          Enklast är att efter besök gå in på länken i mailet från Bokadirekt
          och fylla i recension på bokadirekt.se. Annars kan du skriva en
          recension på vår Facebook-sida eller skicka oss ett mail.
        </p>
        <div id="review-links">
          <router-link
            :to="link.path"
            v-for="(link, index) in navLinks"
            :key="index"
          >
            <i :class="link.icon" />
            {{ link.text }}
          </router-link>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
  export default {
    data() {
      return {
        navLinks: [
          {
            text: 'Facebook',
            path: '/',
            icon: 'ion-logo-facebook'
          },
          {
            text: 'info@kfa.nu',
            path: '/about',
            icon: 'ion-ios-mail'
          }
        ]
      }
    }
  }
</script>

<style lang="scss" scoped>
  #middle-container {
    background-color: #e3d0b9;
    color: #3b5f64;
    margin-top: 2rem;
    margin-bottom: 2rem;
    text-align: center;
    #info-container {
      padding: 1rem 2rem;
      h2 {
        margin-bottom: 1rem;
      }
      p {
        margin-bottom: 1rem;
      }
      .left {
        height: 150px;
        background: url(assets/logo-medium.png) no-repeat center center;
        -webkit-background-size: contain;
        -o-background-size: contain;
        background-size: contain;
      }
      .right {
        #review-links {
          display: flex;
          flex-direction: column;
          justify-content: space-evenly;
          a {
            text-decoration: none;
            font-size: 1.4rem;
            background-color: #4f7d84;
            color: white;
            margin-bottom: 0.5rem;
            padding: 0.5rem 1rem;
            border-radius: 0.5rem;
            i {
              margin-right: 0.5rem;
            }
          }
          a:hover,
          a:focus {
            background-color: #3b5f64;
          }
        }
      }
    }
  }

  @media screen and (min-width: 768px) {
    #middle-container {
      #info-container {
        display: flex;
        justify-content: center;
        .right {
          width: 400px;
          margin-right: 2rem;
          #review-links {
            flex-direction: row;
          }
        }
        .left {
          width: 250px;
          height: auto;
          margin-top: 0;
        }
      }
    }
  }

  @media screen and (min-width: 1024px) {
    #middle-container {
      #info-container {
        .right {
          width: 500px;
        }
        .left {
          width: 300px;
        }
      }
    }
  }
</style>
