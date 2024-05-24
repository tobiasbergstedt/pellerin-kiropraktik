<template>
  <div id="middle-container">
    <div id="info-container">
      <div class="left">
        <h2>Vertebral Misalignment</h2>
        <p>
          A Vertebral misalignment has numerous components, i.e., osseous
          (bone), neurological (nerve), connective tissue (muscles, ligaments
          and discs), lymphatic, circulatory, biomechanical alterations
          (curvatures, etc.) and somatovisceral (tissue, organs, etc.), which
          may cause irritation and/or compression of nerve roots and affect
          these components.
        </p>

        <p>
          The nervous system controls and coordinates all organs and structures
          of the human body. Many nerves come from the spinal cord, pass through
          foramina (holes) formed by notches of 24 vertebrae in the movable
          spinal column, and innervate or supply specific areas and parts of the
          body.
        </p>

        <p>
          Whenever specific areas or parts of the body are malfunctioning,
          generalized and/or specific symptoms are possible.
        </p>

        <p style="font-weight: 600">
          Chiropractors address and correct these Vertebral misalignments.
        </p>
      </div>
      <div class="right" />
    </div>
  </div>
</template>

<script></script>

<style lang="scss" scoped>
  #middle-container {
    background-color: var(--color-primary);
    color: var(--color-white);
    margin-bottom: 3rem;
    text-align: center;
    #info-container {
      padding: 2rem;
      h2 {
        margin-bottom: 1rem;
      }
      p {
        margin-bottom: 1rem;
      }
      .right {
        height: 300px;
        background: url(assets/spine.png) no-repeat center center;
        -webkit-background-size: contain;
        -o-background-size: contain;
        background-size: contain;
        margin-top: 3rem;
      }
    }
  }

  @media screen and (min-width: 768px) {
    #middle-container {
      #info-container {
        display: flex;
        justify-content: center;
        .left {
          width: 400px;
          margin-right: 2rem;
        }
        .right {
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
        .left {
          width: 500px;
        }
        .right {
          width: 300px;
        }
      }
    }
  }
</style>
