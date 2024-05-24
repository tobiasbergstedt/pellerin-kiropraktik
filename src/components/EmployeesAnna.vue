<template>
  <div class="employees-container">
    <div class="employees-content">
      <div id="left">
        <h2>Anna Carlsson</h2>
        <h3 class="light">M.Sc. Chiro</h3>
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Placeat
          perspiciatis quasi adipisci, sit eaque, ex facere ipsum reiciendis in
          veritatis cupiditate sequi nisi doloremque repellendus rerum vitae
          ducimus explicabo aliquam.
        </p>
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Doloribus
          cupiditate harum dolorem magni nam repellat! Laborum quam placeat
          itaque! Dolores fugiat necessitatibus ullam molestias, quam libero
          debitis amet esse labore!
        </p>
        <h3 id="last-paragraph">Examen och vidareutbildning</h3>
        <p>Bachelor of Science, Chiropractic. (Utbildare, Årtal)</p>
        <p>Master of Science, Chiropractic. (Utbildare, Årtal)</p>
        <p>Sports Chiropractic. (Utbildare, Årtal)</p>
      </div>
      <div id="right">
        <img src="/assets/Back+doctor.jpg" alt="Photo of Anna" />
      </div>
    </div>
  </div>
</template>

<script></script>

<style lang="scss" scoped>
  .employees-container {
    width: 100%;
    color: var(--color-white);
    .employees-content {
      background-color: var(--color-primary);
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
