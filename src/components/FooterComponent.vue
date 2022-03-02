<template>
  <footer>
    <p id="left">Copyright © Pellerins Kiropraktik, 2022.</p>
    <div id="contact-info">
      <a href="tel:+46737207196"><p>073-720 71 96</p></a>
      <p id="distance-between">|</p>
      <a id="right" href="mailto:info@kfa.nu"> <p>info@kfa.nu</p></a>
    </div>
  </footer>
</template>

<style lang="scss" scoped>
  footer {
    background-color: #4f7d84;
    color: white;
    text-align: center;
    border-top: 3px solid #e3d0b9;
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
    color: white;
    text-decoration: none;
    :hover {
      color: black;
    }
  }

  @media screen and (min-width: 980px) {
    footer {
      display: flex;
      align-items: center;
      justify-content: center;
      height: 50px;
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
