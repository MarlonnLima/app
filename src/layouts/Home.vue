<template>
  <section>
    <menu-button />

    <div id="stars-container">
      <span id="star"></span>
      <span id="star"></span>
      <span id="star"></span>
      <span id="star"></span>
      <span id="star"></span>
      <span id="star"></span>
      <span id="star"></span>
      <span id="star"></span>
      <span id="star"></span>
      <span id="star"></span>
      <span id="star"></span>
      <span id="star"></span>
      <span id="star"></span>
      <span id="star"></span>
    </div>

    <div
      class="container d-flex justify-content-center align-items-center mx-auto h-100"
    >
      <div class="row z-index-500">
        <div class="col">
          <banner />
        </div>
      </div>
    </div>
    <div class="air air1"></div>
    <div class="air air2"></div>
    <div class="air air3"></div>
    <div class="air air4"></div>
  </section>
</template>

<script>
import Banner from "@/components/Banner.vue";
import MenuButton from "@/components/MenuButton.vue";
export default {
  name: "Home",
  components: {
    Banner,
    MenuButton,
  },
};
</script>

<style scoped>
* {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
}
.z-index-500{
  z-index: 500;
}

#stars-container {
  position: absolute;
  top: -100px;
  left: 10px;
  width: 100%;
  height: 100vh;
}
#star{
  position: absolute;
  top: 50%;
  width: 4px;
  height: 4px;
  background-color: #fff;
  border-radius: 4px;
  box-shadow: 0 0 0 6px rgba(255,255,255,0.1),
  0 0 0 4px rgba(255,255,255,0.1),
  0 0 0 2px rgba(255,255,255,1);
  animation: animate 3s linear infinite;
}

#star::before{

content: '';
position: absolute;
top: 50%;
transform: translateY(-50%);
width: 300px;
height: 1px;
background: linear-gradient(90deg, #fff, transparent)
}

#star:nth-child(1){
top: 0;
right: 0;
left: initial;

animation-delay: 0;
animation-duration: 1s;
}
#star:nth-child(2){
top: 0;
right: 80px;
left: initial;
animation-delay: 0.2s;
animation-duration: 3s;
}
#star:nth-child(3){
top: 80px;
right: 0px;
left: initial;
animation-delay: 0.4s;
animation-duration: 2s;
}
#star:nth-child(4){
top: 80px;
right: 180px;
left: initial;
animation-delay: 0.6s;
animation-duration: 1.5s;
}
#star:nth-child(5){
top: 0px;
right: 400px;
left: initial;
animation-delay: 0.8s;
animation-duration: 2.5s;
}
#star:nth-child(6){
top: 0px;
right: 600px;
left: initial;
animation-delay: 1s;
animation-duration: 3s;
}
#star:nth-child(7){
top: 300px;
right: 0px;
left: initial;
animation-delay: 1.2s;
animation-duration: 1.75s;
}
#star:nth-child(8){
top: 0px;
right: 700px;
left: initial;
animation-delay: 1.4s;
animation-duration: 1.25s;
}
#star:nth-child(9){
top: 0px;
right: 1000px;
left: initial;
animation-delay: 0.75s;
animation-duration: 2.25s;
}
#star:nth-child(10){
top: 0px;
right: 450px;
left: initial;
animation-delay: 2.75s;
animation-duration: 2.25s;
}
#star:nth-child(11){
top: 0px;
right: 800px;
left: initial;
animation-delay: 1.75s;
animation-duration: 1.5s;
}
#star:nth-child(12){
top: 80px;
right: 750px;
left: initial;
animation-delay: 0.2s;
animation-duration: 1.5s;
}
#star:nth-child(13){
top: 0px;
right: 900px;
left: initial;
animation-delay: 1.2s;
animation-duration: 1.75s;
}
#star:nth-child(14){
top: 70px;
right: 950px;
left: initial;
animation-delay: 1.75s;
animation-duration: 1.2s;
}

section {
  position: relative;
  width: 100%;
  height: 100vh;
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
  overflow: hidden;
}
section .air {
  position: absolute;
  bottom: 0;
  left: 0;
  width: 100%;
  height: 100px;
  background: url(https://1.bp.blogspot.com/-xQUc-TovqDk/XdxogmMqIRI/AAAAAAAACvI/AizpnE509UMGBcTiLJ58BC6iViPYGYQfQCLcBGAsYHQ/s1600/wave.png);
  background-size: 1000px 100px;
}
section .air.air1 {
  animation: wave 30s linear infinite;
  z-index: 1000;
  opacity: 1;
  animation-delay: 0s;
  bottom: 0;
}
section .air.air2 {
  animation: wave2 15s linear infinite;
  z-index: 999;
  opacity: 0.5;
  animation-delay: -5s;
  bottom: 10px;
}
section .air.air3 {
  animation: wave 30s linear infinite;
  z-index: 998;
  opacity: 0.2;
  animation-delay: -2s;
  bottom: 15px;
}
section .air.air4 {
  animation: wave2 5s linear infinite;
  z-index: 997;
  opacity: 0.7;
  animation-delay: -5s;
  bottom: 20px;
}
@keyframes wave {
  0% {
    background-position-x: 0px;
  }
  100% {
    background-position-x: 1000px;
  }
}
@keyframes wave2 {
  0% {
    background-position-x: 0px;
  }
  100% {
    background-position-x: -1000px;
  }
}

@keyframes animate {
  0%
  {
    transform: rotate(315deg) translateX(0);
    opacity: 1;
  }
  70%
  {
    opacity: 1;
  }
  100%
  {
    transform: rotate(315deg) translateX(-1000px);
    opacity: 0;
  }
}
</style>