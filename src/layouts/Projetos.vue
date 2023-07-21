<template>
  <h1 id="projetos" class="text-center my-5 text-secondary">Projetos</h1>
  <div class="container mb-5 shadow" data-aos="zoom-in">
    <div class="row d-flex justify-content-center align-items-center">
      <div
        class="col-8 d-flex align-items-center justify-content-center flex-column"
      >
        <h2 class="my-3">Oticas Vida</h2>
        <div class="mb-3 text-justify">
          Uma landing page com o objetivo de fornecer uma experiência
          online de alta qualidade para os clientes em busca de óculos. Através
          da plataforma responsiva, o site permite que os visitantes naveguem
          pelo catalógo de óculos, visualizem os modelos disponíveis. O site
          busca atender às necessidades dos clientes que desejam encontrar
          óculos que combinem estilo, qualidade e conforto, proporcionando um
          direcionamento agradável à loja.
        </div>
        <button class="btn btn-primary w-100 mb-3"><a class="text-decoration-none text-white " href="https://marlonnlima.github.io/Otica-Responsiva/">Veja</a></button>
      </div>
      <div class="col-4 float-right">
        <img class="img-fluid" src="@/assets/proj_oculos.png" />
      </div>
    </div>
  </div>

  <div class="container shadow mb-5" data-aos="zoom-in"> 
    <div class="row d-flex justify-content-center align-items-center">
      <div class="col-4 float-right">
        <img class="img-fluid" src="@/assets/proj_oculos.png" />
      </div>
      <div
        class="col-8 d-flex align-items-center justify-content-center flex-column"
      >
        <h2 class="my-3">Oticas Vida</h2>
        <div class="mb-3 text-justify">
          Estudante de sistemas para internet pelo Senac,
          <strong>Desenvolvedor Fullstack</strong> com foco em
          <strong>Web</strong>, como profissional sou extremamente motivado e
          sempre estou aprimorando minhas habilidades, todos os dias tentando
          ser melhor do que no dia anterior. <br />
          Tenho projetos feitos usando, <strong>PHP</strong>,
          <strong>React</strong>, <strong>Vue</strong>,
          <strong>Laravel</strong>, mas bom isso é irrelevante o importante é
          que independente da linguagem eu sei programar.
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
*{
  font-size: 1.2rem
}
img {
  width: 350px;
}

h2 {
  color: #3586ff;
  font-size: 1.6rem
}

#card:hover {
  flex: 1.5;
}
</style>