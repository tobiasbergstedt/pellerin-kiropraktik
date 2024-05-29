<template>
  <HeroSection
    is-small
    source="assets/top-image.png"
    title="Get in touch with us"
  />
  <div class="contact-container">
    <div class="left">
      <h2>Got any questions?</h2>
      <p>
        We would love for you to contact us if you have any questions about us
        at Pellerin Chiropractic, treatment or chiropractic care in general.
        Don't know what the next step is? Would you like more information about
        something? Do you want to schedule a visit, but haven't found a time
        that suits?
      </p>
      <h2>Contact us</h2>
      <p>
        Feel free to use the form below to get in touch with us. It is also
        possible to email: info@kfa.nu or call: 073-720 71 96. If we are unable
        to receive your call, please leave a message with your name and phone
        number, and we will call you back as soon as possible.
      </p>
      <div class="container">
        <form ref="form">
          <label>Name</label>
          <input
            type="text"
            v-model="name"
            name="name"
            placeholder="Your name"
          />
          <label>E-mail</label>
          <input
            type="email"
            v-model="email"
            name="email"
            placeholder="Your e-mail"
            @blur="validateEmail"
          />
          <label>Message</label>
          <textarea
            name="message"
            v-model="message"
            cols="30"
            rows="5"
            placeholder="Your message"
          />
          <p id="formValidation">
            All fields must be filled in <u>correctly</u> in order for the
            button to be clickable.
          </p>
          <input
            type="button"
            ref="button"
            class="button"
            id="submitButton"
            @click="sendEmail"
            value="Send"
            :disabled="
              email.length < 6 ||
              !email.includes('@') ||
              message.length < 1 ||
              name.length < 1
            "
          />
          <p id="success">Thank you, message sent succesfully!</p>
        </form>
      </div>
    </div>
    <div id="map-container">
      <l-map
        v-model="zoom"
        v-model:zoom="zoom"
        :center="[57.106278, 12.251557]"
      >
        <l-tile-layer
          url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
        />
        <l-control-layers />
        <l-marker :lat-lng="[57.106278, 12.251557]" />
      </l-map>
    </div>
  </div>
</template>

<script>
  import {
    LMap,
    LTileLayer,
    LMarker,
    LControlLayers
  } from '@vue-leaflet/vue-leaflet'
  import 'leaflet/dist/leaflet.css'
  import emailjs from 'emailjs-com/es/index.js'
  import HeroSection from '../components/HeroSection.vue'

  export default {
    components: {
      LMap,
      LTileLayer,
      LMarker,
      LControlLayers,
      HeroSection
    },
    data() {
      return {
        name: '',
        email: '',
        message: [],
        zoom: 15
      }
    },
    methods: {
      sendEmail() {
        try {
          emailjs.sendForm(
            'service_vo4427l',
            'template_5j1pstd',
            this.$refs.form,
            'Q5-xx8s3pjaCYMY9s',
            {
              name: this.name,
              email: this.email,
              message: this.message
            }
          )
        } catch (error) {
          console.log({ error })
        }
        // Reset form field
        this.name = ''
        this.email = ''
        this.message = ''
        let showHidden = document.getElementById('success')
        showHidden.style.display = 'block'
      }
    }
  }
</script>

<style lang="scss" scoped>
  * {
    box-sizing: border-box;
  }

  .contact-container {
    padding: 1rem 0;
    display: flex;
    flex-direction: column;
    align-items: center;
    gap: 4%;
  }

  .container {
    display: block;
    text-align: center;
    border-radius: 0.5rem;
    background-color: var(--color-primary);
    box-shadow: 0px 3px 4px 1px rgba(0, 0, 0, 0.25);
    margin-top: 1.5rem;
    padding: 20px;
    width: 100%;
    p,
    label {
      color: var(--color-white);
    }
  }

  label {
    float: left;
  }

  input[type='text'],
  [type='email'],
  textarea {
    font-family: 'Nunito', sans-serif;
    font-size: 1rem;
    width: 100%;
    padding: 12px;
    border: 1px solid #ccc;
    border-radius: 4px;
    box-sizing: border-box;
    margin-top: 6px;
    margin-bottom: 1rem;
    resize: none;
  }

  .button {
    margin-top: 1rem;
    margin-bottom: 1rem;
    background-color: var(--color-white);
    color: var(--color-primary);
    transition: outline-color 0.35s;
    &:hover,
    &:focus {
      outline: 3px solid var(--color-secondary);
    }
  }

  .button:disabled,
  .button[disabled] {
    background-color: #8a8a8a;
    color: rgb(182, 182, 182);
    cursor: default;
    outline: none;
  }

  .left {
    margin-bottom: 1rem;
    h1 {
      margin-bottom: 0.5rem;
    }
    p {
      margin-bottom: 1rem;
      max-width: 90%;
    }
    h2,
    p {
      margin-left: 0.5rem;
      margin-right: 0.5rem;
    }
  }

  #map-container {
    z-index: 0;
    height: 500px;
    width: 100%;
    box-shadow: 0px 3px 4px 1px rgba(0, 0, 0, 0.25);
    border-radius: 0.5rem;
    overflow: hidden;
  }

  #formValidation {
    color: var(--color-white);
    margin-left: auto;
    margin-right: auto;
  }

  #success {
    display: none;
  }

  @media screen and (min-width: 768px) {
    .left {
      display: flex;
      flex-direction: column;
      align-items: center;
      .container {
        width: 50%;
      }
      p {
        width: 50%;
      }
    }
    #map-container {
      margin-top: 1rem;
      margin-bottom: 1rem;
    }
  }

  @media screen and (min-width: 1024px) {
    .contact-container {
      margin-left: auto;
      margin-right: auto;
    }
    #map-container {
      width: 550px;
      height: 400px;
    }
  }

  @media screen and (min-width: 1300px) {
    .contact-container {
      width: 100%;
      max-width: var(--max-width-container);
      flex-direction: row;
      h2 {
        margin-top: 0.5rem;
      }
      .left {
        display: flex;
        flex-direction: column;
        align-items: center;
        width: 48%;
        .container {
          width: 100%;
        }
        p {
          width: 100%;
        }
      }
    }
    #map-container {
      width: 48%;
      height: 660px;
    }
  }
</style>
