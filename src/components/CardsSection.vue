<template>
  <div id="cards-container">
    <h2>We're here for you</h2>
    <div class="cards-items-container">
      <div class="cards-item">
        <router-link :to="'/about'" key="about">
          <img
            class="card-image"
            src="/assets/cards-section-1.png"
            alt="Picture of the team"
          />
        </router-link>
        <router-link :to="'/about'" key="about">
          <h1>This is Pellerin</h1>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Quis
            consequuntur dolores iste! Qui alias obcaecati sequi, eligendi
            commodi optio quam dignissimos!
          </p>
        </router-link>
      </div>
      <div class="cards-item">
        <a href="https://pellerin.bokadirekt.se" target="_blank">
          <img class="card-image" src="/assets/cards-section-2.png" alt="" />
        </a>
        <a href="https://pellerin.bokadirekt.se" target="_blank">
          <h1>Appointments</h1>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Quis
            consequuntur dolores iste! Qui alias obcaecati sequi, eligendi
            commodi optio quam dignissimos!
          </p>
        </a>
      </div>
      <div class="cards-item">
        <router-link :to="'/contact'" key="contact">
          <img class="card-image" src="/assets/cards-section-3.png" alt="" />
        </router-link>
        <router-link :to="'/contact'" key="about">
          <h1>Get in touch</h1>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Quis
            consequuntur dolores iste! Qui alias obcaecati sequi, eligendi
            commodi optio quam dignissimos!
          </p>
        </router-link>
      </div>
    </div>
  </div>
</template>

<script></script>

<style lang="scss" scoped>
  #cards-container {
    color: var(--color-primary);
    margin-bottom: 3rem;
    text-align: center;
    h2 {
      margin-bottom: 1rem;
    }
    .cards-items-container {
      display: grid;
      justify-items: center;
      grid-template-columns: 1fr;
      margin-left: auto;
      margin-right: auto;
      gap: 1rem;
      .cards-item {
        display: flex;
        flex-direction: column;
        align-items: center;
        background-color: var(--color-white);
        margin: 0 1rem;
        width: 320px;
        height: 350px;
        border-radius: 0.5rem;
        box-shadow: 0 3px 4px 1px rgba(0, 0, 0, 0.25);
        overflow: hidden;
        img {
          width: 100%;
          outline: 3px solid var(--color-secondary);
          transition:
            outline 0.3s,
            opacity 0.2s;
          &:hover {
            outline: 3px solid #c9ab87;
          }
        }
        h1 {
          margin-top: 0.8rem;
          margin-bottom: 4px;

          padding-right: 1rem;
          padding-left: 1rem;
        }
        p {
          padding: 0 1rem 1rem 1rem;
        }
        a {
          color: var(--color-primary);
          text-decoration: none;
          transform: color 0.2s;
          &:hover,
          &:focus {
            color: var(--color-primary-dark);
          }
        }
      }
    }
  }

  .cards-item:hover .card-image {
    opacity: 0.85;
  }

  @media screen and (min-width: 768px) {
    #cards-container {
      h2 {
        margin-bottom: 0;
      }
      .cards-items-container {
        grid-template-columns: 1fr 1fr;
        .cards-item {
          height: 100%;
        }
      }
    }
  }

  @media screen and (min-width: 1024px) {
    #cards-container {
      h2 {
        margin-bottom: 1rem;
      }
    }
  }

  @media screen and (min-width: 1100px) {
    #cards-container {
      .cards-items-container {
        grid-template-columns: 1fr 1fr 1fr;
        width: 1100px;
      }
    }
  }

  @media screen and (min-width: 1400px) {
    #cards-container {
      h2 {
        margin-bottom: 1rem;
      }
    }
  }
</style>
