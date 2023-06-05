<template>
    <h1 id="sobre" class="text-center  my-5 text-secondary">Projetos</h1>
  <div class="container mb-5 shadow">
    <div class="row d-flex justify-content-center align-items-center">
        <div class="col-8 d-flex align-items-center justify-content-center flex-column">
            <h2 class="my-3">Oticas Vida</h2>
            <div class="mb-3">
            Estudante de sistemas para internet pelo Senac, <strong>Desenvolvedor Fullstack</strong> com foco em <strong>Web</strong>, como profissional sou extremamente motivado e sempre estou aprimorando minhas habilidades, 
            todos os dias tentando ser melhor do que no dia anterior. <br>
            Tenho projetos feitos usando, <strong>PHP</strong>, <strong>React</strong>, <strong>Vue</strong>, <strong>Laravel</strong>, mas bom isso é irrelevante o importante é que independente da linguagem eu sei programar.
            </div>
            <button class="btn btn-primary w-100 mb-3">Veja</button>
        </div>
        <div class="col-4 float-right">
            <img class="img-fluid" src= "@/assets/proj_oculos.png">
        </div>
    </div>
  </div>

  <div class="container shadow">
    <div class="row d-flex justify-content-center align-items-center">
        <div class="col-4 float-right">
            <img class="img-fluid" src= "@/assets/proj_oculos.png">
        </div>
        <div class="col-8 d-flex align-items-center justify-content-center flex-column">
            <h2 class="my-3">Oticas Vida</h2>
            <div class="mb-3">
            Estudante de sistemas para internet pelo Senac, <strong>Desenvolvedor Fullstack</strong> com foco em <strong>Web</strong>, como profissional sou extremamente motivado e sempre estou aprimorando minhas habilidades, 
            todos os dias tentando ser melhor do que no dia anterior. <br>
            Tenho projetos feitos usando, <strong>PHP</strong>, <strong>React</strong>, <strong>Vue</strong>, <strong>Laravel</strong>, mas bom isso é irrelevante o importante é que independente da linguagem eu sei programar.
            </div>
            <button class="btn btn-primary w-100 mb-3">Veja</button>
        </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "Projetos",
  data: () => ({}),
};
</script>


<style scoped>
img{
    width: 350px;
}

h2 {
  color: #3586ff;
}

#card:hover {
  flex: 1.5;
}
</style>