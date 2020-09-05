<template>
  <div>
    <mi-nav />
    <h1>Mi página de perfil</h1>
    <button @click="irHome()"> Ir a home </button>
    <button @click="irContacto()"> Ir a Contacto </button>

    <div class="row">
      <div class="col-4 offset-4">
        <b-card 
          :key="rPerfil.id"
          :title="rPerfil.first_name"
          :img-src="rPerfil.avatar"
          :img-alt="rPerfil.first_name"
          img-top
          tag="article"
        ></b-card> 
      </div>
    </div>
  </div>
</template>

<script>
import MiNav from '../components/MiNav'
import axios from 'axios'
export default {
  components: {
    MiNav
  },
  data() {
    return {
      rPerfil: {
        id: 1,
        first_name: '',
        avatar: ''
      }
    }
  },
  mounted() {
    let userId = this.$route.query.userId
    if(!userId || userId === '') {
      const randomNumber = Math.floor(Math.random() * 10);
      userId = randomNumber;  
    }
    axios.get(`https://reqres.in/api/users/${userId}`)
    .then(resp => {
      this.rPerfil = resp.data.data
    })
  },
  methods: {
    irHome() {
      this.$router.push('/')
    },
    irContacto() {
      this.$router.push({ path: '/contacto', query: { userId: '1234', midato : 'otra-cosa' } })
    }
  }
}
</script>