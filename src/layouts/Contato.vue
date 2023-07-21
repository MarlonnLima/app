<template>
  <section>
    <div class="air air1"></div>
    <div class="air air2"></div>
    <div class="air air3"></div>
    <div class="air air4"></div>
  </section>
  <form
    action="https://formsubmit.co/marlon@marlondev.com.br"
    method="POST"
    class="background-azul"
  >
    <br />
    <h1 id="contato" class="text-center my-5 text-white">Me mande um e-mail</h1>
    <div class="container w-50" data-aos="zoom-in" id="container-w">
      <div class="row" data-aos="zoom-in">
        <div class="col">
          <input type="hidden" name="_captcha" value="false">
          <input type="hidden" name="_next" value="https://marlondev.com.br">

          <input
            type="text"
            class="form-control"
            placeholder="Insira seu Nome"
            name="name"
            v-model="firstName"
            required
          />
        </div>
      </div>

      <div class="row mt-3" data-aos="zoom-in">
        <div class="col">
          <input
            type="email"
            class="form-control"
            placeholder="Digite seu melhor e-mail"
            name="email"
            v-model="email"
            required
          />
        </div>
      </div>

      <div class="row mt-3" data-aos="zoom-in">
        <div class="col">
          <textarea
            class="form-control"
            rows="5"
            placeholder="Mande sua mensagem!"
            name="message"
            v-model="mensagem"
            required
          ></textarea>
        </div>
      </div>
      <div class="row mt-3" data-aos="zoom-in">
        <div class="col">
        </div>
      </div>
          <botao-send />
    </div>
  </form>
</template>

<script>
import BotaoSend from "@/components/BotaoSend.vue";
export default {
  name: "Contato",
  data: () => ({
    firstName: "",
    secondName: "",
    email: "",
    mensagem: "",
  }),
  components: {
    BotaoSend,
  },
};
</script>

<style scoped>
/* eslint-disable */
section {
  position: relative;
  width: 100%;
  height: 150px;
  overflow: hidden;
}
section .air {
  position: absolute;
  bottom: 0;
  left: 0;
  width: 100%;
  height: 100px;
  background: url("../assets/wave_dark_blue.png");
  background-size: 1000px 100px;
}
section .air.air1 {
  animation: wave 30s linear infinite;
  z-index: 1000;
  opacity: 1;
  animation-delay: 0s;
  bottom: 0;
}
section .air.air2 {
  animation: wave2 15s linear infinite;
  z-index: 999;
  opacity: 0.5;
  animation-delay: -5s;
  bottom: 10px;
}
section .air.air3 {
  animation: wave 30s linear infinite;
  z-index: 998;
  opacity: 0.2;
  animation-delay: -2s;
  bottom: 15px;
}
section .air.air4 {
  animation: wave2 5s linear infinite;
  z-index: 997;
  opacity: 0.7;
  animation-delay: -5s;
  bottom: 20px;
}
@keyframes wave {
  0% {
    background-position-x: 0px;
  }
  100% {
    background-position-x: 1000px;
  }
}
@keyframes wave2 {
  0% {
    background-position-x: 0px;
  }
  100% {
    background-position-x: -1000px;
  }
}

@media (max-width: 550px) {
  #container-w {
    width: 80% !important;
  }

  button{
    font-size: 1rem
  }
}
</style>