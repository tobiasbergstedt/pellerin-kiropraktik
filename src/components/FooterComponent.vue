<template>
  <footer>
    <div class="footer-information">
      <p id="left">Copyright © Pellerin Kiropraktik, 2022-{{ currentYear }}.</p>
      <div id="contact-info">
        <a href="tel:+46737207196"><p>073-720 71 96</p></a>
        <p id="distance-between">|</p>
        <a id="right" href="mailto:info@kfa.nu"> <p>info@kfa.nu</p></a>
      </div>
    </div>
  </footer>
</template>

<script>
  export default {
    data() {
      return {
        currentYear: new Date().getFullYear()
      }
    }
  }
</script>

<style lang="scss" scoped>
  footer {
    background-color: var(--color-primary);
    color: var(--color-white);
    text-align: center;
    border-top: 3px solid var(--color-secondary);
    #left {
      padding-top: 0.5rem;
      margin-bottom: 0.5rem;
    }
    #contact-info {
      display: flex;
      justify-content: center;
      padding-bottom: 0.5rem;
    }
  }
  #distance-between {
    margin: 0 1rem;
  }
  a {
    color: var(--color-white);
    text-decoration: none;
    transition: color 0.2s;
    :hover {
      color: #cacaca;
    }
  }

  @media screen and (min-width: 768px) {
    footer {
      height: 50px;
      .footer-information {
        display: flex;
        align-items: center;
        justify-content: center;
        height: 100%;
        max-width: 1920px;
        margin-left: auto;
        margin-right: auto;
      }
      #left {
        margin: 0 auto 0 2rem;
        padding: 0;
      }
      #contact-info {
        padding: 0;
      }
      #right {
        margin-right: 2rem;
      }
    }
  }
</style>
