<template>
  <div id="motivational-img-quote">
    <div id="overlay">
      <h1>Vilka är vi?</h1>
    </div>
  </div>
  <EmployeesAnna />
  <div class="about-divider">
    <div class="about-content">
      <div class="left">
        <p>
          Lorem ipsum dolor sit amet, consectetur adipisicing elit. Autem
          obcaecati debitis praesentium dolorem in, accusamus nemo mollitia.
          Exercitationem nisi tenetur earum, ad culpa deserunt! Accusantium
          natus itaque ipsam minima sapiente. Lorem ipsum dolor sit amet
          consectetur adipisicing elit. Veniam voluptatem nobis perferendis vel
          in eligendi id quas repudiandae, sint temporibus.
        </p>
      </div>
      <div class="right">
        <img src="assets/logo-medium.png" alt="" />
      </div>
    </div>
  </div>
  <EmployeesTobias class="last-employee" />
</template>

<script>
  import EmployeesAnna from '../components/EmployeesAnna.vue'
  import EmployeesTobias from '../components/EmployeesTobias.vue'

  export default {
    components: {
      EmployeesAnna,
      EmployeesTobias
    }
  }
</script>

<style lang="scss" scoped>
  h1 {
    color: white;
    text-shadow: 3px 3px 2px rgba(0, 0, 0, 0.5);
  }
  #motivational-img-quote {
    height: 140px;
    background: url(assets/top-image2.png) no-repeat center center;
    -webkit-background-size: cover;
    -o-background-size: cover;
    background-size: cover;
    margin: 0 0 1.5rem 0;
    border-bottom-left-radius: 50% 20%;
    border-bottom-right-radius: 50% 20%;
    overflow: hidden;
    #overlay {
      background-color: rgba(0, 0, 0, 0.6);
      height: 100%;
      width: 100%;
      display: flex;
      justify-content: center;
      align-items: center;
    }
  }
  .about-divider {
    background-color: #e3d0b9;
    color: #3b5f64;
    min-height: 100px;
    margin: 1.5rem auto;
    .about-content {
      .left {
        p {
          padding: 1.5rem;
        }
      }
      .right {
        text-align: center;
        img {
          width: 250px;
        }
      }
    }
  }
  .last-employee {
    margin-bottom: 1.5rem;
  }

  @media screen and (min-width: 768px) {
    #motivational-img-quote {
      height: 300px;
      margin-bottom: 3rem;
    }
  }

  @media screen and (min-width: 1024px) {
    #motivational-img-quote {
      height: 500px;
    }
    .about-divider {
      margin: 3rem auto;
      .about-content {
        margin-left: 25%;
        margin-right: 25%;
        display: flex;
        justify-content: center;
        align-items: center;
        .left {
          width: 50%;
        }
        .right {
          width: 50%;
        }
      }
    }
    .last-employee {
      margin-bottom: 3rem;
    }
  }
</style>
