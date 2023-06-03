<template>
    <header class="topo">
        <nav style="margin-left: 500px">
            <ul class="d-flex justify-content-end gap-5 mt-2">
                <li class="list-group-item h5"><a href="#sobre" class="text-white">Sobre</a></li>
                <li class="list-group-item h5"><a href="#projetos" class="text-white">Projetos</a></li>
                <li class="list-group-item h5"><a href="#contato" class="text-white">Contato</a></li>
            </ul>
        </nav>
    </header>
</template>


<script>
export default {
    name: 'nav'
}
</script>


<style scoped>
.topo{
position: fixed;
top: 0px;
left: 0px;
width: 100%;
padding: 20px;
}

li:last-child{
    margin-right: 50px
}
a {
  overflow: hidden;
  position: relative;
  display: inline-block;
}

a::before,
a::after {
 content: '';
  position: absolute;
  width: 100%;
  left: 0;
}
a::before {
  background-color: #fff;
  height: 2px;
  bottom: 0;
  transform-origin: 100% 50%;
  transform: scaleX(0);
  transition: transform .3s cubic-bezier(0.76, 0, 0.24, 1);
}
a::after {
  content: attr(data-replace);
  height: 100%;
  top: 0;
  transform-origin: 100% 50%;
  transform: translate3d(200%, 0, 0);
  transition: transform .3s cubic-bezier(0.76, 0, 0.24, 1);
  color: #54b3d6;
}

a:hover::before {
  transform-origin: 0% 50%;
  transform: scaleX(1);
}
a:hover::after {
  transform: translate3d(0, 0, 0);
}

a span {
  display: inline-block;
  transition: transform .3s cubic-bezier(0.76, 0, 0.24, 1);
}

a:hover span {
  transform: translate3d(-200%, 0, 0);
}

/* Presentational Styles */
body {
  display: grid;
  font-family: 'Poppins', sans-serif;
  font-size: 27px;
  line-height: 1.5;
  height: 100vh;
  place-items: center;
}

a {
  text-decoration: none;
  color: #18272F;
  font-weight: 700;
  vertical-align: top;
}
</style>