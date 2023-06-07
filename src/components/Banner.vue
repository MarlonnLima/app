<template>
  <div class="row text-white">
    <div class="col-8">
      <div class="mx-1"> 
        <small class="d-block">Olá meu nome é Marlon, sou um</small>
        <span class="linha">FULL</span>STACK</div>
      <div class="afastar-da-esquerda-1">
        DE<span class="linha">VELOPER</span>
        <small class="afastar-da-esquerda-1 d-block">Vou resolver seus problemas com programação web</small>
      </div>
    </div>
    <div class="col-4 d-flex flex-column justify-content-center align-items-center">
        <div>      
            <img src="@/assets/marlon.png">
            <div class="d-flex gap-3 justify-content-center">
            <span><i class="fa-brands fa-linkedin icone" title="LinkedIn"></i></span>
            <span><i class="fa-solid fa-file icone" title="Baixe meu Curriculo"></i></span>
            <span><i class="fa-brands fa-github icone" title="Github"></i></span>
            </div> 
        </div>

    </div>
  </div>
</template>

<script>

export default {
  name: "Banner",
  components: {
  }
};
</script>

<style scoped>

div {
  font-size: 5rem;
}
small {
  font-size: 1.6rem;
}

.afastar-da-esquerda-1 {
  margin-left: 120px;
}


.linha {
  border-bottom: 2px solid #fff;
  animation: arco-iris 3s forwards;
  transition: 0.5s;
}



img{
    width:200px;
    height: 200px;
}

.icone{
   font-size: clamp(30px, 10vw, 40px);
   color: #fff;
   transition: 0.5s
}

.fa-linkedin:hover{
  color: #0A66C2;
}
.fa-file:hover{
  color: #FFE294;
}
.fa-github:hover{
  color: blueviolet;
}
@media(max-width: 1000px){
  .afastar-da-esquerda-1{
    margin-left: 60px;
  }
}

@keyframes arco-iris {
  0%{
    border-color: violet;
  }
  15%{
    border-color: indigo
  }
  30%{
    border-color: cyan
  }
  45%{
    border-color: green;
  }
  60%{
    border-color: yellow
  }
  75%{
    border-color: orange;
  }
  90%{
    border-color: red;
  }
  100%{
    border-color: white;
  }
}
</style>