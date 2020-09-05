<template>
  <div>
    <mi-nav />
    <b-button @click="cargaMiInfo()" v-b-tooltip.hover title="Cargar mi info">Cargar información</b-button>
    <b-button v-on:click="hello()" v-b-tooltip.hover title="Cargar mi info">Envia mi alerta</b-button>
    <div class="row">
      <b-card
        v-for="info in queMeTreaAxios"
        :key="info.id"
        :title="info.first_name"
        :img-src="info.avatar"
        :img-alt="info.first_name"
        img-top
        tag="article"
        style="max-width: 20rem;"
        class="mb-2"
        @click="verPerfil(info.id)"
      >
        <b-card-text>Nombre: {{ info.first_name }} {{ info.last_name }}</b-card-text>
        <b-card-text>Sitio web: {{ info.email }}</b-card-text>
      </b-card>

      <!--
      <card v-for="info in queMeTreaAxios" :key="info.id" :infoCard="info" />
      -->
    </div>

    <!--
    <button @click="diminuyeContador()"> Quitale al contador </button>
    <h1>Contador {{ count }}</h1>

    <componente-hijo titulo='Mi titulo' :msgg="msg" @miEvento="evento()" :contador="count">
      <template v-slot:header>
        <h1>Aquí podría ir un título de página</h1>

        <img :src="miLogo" alt="Mi imagen">
        <img src="./assets/logo.png" alt="Mi imagen">

      </template>

      <p>Un párrafo para el contenido principal.</p>
      <p>Y otro más.</p>

      <template v-slot:footer>
        <p>Aquí va alguna información de contacto</p>
      </template>

      <p v-if="mostrarInfo"> Lorem ipsum, dolor sit amet consectetur adipisicing elit. Neque asperiores perspiciatis sequi nobis explicabo rerum, fuga quaerat, dolor ea eveniet quia exercitationem voluptatibus. Odit necessitatibus nam qui perspiciatis similique delectus! </p>
      <button @click="mostrar()"> Mostrar texto </button>
      
      <ul>
        <li v-for="carro in carros" :key="carro.id">
          {{ carro.name }} - {{ carro.model }}
        </li>
      </ul>

    </componente-hijo>
    -->
  </div>
</template>

<script>
//import ComponenteHijo from "./components/ComponenteHijo"
//import Card from './components/Card'
import MiNav from '../components/MiNav'
import axios from 'axios'
export default {
  name: 'Home',
  components: {
    MiNav
    //ComponenteHijo,
    //Card
  },
  data() {
    return {
      queMeTreaAxios: [],
      count: 1,
      miLogo: 'https://picsum.photos/200/300',
      mostrarInfo: false,
      msg: "Mi mensaje -------------> MSGG",
      arr: [],
      objeto: {},
      miObjeto: {},
      miNuevaVariable: "asdasdaskdaskasdjasd",
      carros: [
        { id: 1, name: 'carro 1', model: '2000' },
        { id: 2, name: 'carro 2', model: '2020'},
        { id: 3, name: 'carro 3', model: '2010'},
        { id: 4, name: 'carro 4', model: '2017'},
      ]
    };
  },
  beforeMount() {
    axios.get('https://reqres.in/api/users?page=2')
      .then(resp => {
        this.queMeTreaAxios = resp.data.data
      })
  },
  computed: {
    contadorXdos: function () {
      return `$ ${this.count}`;
    },
  },
  methods: {
    verPerfil(id) {
      this.$router.push({ path: 'perfil', query: { userId: id }})
    },
    miAlerta(texto, miNumero) {
      this.msg = texto;
      this.count = miNumero;
    },
    mostrar() {
      this.mostrarInfo = !this.mostrarInfo;
    },
    diminuyeContador() {
      this.count--
    },
    evento() {
      this.count++
    },
    cargaMiInfo() {
      
    }
  },
}
</script>