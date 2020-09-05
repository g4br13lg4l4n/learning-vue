<template>
  <div>
    <mi-nav />
    <h1>Contacto</h1>
  </div>
</template>

<script>
import MiNav from '../components/MiNav'
export default {
  name: 'Contacto',
  components: {
    MiNav 
  },
  mounted() {
    console.log('this.$route.query ------>', this.$route.query)
  }
}
</script>