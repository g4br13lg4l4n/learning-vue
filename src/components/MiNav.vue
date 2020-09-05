<template>
  <nav>
    <ul>
      <li> <router-link to="/"> Home </router-link> </li>
      <li> <router-link to="/perfil"> Perfil </router-link> </li>
      <li> <router-link to="/contacto"> Contacto </router-link> </li>
    </ul>
  </nav>
</template>

<script>
export default {
  name: 'nav'
}
</script>