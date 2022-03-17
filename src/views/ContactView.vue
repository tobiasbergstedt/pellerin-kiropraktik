<template>
  <div id="motivational-img-quote">
    <div id="overlay">
      <h1>Kom i kontakt med oss</h1>
    </div>
  </div>
  <div class="contact-container">
    <div class="left">
      <h2>Har du några frågor?</h2>
      <p>
        Vi ser gärna att ni hör av er till oss om ni har frågor om oss på
        Pellerin Kiropraktik, behandling eller kiropraktik överlag. Vet du inte
        vad nästa steg är? Önskar du mer information om något? Vill du boka in
        ett besök, men inte hittat någon tid som passar?
      </p>
      <h2>Kontakta oss</h2>
      <p>
        Använd gärna formuläret nedan för att komma i kontakt med oss. Det går
        även bra att mejla till: info@kfa.nu eller ringa till: 073-720 71 96. Om
        vi inte har möjlighet att ta emot ditt samtal när du ringer, lämna gärna
        ett meddelande med namn och telefonnummer, så ringer vi upp så snart vi
        har möjlighet.
      </p>
      <div class="container">
        <form ref="form">
          <label>Namn</label>
          <input
            type="text"
            v-model="name"
            name="name"
            placeholder="Ditt namn"
          />
          <label>Email</label>
          <input
            type="email"
            v-model="email"
            name="email"
            placeholder="Din Email"
            @blur="validateEmail"
          />
          <label>Meddelande</label>
          <textarea
            name="message"
            v-model="message"
            cols="30"
            rows="5"
            placeholder="Ditt meddelande"
          />
          <p id="formValidation">
            Alla fält måste fyllas i <u>korrekt</u> för att knappen ska gå att
            klicka på.
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
  export default {
    components: {
      LMap,
      LTileLayer,
      LMarker,
      LControlLayers
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

  h1 {
    color: white;
    text-shadow: 3px 3px 2px rgba(0, 0, 0, 0.5);
  }
  #motivational-img-quote {
    height: 110px;
    background: url(assets/top-image.png) no-repeat center center;
    -webkit-background-size: cover;
    -o-background-size: cover;
    background-size: cover;
    margin: 0;
    border-bottom-left-radius: 50% 22%;
    border-bottom-right-radius: 50% 22%;
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

  .contact-container {
    padding: 1rem;
    display: flex;
    flex-direction: column;
    align-items: center;
  }

  .container {
    display: block;
    text-align: center;
    border-radius: 0.5rem;
    background-color: #4f7e84;
    margin-top: 1.5rem;
    padding: 20px;
    width: 100%;
    p,
    label {
      color: #fff;
    }
  }

  label {
    float: left;
  }

  input[type='text'],
  [type='email'],
  textarea {
    font-family: 'Roboto', sans-serif;
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
    background-color: white;
    color: #4f7e84;
    &:hover,
    &:focus {
      outline: 3px solid #e3d0b9;
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
    height: 500px;
    width: 100%;
    border-radius: 0.5rem;
    overflow: hidden;
  }

  #formValidation {
    color: white;
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
    #motivational-img-quote {
      height: 225px;
    }
  }

  @media screen and (min-width: 1024px) {
    .contact-container {
      padding: 1rem 10rem;
    }
    #map-container {
      width: 550px;
      height: 400px;
    }
    #motivational-img-quote {
      height: 300px;
    }
  }

  @media screen and (min-width: 1300px) {
    .contact-container {
      flex-direction: row;
      h2 {
        margin-top: 0.5rem;
      }
      .left {
        display: flex;
        flex-direction: column;
        align-items: center;
        width: 80%;
        .container {
          width: 70%;
        }
        p {
          width: 70%;
        }
      }
    }
    #map-container {
      width: 600px;
      height: 660px;
    }
  }

  @media screen and (min-width: 1600px) {
    #map-container {
      width: 700px;
    }
  }

  @media screen and (min-width: 1800px) {
    #map-container {
      width: 900px;
    }
  }
</style>
