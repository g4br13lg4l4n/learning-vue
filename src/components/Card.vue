<template>
  
    <div class="col-6">
      <p> Nombre: {{ infoCard.name }} </p>
      <p> Teléfono: {{ infoCard.phone }} </p>
      <p>Sitio web: {{ infoCard.website }} </p>
      <p>Nombre empresa: {{ infoCard.company.name }} </p>
    </div>
</template>

<script>
export default {
  props: [
    'infoCard'
  ]
}
</script>

<style>
  .line {
    height: 1px;
    width: 100%;
    border: solid black 1px;
  }
</style>