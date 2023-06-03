<template>
      <h1 class="text-center my-5">SERVIÇOS</h1>
  <div class="row d-flex justify-content-center">
    <box />
    <box bg="bg-primary" color="text-white"/>
  </div>

   <div class="row d-flex justify-content-center">
    <box bg="bg-primary" color="text-white" />
    <box />
  </div>
</template>


<script>
import Box from '@/components/Box.vue'
export default {
    name: 'Servicos',
    components: {
        Box
    }
}
</script>