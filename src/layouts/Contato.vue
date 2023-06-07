<template>
  <section>
    <div class="air air1"></div>
    <div class="air air2"></div>
    <div class="air air3"></div>
    <div class="air air4"></div>
  </section>
  <form action="http://localhost/sendMail/" method="POST" class="background-azul">
    <br />
    <h1 id="contato" class="text-center my-5 text-white">Me mande um e-mail</h1>
    <div class="container w-50">
      <div class="row">
        <div class="col">
          <input
            type="text"
            class="form-control"
            placeholder="Primeiro Nome"
            name="firstName"
            v-model="firstName"
            required
          />
        </div>
        <div class="col">
          <input
            type="text"
            class="form-control"
            placeholder="Segundo Nome"
            name="secondName"
            v-model="secondName"
            required
          />
        </div>
      </div>

      <div class="row mt-3">
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

      <div class="row mt-3">
        <div class="col">
          <textarea
            class="form-control"
            rows="5"
            placeholder="Mande sua mensagem!"
            name="mensagem"
            v-model="mensagem"
            required
          ></textarea>
        </div>
      </div>
      <div class="row mt-3">
        <div class="col">
          <botao-send />
        </div>
      </div>
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
</style>