<template>
  <div class="row text-white" id="container-banner">
    <div class="col-8">
      <div class="mx-1"> 
        <small class="d-block" data-aos="zoom-in-right">Olá meu nome é Marlon, sou um</small>
        <span class="linha">FULL</span>STACK</div>
      <div class="afastar-da-esquerda-1">
        DE<span class="linha">VELOPER</span>
        <small class="afastar-da-esquerda-1 d-block" data-aos="zoom-in-left">Vou resolver seus problemas com programação web</small>
      </div>
    </div>
    <div class="col-4 d-flex flex-column justify-content-center align-items-center">
        <div id="img-container">      
            <img src="@/assets/marlon.png">
            <div class="d-flex gap-3 justify-content-center">
            <a href="https://www.linkedin.com/in/marlonn-lima/" target="_blank"><i class="fa-brands fa-linkedin icone" title="LinkedIn"></i></a>
            <a href="../baixavel/curriculo.pdf" download="curriculo.pdf" type="application/pdf"><i class="fa-solid fa-file icone" title="Baixe meu Curriculo"></i></a>
            <a href="https://github.com/MarlonnLima" target="_blank"><i class="fa-brands fa-github icone" title="Github"></i></a>
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
  font-size: 4rem;
  text-align: center;
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
  color: gold;
}
.fa-file:hover{
  color: gold;
}
.fa-github:hover{
  color: gold;
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

@media(max-width: 767px){
  #container-banner{
    flex-direction: column-reverse;
    justify-content: center;
    align-items: center;
  }
  .afastar-da-esquerda-1{
    margin: 0;
  }
  img{
    width: 100px;
    height: 100px;
  }
  .icone{
       font-size: clamp(20px, 8vw, 30px);
  }
  div{
    font-size: 3.5rem
  }
}
</style>