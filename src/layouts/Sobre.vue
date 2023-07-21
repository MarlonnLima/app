<template>
    <h1 id="sobre" class="text-center  my-5 text-secondary">Sobre Mim</h1>
  <div class="container" data-aos="zoom-in">
    <div class="row d-flex justify-content-center align-items-center" id="flex-sobre">
        <div class="col-4" id="flex-div">
            <img class="img-fluid rounded-circle" src= "@/assets/marlon_trabalhando.png">
        </div>
        <div class="col-6 d-flex align-items-center justify-content-center">
            <div>
            Estudante de sistemas para internet pelo Senac, <strong>Desenvolvedor Fullstack</strong> com foco em <strong>Web</strong>, como profissional sou extremamente motivado e sempre estou aprimorando minhas habilidades, 
            todos os dias tentando ser melhor do que no dia anterior. <br> <br>
            Tenho projetos feitos usando, <strong>PHP</strong>, <strong>React</strong>, <strong>Vue</strong>, <strong>Laravel</strong>, mas bom isso é irrelevante o importante é que independente da linguagem eu sei programar.
            </div>
        </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "Sobre",
};
</script>


<style scoped>
div{
  font-size: 1.2rem;
  text-align: justify
}

img{
    width: 250px;
}

@media( max-width: 550px){
#flex-sobre{
  flex-direction: column;
  gap: 20px;
  width: 80%;
  margin: 0 auto;
}

#flex-div{
  justify-content: center;
  display: flex;
}

#flex-sobre div{
  margin: 0 auto;
  width: 100%;
}

h1{
  font-size: 2.4rem
}

}
</style>