<template>
  <div id="cards-container">
    <h2>Vi finns här för dig</h2>
    <div class="cards-items-container">
      <div class="cards-item">
        <img src="assets/token.png" alt="" />
        <h1>Rubrik</h1>
        <p>
          1Lorem ipsum dolor sit amet consectetur adipisicing elit. Quis
          consequuntur dolores iste! Qui alias obcaecati sequi, eligendi commodi
          optio quam dignissimos!
        </p>
        <a href="#">Länk</a>
      </div>
      <div class="cards-item">
        <img src="assets/token.png" alt="" />
        <h1>Rubrik</h1>
        <p>
          2Lorem ipsum dolor sit amet consectetur adipisicing elit. Quis
          consequuntur dolores iste! Qui alias obcaecati sequi, eligendi commodi
          optio quam dignissimos!
        </p>
        <a href="#">Länk</a>
      </div>
      <div class="cards-item">
        <img src="assets/token.png" alt="" />
        <h1>Rubrik</h1>
        <p>
          3Lorem ipsum dolor sit amet consectetur adipisicing elit. Quis
          consequuntur dolores iste! Qui alias obcaecati sequi, eligendi commodi
          optio quam dignissimos!
        </p>
        <a href="#">Länk</a>
      </div>
    </div>
  </div>
</template>

<script></script>

<style lang="scss" scoped>
  #cards-container {
    color: #4f7d84;
    margin-bottom: 3rem;
    text-align: center;
    h2 {
      margin-bottom: 1rem;
      text-transform: uppercase;
    }
    .cards-items-container {
      display: block;
      height: 100%;
      .cards-item {
        display: flex;
        flex-direction: column;
        align-items: center;
        background-color: white;
        margin: 1rem;
        max-width: 100%;
        height: 100%;
        border-radius: 0.5rem;
        box-shadow: 0 3px 4px 1px rgba(0, 0, 0, 0.25);
        a {
          margin-top: 0.5rem;
          color: #976b52;
          text-decoration: none;
        }
        a:hover,
        a:focus {
          color: black;
        }
      }
    }
  }

  @media screen and (min-width: 768px) {
    #cards-container {
      h2 {
        margin-bottom: 0;
      }
      .cards-items-container {
        display: flex;
        height: 400px;
        padding-bottom: 3rem;
        .cards-item {
          padding: 1rem;
          margin: 1rem;
          height: 100%;
        }
      }
    }
  }

  @media screen and (min-width: 1024px) {
    #cards-container {
      h2 {
        margin-bottom: -1rem;
      }
      .cards-items-container {
        display: flex;
        height: 400px;
        margin-left: 150px;
        margin-right: 150px;
        padding-bottom: 3rem;
        .cards-item {
          padding: 1rem;
          margin: 2rem;
          height: 100%;
        }
      }
    }
  }
</style>
