<template>
  <div>
    <div class="container">
      <header>
        <h1> Mi contador en Hijo {{ contador }} </h1>

        <button @click="miEventoParaContador()"> Mi evento contador</button>

        <h2> {{ titulo }} </h2>
        <h2> {{ miNuevoTitulo }} </h2>
        <h2> {{ msgg }} </h2>
        <slot name="header"></slot>
      </header>
      <main>
        mi slot 
        <slot></slot>
      </main>
      <footer>
        mi footer
        <slot name="footer"></slot>
      </footer>
    </div>
    <button @click="miNuevoEvento()"> Mi evento </button>
  </div>
</template>

<script>
export default {
  props: [
    'contador',
    'titulo',
    'msgg'
  ],
  methods: {
    miNuevoEvento() {
      this.$emit('miEvento')
    },
    miEventoParaContador() {
      this.$emit('miEvento')
    }
  },
  computed: {
    miNuevoTitulo: function() {
      return `${this.titulo} modificado`
    }
  }
}
</script>