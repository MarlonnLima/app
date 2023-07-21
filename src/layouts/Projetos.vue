<template>
  <h1 id="projetos" class="text-center my-5 text-secondary">Projetos</h1>
  <div class="container shadow mb-5" data-aos="zoom-in" id="container-w2">
    <div
      class="row d-flex justify-content-center align-items-center"
      id="container-projeto2"
    >
      <div class="col-4 float-right" id="div-img">
        <img class="img-fluid" src="@/assets/proj_devnews.png" />
      </div>
      <div
        class="col-8 d-flex align-items-center justify-content-center flex-column my-3"
        id="container-all2"
      >
        <h2 class="my-3">Dev News</h2>
        <div class="mb-3 text-justify">
          O objetivo do projeto é manter os desenvolvedores informados sobre as
          últimas novidades da indústria entre membros da comunidade de
          tecnologia.
          <br />
        </div>
        <a
          class="text-decoration-none text-white btn btn-primary w-100 mb-3"
          href="https://devnews.marlondev.com.br"
          target="_blank"
          >Veja</a
        >
      </div>
    </div>
  </div>

  <div class="container mb-5 shadow" data-aos="zoom-in" id="container-w3">
    <div
      class="row d-flex justify-content-center align-items-center"
      id="container-projetos"
    >
      <div
        class="col-8 d-flex align-items-center justify-content-center flex-column"
        id="container-all"
      >
        <h2 class="my-3">Óticas Vida</h2>
        <div class="mb-3 text-justify">
          Uma landing page com o objetivo de fornecer uma experiência online de
          alta qualidade para os clientes em busca de óculos. Através da
          plataforma responsiva, o site permite que os visitantes naveguem pelo
          catalógo de óculos e visualizem os modelos disponíveis. O site busca
          atender às necessidades dos clientes que desejam encontrar óculos que
          combinem estilo, qualidade e conforto; proporcionando um
          direcionamento agradável à loja.
        </div>
        <a
          class="text-decoration-none text-white btn btn-primary w-100 mb-3"
          href="https://marlonnlima.github.io/Otica-Responsiva/"
          target="_blank"
          >Veja</a
        >
      </div>
      <div class="col-4 float-right" id="div-img2">
        <img class="img-fluid" src="@/assets/proj_oculos.png" />
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
#container-w2 {
  width: 90%;
}

#container-w3 {
  width: 90%;
}

* {
  font-size: 1.2rem;
}

img {
  width: 350px;
  max-height: 202px;
}
h1 {
  font-size: calc(1.375rem + 1.5vw);
}
h2 {
  color: #3586ff;
  font-size: 1.6rem;
}

#card:hover {
  flex: 1.5;
}

@media (max-width: 550px) {
  #container-projetos {
    flex-direction: column-reverse;
    gap: 20px;
  }

  #container-projetos img {
    width: 200px !important;
  }

  #container-projeto2 {
    flex-direction: column;
    gap: 20px;
  }

  #div-img {
    width: 200px;
    margin-top: 10px;
  }

  #div-img2 {
    width: 200px;
    margin-top: 10px;
  }

  #container-all {
    width: 90%;
  }

  #container-all2 {
    width: 90%;
  }
}
</style>