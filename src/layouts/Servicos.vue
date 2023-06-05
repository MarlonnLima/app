<template>
      <h1 class="text-center my-5 text-secondary">Serviços</h1>
      <div class="container">
        <div class="row gap-5 justify-content-center">
          <div id="service-card" class="col-3 d-flex justify-content-center align-items-center shadow">
            <h1>Sites</h1>
            <button @click="mudarCor" :class="`rounded-circle`">+</button>

          </div>
          <div id="service-card" class="col-3 d-flex justify-content-center align-items-center shadow">
            <h1>Landing Pages</h1>
            
            <button @click="mudarCor" :class="`rounded-circle`">+</button>
          </div>
          <div id="service-card" class="col-3 d-flex justify-content-center align-items-center shadow">
            <h1>Sistemas</h1>

            <button @click="mudarCor" :class="`rounded-circle`">+</button>
          </div>
        </div>
      </div>
</template>


<script>
export default {
    name: 'Servicos',
    data: () => ({
    }),
    components: {
    },
    methods: {
    mudarCor(event){
        (event.target.style.backgroundColor == "darkred") ? event.target.style.backgroundColor = "lightseagreen" : event.target.style.backgroundColor = "darkred"
     
    }
    }
}
</script>


<style scoped>
#service-card{
  height: 30vh;
  font-size: 50px;
  position: relative;
}
button{
  border: 0px;
  width: 80px;
  height: 80px;
  text-align: center;
  position: absolute;
  bottom: -40px;
  background-color: lightseagreen;
}

.verde{
  background-color: lightseagreen;
}

.vermelho{
  background-color: darkred;
}

</style>