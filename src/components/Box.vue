<template>
    <div :class="`col-4 box d-flex align-items-center justify-content-center h2 ${bg} ${color}`">
      {{frase}}
    </div>
</template>

<script>
export default {
    name: 'Box',
    data: () => ({
        frase: "Teste"
    }),
    props: {
        bg: {
            type: String,
            default: 'bg-dark' 
        },
        color: {
            type: String,
            default: 'text-white'
        }
    }
}
</script>

<style scoped>

</style>