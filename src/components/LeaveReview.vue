<template>
  <div id="middle-container">
    <div id="info-container">
      <div class="left" />
      <div class="right">
        <h2>Want to leave a review?</h2>
        <p>
          The easiest way is to go to the link in the email from Bokadirekt
          after your visit and fill in a review on bokadirekt.se. Otherwise, you
          can write a review on our Facebook page or send us an email.
        </p>
        <div id="review-links">
          <router-link
            class="button"
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
    background-color: var(--color-secondary);
    color: var(--color-primary-darkest);
    margin-top: 2rem;
    margin-bottom: 2rem;
    text-align: center;
    #info-container {
      padding: 1rem 0;
      h2 {
        margin-top: 1rem;
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
          row-gap: 2rem;
          padding: 1rem 0;
          a {
            text-decoration: none;
            max-width: fit-content;
            margin-left: auto;
            margin-right: auto;
            i {
              margin-right: 0.5rem;
            }
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
