<template>
  <div class="employees-container">
    <div class="employees-content">
      <div id="left">
        <h2>Tobias Bergstedt</h2>
        <h3 class="light">Hantverkare och webbutvecklare</h3>
        <p>
          Lorem ipsum dolor sit amet, consectetur adipisicing elit. Suscipit
          placeat reprehenderit sapiente delectus est exercitationem nihil odio
          hic. Quas totam, necessitatibus debitis illum atque nostrum dolore
          expedita ipsum placeat dolores?
        </p>
        <p>
          Lorem ipsum dolor sit, amet consectetur adipisicing elit. Dicta optio
          praesentium modi ipsam, commodi vero illo consequuntur suscipit
          expedita perferendis aliquam quae hic delectus adipisci quas pariatur
          nostrum explicabo eaque?
        </p>
        <h3 id="last-paragraph">Examen och vidareutbildning</h3>
        <p>Front End-utveckling. (IT-Högskolan, 2023)</p>
        <p>3D-animation och visualisering. (Högskolan Väst, 2014)</p>
      </div>
      <div id="right">
        <img src="assets/Back+doctor.jpg" alt="Photo of Tobias" />
      </div>
    </div>
  </div>
</template>

<script></script>

<style lang="scss" scoped>
  .employees-container {
    width: 100%;
    color: white;
    .employees-content {
      background-color: #4f7e84;
      box-shadow: 0px 3px 4px 1px rgba(0, 0, 0, 0.25);
      border-radius: 1rem;
      padding: 1rem;
      max-width: 100%;
      text-align: center;
      margin: 1rem;
      #left {
        margin-bottom: 1.5rem;
        h2 {
          padding-top: 1rem;
        }
        .light {
          font-weight: 300;
        }
        p {
          margin-top: 0.5rem;
          margin-bottom: 0.5rem;
        }
        #last-paragraph {
          margin-top: 2rem;
        }
      }
      #right {
        img {
          max-width: 100%;
          max-height: 400px;
          border-radius: 1rem;
          margin-bottom: 1rem;
        }
      }
    }
  }

  @media screen and (min-width: 768px) {
    .employees-container {
      .employees-content {
        width: 90%;
        margin-left: auto;
        margin-right: auto;
        text-align: center;
        display: flex;
        justify-content: center;
        align-items: center;
        #left {
          width: 50%;
          margin-left: 1rem;
          margin-right: 0.5rem;
          margin-bottom: 0rem;
          h2 {
            padding-top: 0;
          }
        }
        #right {
          width: 50%;
          margin-left: 0.5rem;
          img {
            margin-top: 1rem;
          }
        }
      }
    }
  }

  @media screen and (min-width: 1024px) {
    .employees-container {
      .employees-content {
        width: 55%;
      }
    }
  }
</style>
