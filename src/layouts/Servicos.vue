<template>
  <h1 id="servicos" class="text-center my-5 text-secondary">Serviços</h1>
  <div class="container" style="margin-bottom: 100px" data-aos="zoom-in">
    <div class="row gap-5 justify-content-center" id="flex-div">
      <div
        id="service-card"
        class="col-3 d-flex justify-content-center align-items-center shadow flex-wrap"
      >
        
        <div v-if="card1">
          <h2 class="text-muted">Desenvolvimento</h2>
        </div>

        <div v-else>
          <h3 class="text-muted text-center">Desenvolverei soluções para você e para seu negócio</h3>
        </div>

        <img src="@/assets/mais.png" @click="card1 = !card1; rotacionar($event)" class="round-button">
      </div>
      <div
        id="service-card"
        class="col-3 d-flex justify-content-center align-items-center bg-cinza text-white shadow"
      >
        <div v-if="card2">
          <h2>Hospedagem</h2>
        </div>
        <div v-else>
          <h3 class="text-center">Consultoria para compra de domínio e hospedagem</h3>
        </div>
        <img src="@/assets/mais.png" @click="card2 = !card2; rotacionar($event)" class="round-button">
      </div>
      <div
        id="service-card"
        class="col-3 d-flex justify-content-center align-items-center shadow"
      >
        <div v-if="card3">
          <h2 class="text-muted">Manutenção</h2>
        </div>
        <div v-else>
          <h3 class="text-muted text-center">Prestação de manutenção a projetos</h3>
        </div>
        <img src="@/assets/mais.png" @click="card3 = !card3; rotacionar($event)" class="round-button">
      </div>
    </div>
  </div>
</template>


<script>

export default {
  name: "Servicos",
  data: () => ({
    card1: true,
    card2: true,
    card3: true,
  }),
  components: {},
  methods: {
   rotacionar(event){
    event.target.classList.toggle('rotacionar')
   }
  },
};

</script>


<style scoped>
#service-card {
  height: 30vh;
  max-height:250px;
  min-height: 200px;
  max-width: 300px;
  min-width: 250px;
  font-size: 3rem;
  position: relative;
}

.bg-cinza{
  background-color: #353746
}

.round-button {
  position: absolute;
  bottom: calc(-20px - 1rem);
  width: 60px;
  height: 60px;
  border-radius: 50%;
  background-color: lightseagreen;
  border: none;
  cursor: pointer;
  display: flex;
  justify-content: center;
  align-items: center;
  transition: 0.5s;
}

.rotacionar {
  transform: rotate(360deg);
}

.round-button:hover {
  background-color: crimson;
}

.plus-sign {
  font-size: 24px;
  color: #ffffff;
  font-weight: 400;
}


/* Animações de entrada e saída podem utilizar diferentes  */
/* funções de duração e de tempo.                          */
.slide-fade-enter-active {
  transition: all .3s ease;
}
.slide-fade-leave-active {
  transition: all .8s cubic-bezier(1.0, 0.5, 0.8, 1.0);
}
.slide-fade-enter, .slide-fade-leave-to
/* .slide-fade-leave-active em versões anteriores a 2.1.8 */ {
  transform: translateX(10px);
  opacity: 0;
}

@media( max-width: 550px){
#flex-div{
  gap: 50px !important;
}
}
</style>