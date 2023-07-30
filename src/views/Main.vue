<template>
  <home />
  <sobre />
  <servicos />
  <projetos />
  <contato />
  <div class="text-center text-white p-4" style="background-color: #003078">
    Todos os direitos reservados a Marlon
  </div>
</template>

<script>
import Contato from '@/layouts/Contato.vue'
import Home from '@/layouts/Home.vue';
import Servicos from '@/layouts/Servicos.vue'
import Sobre from '@/layouts/Sobre.vue'
import Projetos from '@/layouts/Projetos.vue'

export default {
  name: "App",
  components: {
    Home,
    Sobre,
    Projetos,
    Contato,
    Servicos,
  },
}
</script>

<style>

/* ===== Scrollbar CSS ===== */
  /* Firefox */
  * {
    scrollbar-width: auto;
    scrollbar-color: #000000 #ffffff;
  }

  /* Chrome, Edge, and Safari */
  *::-webkit-scrollbar {
    width: 16px;
  }

  *::-webkit-scrollbar-track {
    background: #fff;
  }

  *::-webkit-scrollbar-thumb {
    background-image: linear-gradient(
    to top,
    #277dff,
    #2374f1,
    #1e6ae3,
    #1861d5,
    #1158c7,
    #0d52bc,
    #084bb0,
    #0345a5,
    #02409a,
    #013a8e,
    #013583,
    #003078
  );
    border-radius: 10px;
    border: 4px solid #ffffff;
  }

#app {
  font-family: "Inter", sans-serif;
  font-weight: 400;
}
.text-justify{
  text-align: justify
}
.float-right{
  float: right;
}

.background-azul {
  background-image: linear-gradient(
    to bottom,
    #277dff,
    #2374f1,
    #1e6ae3,
    #1861d5,
    #1158c7,
    #0d52bc,
    #084bb0,
    #0345a5,
    #02409a,
    #013a8e,
    #013583,
    #003078
  );;
}
.box{
  height: 400px;
}

@media (max-width: 1366px) {
  html {
    font-size: 14px;
  }

}

@media (max-width: 1000px) {
  html {
    font-size: 12px;
  }
}

@media (max-width: 768px) {
  html {
    font-size: 10px;
  }
}
</style>
